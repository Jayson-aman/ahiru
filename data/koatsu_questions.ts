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
import { koatsuHorei } from './koatsu_questions_horei';
import { koatsuHorei2 } from './koatsu_questions_horei_2';
import { koatsuHorei3 } from './koatsu_questions_horei_3';
import { koatsuGakushikiKa } from './koatsu_questions_gakushiki_ka';
import { koatsuGakushikiKa2 } from './koatsu_questions_gakushiki_ka_2';
import { koatsuGakushikiKa3 } from './koatsu_questions_gakushiki_ka_3';
import { koatsuGakushikiKi } from './koatsu_questions_gakushiki_ki';
import { koatsuGakushikiKi2 } from './koatsu_questions_gakushiki_ki_2';
import { koatsuGakushikiKi3 } from './koatsu_questions_gakushiki_ki_3';

const rawKoatsuQuestions: KoatsuQuestion[] = [
  ...koatsuHoan,
  ...koatsuHoan2,
  ...koatsuHoan3,
  ...koatsuHorei,
  ...koatsuHorei2,
  ...koatsuHorei3,
  ...koatsuGakushikiKa,
  ...koatsuGakushikiKa2,
  ...koatsuGakushikiKa3,
  ...koatsuGakushikiKi,
  ...koatsuGakushikiKi2,
  ...koatsuGakushikiKi3,
];

// 正解キーが偏ると「Dを選ぶだけ」で点が取れてしまうため、決定的に分散させる
export const koatsuQuestions: KoatsuQuestion[] = balanceAnswerKeys(rawKoatsuQuestions);

export function getKoatsuQuestions(subject: string): KoatsuQuestion[] {
  return koatsuQuestions.filter(q => q.subject === subject);
}
