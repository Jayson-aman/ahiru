export type TsushinTextSection = {
  id: string;
  title: string;
  emoji: string;
  body: string;
};

/**
 * 1級電気通信工事施工管理技士の4科目。
 *  kogaku … 電気通信工学（電気理論・通信理論・情報工学）
 *  setsubi … 電気通信設備（有線・無線・ネットワーク・放送・情報設備）
 *  kanri  … 施工管理法（施工計画・工程・品質・安全）
 *  hoki   … 法規（建設業法・電気通信事業法・電波法ほか）
 */
export type TsushinTextChapter = {
  subject: 'kogaku' | 'setsubi' | 'kanri' | 'hoki';
  sections: TsushinTextSection[];
};

import { tsushinTextKogaku } from './tsushin_text_kogaku';
import { tsushinTextSetsubi } from './tsushin_text_setsubi';
import { tsushinTextKanri } from './tsushin_text_kanri';
import { tsushinTextHoki } from './tsushin_text_hoki';

export const tsushinTextbook: TsushinTextChapter[] = [
  ...tsushinTextKogaku,
  ...tsushinTextSetsubi,
  ...tsushinTextKanri,
  ...tsushinTextHoki,
];

export function getTsushinText(subject: string): TsushinTextSection[] {
  // 同じ科目の章が複数ファイルに分かれるため、find ではなく filter で
  // 全章を連結する（増補分の取りこぼしを防ぐ）
  return tsushinTextbook
    .filter(c => c.subject === subject)
    .flatMap(c => c.sections);
}
