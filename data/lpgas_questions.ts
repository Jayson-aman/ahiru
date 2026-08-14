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
import { lpgasKiso10 } from './lpgas_questions_kiso_10';
import { lpgasKiso11 } from './lpgas_questions_kiso_11';
import { lpgasKiso12 } from './lpgas_questions_kiso_12';
import { lpgasKiso13 } from './lpgas_questions_kiso_13';
import { lpgasKiso14 } from './lpgas_questions_kiso_14';
import { lpgasKiso15 } from './lpgas_questions_kiso_15';
import { lpgasKiso16 } from './lpgas_questions_kiso_16';
import { lpgasKiso17 } from './lpgas_questions_kiso_17';
import { lpgasKiso18 } from './lpgas_questions_kiso_18';
import { lpgasKiso19 } from './lpgas_questions_kiso_19';
import { lpgasKiso20 } from './lpgas_questions_kiso_20';
import { lpgasKiso21 } from './lpgas_questions_kiso_21';
import { lpgasKiso22 } from './lpgas_questions_kiso_22';
import { lpgasNensho } from './lpgas_questions_nensho';
import { lpgasNensho2 } from './lpgas_questions_nensho_2';
import { lpgasNensho3 } from './lpgas_questions_nensho_3';
import { lpgasNensho4 } from './lpgas_questions_nensho_4';
import { lpgasNensho5 } from './lpgas_questions_nensho_5';
import { lpgasNensho6 } from './lpgas_questions_nensho_6';
import { lpgasNensho7 } from './lpgas_questions_nensho_7';
import { lpgasNensho8 } from './lpgas_questions_nensho_8';
import { lpgasNensho9 } from './lpgas_questions_nensho_9';
import { lpgasNensho10 } from './lpgas_questions_nensho_10';
import { lpgasNensho11 } from './lpgas_questions_nensho_11';
import { lpgasNensho12 } from './lpgas_questions_nensho_12';
import { lpgasNensho13 } from './lpgas_questions_nensho_13';
import { lpgasNensho14 } from './lpgas_questions_nensho_14';
import { lpgasNensho15 } from './lpgas_questions_nensho_15';
import { lpgasNensho16 } from './lpgas_questions_nensho_16';
import { lpgasNensho17 } from './lpgas_questions_nensho_17';
import { lpgasNensho18 } from './lpgas_questions_nensho_18';
import { lpgasNensho19 } from './lpgas_questions_nensho_19';
import { lpgasNensho20 } from './lpgas_questions_nensho_20';
import { lpgasNensho21 } from './lpgas_questions_nensho_21';
import { lpgasNensho22 } from './lpgas_questions_nensho_22';
import { lpgasKyokyu } from './lpgas_questions_kyokyu';
import { lpgasKyokyu2 } from './lpgas_questions_kyokyu_2';
import { lpgasKyokyu3 } from './lpgas_questions_kyokyu_3';
import { lpgasKyokyu4 } from './lpgas_questions_kyokyu_4';
import { lpgasKyokyu5 } from './lpgas_questions_kyokyu_5';
import { lpgasKyokyu6 } from './lpgas_questions_kyokyu_6';
import { lpgasKyokyu7 } from './lpgas_questions_kyokyu_7';
import { lpgasKyokyu8 } from './lpgas_questions_kyokyu_8';
import { lpgasKyokyu9 } from './lpgas_questions_kyokyu_9';
import { lpgasKyokyu10 } from './lpgas_questions_kyokyu_10';
import { lpgasKyokyu11 } from './lpgas_questions_kyokyu_11';
import { lpgasKyokyu12 } from './lpgas_questions_kyokyu_12';
import { lpgasKyokyu13 } from './lpgas_questions_kyokyu_13';
import { lpgasKyokyu14 } from './lpgas_questions_kyokyu_14';
import { lpgasKyokyu15 } from './lpgas_questions_kyokyu_15';
import { lpgasKyokyu16 } from './lpgas_questions_kyokyu_16';
import { lpgasKyokyu17 } from './lpgas_questions_kyokyu_17';
import { lpgasKyokyu18 } from './lpgas_questions_kyokyu_18';
import { lpgasKyokyu19 } from './lpgas_questions_kyokyu_19';
import { lpgasKyokyu20 } from './lpgas_questions_kyokyu_20';
import { lpgasKyokyu21 } from './lpgas_questions_kyokyu_21';
import { lpgasKyokyu22 } from './lpgas_questions_kyokyu_22';
import { lpgasShohi } from './lpgas_questions_shohi';
import { lpgasShohi2 } from './lpgas_questions_shohi_2';
import { lpgasShohi3 } from './lpgas_questions_shohi_3';
import { lpgasShohi4 } from './lpgas_questions_shohi_4';
import { lpgasShohi5 } from './lpgas_questions_shohi_5';
import { lpgasShohi6 } from './lpgas_questions_shohi_6';
import { lpgasShohi7 } from './lpgas_questions_shohi_7';
import { lpgasShohi8 } from './lpgas_questions_shohi_8';
import { lpgasShohi9 } from './lpgas_questions_shohi_9';
import { lpgasShohi10 } from './lpgas_questions_shohi_10';
import { lpgasShohi11 } from './lpgas_questions_shohi_11';
import { lpgasShohi12 } from './lpgas_questions_shohi_12';
import { lpgasShohi13 } from './lpgas_questions_shohi_13';
import { lpgasShohi14 } from './lpgas_questions_shohi_14';
import { lpgasShohi15 } from './lpgas_questions_shohi_15';
import { lpgasShohi16 } from './lpgas_questions_shohi_16';
import { lpgasShohi17 } from './lpgas_questions_shohi_17';
import { lpgasShohi18 } from './lpgas_questions_shohi_18';
import { lpgasShohi19 } from './lpgas_questions_shohi_19';
import { lpgasShohi20 } from './lpgas_questions_shohi_20';
import { lpgasShohi21 } from './lpgas_questions_shohi_21';
import { lpgasShohi22 } from './lpgas_questions_shohi_22';
import { lpgasHorei } from './lpgas_questions_horei';
import { lpgasHorei2 } from './lpgas_questions_horei_2';
import { lpgasHorei3 } from './lpgas_questions_horei_3';
import { lpgasHorei4 } from './lpgas_questions_horei_4';
import { lpgasHorei5 } from './lpgas_questions_horei_5';
import { lpgasHorei6 } from './lpgas_questions_horei_6';
import { lpgasHorei7 } from './lpgas_questions_horei_7';
import { lpgasHorei8 } from './lpgas_questions_horei_8';
import { lpgasHorei9 } from './lpgas_questions_horei_9';
import { lpgasHorei10 } from './lpgas_questions_horei_10';
import { lpgasHorei11 } from './lpgas_questions_horei_11';
import { lpgasHorei12 } from './lpgas_questions_horei_12';
import { lpgasHorei13 } from './lpgas_questions_horei_13';
import { lpgasHorei14 } from './lpgas_questions_horei_14';
import { lpgasHorei15 } from './lpgas_questions_horei_15';
import { lpgasHorei16 } from './lpgas_questions_horei_16';
import { lpgasHorei17 } from './lpgas_questions_horei_17';
import { lpgasHorei18 } from './lpgas_questions_horei_18';
import { lpgasHorei19 } from './lpgas_questions_horei_19';
import { lpgasHorei20 } from './lpgas_questions_horei_20';
import { lpgasHorei21 } from './lpgas_questions_horei_21';
import { lpgasHorei22 } from './lpgas_questions_horei_22';

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
  ...lpgasKiso10,
  ...lpgasKiso11,
  ...lpgasKiso12,
  ...lpgasKiso13,
  ...lpgasKiso14,
  ...lpgasKiso15,
  ...lpgasKiso16,
  ...lpgasKiso17,
  ...lpgasKiso18,
  ...lpgasKiso19,
  ...lpgasKiso20,
  ...lpgasKiso21,
  ...lpgasKiso22,
  ...lpgasNensho,
  ...lpgasNensho2,
  ...lpgasNensho3,
  ...lpgasNensho4,
  ...lpgasNensho5,
  ...lpgasNensho6,
  ...lpgasNensho7,
  ...lpgasNensho8,
  ...lpgasNensho9,
  ...lpgasNensho10,
  ...lpgasNensho11,
  ...lpgasNensho12,
  ...lpgasNensho13,
  ...lpgasNensho14,
  ...lpgasNensho15,
  ...lpgasNensho16,
  ...lpgasNensho17,
  ...lpgasNensho18,
  ...lpgasNensho19,
  ...lpgasNensho20,
  ...lpgasNensho21,
  ...lpgasNensho22,
  ...lpgasKyokyu,
  ...lpgasKyokyu2,
  ...lpgasKyokyu3,
  ...lpgasKyokyu4,
  ...lpgasKyokyu5,
  ...lpgasKyokyu6,
  ...lpgasKyokyu7,
  ...lpgasKyokyu8,
  ...lpgasKyokyu9,
  ...lpgasKyokyu10,
  ...lpgasKyokyu11,
  ...lpgasKyokyu12,
  ...lpgasKyokyu13,
  ...lpgasKyokyu14,
  ...lpgasKyokyu15,
  ...lpgasKyokyu16,
  ...lpgasKyokyu17,
  ...lpgasKyokyu18,
  ...lpgasKyokyu19,
  ...lpgasKyokyu20,
  ...lpgasKyokyu21,
  ...lpgasKyokyu22,
  ...lpgasShohi,
  ...lpgasShohi2,
  ...lpgasShohi3,
  ...lpgasShohi4,
  ...lpgasShohi5,
  ...lpgasShohi6,
  ...lpgasShohi7,
  ...lpgasShohi8,
  ...lpgasShohi9,
  ...lpgasShohi10,
  ...lpgasShohi11,
  ...lpgasShohi12,
  ...lpgasShohi13,
  ...lpgasShohi14,
  ...lpgasShohi15,
  ...lpgasShohi16,
  ...lpgasShohi17,
  ...lpgasShohi18,
  ...lpgasShohi19,
  ...lpgasShohi20,
  ...lpgasShohi21,
  ...lpgasShohi22,
  ...lpgasHorei,
  ...lpgasHorei2,
  ...lpgasHorei3,
  ...lpgasHorei4,
  ...lpgasHorei5,
  ...lpgasHorei6,
  ...lpgasHorei7,
  ...lpgasHorei8,
  ...lpgasHorei9,
  ...lpgasHorei10,
  ...lpgasHorei11,
  ...lpgasHorei12,
  ...lpgasHorei13,
  ...lpgasHorei14,
  ...lpgasHorei15,
  ...lpgasHorei16,
  ...lpgasHorei17,
  ...lpgasHorei18,
  ...lpgasHorei19,
  ...lpgasHorei20,
  ...lpgasHorei21,
  ...lpgasHorei22,
];

// 正解キーが偏ると「Dを選ぶだけ」で点が取れてしまうため、決定的に分散させる
export const lpgasQuestions: LpgasQuestion[] = balanceAnswerKeys(rawLpgasQuestions);

export function getLpgasQuestions(subject: string): LpgasQuestion[] {
  return lpgasQuestions.filter(q => q.subject === subject);
}
