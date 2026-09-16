#!/usr/bin/env node
/**
 * QualiZ の Web課金商品42件を Stripe に作成する（データ埋め込み・1ファイル完結）。
 *
 *   node scripts/stripe_products.mjs            # 確認のみ（何も作らない）
 *   node scripts/stripe_products.mjs --apply    # 未作成のものだけ作る
 *
 * シークレットキーは環境変数から読む。引数には絶対に書かないこと
 * （シェル履歴・プロセス一覧に残る）:
 *
 *   export STRIPE_SECRET_KEY=sk_test_...     # まずテストモードで
 *   node scripts/stripe_products.mjs
 *   node scripts/stripe_products.mjs --apply
 *
 * 手動で途中まで作った商品があっても二重に作らない。
 * 商品名が完全一致するものを既存として扱い、
 * 価格は「金額＋請求間隔」が一致するものを既存として扱う。
 */

const KEY = process.env.STRIPE_SECRET_KEY;
const APPLY = process.argv.includes('--apply');

/** 42商品（docs/WEB_BILLING_PRODUCTS_SETUP.md から生成） */
const items = [
  {
    "id": "qualiz_pro_takkei_monthly",
    "name": "QualiZ 宅地建物取引士 Pro（月額）",
    "description": "宅地建物取引士の全問題・全教科書・模擬試験が使い放題になります。",
    "interval": "month",
    "amount": 1800,
    "entitlement": "pro_takkei"
  },
  {
    "id": "qualiz_pro_takkei_yearly",
    "name": "QualiZ 宅地建物取引士 Pro（年額）",
    "description": "宅地建物取引士の全問題・全教科書・模擬試験が使い放題になります。",
    "interval": "year",
    "amount": 18000,
    "entitlement": "pro_takkei"
  },
  {
    "id": "qualiz_pro_fp_monthly",
    "name": "QualiZ FP Pro（月額）",
    "description": "ファイナンシャルプランナーの全問題・全教科書・模擬試験が使い放題になります。",
    "interval": "month",
    "amount": 1800,
    "entitlement": "pro_fp"
  },
  {
    "id": "qualiz_pro_fp_yearly",
    "name": "QualiZ FP Pro（年額）",
    "description": "ファイナンシャルプランナーの全問題・全教科書・模擬試験が使い放題になります。",
    "interval": "year",
    "amount": 18000,
    "entitlement": "pro_fp"
  },
  {
    "id": "qualiz_pro_mansion_monthly",
    "name": "QualiZ マンション管理士 Pro（月額）",
    "description": "マンション管理士の全問題・全教科書・模擬試験が使い放題になります。",
    "interval": "month",
    "amount": 1800,
    "entitlement": "pro_mansion"
  },
  {
    "id": "qualiz_pro_mansion_yearly",
    "name": "QualiZ マンション管理士 Pro（年額）",
    "description": "マンション管理士の全問題・全教科書・模擬試験が使い放題になります。",
    "interval": "year",
    "amount": 18000,
    "entitlement": "pro_mansion"
  },
  {
    "id": "qualiz_pro_kenchiku_monthly",
    "name": "QualiZ 建築設備士 Pro（月額）",
    "description": "建築設備士の全問題・全教科書・模擬試験が使い放題になります。",
    "interval": "month",
    "amount": 1800,
    "entitlement": "pro_kenchiku"
  },
  {
    "id": "qualiz_pro_kenchiku_yearly",
    "name": "QualiZ 建築設備士 Pro（年額）",
    "description": "建築設備士の全問題・全教科書・模擬試験が使い放題になります。",
    "interval": "year",
    "amount": 18000,
    "entitlement": "pro_kenchiku"
  },
  {
    "id": "qualiz_pro_denken3_monthly",
    "name": "QualiZ 電験三種 Pro（月額）",
    "description": "電験三種の全問題・全教科書・模擬試験が使い放題になります。",
    "interval": "month",
    "amount": 1800,
    "entitlement": "pro_denken3"
  },
  {
    "id": "qualiz_pro_denken3_yearly",
    "name": "QualiZ 電験三種 Pro（年額）",
    "description": "電験三種の全問題・全教科書・模擬試験が使い放題になります。",
    "interval": "year",
    "amount": 18000,
    "entitlement": "pro_denken3"
  },
  {
    "id": "qualiz_pro_kisho_monthly",
    "name": "QualiZ 気象予報士 Pro（月額）",
    "description": "気象予報士の全問題・全教科書・模擬試験が使い放題になります。",
    "interval": "month",
    "amount": 1800,
    "entitlement": "pro_kisho"
  },
  {
    "id": "qualiz_pro_kisho_yearly",
    "name": "QualiZ 気象予報士 Pro（年額）",
    "description": "気象予報士の全問題・全教科書・模擬試験が使い放題になります。",
    "interval": "year",
    "amount": 18000,
    "entitlement": "pro_kisho"
  },
  {
    "id": "qualiz_pro_sekokan_monthly",
    "name": "QualiZ 1級建築施工管理技士 Pro（月額）",
    "description": "1級建築施工管理技士の全問題・全教科書・模擬試験が使い放題になります。",
    "interval": "month",
    "amount": 1800,
    "entitlement": "pro_sekokan"
  },
  {
    "id": "qualiz_pro_sekokan_yearly",
    "name": "QualiZ 1級建築施工管理技士 Pro（年額）",
    "description": "1級建築施工管理技士の全問題・全教科書・模擬試験が使い放題になります。",
    "interval": "year",
    "amount": 18000,
    "entitlement": "pro_sekokan"
  },
  {
    "id": "qualiz_pro_kankoji_monthly",
    "name": "QualiZ 1級管工事施工管理技士 Pro（月額）",
    "description": "1級管工事施工管理技士の全問題・全教科書・模擬試験が使い放題になります。",
    "interval": "month",
    "amount": 1800,
    "entitlement": "pro_kankoji"
  },
  {
    "id": "qualiz_pro_kankoji_yearly",
    "name": "QualiZ 1級管工事施工管理技士 Pro（年額）",
    "description": "1級管工事施工管理技士の全問題・全教科書・模擬試験が使い放題になります。",
    "interval": "year",
    "amount": 18000,
    "entitlement": "pro_kankoji"
  },
  {
    "id": "qualiz_pro_denkisekou_monthly",
    "name": "QualiZ 1級電気工事施工管理技士 Pro（月額）",
    "description": "1級電気工事施工管理技士の全問題・全教科書・模擬試験が使い放題になります。",
    "interval": "month",
    "amount": 1800,
    "entitlement": "pro_denkisekou"
  },
  {
    "id": "qualiz_pro_denkisekou_yearly",
    "name": "QualiZ 1級電気工事施工管理技士 Pro（年額）",
    "description": "1級電気工事施工管理技士の全問題・全教科書・模擬試験が使い放題になります。",
    "interval": "year",
    "amount": 18000,
    "entitlement": "pro_denkisekou"
  },
  {
    "id": "qualiz_pro_kikaisekou_monthly",
    "name": "QualiZ 1級建設機械施工管理技士 Pro（月額）",
    "description": "1級建設機械施工管理技士の全問題・全教科書・模擬試験が使い放題になります。",
    "interval": "month",
    "amount": 1800,
    "entitlement": "pro_kikaisekou"
  },
  {
    "id": "qualiz_pro_kikaisekou_yearly",
    "name": "QualiZ 1級建設機械施工管理技士 Pro（年額）",
    "description": "1級建設機械施工管理技士の全問題・全教科書・模擬試験が使い放題になります。",
    "interval": "year",
    "amount": 18000,
    "entitlement": "pro_kikaisekou"
  },
  {
    "id": "qualiz_pro_dobokusekou_monthly",
    "name": "QualiZ 1級土木施工管理技士 Pro（月額）",
    "description": "1級土木施工管理技士の全問題・全教科書・模擬試験が使い放題になります。",
    "interval": "month",
    "amount": 1800,
    "entitlement": "pro_dobokusekou"
  },
  {
    "id": "qualiz_pro_dobokusekou_yearly",
    "name": "QualiZ 1級土木施工管理技士 Pro（年額）",
    "description": "1級土木施工管理技士の全問題・全教科書・模擬試験が使い放題になります。",
    "interval": "year",
    "amount": 18000,
    "entitlement": "pro_dobokusekou"
  },
  {
    "id": "qualiz_pro_cost_monthly",
    "name": "QualiZ 建築コスト管理士 Pro（月額）",
    "description": "建築コスト管理士の全問題・全教科書・模擬試験が使い放題になります。",
    "interval": "month",
    "amount": 1800,
    "entitlement": "pro_cost"
  },
  {
    "id": "qualiz_pro_cost_yearly",
    "name": "QualiZ 建築コスト管理士 Pro（年額）",
    "description": "建築コスト管理士の全問題・全教科書・模擬試験が使い放題になります。",
    "interval": "year",
    "amount": 18000,
    "entitlement": "pro_cost"
  },
  {
    "id": "qualiz_pro_kyusui_monthly",
    "name": "QualiZ 給水装置工事主任技術者 Pro（月額）",
    "description": "給水装置工事主任技術者の全問題・全教科書・模擬試験が使い放題になります。",
    "interval": "month",
    "amount": 1800,
    "entitlement": "pro_kyusui"
  },
  {
    "id": "qualiz_pro_kyusui_yearly",
    "name": "QualiZ 給水装置工事主任技術者 Pro（年額）",
    "description": "給水装置工事主任技術者の全問題・全教科書・模擬試験が使い放題になります。",
    "interval": "year",
    "amount": 18000,
    "entitlement": "pro_kyusui"
  },
  {
    "id": "qualiz_pro_shobo_monthly",
    "name": "QualiZ 消防設備士 Pro（月額）",
    "description": "消防設備士（甲種）の全問題・全教科書・模擬試験が使い放題になります。",
    "interval": "month",
    "amount": 1800,
    "entitlement": "pro_shobo"
  },
  {
    "id": "qualiz_pro_shobo_yearly",
    "name": "QualiZ 消防設備士 Pro（年額）",
    "description": "消防設備士（甲種）の全問題・全教科書・模擬試験が使い放題になります。",
    "interval": "year",
    "amount": 18000,
    "entitlement": "pro_shobo"
  },
  {
    "id": "qualiz_pro_kikenbutsu_monthly",
    "name": "QualiZ 危険物取扱者乙4 Pro（月額）",
    "description": "危険物取扱者（乙種第4類）の全問題・全教科書・模擬試験が使い放題になります。",
    "interval": "month",
    "amount": 1800,
    "entitlement": "pro_kikenbutsu"
  },
  {
    "id": "qualiz_pro_kikenbutsu_yearly",
    "name": "QualiZ 危険物取扱者乙4 Pro（年額）",
    "description": "危険物取扱者（乙種第4類）の全問題・全教科書・模擬試験が使い放題になります。",
    "interval": "year",
    "amount": 18000,
    "entitlement": "pro_kikenbutsu"
  },
  {
    "id": "qualiz_pro_concrete_monthly",
    "name": "QualiZ コンクリート技士 Pro（月額）",
    "description": "コンクリート技士・コンクリート診断士の全問題・全教科書・模擬試験が使い放題になります。",
    "interval": "month",
    "amount": 1800,
    "entitlement": "pro_concrete"
  },
  {
    "id": "qualiz_pro_concrete_yearly",
    "name": "QualiZ コンクリート技士 Pro（年額）",
    "description": "コンクリート技士・コンクリート診断士の全問題・全教科書・模擬試験が使い放題になります。",
    "interval": "year",
    "amount": 18000,
    "entitlement": "pro_concrete"
  },
  {
    "id": "qualiz_pro_tsushin_monthly",
    "name": "QualiZ 1級電気通信工事施工管理技士 Pro（月額）",
    "description": "1級電気通信工事施工管理技士の全問題・全教科書・模擬試験が使い放題になります。",
    "interval": "month",
    "amount": 1800,
    "entitlement": "pro_tsushin"
  },
  {
    "id": "qualiz_pro_tsushin_yearly",
    "name": "QualiZ 1級電気通信工事施工管理技士 Pro（年額）",
    "description": "1級電気通信工事施工管理技士の全問題・全教科書・模擬試験が使い放題になります。",
    "interval": "year",
    "amount": 18000,
    "entitlement": "pro_tsushin"
  },
  {
    "id": "qualiz_pro_nikkyu_monthly",
    "name": "QualiZ 二級建築士 Pro（月額）",
    "description": "二級建築士の全問題・全教科書・模擬試験が使い放題になります。",
    "interval": "month",
    "amount": 1800,
    "entitlement": "pro_nikkyu"
  },
  {
    "id": "qualiz_pro_nikkyu_yearly",
    "name": "QualiZ 二級建築士 Pro（年額）",
    "description": "二級建築士の全問題・全教科書・模擬試験が使い放題になります。",
    "interval": "year",
    "amount": 18000,
    "entitlement": "pro_nikkyu"
  },
  {
    "id": "qualiz_pro_denki2_monthly",
    "name": "QualiZ 第二種電気工事士 Pro（月額）",
    "description": "第二種電気工事士の全問題・全教科書・模擬試験が使い放題になります。",
    "interval": "month",
    "amount": 1800,
    "entitlement": "pro_denki2"
  },
  {
    "id": "qualiz_pro_denki2_yearly",
    "name": "QualiZ 第二種電気工事士 Pro（年額）",
    "description": "第二種電気工事士の全問題・全教科書・模擬試験が使い放題になります。",
    "interval": "year",
    "amount": 18000,
    "entitlement": "pro_denki2"
  },
  {
    "id": "qualiz_pro_lpgas_monthly",
    "name": "QualiZ 液化石油ガス設備士 Pro（月額）",
    "description": "液化石油ガス設備士の全問題・全教科書・模擬試験が使い放題になります。",
    "interval": "month",
    "amount": 1800,
    "entitlement": "pro_lpgas"
  },
  {
    "id": "qualiz_pro_lpgas_yearly",
    "name": "QualiZ 液化石油ガス設備士 Pro（年額）",
    "description": "液化石油ガス設備士の全問題・全教科書・模擬試験が使い放題になります。",
    "interval": "year",
    "amount": 18000,
    "entitlement": "pro_lpgas"
  },
  {
    "id": "qualiz_pro_koatsu_monthly",
    "name": "QualiZ 高圧ガス製造保安責任者 Pro（月額）",
    "description": "高圧ガス製造保安責任者の全問題・全教科書・模擬試験が使い放題になります。",
    "interval": "month",
    "amount": 1800,
    "entitlement": "pro_koatsu"
  },
  {
    "id": "qualiz_pro_koatsu_yearly",
    "name": "QualiZ 高圧ガス製造保安責任者 Pro（年額）",
    "description": "高圧ガス製造保安責任者の全問題・全教科書・模擬試験が使い放題になります。",
    "interval": "year",
    "amount": 18000,
    "entitlement": "pro_koatsu"
  }
];

