"use client";

import { DifficultySelection } from "@/features/difficultySelection/components/difficultySelection";
import { LevelSelection } from "@/features/levelSelection/components/levelSelection";
import { LevelDataInterface } from "@/interfaces/levelDataInterface";
import { useState } from "react";

export default function LevelSelect() {
  const [levelData, setLevelData] = useState<null | LevelDataInterface>(null);
  return (
    <div className="w-screen h-screen relative">
      <LevelSelection setLevelData={setLevelData} />
      {levelData && (
        <DifficultySelection
          levelData={levelData}
          setLevelData={setLevelData}
        />
      )}
    </div>
  );
}
