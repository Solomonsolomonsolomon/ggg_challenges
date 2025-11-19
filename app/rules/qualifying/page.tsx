"use client";

import { useChallenge } from "@/context/challengeContext";
import { qualifyingRulesSections } from "@/data/qualifyingrules.section";
import { useRouter } from "next/navigation";

export default function QualifyingRules() {
  const { challengeId } = useChallenge();
  const router = useRouter();

  const section =
    qualifyingRulesSections[challengeId] || qualifyingRulesSections.default;

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
                flex flex-col items-center justify-center gap-4
                cursor-pointer
                group
              `}
            >
              {/* Large Bold Number */}
              <span className="text-5xl font-bold text-[#800000] group-hover:text-white transition-colors duration-300">
                {idx + 1}
              </span>

              {/* Rule Text */}
              <p className="text-lg md:text-xl font-thin text-center transition-colors duration-300">
                {item}
              </p>
            </div>
          ))}
        </div>

        <button
          onClick={() => router.back()}
          className="
      mt-12
            bg-[#800000]
            hover:bg-[#9b0000]
            text-white
            px-8
            py-3
            rounded
            shadow
            transition-all
            font-thin
            mr-2
  "
        >
          Back
        </button>

        {/* NEXT BUTTON */}
        <button
          onClick={() => router.push("/rules/competing")}
          className="
            mt-12
            bg-[#800000]
            hover:bg-[#9b0000]
            text-white
            px-8
            py-3
            rounded
            shadow
            transition-all
            font-thin
          "
        >
          Next
        </button>
      </div>
    </section>
  );
}
