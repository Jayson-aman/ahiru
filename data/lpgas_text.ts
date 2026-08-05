export type LpgasTextSection = {
  id: string;
  title: string;
  emoji: string;
  body: string;
};

/**
 * 液化石油ガス設備士の5科目。
 *  kiso    … 基礎的な物理学的性質及び化学的性質
 *  nensho  … 燃焼工学に関する知識
 *  kyokyu  … 供給設備に関する知識
 *  shohi   … 消費設備に関する知識
 *  horei   … 関係法令
 */
export type LpgasTextChapter = {
  subject: 'kiso' | 'nensho' | 'kyokyu' | 'shohi' | 'horei';
  sections: LpgasTextSection[];
};

import { lpgasTextKiso } from './lpgas_text_kiso';
import { lpgasTextNensho } from './lpgas_text_nensho';
import { lpgasTextKyokyu } from './lpgas_text_kyokyu';
import { lpgasTextShohi } from './lpgas_text_shohi';
import { lpgasTextHorei } from './lpgas_text_horei';

export const lpgasTextbook: LpgasTextChapter[] = [
  ...lpgasTextKiso,
  ...lpgasTextNensho,
  ...lpgasTextKyokyu,
  ...lpgasTextShohi,
  ...lpgasTextHorei,
];

export function getLpgasText(subject: string): LpgasTextSection[] {
  return lpgasTextbook
    .filter(c => c.subject === subject)
    .flatMap(c => c.sections);
}
