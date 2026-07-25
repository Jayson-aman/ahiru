export type CostTextSection = {
  id: string;
  title: string;
  emoji: string;
  body: string;
};

export type CostTextChapter = {
  subject: 'gairon' | 'sekisan' | 'keiyaku' | 'keizai';
  sections: CostTextSection[];
};

import { costTextPart1 } from './cost_text_part1';

// TODO: 契約・法規(keiyaku) / 経済調査・価格(keizai) のテキストは執筆中。
// 完成後に cost_text_part2 を import して下の配列に追加する。
// 未収録の科目は画面側が「テキスト作成中」と表示するため、この状態でも正常に動作する。
export const costTextbook: CostTextChapter[] = [
  ...costTextPart1,
];

export function getCostText(subject: string): CostTextSection[] {
  return costTextbook.find(c => c.subject === subject)?.sections ?? [];
}