if (!KEY) {
  console.error('STRIPE_SECRET_KEY が未設定です。');
  console.error('  export STRIPE_SECRET_KEY=sk_test_...');
  process.exit(1);
}
if (!/^sk_(test|live)_/.test(KEY)) {
  console.error('STRIPE_SECRET_KEY が sk_test_ / sk_live_ で始まっていません。');
  console.error('公開キー(pk_)や制限キー(rk_)では商品を作成できません。');
  process.exit(1);
}
const MODE = KEY.startsWith('sk_live_') ? 'LIVE（本番）' : 'TEST（テスト）';

/** Stripe REST を叩く。form-urlencoded。 */
async function stripe(method, endpoint, body, idempotencyKey) {
  const headers = {
    Authorization: `Bearer ${KEY}`,
    'Stripe-Version': '2024-06-20',
  };
  let payload;
  if (body) {
    headers['Content-Type'] = 'application/x-www-form-urlencoded';
    payload = new URLSearchParams(body).toString();
  }
  if (idempotencyKey) headers['Idempotency-Key'] = idempotencyKey;

  const res = await fetch(`https://api.stripe.com/v1/${endpoint}`, {
    method, headers, body: payload,
  });
  const json = await res.json();
  if (!res.ok) {
    const m = json?.error?.message ?? JSON.stringify(json);
    throw new Error(`${method} ${endpoint} → ${res.status}: ${m}`);
  }
  return json;
}

