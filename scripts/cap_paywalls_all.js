// 全20資格＋Max ペイウォールスクリーンショット撮影（1242×2688px = Apple 6.5"標準サイズ）
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
// Maxプランは全カードの2枚目に共通で表示されるため、専用ルートは無く、
// 「max」項目だけ既存の宅建ペイウォールを流用してMaxカードが見えるようスクロールする。
//
// 使い方: node scripts/cap_paywalls_all.js
const { chromium } = require('./_playwright');
const fs = require('fs');

const BASE = 'http://127.0.0.1:8899';
const OUT = '/home/user/ahiru/store/paywalls_all';
fs.mkdirSync(OUT, { recursive: true });

// 1242×2688px = CSS 414×896 × deviceScaleFactor 3（Apple 6.5"表示の標準サイズ）
const VIEWPORT = { width: 414, height: 896 };
const DSR = 3;

const TARGETS = [
  { name: 'takkei',      path: '/takkei/kenri',       label: '宅地建物取引士' },
  { name: 'fp',          path: '/fp/tax',             label: 'FP' },
  { name: 'mansion',     path: '/mansion/kubunsho',   label: 'マンション管理士' },
  { name: 'kenchiku',    path: '/kenchiku/quiz/ippan',label: '建築設備士' },
  { name: 'sekokan',     path: '/sekokan/quiz/kenchikugaku', label: '一級建築施工管理技士' },
  { name: 'denken3',     path: '/denken3/rikigaku',   label: '電験三種' },
  { name: 'kisho',       path: '/kisho/gakka1',       label: '気象予報士' },
  { name: 'cost',        path: '/cost/gairon',        label: '建設コスト管理士' },
  { name: 'kyusui',      path: '/kyusui/kozo',        label: '給水装置工事主任技術者' },
  { name: 'shobo',       path: '/shobo/horei_kyotsu', label: '消防設備士 甲種' },
  { name: 'kikenbutsu',  path: '/kikenbutsu/horei',   label: '危険物取扱者 乙種第4類' },
  { name: 'concrete',    path: '/concrete/zairyo',    label: 'コンクリート技士・診断士' },
  { name: 'tsushin',     path: '/tsushin/kogaku',     label: '1級電気通信工事施工管理技士' },
  { name: 'nikkyu',      path: '/nikkyu/keikaku',     label: '二級建築士' },
  { name: 'denki2',      path: '/denki2/riron',       label: '第二種電気工事士' },
  { name: 'eiken',       path: '/eiken/2kyu',         label: '英検2級' },
  { name: 'kankoji',     path: '/kankoji/genron',     label: '管工事施工管理技士' },
  { name: 'denkisekou',  path: '/denkisekou/riron',   label: '電気工事施工管理技士' },
  { name: 'kikaisekou',  path: '/kikaisekou/doboku',  label: '建設機械施工管理技士' },
  { name: 'dobokusekou', path: '/dobokusekou/doboku', label: '一級土木施工管理技士' },
  { name: 'lpgas',       path: '/lpgas/kiso',         label: '液化石油ガス設備士' },
  { name: 'koatsu',      path: '/koatsu/hoan',        label: '高圧ガス製造保安責任者' },
  { name: 'max',         path: '/takkei/kenri',       label: '全資格 Max（Maxカードを上に出す）', scrollToMax: true },
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

    if (t.scrollToMax) {
      // 「全資格 Max」の見出しが画面上部に来るまでスクロール
      await page.evaluate(() => {
        const it = document.evaluate(`//*[contains(text(), "全資格 Max")]`, document, null, 7, null);
        if (!it.snapshotLength) return;
        const el = it.snapshotItem(0);
        const sc = Array.from(document.querySelectorAll('*')).filter(n => {
          const st = getComputedStyle(n);
          return /auto|scroll/.test(st.overflowY) && n.scrollHeight > n.clientHeight + 20;
        }).sort((a, b) => (b.scrollHeight - b.clientHeight) - (a.scrollHeight - a.clientHeight))[0];
        if (!sc) return;
        const d = el.getBoundingClientRect().top - sc.getBoundingClientRect().top;
        sc.scrollTop += d - 40;
      });
      await page.waitForTimeout(700);
    }

    const outPath = `${OUT}/paywall-${t.name}.png`;
    await page.screenshot({ path: outPath });
    console.log(`✓ ${t.name} (${t.label}) → ${outPath}`);
    await ctx.close();
  }

  await browser.close();
  console.log('\n全' + TARGETS.length + '枚 撮影完了');
})();
