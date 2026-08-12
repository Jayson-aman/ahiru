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
import { lpgasTextKiso4 } from './lpgas_text_kiso_4';
import { lpgasTextKiso5 } from './lpgas_text_kiso_5';
import { lpgasTextKiso6 } from './lpgas_text_kiso_6';
import { lpgasTextKiso7 } from './lpgas_text_kiso_7';
import { lpgasTextKiso8 } from './lpgas_text_kiso_8';
import { lpgasTextKiso9 } from './lpgas_text_kiso_9';
import { lpgasTextKiso10 } from './lpgas_text_kiso_10';
import { lpgasTextKiso11 } from './lpgas_text_kiso_11';
import { lpgasTextKiso12 } from './lpgas_text_kiso_12';
import { lpgasTextKiso13 } from './lpgas_text_kiso_13';
import { lpgasTextKiso14 } from './lpgas_text_kiso_14';
import { lpgasTextKiso15 } from './lpgas_text_kiso_15';
import { lpgasTextKiso16 } from './lpgas_text_kiso_16';
import { lpgasTextKiso17 } from './lpgas_text_kiso_17';
import { lpgasTextNensho } from './lpgas_text_nensho';
import { lpgasTextNensho2 } from './lpgas_text_nensho_2';
import { lpgasTextNensho3 } from './lpgas_text_nensho_3';
import { lpgasTextNensho4 } from './lpgas_text_nensho_4';
import { lpgasTextNensho5 } from './lpgas_text_nensho_5';
import { lpgasTextNensho6 } from './lpgas_text_nensho_6';
import { lpgasTextNensho7 } from './lpgas_text_nensho_7';
import { lpgasTextNensho8 } from './lpgas_text_nensho_8';
import { lpgasTextNensho9 } from './lpgas_text_nensho_9';
import { lpgasTextNensho10 } from './lpgas_text_nensho_10';
import { lpgasTextNensho11 } from './lpgas_text_nensho_11';
import { lpgasTextNensho12 } from './lpgas_text_nensho_12';
import { lpgasTextNensho13 } from './lpgas_text_nensho_13';
import { lpgasTextNensho14 } from './lpgas_text_nensho_14';
import { lpgasTextNensho15 } from './lpgas_text_nensho_15';
import { lpgasTextNensho16 } from './lpgas_text_nensho_16';
import { lpgasTextNensho17 } from './lpgas_text_nensho_17';
import { lpgasTextKyokyu } from './lpgas_text_kyokyu';
import { lpgasTextKyokyu2 } from './lpgas_text_kyokyu_2';
import { lpgasTextKyokyu3 } from './lpgas_text_kyokyu_3';
import { lpgasTextKyokyu4 } from './lpgas_text_kyokyu_4';
import { lpgasTextKyokyu5 } from './lpgas_text_kyokyu_5';
import { lpgasTextKyokyu6 } from './lpgas_text_kyokyu_6';
import { lpgasTextKyokyu7 } from './lpgas_text_kyokyu_7';
import { lpgasTextKyokyu8 } from './lpgas_text_kyokyu_8';
import { lpgasTextKyokyu9 } from './lpgas_text_kyokyu_9';
import { lpgasTextKyokyu10 } from './lpgas_text_kyokyu_10';
import { lpgasTextKyokyu11 } from './lpgas_text_kyokyu_11';
import { lpgasTextKyokyu12 } from './lpgas_text_kyokyu_12';
import { lpgasTextKyokyu13 } from './lpgas_text_kyokyu_13';
import { lpgasTextKyokyu14 } from './lpgas_text_kyokyu_14';
import { lpgasTextKyokyu15 } from './lpgas_text_kyokyu_15';
import { lpgasTextKyokyu16 } from './lpgas_text_kyokyu_16';
import { lpgasTextKyokyu17 } from './lpgas_text_kyokyu_17';
import { lpgasTextKyokyu18 } from './lpgas_text_kyokyu_18';
import { lpgasTextShohi } from './lpgas_text_shohi';
import { lpgasTextShohi2 } from './lpgas_text_shohi_2';
import { lpgasTextShohi3 } from './lpgas_text_shohi_3';
import { lpgasTextShohi4 } from './lpgas_text_shohi_4';
import { lpgasTextShohi5 } from './lpgas_text_shohi_5';
import { lpgasTextShohi6 } from './lpgas_text_shohi_6';
import { lpgasTextShohi7 } from './lpgas_text_shohi_7';
import { lpgasTextShohi8 } from './lpgas_text_shohi_8';
import { lpgasTextShohi9 } from './lpgas_text_shohi_9';
import { lpgasTextShohi10 } from './lpgas_text_shohi_10';
import { lpgasTextShohi11 } from './lpgas_text_shohi_11';
import { lpgasTextShohi12 } from './lpgas_text_shohi_12';
import { lpgasTextShohi13 } from './lpgas_text_shohi_13';
import { lpgasTextShohi14 } from './lpgas_text_shohi_14';
import { lpgasTextShohi15 } from './lpgas_text_shohi_15';
import { lpgasTextShohi16 } from './lpgas_text_shohi_16';
import { lpgasTextShohi17 } from './lpgas_text_shohi_17';
import { lpgasTextShohi18 } from './lpgas_text_shohi_18';
import { lpgasTextHorei } from './lpgas_text_horei';
import { lpgasTextHorei2 } from './lpgas_text_horei_2';
import { lpgasTextHorei3 } from './lpgas_text_horei_3';
import { lpgasTextHorei4 } from './lpgas_text_horei_4';
import { lpgasTextHorei5 } from './lpgas_text_horei_5';
import { lpgasTextHorei6 } from './lpgas_text_horei_6';
import { lpgasTextHorei7 } from './lpgas_text_horei_7';
import { lpgasTextHorei8 } from './lpgas_text_horei_8';
import { lpgasTextHorei9 } from './lpgas_text_horei_9';
import { lpgasTextHorei10 } from './lpgas_text_horei_10';
import { lpgasTextHorei11 } from './lpgas_text_horei_11';
import { lpgasTextHorei12 } from './lpgas_text_horei_12';
import { lpgasTextHorei13 } from './lpgas_text_horei_13';
import { lpgasTextHorei14 } from './lpgas_text_horei_14';
import { lpgasTextHorei15 } from './lpgas_text_horei_15';
import { lpgasTextHorei16 } from './lpgas_text_horei_16';
import { lpgasTextHorei17 } from './lpgas_text_horei_17';

