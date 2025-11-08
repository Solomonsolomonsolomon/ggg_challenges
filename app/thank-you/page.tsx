"use client";

import { useChallenge } from "@/context/challengeContext";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

export default function ThankYouPage() {
  const { challengeId } = useChallenge();
  const router = useRouter();

  const challengeNames: Record<string, string> = {
    default: "our challenges",
    planks: "Planks Challenge",
    greekGod: "Greek God Challenge",
  };

  const challengeName = challengeNames[challengeId] || "our challenges";

  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center px-4 py-20 bg-[#f7f7f7]">
      {/* Optional background image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/thank_you_bg.jpeg"
          alt="Thank you background"
          fill
          className="object-cover opacity-20"
        />
      </div>

      <div className="relative z-10 max-w-2xl">
        <h1 className="text-4xl md:text-5xl font-thin text-[#800000] mb-6">
          Thank You for Registering!
        </h1>

        <p className="text-gray-900 mb-8 font-thin text-lg md:text-xl">
          You have successfully signed up for the{" "}
          <strong>{challengeName}</strong>. We can’t wait to see you compete!
        </p>

        <Button
          onClick={() => router.push("/")}
          className="bg-[#800000] hover:bg-[#9b0000] text-white px-8 py-3 rounded shadow font-thin transition-all"
        >
          Back to Home
        </Button>
      </div>
    </section>
  );
}
