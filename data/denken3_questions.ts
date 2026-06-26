export type Denken3Question = {
  id: string;
  subject: 'rikigaku' | 'denryoku' | 'kikai' | 'houki';
  subjectName: string;
  question: string;
  choices: { key: 'A' | 'B' | 'C' | 'D'; text: string; explanation: string }[];
  correctKey: 'A' | 'B' | 'C' | 'D';
  explanation: string;
  difficulty: 'basic' | 'standard' | 'advanced';
  examYear?: string;
};

import { denken3Rikigaku } from './denken3_questions_rikigaku';
import { denken3Denryoku } from './denken3_questions_denryoku';
import { denken3Kikai } from './denken3_questions_kikai';
import { denken3Houki } from './denken3_questions_houki';

export const denken3Questions: Denken3Question[] = [
  ...denken3Rikigaku,
  ...denken3Denryoku,
  ...denken3Kikai,
  ...denken3Houki,
];
