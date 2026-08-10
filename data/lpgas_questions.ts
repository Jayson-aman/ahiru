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
import { lpgasKiso4 } from './lpgas_questions_kiso_4';
import { lpgasKiso5 } from './lpgas_questions_kiso_5';
import { lpgasKiso6 } from './lpgas_questions_kiso_6';
import { lpgasKiso7 } from './lpgas_questions_kiso_7';
import { lpgasKiso8 } from './lpgas_questions_kiso_8';
import { lpgasKiso9 } from './lpgas_questions_kiso_9';
import { lpgasNensho } from './lpgas_questions_nensho';
import { lpgasNensho2 } from './lpgas_questions_nensho_2';
import { lpgasNensho3 } from './lpgas_questions_nensho_3';
import { lpgasNensho4 } from './lpgas_questions_nensho_4';
import { lpgasNensho5 } from './lpgas_questions_nensho_5';
import { lpgasNensho6 } from './lpgas_questions_nensho_6';
import { lpgasNensho7 } from './lpgas_questions_nensho_7';
import { lpgasNensho8 } from './lpgas_questions_nensho_8';
import { lpgasNensho9 } from './lpgas_questions_nensho_9';
import { lpgasKyokyu } from './lpgas_questions_kyokyu';
import { lpgasKyokyu2 } from './lpgas_questions_kyokyu_2';
import { lpgasKyokyu3 } from './lpgas_questions_kyokyu_3';
import { lpgasKyokyu4 } from './lpgas_questions_kyokyu_4';
import { lpgasKyokyu5 } from './lpgas_questions_kyokyu_5';
import { lpgasKyokyu6 } from './lpgas_questions_kyokyu_6';
import { lpgasKyokyu7 } from './lpgas_questions_kyokyu_7';
import { lpgasKyokyu8 } from './lpgas_questions_kyokyu_8';
import { lpgasKyokyu9 } from './lpgas_questions_kyokyu_9';
import { lpgasShohi } from './lpgas_questions_shohi';
import { lpgasShohi2 } from './lpgas_questions_shohi_2';
import { lpgasShohi3 } from './lpgas_questions_shohi_3';
import { lpgasShohi4 } from './lpgas_questions_shohi_4';
import { lpgasShohi5 } from './lpgas_questions_shohi_5';
import { lpgasShohi6 } from './lpgas_questions_shohi_6';
import { lpgasShohi7 } from './lpgas_questions_shohi_7';
import { lpgasShohi8 } from './lpgas_questions_shohi_8';
import { lpgasShohi9 } from './lpgas_questions_shohi_9';
import { lpgasHorei } from './lpgas_questions_horei';
import { lpgasHorei2 } from './lpgas_questions_horei_2';
import { lpgasHorei3 } from './lpgas_questions_horei_3';
import { lpgasHorei4 } from './lpgas_questions_horei_4';
import { lpgasHorei5 } from './lpgas_questions_horei_5';
import { lpgasHorei6 } from './lpgas_questions_horei_6';
import { lpgasHorei7 } from './lpgas_questions_horei_7';
import { lpgasHorei8 } from './lpgas_questions_horei_8';
import { lpgasHorei9 } from './lpgas_questions_horei_9';

const rawLpgasQuestions: LpgasQuestion[] = [
  ...lpgasKiso,
  ...lpgasKiso2,
  ...lpgasKiso3,
  ...lpgasKiso4,
  ...lpgasKiso5,
  ...lpgasKiso6,
  ...lpgasKiso7,
  ...lpgasKiso8,
  ...lpgasKiso9,
  ...lpgasNensho,
  ...lpgasNensho2,
  ...lpgasNensho3,
  ...lpgasNensho4,
  ...lpgasNensho5,
  ...lpgasNensho6,
  ...lpgasNensho7,
  ...lpgasNensho8,
  ...lpgasNensho9,
  ...lpgasKyokyu,
  ...lpgasKyokyu2,
  ...lpgasKyokyu3,
  ...lpgasKyokyu4,
  ...lpgasKyokyu5,
  ...lpgasKyokyu6,
  ...lpgasKyokyu7,
  ...lpgasKyokyu8,
  ...lpgasKyokyu9,
  ...lpgasShohi,
  ...lpgasShohi2,
  ...lpgasShohi3,
  ...lpgasShohi4,
  ...lpgasShohi5,
  ...lpgasShohi6,
  ...lpgasShohi7,
  ...lpgasShohi8,
  ...lpgasShohi9,
  ...lpgasHorei,
  ...lpgasHorei2,
  ...lpgasHorei3,
  ...lpgasHorei4,
  ...lpgasHorei5,
  ...lpgasHorei6,
  ...lpgasHorei7,
  ...lpgasHorei8,
  ...lpgasHorei9,
];

// 正解キーが偏ると「Dを選ぶだけ」で点が取れてしまうため、決定的に分散させる
export const lpgasQuestions: LpgasQuestion[] = balanceAnswerKeys(rawLpgasQuestions);

export function getLpgasQuestions(subject: string): LpgasQuestion[] {
  return lpgasQuestions.filter(q => q.subject === subject);
}
