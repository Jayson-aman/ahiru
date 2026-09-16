#!/usr/bin/env node
/**
 * QualiZ の未使用 Stripe 商品42件をアーカイブする。
 *
 *   export STRIPE_SECRET_KEY=rk_live_...   # 値は環境変数のみ。引数に書かない
 *   node scripts/stripe_archive_unused.mjs           # 確認のみ。何も変更しない
 *   node scripts/stripe_archive_unused.mjs --apply   # 実行
 *
 * キーは「制限付きキー」(rk_) を推奨する。必要な権限は3つだけ:
 *
 *   Products      書き込み
 *   Prices        書き込み
 *   Subscriptions 読み取り
 *
 * フルのシークレットキー (sk_) でも動くが、漏れたときの被害が大きい。
 * Stripe → 開発者 → APIキー → 制限付きキーを作成 で発行し、
 * 作業が終わったら失効させる。ライブの sk_ は作成時の一度しか表示
 * されないが、失効に表示は不要。
 *
 * なぜアーカイブするのか:
 *   Web課金は RevenueCat Billing が担い、Stripe側の商品・価格は
 *   RevenueCat が自分で管理する。scripts/stripe_products.mjs で手動作成した
 *   この42件はどこからも参照されない。詳細は docs/REVENUECAT_AUDIT.md。
 *
 * アーカイブは削除ではない。active=false にするだけで、Stripeの画面から
 * いつでも元に戻せる。売上履歴や既存サブスクには影響しない。
 *
 * 安全装置:
 *   - 商品名が下記42件と完全一致するものだけを対象にする
 *   - 対象商品の価格に稼働中のサブスクリプションが1件でもあれば、
 *     その商品は対象から外して警告する
 *   - --apply が無ければ何も変更しない
 */

import process from 'node:process';

const TARGET_NAMES = new Set([
    "QualiZ 宅地建物取引士 Pro（月額）",
    "QualiZ 宅地建物取引士 Pro（年額）",
    "QualiZ FP Pro（月額）",
    "QualiZ FP Pro（年額）",
    "QualiZ マンション管理士 Pro（月額）",
    "QualiZ マンション管理士 Pro（年額）",
    "QualiZ 建築設備士 Pro（月額）",
    "QualiZ 建築設備士 Pro（年額）",
    "QualiZ 電験三種 Pro（月額）",
    "QualiZ 電験三種 Pro（年額）",
    "QualiZ 気象予報士 Pro（月額）",
    "QualiZ 気象予報士 Pro（年額）",
    "QualiZ 1級建築施工管理技士 Pro（月額）",
    "QualiZ 1級建築施工管理技士 Pro（年額）",
    "QualiZ 1級管工事施工管理技士 Pro（月額）",
    "QualiZ 1級管工事施工管理技士 Pro（年額）",
    "QualiZ 1級電気工事施工管理技士 Pro（月額）",
    "QualiZ 1級電気工事施工管理技士 Pro（年額）",
    "QualiZ 1級建設機械施工管理技士 Pro（月額）",
    "QualiZ 1級建設機械施工管理技士 Pro（年額）",
    "QualiZ 1級土木施工管理技士 Pro（月額）",
    "QualiZ 1級土木施工管理技士 Pro（年額）",
    "QualiZ 建築コスト管理士 Pro（月額）",
    "QualiZ 建築コスト管理士 Pro（年額）",
    "QualiZ 給水装置工事主任技術者 Pro（月額）",
    "QualiZ 給水装置工事主任技術者 Pro（年額）",
    "QualiZ 消防設備士 Pro（月額）",
    "QualiZ 消防設備士 Pro（年額）",
    "QualiZ 危険物取扱者乙4 Pro（月額）",
    "QualiZ 危険物取扱者乙4 Pro（年額）",
    "QualiZ コンクリート技士 Pro（月額）",
    "QualiZ コンクリート技士 Pro（年額）",
    "QualiZ 1級電気通信工事施工管理技士 Pro（月額）",
    "QualiZ 1級電気通信工事施工管理技士 Pro（年額）",
    "QualiZ 二級建築士 Pro（月額）",
    "QualiZ 二級建築士 Pro（年額）",
    "QualiZ 第二種電気工事士 Pro（月額）",
    "QualiZ 第二種電気工事士 Pro（年額）",
    "QualiZ 液化石油ガス設備士 Pro（月額）",
    "QualiZ 液化石油ガス設備士 Pro（年額）",
    "QualiZ 高圧ガス製造保安責任者 Pro（月額）",
    "QualiZ 高圧ガス製造保安責任者 Pro（年額）"
  ]);

const KEY = process.env.STRIPE_SECRET_KEY;
const APPLY = process.argv.includes('--apply');

if (!KEY) {
  console.error('\nSTRIPE_SECRET_KEY が未設定です。');
  console.error('  export STRIPE_SECRET_KEY=rk_live_...   # 制限付きキー推奨');
  console.error('値を引数に書かないこと（シェル履歴とプロセス一覧に残る）。\n');
  process.exit(1);
}
if (!/^(sk|rk)_(test|live)_/.test(KEY)) {
  console.error('\nSTRIPE_SECRET_KEY が sk_ / rk_ で始まっていません。');
  console.error('公開キー(pk_)では商品を変更できません。');
  console.error('制限付きキー(rk_)に必要な権限: Products 書き込み /');
  console.error('Prices 書き込み / Subscriptions 読み取り\n');
  process.exit(1);
}
const MODE = /_live_/.test(KEY) ? 'LIVE（本番）' : 'TEST（テスト）';
const KIND = KEY.startsWith('rk_') ? '制限付きキー' : 'シークレットキー';

