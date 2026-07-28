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

export const denkisekouTextbook: DenkisekouTextChapter[] = [
  ...denkisekouTextPart1,
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
