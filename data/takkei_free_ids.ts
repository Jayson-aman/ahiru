/**
 * 無課金でも解ける宅建の問題ID。
 *
 * 2026-09-16 に追加した50問セット（権利14・業法20・法令8・税その他8）を
 * 無料開放するためのもの。IDを手で並べるとファイル追加のたびに
 * ずれるので、元のモジュールから導出する。
 *
 * 適用範囲は科目別演習（app/takkei/[subject].tsx）のみ。
 * 模擬試験・本試験形式・直前問題集はそれぞれ別の出題ロジックを持つので
 * ここは参照しない（直前問題集はそもそも全体が無料）。
 */
import { takkeiKenri16 } from './takkei_questions_kenri_16';
import { takkeiGyoho16 } from './takkei_questions_gyoho_16';
import { takkeiHorei8 } from './takkei_questions_horei8';
import { takkeiZei8 } from './takkei_questions_zei8';

export const takkeiFreeQuestionIds: ReadonlySet<string> = new Set(
  [...takkeiKenri16, ...takkeiGyoho16, ...takkeiHorei8, ...takkeiZei8].map(q => q.id),
);
