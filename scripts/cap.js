// App Store 用スクリーンショット撮影
// iPhone 16 Pro Max 相当（430x932 CSS px, DPR3 = 1290x2796）
// 使い方: node cap.js            → 全10枚
//         node cap.js 04 08      → 指定した番号だけ撮り直す
const { chromium } = require('./_playwright');
const fs = require('fs');

const BASE = 'http://127.0.0.1:8899';
const OUT = '/home/user/ahiru/store/screenshots';
fs.mkdirSync(OUT, { recursive: true });

/** 一番大きいスクロール領域を px だけ動かす */
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

/** 指定テキストが画面上端付近に来るまでスクロール */
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

/**
 * 問題画面を開いて回答する。
 * want.correct=true なら「正解」になるまで、want.figure=true なら解説に図解が
 * 含まれるまで、問題をランダムに引き直す。
 */
async function answer(page, url, want = {}, maxTry = 40) {
  for (let i = 0; i < maxTry; i++) {
    await page.goto(BASE + url, { waitUntil: 'networkidle' });
    await page.waitForTimeout(1800);
    // A/B/C/D のバッジは div が入れ子になっていて同じ要素が複数ヒットする。
    // 縦位置でまとめて「4つの選択肢」に潰してから選ぶ。
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
    viewport: { width: 430, height: 932 }, deviceScaleFactor: 3,
    isMobile: true, hasTouch: true, locale: 'ja-JP',
  });
  const page = await ctx.newPage();
  page.setDefaultTimeout(40000);
  const go = async (u, wait = 2600) => {
    await page.goto(BASE + u, { waitUntil: 'networkidle' });
    await page.waitForTimeout(wait);
  };

  if (want('01') || want('02')) {
    console.log('01/02 ホーム');
    await go('/');
    if (want('01')) await shot(page, '01-home');
    if (want('02')) { await scrollBy(page, 1180); await shot(page, '02-home-lineup'); }
  }

  if (want('03')) {
    console.log('03 電験三種トップ');
    await go('/denken3');
    await shot(page, '03-denken3-top');
  }

  if (want('04')) {
    console.log('04 一級土木施工 問題');
    // 問題はランダムなので、短すぎて画面下半分が空くものは引き直す
    for (let i = 0; i < 25; i++) {
      await go('/dobokusekou/kanri', 2000);
      const len = await page.evaluate(() => document.body.innerText.length);
      if (len >= 380) { console.log('   (' + (i + 1) + '回目・本文' + len + '字)'); break; }
    }
    await shot(page, '04-quiz');
  }

  if (want('05')) {
    console.log('05 FP 正解＋詳細解説');
    await answer(page, '/fp/tax', { correct: true });
    await scrollToText(page, '各選択肢の解説', -560);
    await shot(page, '05-answer-correct');
  }

  if (want('06')) {
    console.log('06 給水装置 図解つき解説');
    await answer(page, '/kyusui/kozo', { figure: true, correct: true });
    await scrollToText(page, '図解', -300);
    await shot(page, '06-answer-figure');
  }

  if (want('07')) {
    console.log('07 コスト管理士 図解つき解説');
    await answer(page, '/cost/sekisan', { figure: true, correct: true });
    await scrollToText(page, '図解', -300);
    await shot(page, '07-answer-figure2');
  }

  if (want('08')) {
    console.log('08 消防設備士 図解つき解説');
    await answer(page, '/shobo/kozo_denki', { figure: true, correct: true });
    await scrollToText(page, '図解', -300);
    await shot(page, '08-answer-figure3');
  }

  if (want('09')) {
    console.log('09 教科書の目次（給水装置：8科目で画面が埋まる）');
    await go('/kyusui/text');
    await shot(page, '09-text-index');
  }

  if (want('10')) {
    console.log('10 電験三種テキスト本文');
    await go('/denken3/text/rikigaku', 3200);
    await shot(page, '10-text-body');
  }

  await browser.close();
  console.log('done');
})();
