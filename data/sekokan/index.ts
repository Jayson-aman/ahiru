import type { SekokanQuestion } from './types';
export type { SekokanQuestion };

import { sekokanKisoQuestions } from './kiso-questions';
import { sekokanKiso2Questions } from './kiso2-questions';
import { sekokanOuyouQuestions } from './ouyou-questions';
import { sekokanMogiPart1 } from './mogi-part1';
import { sekokanMogiPart2 } from './mogi-part2';

export const sekokanQuestions: SekokanQuestion[] = [
  ...sekokanKisoQuestions,
  ...sekokanKiso2Questions,
  ...sekokanOuyouQuestions,
];

// 模擬試験（本試験形式50問）
export const sekokanMogi: SekokanQuestion[] = [
  ...sekokanMogiPart1,
  ...sekokanMogiPart2,
];

export function countBySubjectAndLevel(subject: string, level: 'kiso' | 'ouyou'): number {
  return sekokanQuestions.filter(q =>
    q.subject === subject &&
    (level === 'kiso'
      ? q.difficulty === 'basic' || q.difficulty === 'standard'
      : q.difficulty === 'advanced')
  ).length;
}
