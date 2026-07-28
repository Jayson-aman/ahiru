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
import { kikaisekouTextDobokuA } from './kikaisekou_text_doboku_a';
import { kikaisekouTextDobokuB } from './kikaisekou_text_doboku_b';
import { kikaisekouTextKikaiA } from './kikaisekou_text_kikai_a';
import { kikaisekouTextKikaiB } from './kikaisekou_text_kikai_b';
import { kikaisekouTextSekouA } from './kikaisekou_text_sekou_a';
import { kikaisekouTextSekouB } from './kikaisekou_text_sekou_b';
import { kikaisekouTextHokiA } from './kikaisekou_text_hoki_a';
import { kikaisekouTextHokiB } from './kikaisekou_text_hoki_b';

export const kikaisekouTextbook: KikaisekouTextChapter[] = [
  ...kikaisekouTextPart1,
  ...kikaisekouTextDobokuA,
  ...kikaisekouTextDobokuB,
  ...kikaisekouTextKikaiA,
  ...kikaisekouTextKikaiB,
  ...kikaisekouTextSekouA,
  ...kikaisekouTextSekouB,
  ...kikaisekouTextHokiA,
  ...kikaisekouTextHokiB,
];

export function getKikaisekouText(subject: string): KikaisekouTextSection[] {
  // 同じ科目の章が複数ファイルに分かれるため、find ではなく filter で
  // 全章を連結する（増補分の取りこぼしを防ぐ）
  return kikaisekouTextbook
    .filter(c => c.subject === subject)
    .flatMap(c => c.sections);
}
