"use client";

import React, { createContext, useContext, useState } from "react";

interface ChallengeContextType {
  challengeId: string;
  setChallengeId: (id: string) => void;
}

const ChallengeContext = createContext<ChallengeContextType | undefined>(
  undefined
);

export const ChallengeProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [challengeId, setChallengeId] = useState("default");

  return (
    <ChallengeContext.Provider value={{ challengeId, setChallengeId }}>
      {children}
    </ChallengeContext.Provider>
  );
};

export const useChallenge = () => {
  const context = useContext(ChallengeContext);
  if (!context)
    throw new Error("useChallenge must be used within a ChallengeProvider");
  return context;
};
