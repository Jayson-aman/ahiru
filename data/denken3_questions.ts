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
import { denken3Rikigaku2 } from './denken3_questions_rikigaku2';
import { denken3Denryoku } from './denken3_questions_denryoku';
import { denken3Denryoku2 } from './denken3_questions_denryoku2';
import { denken3Kikai } from './denken3_questions_kikai';
import { denken3Kikai2 } from './denken3_questions_kikai2';
import { denken3Houki } from './denken3_questions_houki';
import { denken3Houki2 } from './denken3_questions_houki2';

export const denken3Questions: Denken3Question[] = [
  ...denken3Rikigaku,
  ...denken3Rikigaku2,
  ...denken3Denryoku,
  ...denken3Denryoku2,
  ...denken3Kikai,
  ...denken3Kikai2,
  ...denken3Houki,
  ...denken3Houki2,
];
