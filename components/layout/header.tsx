"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import siteConfig from "@/data/siteConfig";
import { useChallenge } from "@/context/challengeContext";
import { useRouter } from "next/navigation";
import { Menu, X } from "lucide-react";

export default function Header() {
  const { challengeId } = useChallenge();
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  const handleCTA = () => {
    if (challengeId && challengeId !== "default") {
      router.push("/signup");
      setIsOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/90 backdrop-blur-sm border-b border-gray-200">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <Image
            src={siteConfig.logo}
            alt="Greek God Gym logo"
            width={40}
            height={40}
            className="rounded-full object-cover"
          />

          {/* Desktop site name */}
          <h1 className="hidden md:block text-2xl font-thin tracking-tight text-[#800000]">
            Greek<span className="text-gray-900">God</span> Gym
          </h1>
        </div>

        {/* Desktop Join Challenge */}
        <div className="hidden md:flex items-center gap-3">
          <Button
            disabled={challengeId === "default"}
            onClick={handleCTA}
            className={`${
              challengeId === "default"
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-[#800000] hover:bg-[#9b0000] text-white"
            } px-4 md:px-6 py-2 font-thin rounded-xs shadow transition-all`}
          >
            Join Challenge
          </Button>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded-md text-gray-800 hover:bg-gray-200 transition"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-sm border-t border-gray-200 shadow-lg absolute w-full top-full left-0">
          <div className="flex flex-col items-center gap-4 py-4">
            <h1 className="text-xl font-thin text-[#800000]">
              Greek<span className="text-gray-900">God</span> Gym
            </h1>
            <Button
              disabled={challengeId === "default"}
              onClick={handleCTA}
              className={`${
                challengeId === "default"
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-[#800000] hover:bg-[#9b0000] text-white"
              } px-6 py-2 font-thin rounded-xs shadow transition-all`}
            >
              {challengeId === "default"?"Select Challenge":"Join Challenge"}
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
