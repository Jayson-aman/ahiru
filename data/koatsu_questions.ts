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
];

// 正解キーが偏ると「Dを選ぶだけ」で点が取れてしまうため、決定的に分散させる
export const koatsuQuestions: KoatsuQuestion[] = balanceAnswerKeys(rawKoatsuQuestions);

export function getKoatsuQuestions(subject: string): KoatsuQuestion[] {
  return koatsuQuestions.filter(q => q.subject === subject);
}
