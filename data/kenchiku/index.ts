import type { KenchikuQuestion } from './types';
export type { KenchikuQuestion };

import { ippanQuestions } from './ippan-questions';
import { ippanQuestionsPart2 } from './ippan-questions-part2';
import { ippanQuestionsPart3Sekou } from './ippan-questions-part3';
import { ippanQuestionsPart4 } from './ippan-questions-part4';
import { allHokiQuestions } from './hoki-questions';
import { hokiQuestionsPart2 } from './hoki-questions-part2';
import { hokiQuestionsPart3 } from './hoki-questions-part3';
import { kuchoQuestions_part1 } from './kucho-questions';
import { kuchoQuestions_part2 } from './kucho-questions-part2';
import { kuchoQuestionsPart3a } from './kucho-questions-part3a';
import { kuchoQuestionsPart3b } from './kucho-questions-part3b';
import { kuchoQuestionsPart3c } from './kucho-questions-part3c';
import { kuchoQuestionsPart4 } from './kucho-questions-part4';
import { kuchoQuestionsPart5 } from './kucho-questions-part5';
import { kyuhaisuiQuestions } from './kyuhaisui-questions';
import { part2Questions } from './kyuhaisui-questions-part2';
import { kyuhaisuiQuestionsPart3a } from './kyuhaisui-questions-part3a';
import { kyuhaisuiQuestionsPart3b } from './kyuhaisui-questions-part3b';
import { kyuhaisuiQuestionsPart4 } from './kyuhaisui-questions-part4';
import { kyuhaisuiQuestionsPart5 } from './kyuhaisui-questions-part5';
import { denkiQuestionsPart1 } from './denki-questions-part1';
import { denkiQuestionsPart2 } from './denki-questions-part2';
import { denkiQuestionsPart3 } from './denki-questions-part3';
import { bousaiQuestions } from './bousai-questions';
import { bousaiQuestionsPart2 } from './bousai-questions-part2';
import { balanceAnswerKeys } from '../_balance';

const SUBJECT_ALIASES: Record<string, string> = {
  '給排水衛生設備': 'kyuhaisui',
  '消火・ガス設備': 'bousai',
  '電気設備': 'denki',
};

const normalize = (q: KenchikuQuestion): KenchikuQuestion => ({
  ...q,
  subject: SUBJECT_ALIASES[q.subject] ?? q.subject,
});

const rawKenchikuQuestions: KenchikuQuestion[] = [
  ...ippanQuestions,
  ...ippanQuestionsPart2,
  ...ippanQuestionsPart3Sekou,
  ...ippanQuestionsPart4,
  ...allHokiQuestions,
  ...hokiQuestionsPart2,
  ...hokiQuestionsPart3,
  ...kuchoQuestions_part1,
  ...kuchoQuestions_part2,
  ...kuchoQuestionsPart3a,
  ...kuchoQuestionsPart3b,
  ...kuchoQuestionsPart3c,
  ...kuchoQuestionsPart4,
  ...kuchoQuestionsPart5,
  ...kyuhaisuiQuestions,
  ...part2Questions,
  ...kyuhaisuiQuestionsPart3a,
  ...kyuhaisuiQuestionsPart3b,
  ...kyuhaisuiQuestionsPart4,
  ...kyuhaisuiQuestionsPart5,
  ...denkiQuestionsPart1,
  ...denkiQuestionsPart2,
  ...denkiQuestionsPart3,
  ...bousaiQuestions,
  ...bousaiQuestionsPart2,
].map(normalize);

/** 正解キーの偏りをならしてから公開する（中身は不変・並びのみ回転） */
export const kenchikuQuestions: KenchikuQuestion[] = balanceAnswerKeys(rawKenchikuQuestions);
