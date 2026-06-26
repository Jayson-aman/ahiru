export type EikenLevel = '2kyu' | '3kyu' | '4kyu';

export type EikenCategory =
  | 'vocabulary'
  | 'grammar'
  | 'dialogue'
  | 'reading'
  | 'usage';

export type EikenQuestion = {
  id: string;
  level: EikenLevel;
  category: EikenCategory;
  question: string;
  choices: { key: 'A' | 'B' | 'C' | 'D'; text: string }[];
  correctKey: 'A' | 'B' | 'C' | 'D';
  explanation: string;
  difficulty: 'basic' | 'standard' | 'advanced';
};

import { eikenQuestions4kyu } from './eiken_questions_4kyu';
import { eikenQuestions3kyu } from './eiken_questions_3kyu';
import { eikenQuestions2kyu } from './eiken_questions_2kyu';

export const eikenQuestions: EikenQuestion[] = [
  ...eikenQuestions4kyu,
  ...eikenQuestions3kyu,
  ...eikenQuestions2kyu,
];