/** ページングしながら全件取得 */
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

const yen = (n) => '¥' + n.toLocaleString('ja-JP');

async function main() {
  console.log(`\nモード: ${MODE}`);
  console.log(`対象: ${items.length}件\n`);

  console.log('既存の商品を取得中…');
  const products = await listAll('products');
  const byName = new Map(products.map((p) => [p.name, p]));
  console.log(`  Stripe上の商品: ${products.length}件\n`);

  // 既存商品の価格をまとめて引く
  const pricesByProduct = new Map();
  for (const p of products) {
    if (!byName.has(p.name)) continue;
    pricesByProduct.set(p.id, await listAll('prices', { product: p.id }));
  }

  const plan = [];
  for (const it of items) {
    const existing = byName.get(it.name);
    if (!existing) {
      plan.push({ ...it, action: 'create-product', note: '商品ごと新規' });
      continue;
    }
    const prices = pricesByProduct.get(existing.id) ?? [];
    const match = prices.find(
      (pr) =>
        pr.unit_amount === it.amount &&
        pr.currency === 'jpy' &&
        pr.recurring?.interval === it.interval
    );
    if (match) {
      plan.push({ ...it, action: 'skip', productId: existing.id, priceId: match.id, note: '既存' });
    } else {
      plan.push({ ...it, action: 'create-price', productId: existing.id, note: '商品あり・価格なし' });
    }
  }

  const n = (a) => plan.filter((x) => x.action === a).length;
  console.log('── 現状 ──');
  console.log(`  既存でスキップ  : ${n('skip')}件`);
  console.log(`  価格だけ作成    : ${n('create-price')}件`);
  console.log(`  商品ごと作成    : ${n('create-product')}件\n`);

  for (const x of plan) {
    const mark = x.action === 'skip' ? '✓' : '+';
    console.log(`  ${mark} ${x.name.padEnd(42)} ${yen(x.amount).padStart(8)} / ${x.interval === 'month' ? '月' : '年'}  ${x.note}`);
  }

  const todo = plan.filter((x) => x.action !== 'skip');
  if (todo.length === 0) {
    console.log('\n42件すべて揃っています。作成するものはありません。\n');
    return;
  }

  if (!APPLY) {
    console.log(`\n${todo.length}件を作成します。実行するには --apply を付けてください。`);
    console.log('  node scripts/stripe_products.mjs --apply\n');
    return;
  }

  console.log(`\n${MODE} に ${todo.length}件を作成します…\n`);
  let ok = 0;
  for (const x of todo) {
    try {
      let productId = x.productId;
      if (x.action === 'create-product') {
        const p = await stripe('POST', 'products', {
          name: x.name,
          description: x.description,
          'metadata[qualiz_id]': x.id,
          'metadata[entitlement]': x.entitlement,
        }, `qualiz-product-${x.id}`);
        productId = p.id;
      }
      const pr = await stripe('POST', 'prices', {
        product: productId,
        currency: 'jpy',           // JPYは小数を持たないので 1800 = ¥1,800
        unit_amount: String(x.amount),
        'recurring[interval]': x.interval,
        lookup_key: x.id,
        'metadata[qualiz_id]': x.id,
        'metadata[entitlement]': x.entitlement,
      }, `qualiz-price-${x.id}`);
      console.log(`  ✓ ${x.name}  ${productId} / ${pr.id}`);
      ok++;
    } catch (e) {
      console.log(`  ✗ ${x.name}\n      ${e.message}`);
    }
  }
  console.log(`\n完了: ${ok}/${todo.length}件\n`);
  if (ok < todo.length) {
    console.log('失敗したものは、もう一度同じコマンドを実行すれば再試行されます');
    console.log('（成功済みはスキップされるので二重には作られません）。\n');
  }
}

main().catch((e) => {
  console.error('\nエラー:', e.message, '\n');
  process.exit(1);
});
