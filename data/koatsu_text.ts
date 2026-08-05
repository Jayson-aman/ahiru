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
import { koatsuTextHorei } from './koatsu_text_horei';
import { koatsuTextGakushikiKa } from './koatsu_text_gakushiki_ka';
import { koatsuTextGakushikiKi } from './koatsu_text_gakushiki_ki';

export const koatsuTextbook: KoatsuTextChapter[] = [
  ...koatsuTextHoan,
  ...koatsuTextHorei,
  ...koatsuTextGakushikiKa,
  ...koatsuTextGakushikiKi,
];

export function getKoatsuText(subject: string): KoatsuTextSection[] {
  return koatsuTextbook
    .filter(c => c.subject === subject)
    .flatMap(c => c.sections);
}
