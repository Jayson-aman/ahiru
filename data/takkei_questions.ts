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
import { takkeiKenri5 } from './takkei_questions_kenri_5';
import { takkeiGyoho1 } from './takkei_questions_gyoho_1';
import { takkeiGyoho2 } from './takkei_questions_gyoho_2';
import { takkeiGyoho3 } from './takkei_questions_gyoho_3';
import { takkeiGyoho4 } from './takkei_questions_gyoho_4';
import { takkeiGyoho5 } from './takkei_questions_gyoho_5';
import { takkeiHorei } from './takkei_questions_horei';
import { takkeiHorei2 } from './takkei_questions_horei2';
import { takkeiHorei3 } from './takkei_questions_horei3';
import { takkeiHorei4 } from './takkei_questions_horei4';
import { takkeiHorei5 } from './takkei_questions_horei5';
import { takkeiHorei6 } from './takkei_questions_horei6';
import { takkeiZei } from './takkei_questions_zei';
import { takkeiQuestionsZei2 } from './takkei_questions_zei2';
import { takkeiZei3 } from './takkei_questions_zei3';
import { takkeiZei4 } from './takkei_questions_zei4';
import { takkeiZei5 } from './takkei_questions_zei5';
import { takkeiZei6 } from './takkei_questions_zei6';

export const takkeiQuestions: TakkeiQuestion[] = [
  ...takkeiKenri1,
  ...takkeiKenri2,
  ...takkeiKenri3,
  ...takkeiKenri4,
  ...takkeiKenri5,
  ...takkeiGyoho1,
  ...takkeiGyoho2,
  ...takkeiGyoho3,
  ...takkeiGyoho4,
  ...takkeiGyoho5,
  ...takkeiHorei,
  ...takkeiHorei2,
  ...takkeiHorei3,
  ...takkeiHorei4,
  ...takkeiHorei5,
  ...takkeiHorei6,
  ...takkeiZei,
  ...takkeiQuestionsZei2,
  ...takkeiZei3,
  ...takkeiZei4,
  ...takkeiZei5,
  ...takkeiZei6,
];
