export type NikkyuTextSection = {
  id: string;
  title: string;
  emoji: string;
  body: string;
};

/**
 * 二級建築士 学科試験の4科目。
 *  keikaku … 建築計画（環境工学・各種建築物の計画・建築史・設備）
 *  hoki    … 建築法規（建築基準法・関係法令）
 *  kozo    … 建築構造（構造力学・各種構造・建築材料）
 *  sekou   … 建築施工（各種工事・施工管理・積算・契約）
 */
export type NikkyuTextChapter = {
  subject: 'keikaku' | 'hoki' | 'kozo' | 'sekou';
  sections: NikkyuTextSection[];
};

// 執筆完了ぶんから順に結線する。未収録の科目は画面側が「テキスト作成中」を
// 表示するため、この状態でもアプリは正常に動作する。
export const nikkyuTextbook: NikkyuTextChapter[] = [
];

export function getNikkyuText(subject: string): NikkyuTextSection[] {
  // 同じ科目の章が複数ファイルに分かれるため、find ではなく filter で
  // 全章を連結する（増補分の取りこぼしを防ぐ）
  return nikkyuTextbook
    .filter(c => c.subject === subject)
    .flatMap(c => c.sections);
}
