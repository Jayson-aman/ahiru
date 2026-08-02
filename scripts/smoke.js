/**
 * 主要画面を実際にブラウザで開き、実行時エラー・白画面を検出する。
 * dist/ をSPAサーバで配信しておくこと（scripts/serve.js）。
 *
 * 使い方: node scripts/serve.js &   →   node scripts/smoke.js
 */
const { chromium } = require('/tmp/claude-0/-home-user-ahiru/0a1d4a1a-8051-5eac-90f8-411da7f29a9f/scratchpad/node_modules/playwright-core');

const BASE = 'http://127.0.0.1:8899';

// 資格トップ・科目別問題・教科書・模試を横断的に踏む
const ROUTES = [
  '/', '/eiken', '/eiken/2kyu', '/eiken/3kyu', '/eiken/4kyu', '/eiken/taisaku',
  '/takkei', '/takkei/kenri', '/takkei/text', '/takkei/text/kenri', '/takkei/mogi',
  '/mansion', '/mansion/kubunsho', '/mansion/text', '/mansion/text/kubunsho',
  '/fp', '/fp/tax', '/fp/text', '/fp/text/tax',
  '/kenchiku', '/kenchiku/quiz/ippan', '/kenchiku/text', '/kenchiku/text/ippan', '/kenchiku/mogi', '/kenchiku/seizu',
  '/sekokan', '/sekokan/quiz/kenchikugaku', '/sekokan/text', '/sekokan/text/kenchikugaku', '/sekokan/mogi', '/sekokan/niji',
  '/dobokusekou', '/dobokusekou/doboku', '/dobokusekou/text/doboku', '/dobokusekou/mogi', '/dobokusekou/niji',
  '/kankoji', '/kankoji/genron', '/kankoji/text/genron',
  '/denkisekou', '/denkisekou/riron', '/denkisekou/text/riron',
  '/kikaisekou', '/kikaisekou/doboku', '/kikaisekou/text/doboku',
  '/denken3', '/denken3/rikigaku', '/denken3/text/rikigaku',
  '/kisho', '/kisho/gakka1', '/kisho/text', '/kisho/text/gakka1',
  '/kyusui', '/kyusui/kozo', '/kyusui/text', '/kyusui/text/kozo', '/kyusui/mogi',
  '/shobo', '/shobo/horei_kyotsu', '/shobo/text', '/shobo/text/horei_kyotsu', '/shobo/mogi',
  '/cost', '/cost/gairon', '/cost/text', '/cost/text/gairon', '/cost/mogi', '/cost/ronbun',
  '/kikenbutsu', '/kikenbutsu/horei', '/kikenbutsu/text', '/kikenbutsu/text/horei', '/kikenbutsu/mogi',
  '/concrete', '/concrete/zairyo', '/concrete/text', '/concrete/text/zairyo', '/concrete/mogi',
  '/tsushin', '/tsushin/kogaku', '/tsushin/text', '/tsushin/text/kogaku', '/tsushin/mogi',
  '/nikkyu', '/nikkyu/keikaku', '/nikkyu/text', '/nikkyu/text/keikaku', '/nikkyu/mogi', '/nikkyu/seizu',
  '/denki2', '/denki2/riron', '/denki2/text', '/denki2/text/riron', '/denki2/mogi',
  '/legal/tokushoho', '/legal/privacy', '/legal/terms',
  // /juken（中学受験）と /kouko（高校受験）はホームから意図的にリンクしていない
  // 未公開画面なので、到達不能であることが正しい。ここでは踏まない。
  '/this-route-does-not-exist',   // 404フォールバックが出るか
];

(async () => {
  const browser = await chromium.launch({
    executablePath: '/opt/pw-browsers/chromium-1194/chrome-linux/chrome',
    args: ['--hide-scrollbars'],
  });
  const ctx = await browser.newContext({
    viewport: { width: 430, height: 932 }, deviceScaleFactor: 2,
    isMobile: true, hasTouch: true, locale: 'ja-JP',
  });
  const page = await ctx.newPage();
  page.setDefaultTimeout(45000);

  let ng = 0;
  const errors = [];
  page.on('pageerror', e => errors.push('pageerror: ' + String(e).slice(0, 160)));
  page.on('console', m => { if (m.type() === 'error') errors.push('console: ' + m.text().slice(0, 160)); });

  for (const r of ROUTES) {
    errors.length = 0;
    let text = '';
    try {
      await page.goto(BASE + r, { waitUntil: 'networkidle' });
      await page.waitForTimeout(1200);
      text = await page.evaluate(() => document.body.innerText.trim());
    } catch (e) {
      console.log('  [NG] ' + r + ' : 遷移失敗 ' + String(e).slice(0, 90)); ng++; continue;
    }
    const bad = errors.filter(e => !/Download the React DevTools|favicon|shadow\*|pointerEvents|props\.pointerEvents/i.test(e));
    const isEmpty = text.length < 20;
    const isBuilding = /準備中|作成中/.test(text);
    if (bad.length) { console.log('  [NG] ' + r + ' : ' + bad[0]); ng++; }
    else if (isEmpty) { console.log('  [NG] ' + r + ' : 画面が空（' + text.length + '文字）'); ng++; }
    else if (isBuilding) { console.log('  [NG] ' + r + ' : 「準備中／作成中」が表示されている'); ng++; }
    else console.log('  [ok] ' + r.padEnd(34) + ' ' + text.split('\n').filter(l => l.trim())[1]?.slice(0, 30));
  }

  await browser.close();
  console.log('\n' + '='.repeat(50));
  console.log(ng === 0 ? '[OK] ' + ROUTES.length + ' 画面すべて正常に描画' : '[NG] ' + ng + ' / ' + ROUTES.length + ' 画面に問題');
  process.exit(ng === 0 ? 0 : 1);
})();
