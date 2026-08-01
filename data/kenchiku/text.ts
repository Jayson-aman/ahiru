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
import { kenchikuTextIppan } from './text_ippan';
import { kenchikuTextHoki } from './text_hoki';
import { kenchikuTextKucho } from './text_kucho';
import { kenchikuTextKyuhaisui } from './text_kyuhaisui';
import { kenchikuTextDenki } from './text_denki';
import { kenchikuTextBousai } from './text_bousai';

export const kenchikuTextbook: KenchikuTextChapter[] = [
  ...kenchikuTextPart1,
  ...kenchikuTextIppan,
  ...kenchikuTextHoki,
  ...kenchikuTextKucho,
  ...kenchikuTextKyuhaisui,
  ...kenchikuTextDenki,
  ...kenchikuTextBousai,
];

export function getKenchikuText(subject: string): KenchikuTextSection[] {
  // 同じ科目の章が複数ファイルに分かれるため、find ではなく filter で
  // 全章を連結する（増補分の取りこぼしを防ぐ）
  return kenchikuTextbook
    .filter(c => c.subject === subject)
    .flatMap(c => c.sections);
}
