export type TakkeiQuestion = {
  id: string;
  subject: 'kenri' | 'gyoho' | 'horei' | 'zei';
  subjectName: string;
  question: string;
  choices: { key: 'A' | 'B' | 'C' | 'D'; text: string; explanation: string }[];
  correctKey: 'A' | 'B' | 'C' | 'D';
  explanation: string;
  difficulty: 'basic' | 'standard' | 'advanced';
  examYear?: string;
};

export const takkeiQuestions: TakkeiQuestion[] = [];
