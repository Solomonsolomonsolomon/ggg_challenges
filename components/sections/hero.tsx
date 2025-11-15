"use client";

import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { useChallenge } from "@/context/challengeContext";
import { heroSections } from "@/data/hero.section";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Hero() {
  const { challengeId, setChallengeId } = useChallenge();
  const hero = heroSections[challengeId] || heroSections.default;
  const router = useRouter();

  const handleCTA = () => {
    if (challengeId && challengeId !== "default") {
      router.push("/rules/qualifying");
    }
  };

  return (
    <section className="mt-2 md:mt-10 relative h-screen flex flex-col items-center justify-center text-center px-4 pt-24 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src={hero.backgroundImage}
          alt="Hero background"
          fill
          className="object-cover"
          style={{ objectPosition: "50% 40%" }}
          priority
        />
        {/* White overlay to keep design light */}
        <div className="absolute inset-0 bg-white/90" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-3xl">
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-thin tracking-tight mb-4 text-[#111]">
          {hero.title.includes("Greek God") ? (
            <>
              Do You Have What It Takes <br />
              <span className="text-[#800000]">To Be a Greek God?</span>
            </>
          ) : (
            hero.title
          )}
        </h1>

        <p className="text-gray-900 mb-6 md:mb-8 text-sm sm:text-base font-bold">
          {hero.subtitle}
        </p>

        <div className="flex flex-col gap-3 items-center justify-center w-full md:flex-row">
          <Select value={challengeId} onValueChange={setChallengeId}>
            <SelectTrigger className="bg-white/90 backdrop-blur-sm border border-gray-300 w-full md:w-56 text-[#111] focus:ring-2 focus:ring-[#800000]">
              <SelectValue placeholder="Select a challenge" />
            </SelectTrigger>
            <SelectContent className="bg-white text-[#111] border border-gray-200">
              <SelectItem value="default">
                Select a challenge (if you dare)
              </SelectItem>
              <SelectItem value="planks">Planks Challenge</SelectItem>
            </SelectContent>
          </Select>

          <Button
            disabled={challengeId === "default"}
            className={`${
              challengeId === "default"
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-[#800000] hover:bg-[#9b0000] text-white"
            } font-semibold px-8 py-2 rounded-xs shadow-lg transition-all w-full md:w-auto`}
            onClick={handleCTA}
          >
            {hero.ctaText}
          </Button>
        </div>
      </div>
    </section>
  );
}
