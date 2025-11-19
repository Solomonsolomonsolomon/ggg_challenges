"use client";

import React from "react";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

const AboutGGG = () => {
  const router = useRouter();

  return (
    <div className="min-h-[80vh] text-[#800000] flex items-center justify-center px-4 py-10 relative">
      {/* Back Button */}
      <button
        onClick={() => router.back()}
        className="absolute left-4 top-4 flex items-center gap-2 text-sm font-medium text-[#800000] hover:opacity-70 transition"
      >
        <ArrowLeft size={18} />
        Back
      </button>

      <div className="max-w-2xl text-center">
        {/* Title */}
        <h1 className="text-2xl md:text-3xl font-bold mb-6">ABOUT GGG</h1>

        {/* Card */}
        <div className="bg-inherit p-6 md:p-8">
          <p className="text-gray-700 leading-relaxed">
            Greek God Gym is an emerging fitness company based in Kaduna State,
            Nigeria.
            <br />
            <br />
            We understand the importance of physical fitness to the general
            health and wellbeing of every individual, and we are committed to
            providing access to intentional training—especially for individuals
            who have little or no knowledge of physical fitness.
          </p>

          {/* Section Title */}
          <h2 className="text-lg md:text-xl font-semibold mt-8 mb-3">
            PURPOSE OF GGG PLANK CHALLENGE
          </h2>

          <p className="text-gray-700 leading-relaxed">
            The major purpose of this challenge is to create awareness for our
            brand, hence the need for reposts.
            <br />
            <br />
            We understand that many individuals may not like the idea of asking
            for reposts, but every repost you request is your own little
            contribution toward building a physically fit society—one free from
            ailments such as diabetes, high blood pressure, depression, and
            other metabolic or mental disorders.
          </p>

          <p className="text-gray-600 text-sm mt-8">
            Thank you for your interest in the GGG Plank Challenge.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutGGG;
