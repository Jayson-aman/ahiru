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
import { costGairon2 } from './cost_questions_gairon_2';
import { costSekisan1 } from './cost_questions_sekisan_1';
import { costSekisan2 } from './cost_questions_sekisan_2';
import { costSekisan3 } from './cost_questions_sekisan_3';
import { costKeiyaku1 } from './cost_questions_keiyaku_1';
import { costKeiyaku2 } from './cost_questions_keiyaku_2';
import { costKeiyaku3 } from './cost_questions_keiyaku_3';
import { costKeizai1 } from './cost_questions_keizai_1';
import { costKeizai2 } from './cost_questions_keizai_2';
import { costKeiyaku4 } from './cost_questions_keiyaku_4';
import { costSekisan4 } from './cost_questions_sekisan_4';

export const costQuestions: CostQuestion[] = [
  ...costGairon1,
  ...costGairon2,
  ...costSekisan1,
  ...costSekisan2,
  ...costSekisan3,
  ...costSekisan4,
  ...costKeiyaku1,
  ...costKeiyaku2,
  ...costKeiyaku3,
  ...costKeiyaku4,
  ...costKeizai1,
  ...costKeizai2,
];
