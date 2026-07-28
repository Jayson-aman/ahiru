export type DenkisekouTextSection = {
  id: string;
  title: string;
  emoji: string;
  body: string;
};

export type DenkisekouTextChapter = {
  subject: 'riron' | 'setsubi' | 'sekou' | 'hoki';
  sections: DenkisekouTextSection[];
};

import { denkisekouTextPart1 } from './denkisekou_text_part1';
import { denkisekouTextRironA } from './denkisekou_text_riron_a';
import { denkisekouTextRironB } from './denkisekou_text_riron_b';
import { denkisekouTextSetsubiA } from './denkisekou_text_setsubi_a';
import { denkisekouTextSetsubiB } from './denkisekou_text_setsubi_b';
import { denkisekouTextSekouA } from './denkisekou_text_sekou_a';
import { denkisekouTextSekouB } from './denkisekou_text_sekou_b';
import { denkisekouTextHokiA } from './denkisekou_text_hoki_a';
import { denkisekouTextHokiB } from './denkisekou_text_hoki_b';

export const denkisekouTextbook: DenkisekouTextChapter[] = [
  ...denkisekouTextPart1,
  ...denkisekouTextRironA,
  ...denkisekouTextRironB,
  ...denkisekouTextSetsubiA,
  ...denkisekouTextSetsubiB,
  ...denkisekouTextSekouA,
  ...denkisekouTextSekouB,
  ...denkisekouTextHokiA,
  ...denkisekouTextHokiB,
];

/**
 * 指定科目のセクションを返す。
 * 同じ科目の章が複数ファイルに分かれるため、find ではなく filter で
 * 全章を連結する（増補分の取りこぼしを防ぐ）。
 */
export function getDenkisekouText(subject: string): DenkisekouTextSection[] {
  return denkisekouTextbook
    .filter(c => c.subject === subject)
    .flatMap(c => c.sections);
}
