export type ConcreteQuestion = {
  id: string;
  /** 本試験6科目 */
  subject: 'zairyo' | 'haigo' | 'seizo' | 'sekou' | 'kakushu' | 'shindan';
  subjectName: string;
  question: string;
  choices: { key: 'A' | 'B' | 'C' | 'D'; text: string; explanation: string }[];
  correctKey: 'A' | 'B' | 'C' | 'D';
  explanation: string;
  difficulty: 'basic' | 'standard' | 'advanced';
  examYear?: string;
};

import { balanceAnswerKeys } from './_balance';

import { concreteZairyoHaigo } from './concrete_questions_zairyo_haigo';
import { concreteSeizoSekou } from './concrete_questions_seizo_sekou';
import { concreteKakushuShindan } from './concrete_questions_kakushu_shindan';

const rawConcreteQuestions: ConcreteQuestion[] = [
  ...concreteZairyoHaigo,
  ...concreteSeizoSekou,
  ...concreteKakushuShindan,
];

// 正解キーが偏ると「Dを選ぶだけ」で点が取れてしまうため、決定的に分散させる
export const concreteQuestions: ConcreteQuestion[] = balanceAnswerKeys(rawConcreteQuestions);

export function getConcreteQuestions(subject: string): ConcreteQuestion[] {
  return concreteQuestions.filter(q => q.subject === subject);
}
