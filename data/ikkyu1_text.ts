export type Ikkyu1TextSection = {
  id: string;
  title: string;
  emoji: string;
  body: string;
};

/**
 * 一級建築士 学科試験の5科目。
 *  keikaku … 建築計画（各種建築物の計画・建築史・都市計画・バリアフリー等）
 *  kankyo  … 環境・設備（環境工学・建築設備）
 *  hoki    … 建築法規（建築基準法・関係法令。法令集の持込みが認められる）
 *  kozo    … 建築構造（構造力学・各種構造・建築材料）
 *  sekou   … 建築施工（各種工事・施工管理・積算・契約）
 */
export type Ikkyu1TextChapter = {
  subject: 'keikaku' | 'kankyo' | 'hoki' | 'kozo' | 'sekou';
  sections: Ikkyu1TextSection[];
};

import { ikkyu1TextKeikaku } from './ikkyu1_text_keikaku';
import { ikkyu1TextKankyo } from './ikkyu1_text_kankyo';
import { ikkyu1TextHoki } from './ikkyu1_text_hoki';
import { ikkyu1TextKozo } from './ikkyu1_text_kozo';
import { ikkyu1TextSekou } from './ikkyu1_text_sekou';

export const ikkyu1Textbook: Ikkyu1TextChapter[] = [
  ...ikkyu1TextKeikaku,
  ...ikkyu1TextKankyo,
  ...ikkyu1TextHoki,
  ...ikkyu1TextKozo,
  ...ikkyu1TextSekou,
];

export function getIkkyu1Text(subject: string): Ikkyu1TextSection[] {
  return ikkyu1Textbook
    .filter(c => c.subject === subject)
    .flatMap(c => c.sections);
}
