export type Choice = {
  id: string;            // "A", "B", "C", "D"
  text: string;
};

export type Question = {
  id: string;            // unique
  topic: string;         // "Right-of-way", "Signs", etc.
  prompt: string;
  image?: {
    src: string;
    alt: string;
    credit: string;
  };
  choices: Choice[];
  correctChoiceId: string;
  explanation?: string;
};

export type ExamMode = "practice" | "exam";

export type ExamConfig = {
  mode: ExamMode;
  numQuestions: number;
  timeLimitSec?: number;
  shuffleChoices: boolean;
  shuffleQuestions: boolean;
};
