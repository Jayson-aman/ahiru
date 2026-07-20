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
import { mansionKiyaku2 } from './mansion_questions_kiyaku2';
import { mansionKubunsho2 } from './mansion_questions_kubunsho2';
import { mansionKubunsho3 } from './mansion_questions_kubunsho3';
import { mansionTekiseika2 } from './mansion_questions_tekiseika2';
import { mansionKiyaku3 } from './mansion_questions_kiyaku3';
import { mansionMinpo2 } from './mansion_questions_minpo2';
import { mansionSetsubi2 } from './mansion_questions_setsubi2';
import { mansionUnei2 } from './mansion_questions_unei2';

export const mansionQuestions: MansionQuestion[] = [
  ...mansionKubunsho,
  ...mansionKubunsho2,
  ...mansionKubunsho3,
  ...mansionTekiseika,
  ...mansionTekiseika2,
  ...mansionKiyaku,
  ...mansionKiyaku2,
  ...mansionKiyaku3,
  ...mansionMinpo,
  ...mansionMinpo2,
  ...mansionSetsubi,
  ...mansionSetsubi2,
  ...mansionUnei,
  ...mansionUnei2,
];
