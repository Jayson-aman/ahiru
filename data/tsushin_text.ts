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

// 執筆完了ぶんから順に結線する。未収録の科目は画面側が「テキスト作成中」を
// 表示するため、この状態でもアプリは正常に動作する。
export const tsushinTextbook: TsushinTextChapter[] = [
];

export function getTsushinText(subject: string): TsushinTextSection[] {
  // 同じ科目の章が複数ファイルに分かれるため、find ではなく filter で
  // 全章を連結する（増補分の取りこぼしを防ぐ）
  return tsushinTextbook
    .filter(c => c.subject === subject)
    .flatMap(c => c.sections);
}
