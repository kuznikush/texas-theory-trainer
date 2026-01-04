export type CalloutVariant = "remember" | "example" | "penalty" | "common-mistake";

export type TopicImage = {
  src: string; // preferably local asset in /public/signs/...
  alt: string;
  caption: string;
  sourceLabel: string; // e.g., "Wikimedia Commons"
  sourceUrl: string;
  license: string; // e.g., "Public domain" or "CC BY-SA ..."
};

export type TopicSection = {
  id: string;
  title: string;
  summary: string;
  learnMore: string[]; // paragraphs/bullets rendered nicely
  bullets?: string[];
  images?: TopicImage[];
  callouts?: Array<{
    variant: CalloutVariant;
    title: string;
    body: string;
  }>;
};

export type TheoryTopic = {
  slug: string;
  title: string;
  icon: string; // emoji or an icon id you already use
  intro: string;
  whatYouWillLearn: string;
  decisionRules: string[];
  tldr: string[];
  sections: TopicSection[];
  commonMistakes: string[];
};
