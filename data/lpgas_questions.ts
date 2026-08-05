export type LpgasQuestion = {
  id: string;
  /** 学科試験5科目 */
  subject: 'kiso' | 'nensho' | 'kyokyu' | 'shohi' | 'horei';
  subjectName: string;
  question: string;
  choices: { key: 'A' | 'B' | 'C' | 'D'; text: string; explanation: string }[];
  correctKey: 'A' | 'B' | 'C' | 'D';
  explanation: string;
  difficulty: 'basic' | 'standard' | 'advanced';
  examYear?: string;
};

import { balanceAnswerKeys } from './_balance';

import { lpgasKiso } from './lpgas_questions_kiso';
import { lpgasNensho } from './lpgas_questions_nensho';
import { lpgasKyokyu } from './lpgas_questions_kyokyu';
import { lpgasShohi } from './lpgas_questions_shohi';
import { lpgasHorei } from './lpgas_questions_horei';

const rawLpgasQuestions: LpgasQuestion[] = [
  ...lpgasKiso,
  ...lpgasNensho,
  ...lpgasKyokyu,
  ...lpgasShohi,
  ...lpgasHorei,
];

// 正解キーが偏ると「Dを選ぶだけ」で点が取れてしまうため、決定的に分散させる
export const lpgasQuestions: LpgasQuestion[] = balanceAnswerKeys(rawLpgasQuestions);

export function getLpgasQuestions(subject: string): LpgasQuestion[] {
  return lpgasQuestions.filter(q => q.subject === subject);
}
