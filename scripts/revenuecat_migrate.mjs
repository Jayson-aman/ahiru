#!/usr/bin/env node
/**
 * 本番 RevenueCat Billing アプリへ、42商品を API v2 で移行する。
 *
 *   read -s RC_V2_SECRET_KEY && export RC_V2_SECRET_KEY   # 値は環境変数のみ
 *
 *   # 1. 現状を取得する（読み取りのみ。何も変更しない）
 *   node scripts/revenuecat_migrate.mjs --discover
 *
 *   # 2. 計画を確認する（読み取りのみ）
 *   node scripts/revenuecat_migrate.mjs --app-id=appXXXX
 *
 *   # 3. まず1件だけ作る（Titleがチェックアウトに出るか確認するため）
 *   node scripts/revenuecat_migrate.mjs --app-id=appXXXX --limit=1 --apply
 *
 *   # 4. 残りを流す
 *   node scripts/revenuecat_migrate.mjs --app-id=appXXXX --apply
 *
 * なぜ必要か:
 *   QualiZ (RevenueCat Billing) がサンドボックスの Stripe アカウントに
 *   紐付いており、本番 rcb_ キーが発行されない。本番用の Web provider を
 *   新規に作り、そこへ42商品を作り直す。詳細は docs/WEB_LAUNCH_CHECKLIST.md。
 *
 * 前提（満たさないと失敗する）:
 *   - ライブ Stripe に対応する商品・価格が存在すること。
 *     42件はアーカイブ済みなので、**先にアーカイブを解除する**。
 *     RC Billing は価格を Stripe 側から取得し、API では設定できない。
 *   - --app-id は新規に作った本番 RC Billing アプリのID。
 *     既存のサンドボックス側 appa8c271a3d2 を指定しないこと。
 *
 * 安全装置:
 *   - --apply が無ければ書き込まない
 *   - 商品作成は非冪等（409）なので、既存一覧を取得して差分だけ作る
 *   - --limit で件数を絞れる（1件で試してから42件を流す）
 *   - 入力は docs/revenuecat_migration_map.json に固定。引数で商品を渡せない
 */

import process from 'node:process';
import { readFileSync, writeFileSync } from 'node:fs';

const BASE = 'https://api.revenuecat.com/v2';
const PROJECT_ID = 'projd63a8ebf';
const MAP_PATH = 'docs/revenuecat_migration_map.json';
const STATE_PATH = 'revenuecat_state.json';

const KEY = process.env.RC_V2_SECRET_KEY;
const APPLY = process.argv.includes('--apply');
const DISCOVER = process.argv.includes('--discover');
const argOf = (name) => {
  const hit = process.argv.find((a) => a.startsWith(`--${name}=`));
  return hit ? hit.slice(name.length + 3) : null;
};
const APP_ID = argOf('app-id');
const LIMIT = argOf('limit') ? Number(argOf('limit')) : Infinity;

if (!KEY) {
  console.error('RC_V2_SECRET_KEY が未設定です。');
  console.error('  read -s RC_V2_SECRET_KEY && export RC_V2_SECRET_KEY');
  console.error('');
  console.error('RevenueCat の v2 シークレットキーです。');
  console.error('rcb_ (公開キー) や Stripe の sk_ とは別物です。');
  process.exit(1);
}
if (KEY.startsWith('rcb_') || KEY.startsWith('strp_')) {
  console.error('これは公開キーです。v2 のシークレットキーを使ってください。');
  process.exit(1);
}

/** v2 API を叩く。エラー本文をそのまま見せる（原因が本文にしか出ないことが多い）。 */
async function rc(method, path, body) {
  const res = await fetch(`${BASE}/${path}`, {
    method,
    headers: {
      Authorization: `Bearer ${KEY}`,
      ...(body ? { 'Content-Type': 'application/json' } : {}),
    },
    ...(body ? { body: JSON.stringify(body) } : {}),
  });
  const text = await res.text();
  if (!res.ok) {
    const err = new Error(`${method} ${path} → ${res.status}\n${text}`);
    err.status = res.status;
    throw err;
  }
  return text ? JSON.parse(text) : {};
}