async function stripe(method, endpoint, body) {
  const headers = { Authorization: `Bearer ${KEY}`, 'Stripe-Version': '2024-06-20' };
  let payload;
  if (body) {
    headers['Content-Type'] = 'application/x-www-form-urlencoded';
    payload = new URLSearchParams(body).toString();
  }
  const res = await fetch(`https://api.stripe.com/v1/${endpoint}`, { method, headers, body: payload });
  const json = await res.json();
  if (!res.ok) {
    const msg = json?.error?.message ?? JSON.stringify(json);
    if (res.status === 403) {
      throw new Error(
        `${method} ${endpoint} → 403: ${msg}\n` +
        '      制限付きキーの権限が足りません。Products 書き込み /\n' +
        '      Prices 書き込み / Subscriptions 読み取り を許可してください。'
      );
    }
    throw new Error(`${method} ${endpoint} → ${res.status}: ${msg}`);
  }
  return json;
}

async function listAll(endpoint, params = {}) {
  const out = [];
  let startingAfter;
  for (;;) {
    const q = new URLSearchParams({ limit: '100', ...params });
    if (startingAfter) q.set('starting_after', startingAfter);
    const page = await stripe('GET', `${endpoint}?${q}`);
    out.push(...page.data);
    if (!page.has_more) return out;
    startingAfter = page.data[page.data.length - 1].id;
  }
}

/** 解約済み・期限切れ以外は「稼働中」として扱い、触らない */
const LIVE_STATUSES = new Set(['active', 'trialing', 'past_due', 'unpaid', 'paused', 'incomplete']);

async function main() {
  console.log(`\nモード: ${MODE}（${KIND}）`);
  console.log(`対象候補: 商品名が一致する ${TARGET_NAMES.size} 件\n`);

  console.log('Stripe上の商品を取得中…');
  const products = await listAll('products');
  const matched = products.filter((p) => TARGET_NAMES.has(p.name));
  console.log(`  全商品: ${products.length}件 / 名前が一致: ${matched.length}件`);

  const alreadyArchived = matched.filter((p) => !p.active);
  const candidates = matched.filter((p) => p.active);
  if (alreadyArchived.length) {
    console.log(`  うち既にアーカイブ済み: ${alreadyArchived.length}件（対象外）`);
  }

  console.log('\nサブスクリプションを確認中…');
  const subs = await listAll('subscriptions', { status: 'all' });
  const busyPriceIds = new Set();
  for (const s of subs) {
    if (!LIVE_STATUSES.has(s.status)) continue;
    for (const it of s.items?.data ?? []) {
      if (it.price?.id) busyPriceIds.add(it.price.id);
    }
  }
  console.log(`  サブスクリプション: ${subs.length}件（うち稼働中の価格: ${busyPriceIds.size}件）`);

  const plan = [];
  const skipped = [];
  for (const p of candidates) {
    const prices = await listAll('prices', { product: p.id });
    const busy = prices.filter((pr) => busyPriceIds.has(pr.id));
    if (busy.length) {
      skipped.push({ product: p, busy });
    } else {
      plan.push({ product: p, prices: prices.filter((pr) => pr.active) });
    }
  }

  if (skipped.length) {
    console.log('\n⚠ 稼働中のサブスクリプションがあるため対象から外しました:');
    for (const s of skipped) {
      console.log(`  - ${s.product.name}  (${s.busy.map((b) => b.id).join(', ')})`);
    }
    console.log('  これらは手動で確認してください。');
  }

  console.log(`\n── アーカイブ対象: ${plan.length}件 ──`);
  for (const x of plan) {
    console.log(`  ${x.product.id}  ${x.product.name}  価格${x.prices.length}件`);
  }

  if (plan.length === 0) {
    console.log('\n変更するものはありません。\n');
    return;
  }

  if (!APPLY) {
    console.log(`\n${plan.length}件をアーカイブします。実行するには --apply を付けてください。`);
    console.log('  node scripts/stripe_archive_unused.mjs --apply');
    console.log('\nアーカイブは削除ではありません。Stripeの画面からいつでも戻せます。\n');
    return;
  }

  console.log(`\n${MODE} で ${plan.length}件をアーカイブします…\n`);
  let ok = 0;
  for (const x of plan) {
    try {
      // 商品を先にアーカイブする。
      // ダッシュボードで手動作成した商品には default_price が設定されており、
      // その価格は「商品の既定価格だから」という理由で単体アーカイブできない
      // （400: This price cannot be archived because it is the default price
      // of its product）。商品が active=false になれば新規購入には使えなくなる
      // ので、既定価格が active のまま残っても目的は達成される。
      await stripe('POST', `products/${x.product.id}`, { active: 'false' });

      let keptDefault = 0;
      for (const pr of x.prices) {
        try {
          await stripe('POST', `prices/${pr.id}`, { active: 'false' });
        } catch (e) {
          if (/default price of its product/.test(e.message)) {
            keptDefault++;
            continue;
          }
          throw e;
        }
      }
      const note = keptDefault ? `（既定価格${keptDefault}件は商品側のアーカイブで無効化）` : '';
      console.log(`  ✓ ${x.product.name}${note}`);
      ok++;
    } catch (e) {
      console.log(`  ✗ ${x.product.name}\n      ${e.message}`);
    }
  }
  console.log(`\n完了: ${ok}/${plan.length}件`);
  if (ok < plan.length) {
    console.log('失敗したものは同じコマンドを再実行すれば残りだけ処理されます。');
  }
  console.log('元に戻すには Stripe の商品カタログで各商品を「アーカイブ解除」してください。\n');
}

main().catch((e) => {
  console.error('\nエラー:', e.message, '\n');
  process.exit(1);
});
