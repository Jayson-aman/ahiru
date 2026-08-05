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
import { koatsuHorei } from './koatsu_questions_horei';
import { koatsuGakushikiKa } from './koatsu_questions_gakushiki_ka';
import { koatsuGakushikiKi } from './koatsu_questions_gakushiki_ki';

const rawKoatsuQuestions: KoatsuQuestion[] = [
  ...koatsuHoan,
  ...koatsuHorei,
  ...koatsuGakushikiKa,
  ...koatsuGakushikiKi,
];

// 正解キーが偏ると「Dを選ぶだけ」で点が取れてしまうため、決定的に分散させる
export const koatsuQuestions: KoatsuQuestion[] = balanceAnswerKeys(rawKoatsuQuestions);

export function getKoatsuQuestions(subject: string): KoatsuQuestion[] {
  return koatsuQuestions.filter(q => q.subject === subject);
}
