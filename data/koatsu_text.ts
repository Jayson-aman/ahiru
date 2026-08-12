export type KoatsuTextSection = {
  id: string;
  title: string;
  emoji: string;
  body: string;
};

/**
 * 高圧ガス製造保安責任者の4科目。
 *  hoan          … 保安管理技術（共通）
 *  horei         … 法令（共通）
 *  gakushiki_ka  … 学識（化学）
 *  gakushiki_ki  … 学識（機械）
 */
export type KoatsuTextChapter = {
  subject: 'hoan' | 'horei' | 'gakushiki_ka' | 'gakushiki_ki';
  sections: KoatsuTextSection[];
};

import { koatsuTextHoan } from './koatsu_text_hoan';
import { koatsuTextHoan2 } from './koatsu_text_hoan_2';
import { koatsuTextHoan3 } from './koatsu_text_hoan_3';
import { koatsuTextHoan4 } from './koatsu_text_hoan_4';
import { koatsuTextHoan5 } from './koatsu_text_hoan_5';
import { koatsuTextHoan6 } from './koatsu_text_hoan_6';
import { koatsuTextHoan7 } from './koatsu_text_hoan_7';
import { koatsuTextHoan8 } from './koatsu_text_hoan_8';
import { koatsuTextHoan9 } from './koatsu_text_hoan_9';
import { koatsuTextHoan10 } from './koatsu_text_hoan_10';
import { koatsuTextHoan11 } from './koatsu_text_hoan_11';
import { koatsuTextHoan12 } from './koatsu_text_hoan_12';
import { koatsuTextHoan13 } from './koatsu_text_hoan_13';
import { koatsuTextHoan14 } from './koatsu_text_hoan_14';
import { koatsuTextHoan15 } from './koatsu_text_hoan_15';
import { koatsuTextHoan16 } from './koatsu_text_hoan_16';
import { koatsuTextHoan17 } from './koatsu_text_hoan_17';
import { koatsuTextHoan18 } from './koatsu_text_hoan_18';
import { koatsuTextHoan19 } from './koatsu_text_hoan_19';
import { koatsuTextHorei } from './koatsu_text_horei';
import { koatsuTextHorei2 } from './koatsu_text_horei_2';
import { koatsuTextHorei3 } from './koatsu_text_horei_3';
import { koatsuTextHorei4 } from './koatsu_text_horei_4';
import { koatsuTextHorei5 } from './koatsu_text_horei_5';
import { koatsuTextHorei6 } from './koatsu_text_horei_6';
import { koatsuTextHorei7 } from './koatsu_text_horei_7';
import { koatsuTextHorei8 } from './koatsu_text_horei_8';
import { koatsuTextHorei9 } from './koatsu_text_horei_9';
import { koatsuTextHorei10 } from './koatsu_text_horei_10';
import { koatsuTextHorei11 } from './koatsu_text_horei_11';
import { koatsuTextHorei12 } from './koatsu_text_horei_12';
import { koatsuTextHorei13 } from './koatsu_text_horei_13';
import { koatsuTextHorei14 } from './koatsu_text_horei_14';
import { koatsuTextHorei15 } from './koatsu_text_horei_15';
import { koatsuTextHorei16 } from './koatsu_text_horei_16';
import { koatsuTextHorei17 } from './koatsu_text_horei_17';
import { koatsuTextHorei18 } from './koatsu_text_horei_18';
import { koatsuTextHorei19 } from './koatsu_text_horei_19';
import { koatsuTextGakushikiKa } from './koatsu_text_gakushiki_ka';
import { koatsuTextGakushikiKa2 } from './koatsu_text_gakushiki_ka_2';
import { koatsuTextGakushikiKa3 } from './koatsu_text_gakushiki_ka_3';
import { koatsuTextGakushikiKa4 } from './koatsu_text_gakushiki_ka_4';
import { koatsuTextGakushikiKa5 } from './koatsu_text_gakushiki_ka_5';
import { koatsuTextGakushikiKa6 } from './koatsu_text_gakushiki_ka_6';
import { koatsuTextGakushikiKa7 } from './koatsu_text_gakushiki_ka_7';
import { koatsuTextGakushikiKa8 } from './koatsu_text_gakushiki_ka_8';
import { koatsuTextGakushikiKa9 } from './koatsu_text_gakushiki_ka_9';
import { koatsuTextGakushikiKa10 } from './koatsu_text_gakushiki_ka_10';
import { koatsuTextGakushikiKa11 } from './koatsu_text_gakushiki_ka_11';
import { koatsuTextGakushikiKa12 } from './koatsu_text_gakushiki_ka_12';
import { koatsuTextGakushikiKa13 } from './koatsu_text_gakushiki_ka_13';
import { koatsuTextGakushikiKa14 } from './koatsu_text_gakushiki_ka_14';
import { koatsuTextGakushikiKa15 } from './koatsu_text_gakushiki_ka_15';
import { koatsuTextGakushikiKa16 } from './koatsu_text_gakushiki_ka_16';
import { koatsuTextGakushikiKa17 } from './koatsu_text_gakushiki_ka_17';
import { koatsuTextGakushikiKa18 } from './koatsu_text_gakushiki_ka_18';
import { koatsuTextGakushikiKa19 } from './koatsu_text_gakushiki_ka_19';
import { koatsuTextGakushikiKi } from './koatsu_text_gakushiki_ki';
import { koatsuTextGakushikiKi2 } from './koatsu_text_gakushiki_ki_2';
import { koatsuTextGakushikiKi3 } from './koatsu_text_gakushiki_ki_3';
import { koatsuTextGakushikiKi4 } from './koatsu_text_gakushiki_ki_4';
import { koatsuTextGakushikiKi5 } from './koatsu_text_gakushiki_ki_5';
import { koatsuTextGakushikiKi6 } from './koatsu_text_gakushiki_ki_6';
import { koatsuTextGakushikiKi7 } from './koatsu_text_gakushiki_ki_7';
import { koatsuTextGakushikiKi8 } from './koatsu_text_gakushiki_ki_8';
import { koatsuTextGakushikiKi9 } from './koatsu_text_gakushiki_ki_9';
import { koatsuTextGakushikiKi10 } from './koatsu_text_gakushiki_ki_10';
import { koatsuTextGakushikiKi11 } from './koatsu_text_gakushiki_ki_11';
import { koatsuTextGakushikiKi12 } from './koatsu_text_gakushiki_ki_12';
import { koatsuTextGakushikiKi13 } from './koatsu_text_gakushiki_ki_13';
import { koatsuTextGakushikiKi14 } from './koatsu_text_gakushiki_ki_14';
import { koatsuTextGakushikiKi15 } from './koatsu_text_gakushiki_ki_15';
import { koatsuTextGakushikiKi16 } from './koatsu_text_gakushiki_ki_16';
import { koatsuTextGakushikiKi17 } from './koatsu_text_gakushiki_ki_17';
import { koatsuTextGakushikiKi18 } from './koatsu_text_gakushiki_ki_18';
import { koatsuTextGakushikiKi19 } from './koatsu_text_gakushiki_ki_19';

