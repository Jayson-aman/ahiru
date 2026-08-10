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
import { koatsuHorei } from './koatsu_questions_horei';
import { koatsuHorei2 } from './koatsu_questions_horei_2';
import { koatsuHorei3 } from './koatsu_questions_horei_3';
import { koatsuHorei4 } from './koatsu_questions_horei_4';
import { koatsuHorei5 } from './koatsu_questions_horei_5';
import { koatsuHorei6 } from './koatsu_questions_horei_6';
import { koatsuHorei7 } from './koatsu_questions_horei_7';
import { koatsuHorei8 } from './koatsu_questions_horei_8';
import { koatsuHorei9 } from './koatsu_questions_horei_9';
import { koatsuGakushikiKa } from './koatsu_questions_gakushiki_ka';
import { koatsuGakushikiKa2 } from './koatsu_questions_gakushiki_ka_2';
import { koatsuGakushikiKa3 } from './koatsu_questions_gakushiki_ka_3';
import { koatsuGakushikiKa4 } from './koatsu_questions_gakushiki_ka_4';
import { koatsuGakushikiKa5 } from './koatsu_questions_gakushiki_ka_5';
import { koatsuGakushikiKa6 } from './koatsu_questions_gakushiki_ka_6';
import { koatsuGakushikiKa7 } from './koatsu_questions_gakushiki_ka_7';
import { koatsuGakushikiKa8 } from './koatsu_questions_gakushiki_ka_8';
import { koatsuGakushikiKa9 } from './koatsu_questions_gakushiki_ka_9';
import { koatsuGakushikiKi } from './koatsu_questions_gakushiki_ki';
import { koatsuGakushikiKi2 } from './koatsu_questions_gakushiki_ki_2';
import { koatsuGakushikiKi3 } from './koatsu_questions_gakushiki_ki_3';
import { koatsuGakushikiKi4 } from './koatsu_questions_gakushiki_ki_4';
import { koatsuGakushikiKi5 } from './koatsu_questions_gakushiki_ki_5';
import { koatsuGakushikiKi6 } from './koatsu_questions_gakushiki_ki_6';
import { koatsuGakushikiKi7 } from './koatsu_questions_gakushiki_ki_7';
import { koatsuGakushikiKi8 } from './koatsu_questions_gakushiki_ki_8';
import { koatsuGakushikiKi9 } from './koatsu_questions_gakushiki_ki_9';

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
  ...koatsuHorei,
  ...koatsuHorei2,
  ...koatsuHorei3,
  ...koatsuHorei4,
  ...koatsuHorei5,
  ...koatsuHorei6,
  ...koatsuHorei7,
  ...koatsuHorei8,
  ...koatsuHorei9,
  ...koatsuGakushikiKa,
  ...koatsuGakushikiKa2,
  ...koatsuGakushikiKa3,
  ...koatsuGakushikiKa4,
  ...koatsuGakushikiKa5,
  ...koatsuGakushikiKa6,
  ...koatsuGakushikiKa7,
  ...koatsuGakushikiKa8,
  ...koatsuGakushikiKa9,
  ...koatsuGakushikiKi,
  ...koatsuGakushikiKi2,
  ...koatsuGakushikiKi3,
  ...koatsuGakushikiKi4,
  ...koatsuGakushikiKi5,
  ...koatsuGakushikiKi6,
  ...koatsuGakushikiKi7,
  ...koatsuGakushikiKi8,
  ...koatsuGakushikiKi9,
];

// 正解キーが偏ると「Dを選ぶだけ」で点が取れてしまうため、決定的に分散させる
export const koatsuQuestions: KoatsuQuestion[] = balanceAnswerKeys(rawKoatsuQuestions);

export function getKoatsuQuestions(subject: string): KoatsuQuestion[] {
  return koatsuQuestions.filter(q => q.subject === subject);
}