export const lpgasTextbook: LpgasTextChapter[] = [
  ...lpgasTextKiso,
  ...lpgasTextKiso2,
  ...lpgasTextKiso3,
  ...lpgasTextKiso4,
  ...lpgasTextKiso5,
  ...lpgasTextKiso6,
  ...lpgasTextKiso7,
  ...lpgasTextKiso8,
  ...lpgasTextKiso9,
  ...lpgasTextKiso10,
  ...lpgasTextKiso11,
  ...lpgasTextKiso12,
  ...lpgasTextKiso13,
  ...lpgasTextKiso14,
  ...lpgasTextKiso15,
  ...lpgasTextKiso16,
  ...lpgasTextKiso17,
  ...lpgasTextNensho,
  ...lpgasTextNensho2,
  ...lpgasTextNensho3,
  ...lpgasTextNensho4,
  ...lpgasTextNensho5,
  ...lpgasTextNensho6,
  ...lpgasTextNensho7,
  ...lpgasTextNensho8,
  ...lpgasTextNensho9,
  ...lpgasTextNensho10,
  ...lpgasTextNensho11,
  ...lpgasTextNensho12,
  ...lpgasTextNensho13,
  ...lpgasTextNensho14,
  ...lpgasTextNensho15,
  ...lpgasTextNensho16,
  ...lpgasTextNensho17,
  ...lpgasTextKyokyu,
  ...lpgasTextKyokyu2,
  ...lpgasTextKyokyu3,
  ...lpgasTextKyokyu4,
  ...lpgasTextKyokyu5,
  ...lpgasTextKyokyu6,
  ...lpgasTextKyokyu7,
  ...lpgasTextKyokyu8,
  ...lpgasTextKyokyu9,
  ...lpgasTextKyokyu10,
  ...lpgasTextKyokyu11,
  ...lpgasTextKyokyu12,
  ...lpgasTextKyokyu13,
  ...lpgasTextKyokyu14,
  ...lpgasTextKyokyu15,
  ...lpgasTextKyokyu16,
  ...lpgasTextKyokyu17,
  ...lpgasTextKyokyu18,
  ...lpgasTextShohi,
  ...lpgasTextShohi2,
  ...lpgasTextShohi3,
  ...lpgasTextShohi4,
  ...lpgasTextShohi5,
  ...lpgasTextShohi6,
  ...lpgasTextShohi7,
  ...lpgasTextShohi8,
  ...lpgasTextShohi9,
  ...lpgasTextShohi10,
  ...lpgasTextShohi11,
  ...lpgasTextShohi12,
  ...lpgasTextShohi13,
  ...lpgasTextShohi14,
  ...lpgasTextShohi15,
  ...lpgasTextShohi16,
  ...lpgasTextShohi17,
  ...lpgasTextShohi18,
  ...lpgasTextHorei,
  ...lpgasTextHorei2,
  ...lpgasTextHorei3,
  ...lpgasTextHorei4,
  ...lpgasTextHorei5,
  ...lpgasTextHorei6,
  ...lpgasTextHorei7,
  ...lpgasTextHorei8,
  ...lpgasTextHorei9,
  ...lpgasTextHorei10,
  ...lpgasTextHorei11,
  ...lpgasTextHorei12,
  ...lpgasTextHorei13,
  ...lpgasTextHorei14,
  ...lpgasTextHorei15,
  ...lpgasTextHorei16,
  ...lpgasTextHorei17,
];

export function getLpgasText(subject: string): LpgasTextSection[] {
  return lpgasTextbook
    .filter(c => c.subject === subject)
    .flatMap(c => c.sections);
}
