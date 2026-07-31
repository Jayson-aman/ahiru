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

export const denken3Textbook: Denken3TextChapter[] = [
  ...denken3TextPart1,
];

export function getDenken3Text(subject: string): Denken3TextSection[] {
  // 同じ科目の章が複数ファイルに分かれるため、find ではなく filter で
  // 全章を連結する（増補分の取りこぼしを防ぐ）
  return denken3Textbook
    .filter(c => c.subject === subject)
    .flatMap(c => c.sections);
}
