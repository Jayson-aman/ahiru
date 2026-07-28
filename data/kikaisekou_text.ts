export type KikaisekouTextSection = {
  id: string;
  title: string;
  emoji: string;
  body: string;
};

export type KikaisekouTextChapter = {
  subject: 'doboku' | 'kikai' | 'sekou' | 'hoki';
  sections: KikaisekouTextSection[];
};

import { kikaisekouTextPart1 } from './kikaisekou_text_part1';

export const kikaisekouTextbook: KikaisekouTextChapter[] = [
  ...kikaisekouTextPart1,
];

export function getKikaisekouText(subject: string): KikaisekouTextSection[] {
  // 同じ科目の章が複数ファイルに分かれるため、find ではなく filter で
  // 全章を連結する（増補分の取りこぼしを防ぐ）
  return kikaisekouTextbook
    .filter(c => c.subject === subject)
    .flatMap(c => c.sections);
}
