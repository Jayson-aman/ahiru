export type KikenbutsuQuestion = {
  id: string;
  /** 本試験3科目 */
  subject: 'horei' | 'butsuri' | 'seishitsu';
  subjectName: string;
  question: string;
  choices: { key: 'A' | 'B' | 'C' | 'D'; text: string; explanation: string }[];
  correctKey: 'A' | 'B' | 'C' | 'D';
  explanation: string;
  difficulty: 'basic' | 'standard' | 'advanced';
  examYear?: string;
};

import { balanceAnswerKeys } from './_balance';

import { kikenbutsuHorei1 } from './kikenbutsu_questions_horei_1';
import { kikenbutsuHorei2 } from './kikenbutsu_questions_horei_2';
import { kikenbutsuButsuri } from './kikenbutsu_questions_butsuri';
import { kikenbutsuSeishitsu } from './kikenbutsu_questions_seishitsu';

const rawKikenbutsuQuestions: KikenbutsuQuestion[] = [
  ...kikenbutsuHorei1,
  ...kikenbutsuHorei2,
  ...kikenbutsuButsuri,
  ...kikenbutsuSeishitsu,
];

// 正解キーが偏ると「Dを選ぶだけ」で点が取れてしまうため、決定的に分散させる
export const kikenbutsuQuestions: KikenbutsuQuestion[] = balanceAnswerKeys(rawKikenbutsuQuestions);

export function getKikenbutsuQuestions(subject: string): KikenbutsuQuestion[] {
  return kikenbutsuQuestions.filter(q => q.subject === subject);
}