export const koatsuTextbook: KoatsuTextChapter[] = [
  ...koatsuTextHoan,
  ...koatsuTextHoan2,
  ...koatsuTextHoan3,
  ...koatsuTextHoan4,
  ...koatsuTextHoan5,
  ...koatsuTextHoan6,
  ...koatsuTextHoan7,
  ...koatsuTextHoan8,
  ...koatsuTextHoan9,
  ...koatsuTextHoan10,
  ...koatsuTextHoan11,
  ...koatsuTextHoan12,
  ...koatsuTextHoan13,
  ...koatsuTextHoan14,
  ...koatsuTextHoan15,
  ...koatsuTextHoan16,
  ...koatsuTextHoan17,
  ...koatsuTextHoan18,
  ...koatsuTextHoan19,
  ...koatsuTextHorei,
  ...koatsuTextHorei2,
  ...koatsuTextHorei3,
  ...koatsuTextHorei4,
  ...koatsuTextHorei5,
  ...koatsuTextHorei6,
  ...koatsuTextHorei7,
  ...koatsuTextHorei8,
  ...koatsuTextHorei9,
  ...koatsuTextHorei10,
  ...koatsuTextHorei11,
  ...koatsuTextHorei12,
  ...koatsuTextHorei13,
  ...koatsuTextHorei14,
  ...koatsuTextHorei15,
  ...koatsuTextHorei16,
  ...koatsuTextHorei17,
  ...koatsuTextHorei18,
  ...koatsuTextHorei19,
  ...koatsuTextGakushikiKa,
  ...koatsuTextGakushikiKa2,
  ...koatsuTextGakushikiKa3,
  ...koatsuTextGakushikiKa4,
  ...koatsuTextGakushikiKa5,
  ...koatsuTextGakushikiKa6,
  ...koatsuTextGakushikiKa7,
  ...koatsuTextGakushikiKa8,
  ...koatsuTextGakushikiKa9,
  ...koatsuTextGakushikiKa10,
  ...koatsuTextGakushikiKa11,
  ...koatsuTextGakushikiKa12,
  ...koatsuTextGakushikiKa13,
  ...koatsuTextGakushikiKa14,
  ...koatsuTextGakushikiKa15,
  ...koatsuTextGakushikiKa16,
  ...koatsuTextGakushikiKa17,
  ...koatsuTextGakushikiKa18,
  ...koatsuTextGakushikiKa19,
  ...koatsuTextGakushikiKi,
  ...koatsuTextGakushikiKi2,
  ...koatsuTextGakushikiKi3,
  ...koatsuTextGakushikiKi4,
  ...koatsuTextGakushikiKi5,
  ...koatsuTextGakushikiKi6,
  ...koatsuTextGakushikiKi7,
  ...koatsuTextGakushikiKi8,
  ...koatsuTextGakushikiKi9,
  ...koatsuTextGakushikiKi10,
  ...koatsuTextGakushikiKi11,
  ...koatsuTextGakushikiKi12,
  ...koatsuTextGakushikiKi13,
  ...koatsuTextGakushikiKi14,
  ...koatsuTextGakushikiKi15,
  ...koatsuTextGakushikiKi16,
  ...koatsuTextGakushikiKi17,
  ...koatsuTextGakushikiKi18,
  ...koatsuTextGakushikiKi19,
];

export function getKoatsuText(subject: string): KoatsuTextSection[] {
  return koatsuTextbook
    .filter(c => c.subject === subject)
    .flatMap(c => c.sections);
}
