export type KenchikuTextSection = {
  id: string;
  title: string;
  emoji: string;
  body: string; // plain text with \n line breaks
};

export type KenchikuTextChapter = {
  subject: 'ippan' | 'hoki' | 'kucho' | 'kyuhaisui' | 'denki' | 'bousai';
  sections: KenchikuTextSection[];
};

import { kenchikuTextPart1 } from './text_part1';

export const kenchikuTextbook: KenchikuTextChapter[] = [
  ...kenchikuTextPart1,
];

export function getKenchikuText(subject: string): KenchikuTextSection[] {
  // 同じ科目の章が複数ファイルに分かれるため、find ではなく filter で
  // 全章を連結する（増補分の取りこぼしを防ぐ）
  return kenchikuTextbook
    .filter(c => c.subject === subject)
    .flatMap(c => c.sections);
}
