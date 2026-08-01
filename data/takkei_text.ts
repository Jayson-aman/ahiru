export type TakkeiTextSection = {
  id: string;
  title: string;
  emoji: string;
  body: string;
};

export type TakkeiTextChapter = {
  subject: 'kenri' | 'gyoho' | 'horei' | 'zei';
  sections: TakkeiTextSection[];
};

import { takkeiTextPart1 } from './takkei_text_part1';
import { takkeiTextKenri } from './takkei_text_kenri';
import { takkeiTextGyoho } from './takkei_text_gyoho';
import { takkeiTextHorei } from './takkei_text_horei';
import { takkeiTextZei } from './takkei_text_zei';

export const takkeiTextbook: TakkeiTextChapter[] = [
  ...takkeiTextPart1,
  ...takkeiTextKenri,
  ...takkeiTextGyoho,
  ...takkeiTextHorei,
  ...takkeiTextZei,
];

export function getTakkeiText(subject: string): TakkeiTextSection[] {
  // 同じ科目の章が複数ファイルに分かれるため、find ではなく filter で
  // 全章を連結する（増補分の取りこぼしを防ぐ）
  return takkeiTextbook
    .filter(c => c.subject === subject)
    .flatMap(c => c.sections);
}
