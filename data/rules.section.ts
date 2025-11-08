export interface RulesSection {
  title: string;
  items: string[];
}

export const rulesSections: Record<string, RulesSection> = {
  default: {
    title: "Competition Rules",
    items: [
      "Follow the instructions carefully.",
      "Respect fellow competitors.",
      "Complete challenges safely.",
      "Decisions of the judges are final.",
    ],
  },
  planks: {
    title: "Planks Challenge Rules",
    items: [
      "Maintain correct form throughout.",
      "Time will be tracked strictly.",
      "No resting on elbows or knees.",
      "Cash prize awarded to the top performer.",
    ],
  },
};
