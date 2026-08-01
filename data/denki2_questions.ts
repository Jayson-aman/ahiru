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

import { denki2RironHaisen } from './denki2_questions_riron_haisen';
import { denki2KikiHoki } from './denki2_questions_kiki_hoki';

const rawDenki2Questions: Denki2Question[] = [
  ...denki2RironHaisen,
  ...denki2KikiHoki,
];

// 正解キーが偏ると「Dを選ぶだけ」で点が取れてしまうため、決定的に分散させる
export const denki2Questions: Denki2Question[] = balanceAnswerKeys(rawDenki2Questions);

export function getDenki2Questions(subject: string): Denki2Question[] {
  return denki2Questions.filter(q => q.subject === subject);
}
