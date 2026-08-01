export type MansionTextSection = {
  id: string;
  title: string;
  emoji: string;
  body: string;
};

export type MansionTextChapter = {
  subject: 'kubunsho' | 'tekiseika' | 'kiyaku' | 'minpo' | 'setsubi' | 'unei';
  sections: MansionTextSection[];
};

import { mansionTextPart1 } from './mansion_text_part1';

export const mansionTextbook: MansionTextChapter[] = [
  ...mansionTextPart1,
];

export function getMansionText(subject: string): MansionTextSection[] {
  // 同じ科目の章が複数ファイルに分かれるため、find ではなく filter で
  // 全章を連結する（増補分の取りこぼしを防ぐ）
  return mansionTextbook
    .filter(c => c.subject === subject)
    .flatMap(c => c.sections);
}
