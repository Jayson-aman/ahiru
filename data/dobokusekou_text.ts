export type DobokusekouTextSection = {
  id: string;
  title: string;
  emoji: string;
  body: string;
};

export type DobokusekouTextChapter = {
  subject: 'doboku' | 'senmon' | 'kanri' | 'hoki';
  sections: DobokusekouTextSection[];
};

import { dobokusekouTextPart1 } from './dobokusekou_text_part1';
import { dobokusekouTextDobokuA } from './dobokusekou_text_doboku_a';
import { dobokusekouTextDobokuB } from './dobokusekou_text_doboku_b';
import { dobokusekouTextSenmonA } from './dobokusekou_text_senmon_a';
import { dobokusekouTextSenmonB } from './dobokusekou_text_senmon_b';
import { dobokusekouTextKanriA } from './dobokusekou_text_kanri_a';
import { dobokusekouTextKanriB } from './dobokusekou_text_kanri_b';
import { dobokusekouTextHokiA } from './dobokusekou_text_hoki_a';
import { dobokusekouTextHokiB } from './dobokusekou_text_hoki_b';

export const dobokusekouTextbook: DobokusekouTextChapter[] = [
  ...dobokusekouTextPart1,
  ...dobokusekouTextDobokuA,
  ...dobokusekouTextDobokuB,
  ...dobokusekouTextSenmonA,
  ...dobokusekouTextSenmonB,
  ...dobokusekouTextKanriA,
  ...dobokusekouTextKanriB,
  ...dobokusekouTextHokiA,
  ...dobokusekouTextHokiB,
];

export function getDobokusekouText(subject: string): DobokusekouTextSection[] {
  // 同じ科目の章が複数ファイルに分かれるため、find ではなく filter で
  // 全章を連結する（増補分の取りこぼしを防ぐ）
  return dobokusekouTextbook
    .filter(c => c.subject === subject)
    .flatMap(c => c.sections);
}
