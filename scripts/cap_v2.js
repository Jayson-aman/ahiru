// v1.2.0 追加スクリーンショット（1266×2688px）
// ホーム画面の資格タイル（20資格ぶん）・問題・教科書・図解が伝わるよう10枚構成。
// 使い方: node cap_v2.js            → 全10枚
//         node cap_v2.js 03 07      → 指定した番号だけ撮り直す
const { chromium } = require('./_playwright');
const fs = require('fs');

const BASE = 'http://127.0.0.1:8899';
const OUT = '/home/user/ahiru/store/screenshots_v2';
fs.mkdirSync(OUT, { recursive: true });

// 1266×2688px = CSS 422×896 × deviceScaleFactor 3
const VIEWPORT = { width: 422, height: 896 };
const DSR = 3;

async function scrollBy(page, px) {
  await page.evaluate((px) => {
    const sc = Array.from(document.querySelectorAll('*')).filter(n => {
      const st = getComputedStyle(n);
      return /auto|scroll/.test(st.overflowY) && n.scrollHeight > n.clientHeight + 20;
    });
    const t = sc.sort((a, b) => (b.scrollHeight - b.clientHeight) - (a.scrollHeight - a.clientHeight))[0];
    if (t) t.scrollTop += px; else window.scrollBy(0, px);
  }, px);
}

async function scrollToText(page, needle, offset = -90) {
  const ok = await page.evaluate(({ needle, offset }) => {
    const it = document.evaluate(`//*[contains(text(), ${JSON.stringify(needle)})]`, document, null, 7, null);
    if (!it.snapshotLength) return false;
    const el = it.snapshotItem(0);
    const sc = Array.from(document.querySelectorAll('*')).filter(n => {
      const st = getComputedStyle(n);
      return /auto|scroll/.test(st.overflowY) && n.scrollHeight > n.clientHeight + 20;
    }).sort((a, b) => (b.scrollHeight - b.clientHeight) - (a.scrollHeight - a.clientHeight))[0];
    if (!sc) return false;
    const d = el.getBoundingClientRect().top - sc.getBoundingClientRect().top;
    sc.scrollTop += d + offset;
    return true;
  }, { needle, offset });
  if (!ok) console.log('   [警告] "' + needle + '" が見つからずスクロールできなかった');
  return ok;
}

async function shot(page, name) {
  await page.waitForTimeout(600);
  await page.screenshot({ path: `${OUT}/${name}.png` });
  console.log('  ✓ ' + name);
}

async function answer(page, url, want = {}, maxTry = 40) {
  for (let i = 0; i < maxTry; i++) {
    await page.goto(BASE + url, { waitUntil: 'networkidle' });
    await page.waitForTimeout(1800);
    const raw = await page.locator('div').filter({ hasText: /^[ABCD]$/ }).all();
    const seen = new Map();
    for (const el of raw) {
      const b = await el.boundingBox();
      if (!b) continue;
      const k = Math.round(b.y / 10);
      if (!seen.has(k)) seen.set(k, el);
    }
    const opts = [...seen.entries()].sort((a, b) => a[0] - b[0]).map(e => e[1]);
    if (opts.length < 4) continue;
    await opts[i % 4].click({ force: true });
    await page.waitForTimeout(1100);
    const t = await page.evaluate(() => document.body.innerText);
    if (want.correct && /不正解/.test(t)) continue;
    if (want.figure && !/図解/.test(t)) continue;
    console.log('   (' + (i + 1) + '回目で条件を満たす問題を引いた)');
    return true;
  }
  console.log('   [警告] 条件を満たす問題を引けなかった');
  return false;
}

(async () => {
  const only = process.argv.slice(2);
  const want = (n) => only.length === 0 || only.includes(n);

  const browser = await chromium.launch({
    executablePath: '/opt/pw-browsers/chromium-1194/chrome-linux/chrome',
    args: ['--font-render-hinting=none', '--force-color-profile=srgb', '--hide-scrollbars'],
  });
  const ctx = await browser.newContext({
    viewport: VIEWPORT, deviceScaleFactor: DSR, isMobile: true, hasTouch: true, locale: 'ja-JP',
  });
  const page = await ctx.newPage();
  page.setDefaultTimeout(40000);
  const go = async (u, wait = 2600) => {
    await page.goto(BASE + u, { waitUntil: 'networkidle' });
    await page.waitForTimeout(wait);
  };

  if (want('01')) {
    console.log('01 ホーム（資格一覧・上部）');
    await go('/');
    await shot(page, '01-home-top');
  }

  if (want('02')) {
    console.log('02 ホーム（コンクリート技士・危険物乙4を含む中間）');
    await go('/');
    await scrollToText(page, 'コンクリート技士', -60);
    await shot(page, '02-home-mid');
  }

  if (want('03')) {
    console.log('03 ホーム（電気通信施工・第二種電気工事士を含む下部）');
    await go('/');
    await scrollToText(page, '一級電気通信工事施工管理技士', -40);
    await shot(page, '03-home-bottom');
  }

  if (want('04')) {
    console.log('04 宅建 問題（正解＋選択肢ごとの解説）');
    await answer(page, '/takkei/kenri', { correct: true });
    await scrollToText(page, '各選択肢の解説', -560);
    await shot(page, '04-takkei-answer');
  }

  if (want('05')) {
    console.log('05 宅建 要点テキスト本文');
    await go('/takkei/text/kenri', 3200);
    await shot(page, '05-takkei-text');
  }

  if (want('06')) {
    console.log('06 危険物乙4 図解つき解説');
    await answer(page, '/kikenbutsu/horei', { figure: true, correct: true });
    await scrollToText(page, '図解', -300);
    await shot(page, '06-kikenbutsu-figure');
  }

  if (want('07')) {
    console.log('07 コンクリート技士 要点テキスト本文');
    await go('/concrete/text/zairyo', 3200);
    await shot(page, '07-concrete-text');
  }

  if (want('08')) {
    console.log('08 電気通信施工 図解つき解説');
    await answer(page, '/tsushin/kogaku', { figure: true, correct: true });
    await scrollToText(page, '図解', -300);
    await shot(page, '08-tsushin-figure');
  }

  if (want('09')) {
    console.log('09 二級建築士 図解つき解説');
    await answer(page, '/nikkyu/keikaku', { figure: true, correct: true });
    await scrollToText(page, '図解', -300);
    await shot(page, '09-nikkyu-figure');
  }

  if (want('10')) {
    console.log('10 第二種電気工事士 要点テキスト（複線図の描き方を含む）');
    await go('/denki2/text/riron', 3200);
    await shot(page, '10-denki2-text');
  }

  await browser.close();
  console.log('done');
})();
