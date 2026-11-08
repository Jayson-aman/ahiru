export type Ikkyu1Question = {
  id: string;
  /** 学科試験5科目 */
  subject: 'keikaku' | 'kankyo' | 'hoki' | 'kozo' | 'sekou';
  subjectName: string;
  question: string;
  choices: { key: 'A' | 'B' | 'C' | 'D'; text: string; explanation: string }[];
  correctKey: 'A' | 'B' | 'C' | 'D';
  explanation: string;
  difficulty: 'basic' | 'standard' | 'advanced';
  examYear?: string;
};

import { balanceAnswerKeys } from './_balance';

import { ikkyu1Keikaku } from './ikkyu1_questions_keikaku';
import { ikkyu1Kankyo } from './ikkyu1_questions_kankyo';
import { ikkyu1Hoki } from './ikkyu1_questions_hoki';
import { ikkyu1Kozo } from './ikkyu1_questions_kozo';
import { ikkyu1Sekou } from './ikkyu1_questions_sekou';

const rawIkkyu1Questions: Ikkyu1Question[] = [
  ...ikkyu1Keikaku,
  ...ikkyu1Kankyo,
  ...ikkyu1Hoki,
  ...ikkyu1Kozo,
  ...ikkyu1Sekou,
];

// 正解キーが偏ると「Dを選ぶだけ」で点が取れてしまうため、決定的に分散させる
export const ikkyu1Questions: Ikkyu1Question[] = balanceAnswerKeys(rawIkkyu1Questions);

export function getIkkyu1Questions(subject: string): Ikkyu1Question[] {
  return ikkyu1Questions.filter(q => q.subject === subject);
}
