export type KoatsuQuestion = {
  id: string;
  /** 保安管理技術・法令は共通、学識は化学/機械の2系統 */
  subject: 'hoan' | 'horei' | 'gakushiki_ka' | 'gakushiki_ki';
  subjectName: string;
  question: string;
  choices: { key: 'A' | 'B' | 'C' | 'D'; text: string; explanation: string }[];
  correctKey: 'A' | 'B' | 'C' | 'D';
  explanation: string;
  difficulty: 'basic' | 'standard' | 'advanced';
  examYear?: string;
};

import { balanceAnswerKeys } from './_balance';

import { koatsuHoan } from './koatsu_questions_hoan';
import { koatsuHoan2 } from './koatsu_questions_hoan_2';
import { koatsuHoan3 } from './koatsu_questions_hoan_3';
import { koatsuHoan4 } from './koatsu_questions_hoan_4';
import { koatsuHoan5 } from './koatsu_questions_hoan_5';
import { koatsuHoan6 } from './koatsu_questions_hoan_6';
import { koatsuHoan7 } from './koatsu_questions_hoan_7';
import { koatsuHoan8 } from './koatsu_questions_hoan_8';
import { koatsuHoan9 } from './koatsu_questions_hoan_9';
import { koatsuHoan10 } from './koatsu_questions_hoan_10';
import { koatsuHoan11 } from './koatsu_questions_hoan_11';
import { koatsuHoan12 } from './koatsu_questions_hoan_12';
import { koatsuHoan13 } from './koatsu_questions_hoan_13';
import { koatsuHoan14 } from './koatsu_questions_hoan_14';
import { koatsuHoan15 } from './koatsu_questions_hoan_15';
import { koatsuHoan16 } from './koatsu_questions_hoan_16';
import { koatsuHoan17 } from './koatsu_questions_hoan_17';
import { koatsuHoan18 } from './koatsu_questions_hoan_18';
import { koatsuHoan19 } from './koatsu_questions_hoan_19';
import { koatsuHoan20 } from './koatsu_questions_hoan_20';
import { koatsuHoan21 } from './koatsu_questions_hoan_21';
import { koatsuHoan22 } from './koatsu_questions_hoan_22';
import { koatsuHoan23 } from './koatsu_questions_hoan_23';
import { koatsuHoan24 } from './koatsu_questions_hoan_24';
import { koatsuHoan25 } from './koatsu_questions_hoan_25';
import { koatsuHoan26 } from './koatsu_questions_hoan_26';
import { koatsuHoan27 } from './koatsu_questions_hoan_27';
import { koatsuHoan28 } from './koatsu_questions_hoan_28';
import { koatsuHoan29 } from './koatsu_questions_hoan_29';
import { koatsuHoan30 } from './koatsu_questions_hoan_30';
import { koatsuHorei } from './koatsu_questions_horei';
import { koatsuHorei2 } from './koatsu_questions_horei_2';
import { koatsuHorei3 } from './koatsu_questions_horei_3';
import { koatsuHorei4 } from './koatsu_questions_horei_4';
import { koatsuHorei5 } from './koatsu_questions_horei_5';
import { koatsuHorei6 } from './koatsu_questions_horei_6';
import { koatsuHorei7 } from './koatsu_questions_horei_7';
import { koatsuHorei8 } from './koatsu_questions_horei_8';
import { koatsuHorei9 } from './koatsu_questions_horei_9';
import { koatsuHorei10 } from './koatsu_questions_horei_10';
import { koatsuHorei11 } from './koatsu_questions_horei_11';
import { koatsuHorei12 } from './koatsu_questions_horei_12';
import { koatsuHorei13 } from './koatsu_questions_horei_13';
import { koatsuHorei14 } from './koatsu_questions_horei_14';
import { koatsuHorei15 } from './koatsu_questions_horei_15';
import { koatsuHorei16 } from './koatsu_questions_horei_16';
import { koatsuHorei17 } from './koatsu_questions_horei_17';
import { koatsuHorei18 } from './koatsu_questions_horei_18';
import { koatsuHorei19 } from './koatsu_questions_horei_19';
import { koatsuHorei20 } from './koatsu_questions_horei_20';
import { koatsuHorei21 } from './koatsu_questions_horei_21';
import { koatsuHorei22 } from './koatsu_questions_horei_22';
import { koatsuHorei23 } from './koatsu_questions_horei_23';
import { koatsuHorei24 } from './koatsu_questions_horei_24';
import { koatsuHorei25 } from './koatsu_questions_horei_25';
import { koatsuHorei26 } from './koatsu_questions_horei_26';
import { koatsuHorei27 } from './koatsu_questions_horei_27';
import { koatsuHorei28 } from './koatsu_questions_horei_28';
import { koatsuHorei29 } from './koatsu_questions_horei_29';
import { koatsuHorei30 } from './koatsu_questions_horei_30';
import { koatsuGakushikiKa } from './koatsu_questions_gakushiki_ka';
import { koatsuGakushikiKa2 } from './koatsu_questions_gakushiki_ka_2';
import { koatsuGakushikiKa3 } from './koatsu_questions_gakushiki_ka_3';
import { koatsuGakushikiKa4 } from './koatsu_questions_gakushiki_ka_4';
import { koatsuGakushikiKa5 } from './koatsu_questions_gakushiki_ka_5';
import { koatsuGakushikiKa6 } from './koatsu_questions_gakushiki_ka_6';
import { koatsuGakushikiKa7 } from './koatsu_questions_gakushiki_ka_7';
import { koatsuGakushikiKa8 } from './koatsu_questions_gakushiki_ka_8';
import { koatsuGakushikiKa9 } from './koatsu_questions_gakushiki_ka_9';
import { koatsuGakushikiKa10 } from './koatsu_questions_gakushiki_ka_10';
import { koatsuGakushikiKa11 } from './koatsu_questions_gakushiki_ka_11';
import { koatsuGakushikiKa12 } from './koatsu_questions_gakushiki_ka_12';
import { koatsuGakushikiKa13 } from './koatsu_questions_gakushiki_ka_13';
import { koatsuGakushikiKa14 } from './koatsu_questions_gakushiki_ka_14';
import { koatsuGakushikiKa15 } from './koatsu_questions_gakushiki_ka_15';
import { koatsuGakushikiKa16 } from './koatsu_questions_gakushiki_ka_16';
import { koatsuGakushikiKa17 } from './koatsu_questions_gakushiki_ka_17';
import { koatsuGakushikiKa18 } from './koatsu_questions_gakushiki_ka_18';
import { koatsuGakushikiKa19 } from './koatsu_questions_gakushiki_ka_19';
import { koatsuGakushikiKa20 } from './koatsu_questions_gakushiki_ka_20';
import { koatsuGakushikiKa21 } from './koatsu_questions_gakushiki_ka_21';
import { koatsuGakushikiKa22 } from './koatsu_questions_gakushiki_ka_22';
import { koatsuGakushikiKa23 } from './koatsu_questions_gakushiki_ka_23';
import { koatsuGakushikiKa24 } from './koatsu_questions_gakushiki_ka_24';
import { koatsuGakushikiKa25 } from './koatsu_questions_gakushiki_ka_25';
import { koatsuGakushikiKa26 } from './koatsu_questions_gakushiki_ka_26';
import { koatsuGakushikiKa27 } from './koatsu_questions_gakushiki_ka_27';
import { koatsuGakushikiKa28 } from './koatsu_questions_gakushiki_ka_28';
import { koatsuGakushikiKa29 } from './koatsu_questions_gakushiki_ka_29';
import { koatsuGakushikiKa30 } from './koatsu_questions_gakushiki_ka_30';
import { koatsuGakushikiKi } from './koatsu_questions_gakushiki_ki';
import { koatsuGakushikiKi2 } from './koatsu_questions_gakushiki_ki_2';
import { koatsuGakushikiKi3 } from './koatsu_questions_gakushiki_ki_3';
import { koatsuGakushikiKi4 } from './koatsu_questions_gakushiki_ki_4';
import { koatsuGakushikiKi5 } from './koatsu_questions_gakushiki_ki_5';
import { koatsuGakushikiKi6 } from './koatsu_questions_gakushiki_ki_6';
import { koatsuGakushikiKi7 } from './koatsu_questions_gakushiki_ki_7';
import { koatsuGakushikiKi8 } from './koatsu_questions_gakushiki_ki_8';
import { koatsuGakushikiKi9 } from './koatsu_questions_gakushiki_ki_9';
import { koatsuGakushikiKi10 } from './koatsu_questions_gakushiki_ki_10';
import { koatsuGakushikiKi11 } from './koatsu_questions_gakushiki_ki_11';
import { koatsuGakushikiKi12 } from './koatsu_questions_gakushiki_ki_12';
import { koatsuGakushikiKi13 } from './koatsu_questions_gakushiki_ki_13';
import { koatsuGakushikiKi14 } from './koatsu_questions_gakushiki_ki_14';
import { koatsuGakushikiKi15 } from './koatsu_questions_gakushiki_ki_15';
import { koatsuGakushikiKi16 } from './koatsu_questions_gakushiki_ki_16';
import { koatsuGakushikiKi17 } from './koatsu_questions_gakushiki_ki_17';
import { koatsuGakushikiKi18 } from './koatsu_questions_gakushiki_ki_18';
import { koatsuGakushikiKi19 } from './koatsu_questions_gakushiki_ki_19';
import { koatsuGakushikiKi20 } from './koatsu_questions_gakushiki_ki_20';
import { koatsuGakushikiKi21 } from './koatsu_questions_gakushiki_ki_21';
import { koatsuGakushikiKi22 } from './koatsu_questions_gakushiki_ki_22';
import { koatsuGakushikiKi23 } from './koatsu_questions_gakushiki_ki_23';
import { koatsuGakushikiKi24 } from './koatsu_questions_gakushiki_ki_24';
import { koatsuGakushikiKi25 } from './koatsu_questions_gakushiki_ki_25';
import { koatsuGakushikiKi26 } from './koatsu_questions_gakushiki_ki_26';
import { koatsuGakushikiKi27 } from './koatsu_questions_gakushiki_ki_27';
import { koatsuGakushikiKi28 } from './koatsu_questions_gakushiki_ki_28';
import { koatsuGakushikiKi29 } from './koatsu_questions_gakushiki_ki_29';
import { koatsuGakushikiKi30 } from './koatsu_questions_gakushiki_ki_30';
import { koatsuHoan31 } from './koatsu_questions_hoan_31';
import { koatsuHorei31 } from './koatsu_questions_horei_31';
import { koatsuGakushikiKa31 } from './koatsu_questions_gakushiki_ka_31';
import { koatsuGakushikiKi31 } from './koatsu_questions_gakushiki_ki_31';
import { koatsuHoan32 } from './koatsu_questions_hoan_32';
import { koatsuHorei32 } from './koatsu_questions_horei_32';
import { koatsuGakushikiKa32 } from './koatsu_questions_gakushiki_ka_32';
import { koatsuGakushikiKi32 } from './koatsu_questions_gakushiki_ki_32';
import { koatsuHoan33 } from './koatsu_questions_hoan_33';
import { koatsuHorei33 } from './koatsu_questions_horei_33';
import { koatsuGakushikiKa33 } from './koatsu_questions_gakushiki_ka_33';
import { koatsuGakushikiKi33 } from './koatsu_questions_gakushiki_ki_33';

