export type EikenLevel = '2kyu' | '3kyu' | '4kyu';

export type EikenCategory =
  | 'vocabulary'
  | 'grammar'
  | 'dialogue'
  | 'reading'
  | 'usage'
  | 'idiom'
  | 'listening';

export type EikenQuestion = {
  id: string;
  level: EikenLevel;
  category: EikenCategory;
  question: string;
  choices: { key: 'A' | 'B' | 'C' | 'D'; text: string; explanation?: string }[];
  correctKey: 'A' | 'B' | 'C' | 'D';
  explanation: string;
  difficulty: 'basic' | 'standard' | 'advanced';
  /** English audio script read aloud via TTS for listening questions (not shown until after answering). */
  audioScript?: string;
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
import { eikenQuestionsListening } from './eiken_questions_listening';
import { eikenQuestions4kyuIdiom } from './eiken_questions_4kyu_idiom';
import { eikenQuestions3kyuIdiom } from './eiken_questions_3kyu_idiom';
import { eikenQuestions2kyuIdiom } from './eiken_questions_2kyu_idiom';

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
  ...eikenQuestionsListening,
  ...eikenQuestions4kyuIdiom,
  ...eikenQuestions3kyuIdiom,
  ...eikenQuestions2kyuIdiom,
];
