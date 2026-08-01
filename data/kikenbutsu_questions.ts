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

// 執筆完了ぶんから順に結線する。未収録の科目は画面側が「準備中」を表示するため、
// この状態でもアプリは正常に動作する。
const rawKikenbutsuQuestions: KikenbutsuQuestion[] = [
];

// 正解キーが偏ると「Dを選ぶだけ」で点が取れてしまうため、決定的に分散させる
export const kikenbutsuQuestions: KikenbutsuQuestion[] = balanceAnswerKeys(rawKikenbutsuQuestions);

export function getKikenbutsuQuestions(subject: string): KikenbutsuQuestion[] {
  return kikenbutsuQuestions.filter(q => q.subject === subject);
}
