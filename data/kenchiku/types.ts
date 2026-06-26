export type KenchikuQuestion = {
  id: string;
  subject: string;
  subjectName: string;
  category: string;
  question: string;
  choices: { key: 'A' | 'B' | 'C' | 'D'; text: string; explanation: string }[];
  correctKey: 'A' | 'B' | 'C' | 'D';
  explanation: string;
  hasDiagram: boolean;
  diagramDescription?: string;
  difficulty: 'basic' | 'standard' | 'advanced';
  examYear?: string;
};
