export type ShoboQuestion = {
  id: string;
  /** 甲種の試験科目（筆記: 法令共通/法令類別/基礎的知識/構造機能・規格、実技: 鑑別等・製図） */
  subject:
    | 'horei_kyotsu' | 'horei_rui'
    | 'kiso_kikai' | 'kiso_denki'
    | 'kozo_kikai' | 'kozo_denki' | 'kikaku'
    | 'jitsugi';
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
import { shoboHoreik1 } from './shobo_questions_horeik_1';
import { shoboHoreir1 } from './shobo_questions_horeir_1';
import { shoboKiso1 } from './shobo_questions_kiso_1';
import { shoboKozok1 } from './shobo_questions_kozok_1';
import { shoboKozod1 } from './shobo_questions_kozod_1';
import { shoboKikaku1 } from './shobo_questions_kikaku_1';
import { shoboHoreik2 } from './shobo_questions_horeik_2';
import { shoboKikaku2 } from './shobo_questions_kikaku_2';
import { shoboKozok2 } from './shobo_questions_kozok_2';
import { shoboKiso2 } from './shobo_questions_kiso_2';

export const shoboQuestions: ShoboQuestion[] = [
  ...shoboHoreik1,
  ...shoboHoreir1,
  ...shoboKiso1,
  ...shoboKozok1,
  ...shoboKozod1,
  ...shoboKikaku1,
  ...shoboHoreik2,
  ...shoboKikaku2,
  ...shoboKozok2,
  ...shoboKiso2,
];
