"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

interface ChallengeContextType {
  challengeId: string;
  setChallengeId: (id: string) => void;
}

const ChallengeContext = createContext<ChallengeContextType | undefined>(
  undefined
);

const STORAGE_KEY = "ggg_challengeId";

const getInitialChallengeId = () => {
  if (typeof window === "undefined") {
    return "default";
  }

  try {
    const storedValue = window.localStorage.getItem(STORAGE_KEY);
    return storedValue && storedValue !== "default" ? storedValue : "default";
  } catch {
    return "default";
  }
};

export const ChallengeProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [challengeId, setChallengeId] = useState(getInitialChallengeId);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    try {
      if (challengeId && challengeId !== "default") {
        window.localStorage.setItem(STORAGE_KEY, challengeId);
      } else {
        window.localStorage.removeItem(STORAGE_KEY);
      }
    } catch {
      // Ignore storage write errors (e.g., disabled cookies/storage)
    }
  }, [challengeId]);

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
