export type SekokanQuestion = {
  id: string;
  subject: 'kenchikugaku' | 'sekou' | 'kanri' | 'hoki';
  subjectName: string;
  category: string;
  question: string;
  choices: { key: 'A' | 'B' | 'C' | 'D'; text: string; explanation: string }[];
  correctKey: 'A' | 'B' | 'C' | 'D';
  explanation: string;
  difficulty: 'basic' | 'standard' | 'advanced';
  examYear?: string;
};
