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
import { takkeiKenri3 } from './takkei_questions_kenri_3';
import { takkeiKenri4 } from './takkei_questions_kenri_4';
import { takkeiGyoho1 } from './takkei_questions_gyoho_1';
import { takkeiGyoho2 } from './takkei_questions_gyoho_2';
import { takkeiGyoho3 } from './takkei_questions_gyoho_3';
import { takkeiGyoho4 } from './takkei_questions_gyoho_4';
import { takkeiHorei } from './takkei_questions_horei';
import { takkeiHorei2 } from './takkei_questions_horei2';
import { takkeiHorei3 } from './takkei_questions_horei3';
import { takkeiZei } from './takkei_questions_zei';
import { takkeiQuestionsZei2 } from './takkei_questions_zei2';
import { takkeiZei3 } from './takkei_questions_zei3';

export const takkeiQuestions: TakkeiQuestion[] = [
  ...takkeiKenri1,
  ...takkeiKenri2,
  ...takkeiKenri3,
  ...takkeiKenri4,
  ...takkeiGyoho1,
  ...takkeiGyoho2,
  ...takkeiGyoho3,
  ...takkeiGyoho4,
  ...takkeiHorei,
  ...takkeiHorei2,
  ...takkeiHorei3,
  ...takkeiZei,
  ...takkeiQuestionsZei2,
  ...takkeiZei3,
];
