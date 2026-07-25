export type ShoboTextSection = {
  id: string;
  title: string;
  emoji: string;
  body: string;
};

export type ShoboTextChapter = {
  subject:
    | 'horei_kyotsu' | 'horei_rui'
    | 'kiso_kikai' | 'kiso_denki'
    | 'kozo_kikai' | 'kozo_denki' | 'kikaku'
    | 'jitsugi';
  sections: ShoboTextSection[];
};

// 執筆完了ぶんから順に結線する。未収録の科目は画面側が「テキスト作成中」を表示する。
import { shoboTextPart1 } from './shobo_text_part1';
import { shoboTextPart2 } from './shobo_text_part2';
import { shoboTextPart3 } from './shobo_text_part3';

export const shoboTextbook: ShoboTextChapter[] = [
  ...shoboTextPart1,
  ...shoboTextPart2,
  ...shoboTextPart3,
];

/** 指定科目のセクションを返す（同じ科目の章が複数でも取りこぼさない） */
export function getShoboText(subject: string): ShoboTextSection[] {
  return shoboTextbook
    .filter(c => c.subject === subject)
    .flatMap(c => c.sections);
}
