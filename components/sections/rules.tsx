"use client";

import { useChallenge } from "@/context/challengeContext";
import { rulesSections } from "@/data/rules.section";

export default function Rules() {
  const { challengeId } = useChallenge();
  const section = rulesSections[challengeId] || rulesSections.default;

  return (
    <section className="relative py-20 px-4">
      <div className="max-w-5xl mx-auto text-center">

        <h2 className="text-3xl md:text-4xl font-thin text-[#800000] mb-12">
          {section.title}
        </h2>


        <div className="grid grid-cols-1 md:grid-cols-2">
          {section.items.map((item, idx) => (
            <div
              key={idx}
              className={`
                p-6
                ${idx % 2 === 0 ? "md:border-r-0" : "md:border-l-0"}
                bg-[#f3f3f3] text-[#111]
                hover:bg-[#800000] hover:text-white
                border border-gray-300 transition-colors duration-300
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
