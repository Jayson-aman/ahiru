export type KankojiTextSection = {
  id: string;
  title: string;
  emoji: string;
  body: string;
};

export type KankojiTextChapter = {
  subject: 'genron' | 'kucho' | 'eisei' | 'sekou' | 'hoki';
  sections: KankojiTextSection[];
};

import { kankojiTextPart1 } from './kankoji_text_part1';

export const kankojiTextbook: KankojiTextChapter[] = [
  ...kankojiTextPart1,
];

export function getKankojiText(subject: string): KankojiTextSection[] {
  // 同じ科目の章が複数ファイルに分かれるため、find ではなく filter で
  // 全章を連結する（増補分の取りこぼしを防ぐ）
  return kankojiTextbook
    .filter(c => c.subject === subject)
    .flatMap(c => c.sections);
}
