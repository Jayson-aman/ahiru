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
import { lpgasKiso2 } from './lpgas_questions_kiso_2';
import { lpgasKiso3 } from './lpgas_questions_kiso_3';
import { lpgasNensho } from './lpgas_questions_nensho';
import { lpgasNensho2 } from './lpgas_questions_nensho_2';
import { lpgasNensho3 } from './lpgas_questions_nensho_3';
import { lpgasKyokyu } from './lpgas_questions_kyokyu';
import { lpgasKyokyu2 } from './lpgas_questions_kyokyu_2';
import { lpgasKyokyu3 } from './lpgas_questions_kyokyu_3';
import { lpgasShohi } from './lpgas_questions_shohi';
import { lpgasShohi2 } from './lpgas_questions_shohi_2';
import { lpgasShohi3 } from './lpgas_questions_shohi_3';
import { lpgasHorei } from './lpgas_questions_horei';
import { lpgasHorei2 } from './lpgas_questions_horei_2';
import { lpgasHorei3 } from './lpgas_questions_horei_3';

const rawLpgasQuestions: LpgasQuestion[] = [
  ...lpgasKiso,
  ...lpgasKiso2,
  ...lpgasKiso3,
  ...lpgasNensho,
  ...lpgasNensho2,
  ...lpgasNensho3,
  ...lpgasKyokyu,
  ...lpgasKyokyu2,
  ...lpgasKyokyu3,
  ...lpgasShohi,
  ...lpgasShohi2,
  ...lpgasShohi3,
  ...lpgasHorei,
  ...lpgasHorei2,
  ...lpgasHorei3,
];

// 正解キーが偏ると「Dを選ぶだけ」で点が取れてしまうため、決定的に分散させる
export const lpgasQuestions: LpgasQuestion[] = balanceAnswerKeys(rawLpgasQuestions);

export function getLpgasQuestions(subject: string): LpgasQuestion[] {
  return lpgasQuestions.filter(q => q.subject === subject);
}
