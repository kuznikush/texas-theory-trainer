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

export type TheoryImage = {
  id: string;
  localPath: string;
  title: string;
  sourceUrl: string;
  licenseAttribution?: string;
};

export type TheoryCallout = {
  type: "remember" | "example" | "penalty" | "mistake";
  title: string;
  text: string;
};

export type TheorySection = {
  id: string;
  heading: string;
  summary: string;
  details: string[];
  bullets?: string[];
  images?: string[];
  callouts?: TheoryCallout[];
};

export type TheoryTopic = {
  slug: string;
  title: string;
  emoji: string;
  intro: string;
  tldr: string[];
  sections: TheorySection[];
  commonMistakes?: string[];
};
