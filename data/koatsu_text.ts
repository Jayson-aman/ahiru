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
import { koatsuTextHorei } from './koatsu_text_horei';
import { koatsuTextHorei2 } from './koatsu_text_horei_2';
import { koatsuTextGakushikiKa } from './koatsu_text_gakushiki_ka';
import { koatsuTextGakushikiKa2 } from './koatsu_text_gakushiki_ka_2';
import { koatsuTextGakushikiKi } from './koatsu_text_gakushiki_ki';
import { koatsuTextGakushikiKi2 } from './koatsu_text_gakushiki_ki_2';

export const koatsuTextbook: KoatsuTextChapter[] = [
  ...koatsuTextHoan,
  ...koatsuTextHoan2,
  ...koatsuTextHorei,
  ...koatsuTextHorei2,
  ...koatsuTextGakushikiKa,
  ...koatsuTextGakushikiKa2,
  ...koatsuTextGakushikiKi,
  ...koatsuTextGakushikiKi2,
];

export function getKoatsuText(subject: string): KoatsuTextSection[] {
  return koatsuTextbook
    .filter(c => c.subject === subject)
    .flatMap(c => c.sections);
}
