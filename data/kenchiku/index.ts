import type { KenchikuQuestion } from './types';
export type { KenchikuQuestion };

import { ippanQuestions } from './ippan-questions';
import { ippanQuestionsPart2 } from './ippan-questions-part2';
import { allHokiQuestions } from './hoki-questions';
import { kuchoQuestions_part1 } from './kucho-questions';
import { kuchoQuestions_part2 } from './kucho-questions-part2';
import { kuchoQuestionsPart3a } from './kucho-questions-part3a';
import { kuchoQuestionsPart3b } from './kucho-questions-part3b';
import { kuchoQuestionsPart3c } from './kucho-questions-part3c';
import { kyuhaisuiQuestions } from './kyuhaisui-questions';
import { part2Questions } from './kyuhaisui-questions-part2';
import { kyuhaisuiQuestionsPart3a } from './kyuhaisui-questions-part3a';
import { kyuhaisuiQuestionsPart3b } from './kyuhaisui-questions-part3b';
import { denkiQuestionsPart1 } from './denki-questions-part1';
import { denkiQuestionsPart2 } from './denki-questions-part2';
import { bousaiQuestions } from './bousai-questions';

const SUBJECT_ALIASES: Record<string, string> = {
  '給排水衛生設備': 'kyuhaisui',
  '消火・ガス設備': 'bousai',
  '電気設備': 'denki',
};

const normalize = (q: KenchikuQuestion): KenchikuQuestion => ({
  ...q,
  subject: SUBJECT_ALIASES[q.subject] ?? q.subject,
});

export const kenchikuQuestions: KenchikuQuestion[] = [
  ...ippanQuestions,
  ...ippanQuestionsPart2,
  ...allHokiQuestions,
  ...kuchoQuestions_part1,
  ...kuchoQuestions_part2,
  ...kuchoQuestionsPart3a,
  ...kuchoQuestionsPart3b,
  ...kuchoQuestionsPart3c,
  ...kyuhaisuiQuestions,
  ...part2Questions,
  ...kyuhaisuiQuestionsPart3a,
  ...kyuhaisuiQuestionsPart3b,
  ...denkiQuestionsPart1,
  ...denkiQuestionsPart2,
  ...bousaiQuestions,
].map(normalize);
