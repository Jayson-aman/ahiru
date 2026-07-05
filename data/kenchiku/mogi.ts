import type { KenchikuQuestion } from './types';
import { kenchikuMogiPart1 } from './mogi-part1';
import { kenchikuMogiPart2 } from './mogi-part2';

// 建築設備士 模擬試験（本試験形式50問）
// 構成：建築一般知識13問／建築法規9問／空調・換気10問／給排水衛生9問／電気6問／防災3問
export const kenchikuMogi: KenchikuQuestion[] = [
  ...kenchikuMogiPart1,
  ...kenchikuMogiPart2,
];
