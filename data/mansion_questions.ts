export type MansionQuestion = {
  id: string;
  subject: 'kubunsho' | 'tekiseika' | 'kiyaku' | 'minpo' | 'setsubi' | 'unei';
  subjectName: string;
  question: string;
  choices: { key: 'A' | 'B' | 'C' | 'D'; text: string; explanation: string }[];
  correctKey: 'A' | 'B' | 'C' | 'D';
  explanation: string;
  difficulty: 'basic' | 'standard' | 'advanced';
  examYear?: string;
};

import { mansionKubunsho } from './mansion_questions_kubunsho';
import { mansionTekiseika } from './mansion_questions_tekiseika';
import { mansionKiyaku } from './mansion_questions_kiyaku';
import { mansionMinpo } from './mansion_questions_minpo';
import { mansionSetsubi } from './mansion_questions_setsubi';
import { mansionUnei } from './mansion_questions_unei';

export const mansionQuestions: MansionQuestion[] = [
  ...mansionKubunsho,
  ...mansionTekiseika,
  ...mansionKiyaku,
  ...mansionMinpo,
  ...mansionSetsubi,
  ...mansionUnei,
];
