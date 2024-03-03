import { Exam } from "./exam";

export interface fullDataExam {
  answer: Exam[];
  candidateId: string;
  code: string[];
  language: string[];
  markdown: string[];
  mermaid: string[];
  questionNumber: number;
  script: string[];
  startDate: Date;
  title: string[];
}
