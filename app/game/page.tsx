"use client";

import { CompletedPopup } from "@/features/completedPopup/components/completedPopup";
import { GameContainer } from "@/features/gameContainer/components/gameContainer";
import { useCurrentLevelStore } from "@/stores/currentLevel";
import { useState } from "react";

export default function Game() {
  const currentLevel = useCurrentLevelStore((state) => state);
  const [showCompletedPopup, setShowCompletedPopup] = useState(false);

  if (!currentLevel.levelData) return null;

  return (
    <div className="relative w-screen h-screen flex flex-col">
      <GameContainer
        currentLevel={currentLevel}
        setShowCompletedPopup={setShowCompletedPopup}
      />
      <CompletedPopup
        currentLevel={currentLevel}
        showCompletedPopup={showCompletedPopup}
      />
    </div>
  );
}