/** 一覧系は next_page でページングする。 */
async function listAll(path) {
  const out = [];
  let url = `${path}${path.includes('?') ? '&' : '?'}limit=100`;
  while (url) {
    const page = await rc('GET', url);
    out.push(...(page.items ?? []));
    url = page.next_page ? page.next_page.replace(/^\/v2\//, '') : null;
  }
  return out;
}

/**
 * 現状を取得する。読み取りのみ。
 * GET のパスは手元の仕様メモに無く、v2 の慣例から推測している。
 * 404 が出たらパスが違うだけで、何も壊れていない。
 */
async function discover() {
  const state = {};
  state.products = await listAll(`projects/${PROJECT_ID}/products`);
  state.entitlements = await listAll(`projects/${PROJECT_ID}/entitlements`);
  state.offerings = await listAll(`projects/${PROJECT_ID}/offerings`);
  state.packages = {};
  for (const off of state.offerings) {
    state.packages[off.id] = await listAll(
      `projects/${PROJECT_ID}/offerings/${off.id}/packages?expand=items.product`,
    );
  }

  writeFileSync(STATE_PATH, JSON.stringify(state, null, 2));
  console.log(`取得しました → ${STATE_PATH}`);
  console.log('');
  console.log(`商品          ${state.products.length}件`);
  console.log(`Entitlement   ${state.entitlements.length}件`);
  console.log(`Offering      ${state.offerings.length}件`);
  for (const off of state.offerings) {
    const pkgs = state.packages[off.id] ?? [];
    console.log(`  ${off.lookup_key ?? off.id}  パッケージ ${pkgs.length}件`);
  }
  console.log('');
  console.log('アプリ別の商品数:');
  const byApp = {};
  for (const p of state.products) byApp[p.app_id] = (byApp[p.app_id] ?? 0) + 1;
  for (const [app, n] of Object.entries(byApp)) console.log(`  ${app}  ${n}件`);
}

async function migrate() {
  if (!APP_ID) {
    console.error('--app-id=appXXXX が必要です（新規に作った本番RC Billingアプリ）。');
    console.error('先に --discover で現状を取得してください。');
    process.exit(1);
  }
  if (APP_ID === 'appa8c271a3d2') {
    console.error('appa8c271a3d2 はサンドボックス側の既存アプリです。');
    console.error('本番用に新規作成したアプリのIDを指定してください。');
    process.exit(1);
  }

  const map = JSON.parse(readFileSync(MAP_PATH, 'utf8'));
  const items = (Array.isArray(map) ? map : map.products).slice(0, LIMIT);

  let state;
  try {
    state = JSON.parse(readFileSync(STATE_PATH, 'utf8'));
  } catch {
    console.error(`${STATE_PATH} がありません。先に --discover を実行してください。`);
    process.exit(1);
  }

  // 既存商品（新app_id配下のみ）を store_identifier で引けるようにする。
  // 商品作成は非冪等なので、作成済みは飛ばす。
  const existing = new Map(
    state.products
      .filter((p) => p.app_id === APP_ID)
      .map((p) => [p.store_identifier, p]),
  );

  // サンドボックス側の商品IDから、その商品が入っているパッケージを引く。
  // 同じ資格・同じ月/年のパッケージへ、本番商品を追加で貼る。
  const pkgByStoreId = new Map();
  for (const [offId, pkgs] of Object.entries(state.packages)) {
    for (const pkg of pkgs) {
      for (const assoc of pkg.products?.items ?? pkg.products ?? []) {
        const sid = assoc.product?.store_identifier ?? assoc.store_identifier;
        if (sid) pkgByStoreId.set(sid, { ...pkg, offering_id: offId });
      }
    }
  }

  console.log(`対象 ${items.length}件 / app_id=${APP_ID}`);
  console.log(APPLY ? '*** --apply: 書き込みます ***' : '確認のみ（--apply なし）');
  console.log('');

  let created = 0, skipped = 0, failed = 0;
  const unmatched = [];

  for (const it of items) {
    const label = `${it.title}  (${it.store_identifier})`;

    if (existing.has(it.store_identifier)) {
      console.log(`skip   ${label}  ← 作成済み`);
      skipped++;
      continue;
    }

    const pkg = pkgByStoreId.get(it.store_identifier);
    if (!pkg) unmatched.push(it);

    if (!APPLY) {
      console.log(`plan   ${label}`);
      console.log(`         entitlement = ${it.entitlement}`);
      console.log(`         package     = ${pkg ? (pkg.lookup_key ?? pkg.id) : '⚠ 不明'}`);
      console.log(`         価格         = ¥${it.amount} / ${it.interval}（Stripe側の値）`);
      continue;
    }

    try {
      // 1. 商品を作る。title がチェックアウトに出る名前。
      const product = await rc('POST', `projects/${PROJECT_ID}/products`, {
        app_id: APP_ID,
        store_identifier: it.store_identifier,
        type: 'subscription',
        title: it.title,
        display_name: it.title,
      });

      // 2. Entitlement に紐付ける（冪等）。
      await rc('POST', `projects/${PROJECT_ID}/entitlements/${it.entitlement}/products`, {
        product_ids: [product.id],
      });

      // 3. Package に紐付ける（追加式。既存の関連付けは残る）。
      if (pkg) {
        await rc('POST', `projects/${PROJECT_ID}/packages/${pkg.id}/products`, {
          products: [{ product_id: product.id, eligibility_criteria: 'all' }],
        });
      }

      console.log(`ok     ${label}  → ${product.id}`);
      created++;
    } catch (e) {
      console.error(`FAIL   ${label}`);
      console.error(`       ${e.message.split('\n').join('\n       ')}`);
      failed++;
      // 1件目で失敗したら、そこで止める。42件分の同じエラーを見ても意味がない。
      if (created === 0) {
        console.error('');
        console.error('1件目で失敗したため中断します。原因を直してから再実行してください。');
        break;
      }
    }
  }

  console.log('');
  if (APPLY) {
    console.log(`作成 ${created} / スキップ ${skipped} / 失敗 ${failed}`);
  }
  if (unmatched.length) {
    console.log('');
    console.log(`⚠ パッケージが特定できなかった商品 ${unmatched.length}件:`);
    for (const it of unmatched) console.log(`    ${it.title}`);
    console.log('');
    console.log('これらは Entitlement には紐付くが、Offering に出ないため');
    console.log('購入画面に表示されない。手で貼るか、パッケージ照合を直す。');
  }
  if (!APPLY && created === 0 && failed === 0) {
    console.log('問題が無ければ、まず --limit=1 --apply で1件だけ試す。');
    console.log('チェックアウト画面で Title が正しく出るか確認してから全件流す。');
  }
}

if (DISCOVER) {
  await discover();
} else {
  await migrate();
}
