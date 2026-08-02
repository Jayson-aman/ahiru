#!/usr/bin/env node
/**
 * 問題データの「中身」の充実度を数える。
 *
 * check_all.js が構造の不整合（キーの食い違い・重複ID・正解の偏り）を見るのに対し、
 * こちらはストア掲載文で宣伝している内容が事実かどうかを確かめるためのもの。
 *
 * v1.1.0 は「アプリ内から確認できます」という文言だけで
 * ガイドライン3.1.2のリジェクトを受けた。数字の裏付けが無い宣伝文も同じ
 * ガイドライン2.3（正確なメタデータ）でリジェクトされうるので、
 * docs/STORE_LISTING.md に割合を書くときは必ずこのスクリプトの出力を使うこと。
 *
 *   node scripts/check_content.js
 */
const path = require('path');

// TypeScript のデータファイルをそのまま require できるようにする
require('ts-node').register({
  transpileOnly: true,
  // プロジェクトの tsconfig.json は Expo 用（bundler解決・customConditions など）で、
  // 素の Node からデータを読むだけの用途には合わない。読ませずに下の設定だけを使う。
  skipProject: true,
  compilerOptions: {
    module: 'commonjs',
    target: 'es2020',
    esModuleInterop: true,
    moduleResolution: 'node',
    ignoreDeprecations: '6.0',
  },
});

// 画面が実際に読み込んでいるモジュールに合わせること。
// 資格を追加したら必ずここにも足す（足し忘れるとその資格が丸ごと検査対象外になる）。
const MODS = {
  takkei: 'takkei_questions',
  fp: 'fp_questions',
  mansion: 'mansion_questions',
  kenchiku: 'kenchiku/index',
  denken3: 'denken3_questions',
  kisho: 'kisho_questions',
  eiken: 'eiken_questions',
  sekokan: 'sekokan',
  kankoji: 'kankoji_questions',
  denkisekou: 'denkisekou_questions',
  kikaisekou: 'kikaisekou_questions',
  dobokusekou: 'dobokusekou_questions',
  cost: 'cost_questions',
  kyusui: 'kyusui_questions',
  shobo: 'shobo_questions',
  kikenbutsu: 'kikenbutsu_questions',
  concrete: 'concrete_questions',
  tsushin: 'tsushin_questions',
  nikkyu: 'nikkyu_questions',
  denki2: 'denki2_questions',
};

const DATA = path.join(__dirname, '..', 'data');
const pad = (s, n) => String(s).padEnd(n);
const num = (s, n) => String(s).padStart(n);

function loadQuestions(mod) {
  const m = require(path.join(DATA, mod));
  const arr = Object.values(m).find(v => Array.isArray(v) && v.length && v[0] && v[0].choices);
  if (arr) return arr;
  // { 科目キー: 問題配列 } 形式にも対応する
  for (const v of Object.values(m)) {
    if (v && typeof v === 'object' && !Array.isArray(v)) {
      const vals = Object.values(v);
      if (vals.length && vals.every(Array.isArray) && vals.some(x => x[0] && x[0].choices)) {
        return vals.flat();
      }
    }
  }
  return null;
}

const rows = [];
const total = { n: 0, choiceExpl: 0, diagram: 0, rich: 0 };
const errors = [];

for (const [cert, mod] of Object.entries(MODS)) {
  let arr;
  try {
    arr = loadQuestions(mod);
  } catch (e) {
    errors.push(`${cert}: 読み込みに失敗しました (${mod}) — ${e.message}`);
    continue;
  }
  if (!arr) {
    errors.push(`${cert}: 問題配列が見つかりません (${mod})`);
    continue;
  }

  let choiceExpl = 0; // 選択肢ごとの解説がある問題
  let diagram = 0;    // 【図解】が入っている問題
  let rich = 0;       // 総論解説が100字以上ある問題
  let sum = 0;
  for (const q of arr) {
    if (q.choices.some(c => c.explanation && String(c.explanation).trim())) choiceExpl++;
    const e = String(q.explanation || '');
    if (e.includes('【図解】')) diagram++;
    if (e.length >= 100) rich++;
    sum += e.length;

    // ソースに \\n と書いてしまうと、改行ではなく「\」「n」の2文字が本文に出る。
    // 図解が1行に潰れて画面に \n が見えるが、check_diagrams.py は
    // 複数行のブロックとして認識しないため素通りしてしまう。ここで捕まえる。
    if (/\\n/.test(e)) {
      errors.push(`${cert} ${q.id}: 解説に改行ではなく文字としての \\n が入っています（ソースの \\\\n を \\n に直す）`);
    }
    // 図解を名乗るのに1行しかない＝改行が入っていない
    if (e.includes('【図解】') && !e.includes('\n')) {
      errors.push(`${cert} ${q.id}: 【図解】があるのに改行が1つもありません`);
    }
  }

  rows.push({ cert, n: arr.length, choiceExpl, diagram, rich, avg: Math.round(sum / arr.length) });
  total.n += arr.length;
  total.choiceExpl += choiceExpl;
  total.diagram += diagram;
  total.rich += rich;
}

const pct = (v, n) => `${num(v, 6)} (${num(Math.round((v / n) * 100), 3)}%)`;

console.log('\n■ 問題データの充実度（ストア掲載文の裏付けに使う数字）\n');
console.log(pad('資格', 14) + num('問題数', 7) + '   ' + pad('選択肢ごとの解説', 14) + pad('図解つき', 14) + pad('総論100字以上', 14) + '総論平均');
console.log('─'.repeat(86));
for (const r of rows) {
  console.log(
    pad(r.cert, 14) + num(r.n, 7) + '   ' +
    pct(r.choiceExpl, r.n) + '  ' + pct(r.diagram, r.n) + '  ' + pct(r.rich, r.n) + '  ' +
    num(r.avg, 5) + '字'
  );
}
console.log('─'.repeat(86));
console.log(
  pad('合計', 14) + num(total.n, 7) + '   ' +
  pct(total.choiceExpl, total.n) + '  ' + pct(total.diagram, total.n) + '  ' + pct(total.rich, total.n)
);

console.log('\n■ ストア掲載文に書いてよい表現\n');
const diaPct = Math.round((total.diagram / total.n) * 100);
const noChoice = rows.filter(r => r.choiceExpl < r.n);
console.log(`  図解つきの問題は ${total.diagram.toLocaleString()} / ${total.n.toLocaleString()}問 ＝ 約${diaPct}%`);
if (diaPct < 99) {
  console.log(`  → 「全問図解つき」とは書けない。「約${diaPct}%の問題に図解」のように書く。`);
} else {
  console.log('  → 「全問図解つき」と書いてよい。');
}
if (noChoice.length) {
  console.log(`  選択肢ごとの解説が揃っていない資格: ${noChoice.map(r => r.cert).join('、')}`);
  console.log('  → 「すべての問題に選択肢ごとの解説」とは書けない。対象資格を明記して書く。');
} else {
  console.log('  → 「すべての問題に選択肢ごとの解説」と書いてよい。');
}

if (errors.length) {
  console.log('\n[NG] ' + errors.length + '件の問題があります\n  ' + errors.slice(0, 30).join('\n  '));
  process.exit(1);
}
console.log('');
