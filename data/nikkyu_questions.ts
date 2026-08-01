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

import { nikkyuKeikakuHoki } from './nikkyu_questions_keikaku_hoki';
import { nikkyuKozoSekou } from './nikkyu_questions_kozo_sekou';

const rawNikkyuQuestions: NikkyuQuestion[] = [
  ...nikkyuKeikakuHoki,
  ...nikkyuKozoSekou,
];

// 正解キーが偏ると「Dを選ぶだけ」で点が取れてしまうため、決定的に分散させる
export const nikkyuQuestions: NikkyuQuestion[] = balanceAnswerKeys(rawNikkyuQuestions);

export function getNikkyuQuestions(subject: string): NikkyuQuestion[] {
  return nikkyuQuestions.filter(q => q.subject === subject);
}
