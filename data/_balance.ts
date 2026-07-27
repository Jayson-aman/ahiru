/**
 * 正解キー（A/B/C/D）の偏りをならす。
 *
 * 問題を大量に自動生成した資格では、正解が特定の記号に偏っていた
 * （例: 建設機械施工は 55.6% が D）。この状態だと受験者が記号を決め打ちする
 * だけで半分以上正解できてしまい、模試としての診断精度が失われる。
 *
 * 選択肢の中身は一切変えず、並び順だけを id から決まる量だけ回転させ、
 * 正解が乗る記号を散らす。id が同じなら常に同じ並びになるので、
 * 「前回と選択肢の位置が違う」という学習上の混乱は起きない。
 *
 * ただし解説が「選択肢Aは〜」のように記号を名指ししている問題は、
 * 並べ替えると解説と矛盾するため対象外にする（元の並びのまま返す）。
 */

type Choice = { key: string; text: string; explanation?: string };
type Balanceable = {
  id: string;
  correctKey: string;
  choices: Choice[];
  explanation?: string;
};

/** 解説が選択肢の記号を名指ししているか。疑わしい場合は「している」と判定する */
const LETTER_REF = /(選択肢|肢)\s*[（(]?[ABCD][)）]?|[（(][ABCD][)）]が(正しい|誤|適当)|正解は\s*[（(]?[ABCD]/;

function referencesChoiceLetters(q: Balanceable): boolean {
  if (LETTER_REF.test(q.explanation ?? '')) return true;
  return q.choices.some(c => LETTER_REF.test(c.explanation ?? ''));
}

/** id から決まる安定したハッシュ。実行のたびに変わってはいけないので乱数は使わない */
function stableHash(s: string): number {
  let h = 0;
  for (let i = 0; i < s.length; i++) {
    h = (h * 31 + s.charCodeAt(i)) | 0;
  }
  return Math.abs(h);
}

export function balanceAnswerKeys<T extends Balanceable>(questions: T[]): T[] {
  return questions.map(q => {
    const n = q.choices?.length ?? 0;
    if (n < 2) return q;

    const correctIdx = q.choices.findIndex(c => c.key === q.correctKey);
    if (correctIdx < 0) return q;          // 壊れたデータには触らない
    if (referencesChoiceLetters(q)) return q;

    // 記号の並び（ABCD、英検リスニングの一部は ABC）はそのまま使う
    const keys = q.choices.map(c => c.key);

    // 正解を position `target` に移す回転量を求める
    const target = stableHash(q.id) % n;
    const shift = (correctIdx - target + n) % n;

    const rotated = q.choices.map((_, i) => q.choices[(i + shift) % n]);
    const choices = rotated.map((c, i) => ({ ...c, key: keys[i] }));

    return { ...q, choices, correctKey: keys[target] };
  });
}
