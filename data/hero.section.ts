export interface HeroSection {
  title: string;
  subtitle: string;
  backgroundImage: string;
  ctaText: string;
}

export const heroSections: Record<string, HeroSection> = {
  default: {
    title: "Do you have what it takes to be a Greek God?",
    subtitle: "Only the worthy will rise. Prove it.",
    backgroundImage: "/hero_background_ggg.jpeg",
    ctaText: "Select a Challenge",
  },
  planks: {
    title: "Only a few have what it takes to conquer the Planks Challenge.",
    subtitle: "Are you sure you are ready to hold your ground?",
    backgroundImage: "/hero_background_ggg.jpeg",
    ctaText: "Register Planks",
  },
};
