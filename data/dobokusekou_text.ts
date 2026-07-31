export type DobokusekouTextSection = {
  id: string;
  title: string;
  emoji: string;
  body: string;
};

export type DobokusekouTextChapter = {
  subject: 'doboku' | 'senmon' | 'kanri' | 'hoki';
  sections: DobokusekouTextSection[];
};

import { dobokusekouTextPart1 } from './dobokusekou_text_part1';

export const dobokusekouTextbook: DobokusekouTextChapter[] = [
  ...dobokusekouTextPart1,
];

export function getDobokusekouText(subject: string): DobokusekouTextSection[] {
  // 同じ科目の章が複数ファイルに分かれるため、find ではなく filter で
  // 全章を連結する（増補分の取りこぼしを防ぐ）
  return dobokusekouTextbook
    .filter(c => c.subject === subject)
    .flatMap(c => c.sections);
}
