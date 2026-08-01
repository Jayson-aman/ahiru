export type Denki2Question = {
  id: string;
  /** 筆記試験4科目 */
  subject: 'riron' | 'haisen' | 'kiki' | 'hoki';
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
const rawDenki2Questions: Denki2Question[] = [
];

// 正解キーが偏ると「Dを選ぶだけ」で点が取れてしまうため、決定的に分散させる
export const denki2Questions: Denki2Question[] = balanceAnswerKeys(rawDenki2Questions);

export function getDenki2Questions(subject: string): Denki2Question[] {
  return denki2Questions.filter(q => q.subject === subject);
}
