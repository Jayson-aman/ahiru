export type TsushinQuestion = {
  id: string;
  /** 本試験4科目 */
  subject: 'kogaku' | 'setsubi' | 'kanri' | 'hoki';
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
const rawTsushinQuestions: TsushinQuestion[] = [
];

// 正解キーが偏ると「Dを選ぶだけ」で点が取れてしまうため、決定的に分散させる
export const tsushinQuestions: TsushinQuestion[] = balanceAnswerKeys(rawTsushinQuestions);

export function getTsushinQuestions(subject: string): TsushinQuestion[] {
  return tsushinQuestions.filter(q => q.subject === subject);
}
