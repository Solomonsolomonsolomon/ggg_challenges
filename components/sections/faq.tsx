"use client";

import { useState } from "react";
import { useChallenge } from "@/context/challengeContext";
import { faqSections } from "@/data/faq.section";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function FAQ() {
  const { challengeId } = useChallenge();
  const section = faqSections[challengeId] || faqSections.default;
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleItem = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="relative py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-thin text-[#800000] mb-12">
          {section.title}
        </h2>

        <div className="space-y-4">
          {section.items.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="border border-[#800000]/30 rounded-sm cursor-pointer overflow-hidden"
              >
                <button
                  className="w-full flex justify-between items-center px-6 py-4 text-left font-thin text-[#111] hover:bg-[#800000]/10 transition-colors duration-300"
                  onClick={() => toggleItem(idx)}
                >
                  <span className="text-lg md:text-xl">{item.question}</span>
                  {isOpen ? (
                    <ChevronUp className="size-5 text-[#800000]" />
                  ) : (
                    <ChevronDown className="size-5 text-[#800000]" />
                  )}
                </button>
                <div
                  className={`px-6 py-4 text-gray-900 font-thin transition-all duration-300 ${
                    isOpen
                      ? "max-h-96 opacity-100"
                      : "max-h-0 opacity-0 overflow-hidden"
                  }`}
                >
                  {item.answer}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
