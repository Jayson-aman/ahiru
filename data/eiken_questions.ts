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
import { eikenQuestions4kyu2 } from './eiken_questions_4kyu2';
import { eikenQuestions3kyu } from './eiken_questions_3kyu';
import { eikenQuestions3kyu2 } from './eiken_questions_3kyu2';
import { eikenQuestions2kyu } from './eiken_questions_2kyu';
import { eikenQuestions2kyu2 } from './eiken_questions_2kyu2';
import { eikenQuestions4kyu3 } from './eiken_questions_4kyu3';
import { eikenQuestions3kyu3 } from './eiken_questions_3kyu3';
import { eikenQuestions2kyu3 } from './eiken_questions_2kyu3';

export const eikenQuestions: EikenQuestion[] = [
  ...eikenQuestions4kyu,
  ...eikenQuestions4kyu2,
  ...eikenQuestions4kyu3,
  ...eikenQuestions3kyu,
  ...eikenQuestions3kyu2,
  ...eikenQuestions3kyu3,
  ...eikenQuestions2kyu,
  ...eikenQuestions2kyu2,
  ...eikenQuestions2kyu3,
];
