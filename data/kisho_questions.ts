export type KishoQuestion = {
  id: string;
  subject: 'gakka1' | 'gakka2' | 'jitsumu';
  subjectName: string;
  question: string;
  choices: { key: 'A' | 'B' | 'C' | 'D'; text: string; explanation: string }[];
  correctKey: 'A' | 'B' | 'C' | 'D';
  explanation: string;
  difficulty: 'basic' | 'standard' | 'advanced';
  examYear?: string;
};

import { kishoGakka1 } from './kisho_questions_gakka1';
import { kishoGakka2 } from './kisho_questions_gakka2';
import { kishoJitsumu } from './kisho_questions_jitsumu';
import { kishoGakka1_2 } from './kisho_questions_gakka1_2';
import { kishoGakka2_2 } from './kisho_questions_gakka2_2';
import { kishoJitsumu_2 } from './kisho_questions_jitsumu_2';
import { kishoGakka1_3 } from './kisho_questions_gakka1_3';

export const kishoQuestions: KishoQuestion[] = [
  ...kishoGakka1,
  ...kishoGakka2,
  ...kishoJitsumu,
  ...kishoGakka1_2,
  ...kishoGakka2_2,
  ...kishoJitsumu_2,
  ...kishoGakka1_3,
];
