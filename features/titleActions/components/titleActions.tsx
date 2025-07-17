import { Button } from "@/components/ui/button";
import { PlayBtn } from "./playBtn";
import { SettingsBtn } from "./settingsBtn";
import { CreditsBtn } from "./creditsBtn";
import { useGameDataStore } from "@/stores/gameData";
import { DifficultyInterface } from "@/interfaces/difficultyInterface";
import { DifficultyStatisticsInterface } from "@/interfaces/difficultyStatisticsInterface";
import { Difficulty } from "@/types/difficulty";
import { SavedGameDataInterface } from "@/interfaces/savedGameDataInterface";

const BASE_GAME_DATA = { solved: false, fastestTime: 0, fewestTips: 0 };

export const TitleActions = () => {
  const gameDataStore = useGameDataStore((state) => state);

  const handleDataSave = () => {
    const newGameData: SavedGameDataInterface = {};

    const levelEntries = Object.entries(gameDataStore.levels);
    levelEntries.forEach(([levelKey, levelData]) => {
      newGameData[levelKey] = {
        beginner: BASE_GAME_DATA,
        easy: BASE_GAME_DATA,
        medium: BASE_GAME_DATA,
        hard: BASE_GAME_DATA,
        impossible: BASE_GAME_DATA,
      };

      const difficultyEntries: [string, DifficultyInterface][] = Object.entries(levelData.difficulties);
      difficultyEntries.forEach(([difficulty, stats]) => {
        newGameData[levelKey][difficulty as Difficulty] = {
          solved: stats.solved,
          fastestTime: stats.fastestTime,
          fewestTips: stats.fewestTips,
        };
      });
    });

    localStorage.setItem("gameData", JSON.stringify(newGameData));
  };

  return (
    <div className="flex flex-col gap-5 w-full grow items-center">
      <PlayBtn />
      <SettingsBtn />
      <CreditsBtn />
      <Button onClick={() => handleDataSave()}>Save Data</Button>
    </div>
  );
};
