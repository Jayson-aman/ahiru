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

export const costTextbook: CostTextChapter[] = [
  ...costTextPart1,
  ...costTextPart2,
];

export function getCostText(subject: string): CostTextSection[] {
  return costTextbook.find(c => c.subject === subject)?.sections ?? [];
}
