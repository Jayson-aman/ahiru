export type Denken3TextSection = {
  id: string;
  title: string;
  emoji: string;
  body: string;
};

export type Denken3TextChapter = {
  subject: 'rikigaku' | 'denryoku' | 'kikai' | 'houki';
  sections: Denken3TextSection[];
};

import { denken3TextPart1 } from './denken3_text_part1';
import { denken3TextRikigakuA } from './denken3_text_rikigaku_a';
import { denken3TextRikigakuB } from './denken3_text_rikigaku_b';
import { denken3TextDenryokuA } from './denken3_text_denryoku_a';
import { denken3TextDenryokuB } from './denken3_text_denryoku_b';
import { denken3TextKikaiA } from './denken3_text_kikai_a';
import { denken3TextKikaiB } from './denken3_text_kikai_b';
import { denken3TextHoukiA } from './denken3_text_houki_a';
import { denken3TextHoukiB } from './denken3_text_houki_b';

export const denken3Textbook: Denken3TextChapter[] = [
  ...denken3TextPart1,
  ...denken3TextRikigakuA,
  ...denken3TextRikigakuB,
  ...denken3TextDenryokuA,
  ...denken3TextDenryokuB,
  ...denken3TextKikaiA,
  ...denken3TextKikaiB,
  ...denken3TextHoukiA,
  ...denken3TextHoukiB,
];

export function getDenken3Text(subject: string): Denken3TextSection[] {
  // 同じ科目の章が複数ファイルに分かれるため、find ではなく filter で
  // 全章を連結する（増補分の取りこぼしを防ぐ）
  return denken3Textbook
    .filter(c => c.subject === subject)
    .flatMap(c => c.sections);
}
