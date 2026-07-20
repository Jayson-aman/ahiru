import type { SekokanQuestion } from './types';
export type { SekokanQuestion };

import { sekokanKisoQuestions } from './kiso-questions';
import { sekokanKiso2Questions } from './kiso2-questions';
import { sekokanKiso3Questions } from './kiso3-questions';
import { sekokanOuyouQuestions } from './ouyou-questions';
import { sekokanOuyou2Questions } from './ouyou2-questions';
import { sekokanOuyou3Questions } from './ouyou3-questions';
import { sekokanKoshuQuestions } from './koshu-questions';
import { sekokanKoshu2Questions } from './koshu2-questions';
import { sekokanKyokaQuestions } from './kyoka-questions';
import { sekokanKyoka2Questions } from './kyoka2-questions';
import { sekokanKyoka3Questions } from './kyoka3-questions';
import { sekokanMogiPart1 } from './mogi-part1';
import { sekokanMogiPart2 } from './mogi-part2';

export const sekokanQuestions: SekokanQuestion[] = [
  ...sekokanKisoQuestions,
  ...sekokanKiso2Questions,
  ...sekokanKiso3Questions,
  ...sekokanOuyouQuestions,
  ...sekokanOuyou2Questions,
  ...sekokanOuyou3Questions,
  ...sekokanKoshuQuestions,
  ...sekokanKoshu2Questions,
  ...sekokanKyokaQuestions,
  ...sekokanKyoka2Questions,
  ...sekokanKyoka3Questions,
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
