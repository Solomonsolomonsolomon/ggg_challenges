export interface FAQSection {
  title: string;
  items: { question: string; answer: string }[];
}

export const faqSections: Record<string, FAQSection> = {
  default: {
    title: "Frequently Asked Questions",
    items: [
      {
        question: "Who can join?",
        answer: "Anyone who is motivated and ready to take on the challenge.",
      },
      {
        question: "Do I need prior experience?",
        answer:
          "No prior experience is needed. Just show up and give your best.",
      },
      {
        question: "Is there a registration fee?",
        answer: "No, registration is free for all participants.",
      },
      {
        question: "How long is each challenge?",
        answer:
          "Duration depends on the challenge type; details are provided at the venue.",
      },
    ],
  },
  planks: {
    title: "Planks Challenge FAQ",
    items: [
      {
        question: "What is the Planks Challenge?",
        answer:
          "It's a test of endurance where participants hold a plank position for as long as possible.",
      },
      {
        question: "Is there a cash prize?",
        answer: "Yes! Winners of the Planks Challenge receive a cash reward.",
      },
      {
        question: "What should I bring?",
        answer: "Bring a yoga mat, water, and a strong determination.",
      },
      {
        question: "Can I practice beforehand?",
        answer: "Absolutely! Training is encouraged to maximize performance.",
      },
    ],
  },
};
