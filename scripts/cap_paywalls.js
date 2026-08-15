// 審査用ペイウォールスクリーンショット撮影（1266×2688px）
//
// ★重要: CertPaywall は Platform.OS==='web' のとき購入UI（プランカード・価格）を
//   意図的に出さず「ご購入はiOSアプリから」の案内だけを表示する（二重課金防止のため）。
//   そのため、このスクリプトを実行する前に、以下2ファイルを一時的にパッチし、
//   撮影が終わったら【必ず元に戻す】こと（コミットしないこと）。
//
//   1. services/subscription.ts
//      export const CERTS_COMING_SOON: CertKey[] = []; ← 対象資格を一時的に空にする
//
//   2. components/CertPaywall.tsx
//      - `{Platform.OS === 'web' && (` の行の条件を `{false && Platform.OS === 'web' && (` にする
//      - `{Platform.OS !== 'web' && !comingSoon && (` を `{!comingSoon && (` にする
//      - `unavailable={!certPkg}` / `unavailable={!maxPkg}` を `unavailable={false}` にする
//
//   パッチ後は `npx expo export --platform web` で dist/ を再ビルドしてから実行する。
//   撮影後は両ファイルを git checkout で元に戻し、再度 web export して dist/ も戻すこと。
//
// 使い方: node scripts/cap_paywalls.js
const { chromium } = require('./_playwright');
const fs = require('fs');

const BASE = 'http://127.0.0.1:8899';
const OUT = '/home/user/ahiru/store/paywalls';
fs.mkdirSync(OUT, { recursive: true });

// 1266×2688px = CSS 422×896 × deviceScaleFactor 3
const VIEWPORT = { width: 422, height: 896 };
const DSR = 3;

const TARGETS = [
  { name: 'takkei',     path: '/takkei/kenri',      label: '宅地建物取引士' },
  { name: 'kikenbutsu', path: '/kikenbutsu/horei',  label: '危険物取扱者 乙種第4類' },
  { name: 'concrete',   path: '/concrete/zairyo',   label: 'コンクリート技士・診断士' },
  { name: 'tsushin',    path: '/tsushin/kogaku',    label: '1級電気通信工事施工管理技士' },
  { name: 'nikkyu',     path: '/nikkyu/keikaku',    label: '二級建築士' },
  { name: 'denki2',     path: '/denki2/riron',      label: '第二種電気工事士' },
];

(async () => {
  const browser = await chromium.launch({
    executablePath: '/opt/pw-browsers/chromium-1194/chrome-linux/chrome',
    args: ['--font-render-hinting=none', '--force-color-profile=srgb', '--hide-scrollbars'],
  });

  for (const t of TARGETS) {
    const ctx = await browser.newContext({
      viewport: VIEWPORT, deviceScaleFactor: DSR, isMobile: true, hasTouch: true, locale: 'ja-JP',
    });
    const page = await ctx.newPage();
    await page.goto(BASE + t.path, { waitUntil: 'networkidle' });
    await page.waitForTimeout(1500);

    // バナー下部の「詳細」ボタンをタップしてモーダルを開く
    const banner = page.getByText('詳細', { exact: true }).first();
    await banner.click({ timeout: 5000 }).catch(async () => {
      await page.locator('text=無料体験中').first().click({ timeout: 5000 });
    });
    await page.waitForTimeout(1200);

    const outPath = `${OUT}/paywall-${t.name}.png`;
    await page.screenshot({ path: outPath });
    console.log(`✓ ${t.name} (${t.label}) → ${outPath}`);
    await ctx.close();
  }

  await browser.close();
  console.log('\n全' + TARGETS.length + '枚 撮影完了');
})();
