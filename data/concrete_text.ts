export type ConcreteTextSection = {
  id: string;
  title: string;
  emoji: string;
  body: string;
};

/**
 * コンクリート技士・診断士の6科目。
 *  zairyo  … コンクリート用材料（セメント・骨材・混和材料・水）
 *  haigo   … 配合設計とコンクリートの性質
 *  seizo   … 製造・品質管理・試験検査
 *  sekou   … 施工（運搬・打込み・締固め・養生・型枠）
 *  kakushu … 各種コンクリート（寒中・暑中・マス・高強度ほか）
 *  shindan … 劣化機構・診断・補修補強（診断士範囲）
 */
export type ConcreteTextChapter = {
  subject: 'zairyo' | 'haigo' | 'seizo' | 'sekou' | 'kakushu' | 'shindan';
  sections: ConcreteTextSection[];
};

import { concreteTextZairyo } from './concrete_text_zairyo';
import { concreteTextHaigo } from './concrete_text_haigo';
import { concreteTextSeizo } from './concrete_text_seizo';
import { concreteTextSekou } from './concrete_text_sekou';
import { concreteTextKakushu } from './concrete_text_kakushu';
import { concreteTextShindan } from './concrete_text_shindan';

export const concreteTextbook: ConcreteTextChapter[] = [
  ...concreteTextZairyo,
  ...concreteTextHaigo,
  ...concreteTextSeizo,
  ...concreteTextSekou,
  ...concreteTextKakushu,
  ...concreteTextShindan,
];

export function getConcreteText(subject: string): ConcreteTextSection[] {
  // 同じ科目の章が複数ファイルに分かれるため、find ではなく filter で
  // 全章を連結する（増補分の取りこぼしを防ぐ）
  return concreteTextbook
    .filter(c => c.subject === subject)
    .flatMap(c => c.sections);
}
