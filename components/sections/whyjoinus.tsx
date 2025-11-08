"use client";

import { useChallenge } from "@/context/challengeContext";
import { whyJoinSections } from "@/data/whyjoinus.section";

export default function WhyJoin() {
  const { challengeId } = useChallenge();
  const section = whyJoinSections[challengeId] || whyJoinSections.default;

  return (
    <section className="relative py-20 px-4 bg-[#800000]">
      <div className="max-w-5xl mx-auto text-center">
        {/* Section title */}
        <h2 className="text-3xl md:text-4xl font-thin text-white mb-12">
          {section.title}
        </h2>

        {/* Grid: joined cards on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2">
          {section.items.map((item, idx) => (
            <div
              key={idx}
              className={`
                p-8
                ${idx % 2 === 0 ? "md:border-r-0" : "md:border-l-0"}
                bg-[#800000] text-white
                hover:bg-gray-100 hover:text-[#800000] border border-gray-200 transition-colors duration-300
                text-center flex items-center justify-center
                cursor-pointer
                group
                font-thin
              `}
            >
              <p className="text-lg md:text-xl transition-colors duration-300">
                {item}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
