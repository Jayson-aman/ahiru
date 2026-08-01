export type SekokanTextSection = {
  id: string;
  title: string;
  emoji: string;
  body: string;
};

export type SekokanTextChapter = {
  subject: 'kenchikugaku' | 'sekou' | 'kanri' | 'hoki';
  sections: SekokanTextSection[];
};

import { sekokanTextPart1 } from './text_part1';

export const sekokanTextbook: SekokanTextChapter[] = [
  ...sekokanTextPart1,
];

export function getSekokanText(subject: string): SekokanTextSection[] {
  // 同じ科目の章が複数ファイルに分かれるため、find ではなく filter で
  // 全章を連結する（増補分の取りこぼしを防ぐ）
  return sekokanTextbook
    .filter(c => c.subject === subject)
    .flatMap(c => c.sections);
}
