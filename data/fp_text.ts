export type FpTextSection = {
  id: string;
  title: string;
  emoji: string;
  body: string;
};

export type FpTextChapter = {
  subject: 'life' | 'risk' | 'asset' | 'tax' | 'realestate' | 'inheritance';
  sections: FpTextSection[];
};

import { fpTextPart1 } from './fp_text_part1';

export const fpTextbook: FpTextChapter[] = [
  ...fpTextPart1,
];

export function getFpText(subject: string): FpTextSection[] {
  // 同じ科目の章が複数ファイルに分かれるため、find ではなく filter で
  // 全章を連結する（増補分の取りこぼしを防ぐ）
  return fpTextbook
    .filter(c => c.subject === subject)
    .flatMap(c => c.sections);
}
