export type Denki2TextSection = {
  id: string;
  title: string;
  emoji: string;
  body: string;
};

/**
 * 第二種電気工事士 筆記試験（学科試験）の4科目。
 *  riron  … 電気に関する基礎理論（オームの法則・交流・three相）
 *  haisen … 配電理論と配線設計（電圧降下・幹線・分岐回路）
 *  kiki   … 電気機器・配線器具・材料・工具
 *  hoki   … 法令・鑑別・配線図（電気工事士法・電気設備技術基準・複線図）
 */
export type Denki2TextChapter = {
  subject: 'riron' | 'haisen' | 'kiki' | 'hoki';
  sections: Denki2TextSection[];
};

import { denki2TextRiron } from './denki2_text_riron';
import { denki2TextHaisen } from './denki2_text_haisen';
import { denki2TextKiki } from './denki2_text_kiki';
import { denki2TextHoki } from './denki2_text_hoki';

export const denki2Textbook: Denki2TextChapter[] = [
  ...denki2TextRiron,
  ...denki2TextHaisen,
  ...denki2TextKiki,
  ...denki2TextHoki,
];

export function getDenki2Text(subject: string): Denki2TextSection[] {
  // 同じ科目の章が複数ファイルに分かれるため、find ではなく filter で
  // 全章を連結する（増補分の取りこぼしを防ぐ）
  return denki2Textbook
    .filter(c => c.subject === subject)
    .flatMap(c => c.sections);
}
