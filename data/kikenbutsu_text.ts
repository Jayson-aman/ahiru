export type KikenbutsuTextSection = {
  id: string;
  title: string;
  emoji: string;
  body: string;
};

/**
 * 危険物取扱者 乙種第4類の3科目。
 *  horei     … 危険物に関する法令（本試験15問）
 *  butsuri   … 基礎的な物理学及び基礎的な化学（本試験10問）
 *  seishitsu … 危険物の性質並びにその火災予防及び消火の方法（本試験10問）
 */
export type KikenbutsuTextChapter = {
  subject: 'horei' | 'butsuri' | 'seishitsu';
  sections: KikenbutsuTextSection[];
};

import { kikenbutsuTextHoreiA } from './kikenbutsu_text_horei_a';
import { kikenbutsuTextHoreiB } from './kikenbutsu_text_horei_b';
import { kikenbutsuTextButsuriA } from './kikenbutsu_text_butsuri_a';
import { kikenbutsuTextButsuriB } from './kikenbutsu_text_butsuri_b';
import { kikenbutsuTextSeishitsuA } from './kikenbutsu_text_seishitsu_a';
import { kikenbutsuTextSeishitsuB } from './kikenbutsu_text_seishitsu_b';

export const kikenbutsuTextbook: KikenbutsuTextChapter[] = [
  ...kikenbutsuTextHoreiA,
  ...kikenbutsuTextHoreiB,
  ...kikenbutsuTextButsuriA,
  ...kikenbutsuTextButsuriB,
  ...kikenbutsuTextSeishitsuA,
  ...kikenbutsuTextSeishitsuB,
];

export function getKikenbutsuText(subject: string): KikenbutsuTextSection[] {
  // 同じ科目の章が複数ファイルに分かれるため、find ではなく filter で
  // 全章を連結する（増補分の取りこぼしを防ぐ）
  return kikenbutsuTextbook
    .filter(c => c.subject === subject)
    .flatMap(c => c.sections);
}
