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
import { lpgasTextKiso2 } from './lpgas_text_kiso_2';
import { lpgasTextKiso3 } from './lpgas_text_kiso_3';
import { lpgasTextNensho } from './lpgas_text_nensho';
import { lpgasTextNensho2 } from './lpgas_text_nensho_2';
import { lpgasTextNensho3 } from './lpgas_text_nensho_3';
import { lpgasTextKyokyu } from './lpgas_text_kyokyu';
import { lpgasTextKyokyu2 } from './lpgas_text_kyokyu_2';
import { lpgasTextKyokyu3 } from './lpgas_text_kyokyu_3';
import { lpgasTextShohi } from './lpgas_text_shohi';
import { lpgasTextShohi2 } from './lpgas_text_shohi_2';
import { lpgasTextShohi3 } from './lpgas_text_shohi_3';
import { lpgasTextHorei } from './lpgas_text_horei';
import { lpgasTextHorei2 } from './lpgas_text_horei_2';
import { lpgasTextHorei3 } from './lpgas_text_horei_3';

export const lpgasTextbook: LpgasTextChapter[] = [
  ...lpgasTextKiso,
  ...lpgasTextKiso2,
  ...lpgasTextKiso3,
  ...lpgasTextNensho,
  ...lpgasTextNensho2,
  ...lpgasTextNensho3,
  ...lpgasTextKyokyu,
  ...lpgasTextKyokyu2,
  ...lpgasTextKyokyu3,
  ...lpgasTextShohi,
  ...lpgasTextShohi2,
  ...lpgasTextShohi3,
  ...lpgasTextHorei,
  ...lpgasTextHorei2,
  ...lpgasTextHorei3,
];

export function getLpgasText(subject: string): LpgasTextSection[] {
  return lpgasTextbook
    .filter(c => c.subject === subject)
    .flatMap(c => c.sections);
}
