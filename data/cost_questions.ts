export type CostQuestion = {
  id: string;
  subject: 'gairon' | 'sekisan' | 'keiyaku' | 'keizai';
  subjectName: string;
  question: string;
  choices: { key: 'A' | 'B' | 'C' | 'D'; text: string; explanation: string }[];
  correctKey: 'A' | 'B' | 'C' | 'D';
  explanation: string;
  difficulty: 'basic' | 'standard' | 'advanced';
  examYear?: string;
};

import { costGairon1 } from './cost_questions_gairon_1';
import { costSekisan1 } from './cost_questions_sekisan_1';
import { costSekisan2 } from './cost_questions_sekisan_2';
import { costKeiyaku1 } from './cost_questions_keiyaku_1';
import { costKeiyaku2 } from './cost_questions_keiyaku_2';
import { costKeizai1 } from './cost_questions_keizai_1';

export const costQuestions: CostQuestion[] = [
  ...costGairon1,
  ...costSekisan1,
  ...costSekisan2,
  ...costKeiyaku1,
  ...costKeiyaku2,
  ...costKeizai1,
];
