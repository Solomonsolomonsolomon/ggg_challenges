export interface WhyJoinSection {
  title: string;
  items: string[];
}

export const whyJoinSections: Record<string, WhyJoinSection> = {
  default: {
    title: "Why Join Us?",
    items: [
      "Compete for glory",
      "Test your strength",
      "Be part of the Greek God Gym legacy",
      "Push your limits and rise above",
    ],
  },
  planks: {
    title: "Why Take the Planks Challenge?",
    items: [
      "Challenge your core like never before",
      "Compete for the Planks title and bragging rights",
      "Limited spots – only the worthy can rise",
      "Win a cash reward for your mastery",
    ],
  },
};
