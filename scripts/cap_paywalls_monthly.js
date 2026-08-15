// 全20資格＋Max ペイウォール「月払い」スクリーンショット撮影（1242×2688px）
//
// ★重要: 撮影前に services/subscription.ts と components/CertPaywall.tsx を
//   一時的にパッチすること（cap_paywalls_all.js の冒頭コメント参照）。
//   撮影後は必ず元に戻し、dist/ も再ビルドすること。
//
// cap_paywalls_all.js との違いは「月払い」タブをタップしてから撮影する点のみ。
//
// 使い方: node scripts/cap_paywalls_monthly.js
const { chromium } = require('./_playwright');
const fs = require('fs');

const BASE = 'http://127.0.0.1:8899';
const OUT = '/home/user/ahiru/store/paywalls_monthly';
fs.mkdirSync(OUT, { recursive: true });

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

    const banner = page.getByText('詳細', { exact: true }).first();
    await banner.click({ timeout: 5000 }).catch(async () => {
      await page.locator('text=無料体験中').first().click({ timeout: 5000 });
    });
    await page.waitForTimeout(1000);

    // 「月払い」タブに切り替え
    await page.getByText('月払い', { exact: true }).first().click({ timeout: 5000 });
    await page.waitForTimeout(800);

    if (t.scrollToMax) {
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

    const outPath = `${OUT}/paywall-monthly-${t.name}.png`;
    await page.screenshot({ path: outPath });
    console.log(`✓ ${t.name} (${t.label}) → ${outPath}`);
    await ctx.close();
  }

  await browser.close();
  console.log('\n全' + TARGETS.length + '枚 撮影完了');
})();
