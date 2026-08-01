export type NikkyuQuestion = {
  id: string;
  /** 学科試験4科目 */
  subject: 'keikaku' | 'hoki' | 'kozo' | 'sekou';
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
const rawNikkyuQuestions: NikkyuQuestion[] = [
];

// 正解キーが偏ると「Dを選ぶだけ」で点が取れてしまうため、決定的に分散させる
export const nikkyuQuestions: NikkyuQuestion[] = balanceAnswerKeys(rawNikkyuQuestions);

export function getNikkyuQuestions(subject: string): NikkyuQuestion[] {
  return nikkyuQuestions.filter(q => q.subject === subject);
}
