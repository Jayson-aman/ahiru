export type KyusuiQuestion = {
  id: string;
  /** 本試験8科目（学科1: koshu/gyosei/koho/kozo/keikaku/jimu、学科2: gaiyo/sekokan） */
  subject: 'koshu' | 'gyosei' | 'koho' | 'kozo' | 'keikaku' | 'jimu' | 'gaiyo' | 'sekokan';
  subjectName: string;
  question: string;
  choices: { key: 'A' | 'B' | 'C' | 'D'; text: string; explanation: string }[];
  correctKey: 'A' | 'B' | 'C' | 'D';
  explanation: string;
  difficulty: 'basic' | 'standard' | 'advanced';
  examYear?: string;
};

// 執筆完了ぶんから順に結線する。未収録の科目は画面側が「準備中」を表示するため、
// この状態でもアプリは正常に動作する。
import { kyusuiKoho1 } from './kyusui_questions_koho_1';
import { kyusuiKeikaku1 } from './kyusui_questions_keikaku_1';
import { kyusuiKozo1 } from './kyusui_questions_kozo_1';
import { kyusuiGaiyo1 } from './kyusui_questions_gaiyo_1';
import { kyusuiGyosei1 } from './kyusui_questions_gyosei_1';
import { kyusuiSekokan1 } from './kyusui_questions_sekokan_1';
import { kyusuiSekokan2 } from './kyusui_questions_sekokan_2';
import { kyusuiKeikaku2 } from './kyusui_questions_keikaku_2';
import { kyusuiGaiyo2 } from './kyusui_questions_gaiyo_2';
import { kyusuiKozo2 } from './kyusui_questions_kozo_2';
import { kyusuiGyosei2 } from './kyusui_questions_gyosei_2';
import { kyusuiKoho2 } from './kyusui_questions_koho_2';

export const kyusuiQuestions: KyusuiQuestion[] = [
  ...kyusuiKoho1,
  ...kyusuiKeikaku1,
  ...kyusuiKozo1,
  ...kyusuiGaiyo1,
  ...kyusuiGyosei1,
  ...kyusuiSekokan1,
  ...kyusuiSekokan2,
  ...kyusuiKeikaku2,
  ...kyusuiGaiyo2,
  ...kyusuiKozo2,
  ...kyusuiGyosei2,
  ...kyusuiKoho2,
];
