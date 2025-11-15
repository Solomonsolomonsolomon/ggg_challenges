export interface RulesSection {
  title: string;
  items: string[];
}

export const qualifyingRulesSections: Record<string, RulesSection> = {
  default: {
    title: "Qualifying Rules",
    items: [
      "Fill up your data on the next page.",
      "With the challenge flier, announce your participation on X (Twitter) using the hashtags #GGGplankchallenge and #GGG.",
      "Get 10 reposts on your announcement before February 17th, 2026.",
      "To be added into the #GGGplankchallenge group chat where all information will be delivered, send a WhatsApp message to 08164166630.",
      "By clicking to the next page, you give us permission to use your media on our platforms.",
    ],
  },

  planks: {
    title: "Plank Challenge — Qualifying Rules",
    items: [
      "Fill up your data on the next page.",
      "Announce your participation on X using the hashtags #GGGplankchallenge and #GGG.",
      "Obtain 10 reposts before February 17th, 2026.",
      "Send a WhatsApp message to 08164166630 to join the challenge group chat.",
      "By proceeding, you consent to us using your media on our platforms.",
    ],
  },

  // Add more challenges here (optional)
};
