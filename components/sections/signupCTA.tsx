"use client";

import { useChallenge } from "@/context/challengeContext";
import { heroSections } from "@/data/hero.section";
import { useRouter } from "next/navigation";

export default function SignupCTA() {
  const { challengeId } = useChallenge();
  const hero = heroSections[challengeId] || heroSections.default;
  const router = useRouter();

  const handleSignup = () => {
    if (challengeId && challengeId !== "default") {
      router.push("/signup");
    }
  };

  return (
    <section id="signup" className="relative py-20 px-4 flex flex-col items-center justify-center text-center bg-[#800000]">
      <h2 className="text-3xl md:text-4xl font-thin text-white mb-6">
        {challengeId && challengeId !== "default"
          ? `Ready to take on the ${challengeId} challenge?`
          : "Select a challenge to get started"}
      </h2>

      <p className="text-white mb-8 max-w-xl font-thin">
        {challengeId && challengeId !== "default"
          ? hero.subtitle
          : "Choose your challenge above to see what awaits you."}
      </p>

      <button
        disabled={challengeId === "default"}
        onClick={handleSignup}
        className={`${
          challengeId === "default"
            ? "bg-gray-400 cursor-not-allowed"
            : "bg-white hover:bg-gray-100 text-[#800000]"
        } px-8 py-3 font-thin text-lg rounded-xs shadow-lg transition-all`}
      >
        {challengeId && challengeId !== "default"
          ? "Register Now"
          : "Select a Challenge First"}
      </button>
    </section>
  );
}
