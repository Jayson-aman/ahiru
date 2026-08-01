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
import { mansionTextKubunsho } from './mansion_text_kubunsho';
import { mansionTextTekiseika } from './mansion_text_tekiseika';
import { mansionTextKiyaku } from './mansion_text_kiyaku';
import { mansionTextMinpo } from './mansion_text_minpo';
import { mansionTextSetsubi } from './mansion_text_setsubi';
import { mansionTextUnei } from './mansion_text_unei';

export const mansionTextbook: MansionTextChapter[] = [
  ...mansionTextPart1,
  ...mansionTextKubunsho,
  ...mansionTextTekiseika,
  ...mansionTextKiyaku,
  ...mansionTextMinpo,
  ...mansionTextSetsubi,
  ...mansionTextUnei,
];

export function getMansionText(subject: string): MansionTextSection[] {
  // 同じ科目の章が複数ファイルに分かれるため、find ではなく filter で
  // 全章を連結する（増補分の取りこぼしを防ぐ）
  return mansionTextbook
    .filter(c => c.subject === subject)
    .flatMap(c => c.sections);
}
