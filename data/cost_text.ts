export type CostTextSection = {
  id: string;
  title: string;
  emoji: string;
  body: string;
};

export type CostTextChapter = {
  subject: 'gairon' | 'sekisan' | 'keiyaku' | 'keizai';
  sections: CostTextSection[];
};

import { costTextPart1 } from './cost_text_part1';
import { costTextPart2 } from './cost_text_part2';
import { costTextPart3 } from './cost_text_part3';
import { costTextPart5 } from './cost_text_part5';
import { costTextPart6 } from './cost_text_part6';
import { costTextPart4 } from './cost_text_part4';
import { costTextPart7 } from './cost_text_part7';
import { costTextPart8 } from './cost_text_part8';
import { costTextPart11 } from './cost_text_part11';
import { costTextPart10 } from './cost_text_part10';
import { costTextPart12 } from './cost_text_part12';
import { costTextPart9 } from './cost_text_part9';
import { costTextPart13 } from './cost_text_part13';

export const costTextbook: CostTextChapter[] = [
  ...costTextPart1,
  ...costTextPart2,
  ...costTextPart3,
  ...costTextPart4,
  ...costTextPart5,
  ...costTextPart6,
  ...costTextPart7,
  ...costTextPart8,
  ...costTextPart9,
  ...costTextPart11,
  ...costTextPart10,
  ...costTextPart12,
  ...costTextPart13,
];

/**
 * 指定科目のセクションを返す。
 * 同じ科目の章が複数（基礎編・応用編）に分かれているため、
 * find ではなく filter で全章を連結する（増補分の取りこぼしを防ぐ）。
 */
export function getCostText(subject: string): CostTextSection[] {
  return costTextbook
    .filter(c => c.subject === subject)
    .flatMap(c => c.sections);
}
