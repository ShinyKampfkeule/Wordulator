"use client";

import { TitleActions } from "@/features/titleActions/components/titleActions";
import { TitleHeader } from "@/features/titleHeader/components/titleHeader";
import { SavedGameDataInterface } from "@/interfaces/savedGameDataInterface";
import { useGameDataStore } from "@/stores/gameData";
import { Difficulty } from "@/types/difficulty";
import { useEffect } from "react";

export default function Home() {
  const gameDataStore = useGameDataStore((state) => state);

  useEffect(() => {
    const localData = localStorage.getItem("gameData");
    const updatedLevels = gameDataStore.levels;

    if (!localData) return;

    const saveData: SavedGameDataInterface = JSON.parse(localData);
    const levelEntries = Object.entries(saveData);
    levelEntries.forEach(([levelKey, levelData]) => {
      const difficulties = Object.entries(levelData);
      difficulties.forEach(([difficulty, difficultyData]) => {
        updatedLevels[levelKey].difficulties[difficulty as Difficulty].fastestTime = difficultyData.fastestTime;
        updatedLevels[levelKey].difficulties[difficulty as Difficulty].fewestTips = difficultyData.fewestTips;
        updatedLevels[levelKey].difficulties[difficulty as Difficulty].solved = difficultyData.solved;
      });
    });

    gameDataStore.updateLevels(updatedLevels);
  }, []);

  return (
    <div className="h-screen w-screen flex flex-col justify-center items-center gap-5">
      <TitleHeader />
      <TitleActions />
    </div>
  );
}