const rawKoatsuQuestions: KoatsuQuestion[] = [
  ...koatsuHoan,
  ...koatsuHoan2,
  ...koatsuHoan3,
  ...koatsuHoan4,
  ...koatsuHoan5,
  ...koatsuHoan6,
  ...koatsuHoan7,
  ...koatsuHoan8,
  ...koatsuHoan9,
  ...koatsuHoan10,
  ...koatsuHoan11,
  ...koatsuHoan12,
  ...koatsuHoan13,
  ...koatsuHoan14,
  ...koatsuHoan15,
  ...koatsuHoan16,
  ...koatsuHoan17,
  ...koatsuHoan18,
  ...koatsuHoan19,
  ...koatsuHoan20,
  ...koatsuHoan21,
  ...koatsuHoan22,
  ...koatsuHoan23,
  ...koatsuHoan24,
  ...koatsuHoan25,
  ...koatsuHoan26,
  ...koatsuHoan27,
  ...koatsuHoan28,
  ...koatsuHoan29,
  ...koatsuHoan30,
  ...koatsuHorei,
  ...koatsuHorei2,
  ...koatsuHorei3,
  ...koatsuHorei4,
  ...koatsuHorei5,
  ...koatsuHorei6,
  ...koatsuHorei7,
  ...koatsuHorei8,
  ...koatsuHorei9,
  ...koatsuHorei10,
  ...koatsuHorei11,
  ...koatsuHorei12,
  ...koatsuHorei13,
  ...koatsuHorei14,
  ...koatsuHorei15,
  ...koatsuHorei16,
  ...koatsuHorei17,
  ...koatsuHorei18,
  ...koatsuHorei19,
  ...koatsuHorei20,
  ...koatsuHorei21,
  ...koatsuHorei22,
  ...koatsuHorei23,
  ...koatsuHorei24,
  ...koatsuHorei25,
  ...koatsuHorei26,
  ...koatsuHorei27,
  ...koatsuHorei28,
  ...koatsuHorei29,
  ...koatsuHorei30,
  ...koatsuGakushikiKa,
  ...koatsuGakushikiKa2,
  ...koatsuGakushikiKa3,
  ...koatsuGakushikiKa4,
  ...koatsuGakushikiKa5,
  ...koatsuGakushikiKa6,
  ...koatsuGakushikiKa7,
  ...koatsuGakushikiKa8,
  ...koatsuGakushikiKa9,
  ...koatsuGakushikiKa10,
  ...koatsuGakushikiKa11,
  ...koatsuGakushikiKa12,
  ...koatsuGakushikiKa13,
  ...koatsuGakushikiKa14,
  ...koatsuGakushikiKa15,
  ...koatsuGakushikiKa16,
  ...koatsuGakushikiKa17,
  ...koatsuGakushikiKa18,
  ...koatsuGakushikiKa19,
  ...koatsuGakushikiKa20,
  ...koatsuGakushikiKa21,
  ...koatsuGakushikiKa22,
  ...koatsuGakushikiKa23,
  ...koatsuGakushikiKa24,
  ...koatsuGakushikiKa25,
  ...koatsuGakushikiKa26,
  ...koatsuGakushikiKa27,
  ...koatsuGakushikiKa28,
  ...koatsuGakushikiKa29,
  ...koatsuGakushikiKa30,
  ...koatsuGakushikiKi,
  ...koatsuGakushikiKi2,
  ...koatsuGakushikiKi3,
  ...koatsuGakushikiKi4,
  ...koatsuGakushikiKi5,
  ...koatsuGakushikiKi6,
  ...koatsuGakushikiKi7,
  ...koatsuGakushikiKi8,
  ...koatsuGakushikiKi9,
  ...koatsuGakushikiKi10,
  ...koatsuGakushikiKi11,
  ...koatsuGakushikiKi12,
  ...koatsuGakushikiKi13,
  ...koatsuGakushikiKi14,
  ...koatsuGakushikiKi15,
  ...koatsuGakushikiKi16,
  ...koatsuGakushikiKi17,
  ...koatsuGakushikiKi18,
  ...koatsuGakushikiKi19,
  ...koatsuGakushikiKi20,
  ...koatsuGakushikiKi21,
  ...koatsuGakushikiKi22,
  ...koatsuGakushikiKi23,
  ...koatsuGakushikiKi24,
  ...koatsuGakushikiKi25,
  ...koatsuGakushikiKi26,
  ...koatsuGakushikiKi27,
  ...koatsuGakushikiKi28,
  ...koatsuGakushikiKi29,
  ...koatsuGakushikiKi30,
  ...koatsuHoan31,
  ...koatsuHorei31,
  ...koatsuGakushikiKa31,
  ...koatsuGakushikiKi31,
  ...koatsuHoan32,
  ...koatsuHorei32,
  ...koatsuGakushikiKa32,
  ...koatsuGakushikiKi32,
  ...koatsuHoan33,
  ...koatsuHorei33,
  ...koatsuGakushikiKa33,
  ...koatsuGakushikiKi33,
];

// 正解キーが偏ると「Dを選ぶだけ」で点が取れてしまうため、決定的に分散させる
export const koatsuQuestions: KoatsuQuestion[] = balanceAnswerKeys(rawKoatsuQuestions);

export function getKoatsuQuestions(subject: string): KoatsuQuestion[] {
  return koatsuQuestions.filter(q => q.subject === subject);
}
