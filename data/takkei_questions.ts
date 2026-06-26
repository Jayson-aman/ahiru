export type TakkeiQuestion = {
  id: string;
  subject: 'kenri' | 'gyoho' | 'horei' | 'zei';
  subjectName: string;
  question: string;
  choices: { key: 'A' | 'B' | 'C' | 'D'; text: string; explanation: string }[];
  correctKey: 'A' | 'B' | 'C' | 'D';
  explanation: string;
  difficulty: 'basic' | 'standard' | 'advanced';
  examYear?: string;
};

import { takkeiKenri1 } from './takkei_questions_kenri_1';
import { takkeiKenri2 } from './takkei_questions_kenri_2';
import { takkeiGyoho1 } from './takkei_questions_gyoho_1';
import { takkeiGyoho2 } from './takkei_questions_gyoho_2';
import { takkeiHorei } from './takkei_questions_horei';
import { takkeiHorei2 } from './takkei_questions_horei2';
import { takkeiZei } from './takkei_questions_zei';
import { takkeiQuestionsZei2 } from './takkei_questions_zei2';

export const takkeiQuestions: TakkeiQuestion[] = [
  ...takkeiKenri1,
  ...takkeiKenri2,
  ...takkeiGyoho1,
  ...takkeiGyoho2,
  ...takkeiHorei,
  ...takkeiHorei2,
  ...takkeiZei,
  ...takkeiQuestionsZei2,
];
