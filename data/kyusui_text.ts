export type KyusuiTextSection = {
  id: string;
  title: string;
  emoji: string;
  body: string;
};

export type KyusuiTextChapter = {
  subject: 'koshu' | 'gyosei' | 'koho' | 'kozo' | 'keikaku' | 'jimu' | 'gaiyo' | 'sekokan';
  sections: KyusuiTextSection[];
};

// 執筆完了ぶんから順に結線する（part1〜3）。未収録の科目は画面側が
// 「テキスト作成中」を表示するため、この状態でもアプリは正常に動作する。
import { kyusuiTextPart1 } from './kyusui_text_part1';
import { kyusuiTextPart2 } from './kyusui_text_part2';
import { kyusuiTextPart3 } from './kyusui_text_part3';

export const kyusuiTextbook: KyusuiTextChapter[] = [
  ...kyusuiTextPart1,
  ...kyusuiTextPart2,
  ...kyusuiTextPart3,
];

/**
 * 指定科目のセクションを返す。
 * 同じ科目の章が複数ファイルに分かれても取りこぼさないよう filter + flatMap を使う。
 */
export function getKyusuiText(subject: string): KyusuiTextSection[] {
  return kyusuiTextbook
    .filter(c => c.subject === subject)
    .flatMap(c => c.sections);
}
