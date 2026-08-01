export type TextSection = {
  id: string;
  title: string;
  emoji: string;
  body: string; // markdown-like plain text with \n for line breaks
};

export type KishoChapter = {
  id: string;
  subject: 'gakka1' | 'gakka2';
  title: string;
  emoji: string;
  sections: TextSection[];
};

import { kishoTextPart1 } from './kisho_text_part1';

export const kishoTextbook: KishoChapter[] = [
  ...kishoTextPart1,
];
