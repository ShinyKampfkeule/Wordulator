import { CurrentLevelInterface } from "@/interfaces/currentLevelInterface";
import { Dispatch, SetStateAction } from "react";

export const KEY_BEHAVIOR: Record<
  string,
  (
    playerSolution: string,
    currentLevel: CurrentLevelInterface,
    setShowCompletedPopup: Dispatch<SetStateAction<boolean>>,
    setPlayerSolution: Dispatch<SetStateAction<string>>
  ) => void
> = {
  "?": (playerSolution, currentLevel, setShowCompletedPopup, setPlayerSolution) => {
    console.log("Got a Tip");
  },
  "=": (playerSolution, currentLevel, setShowCompletedPopup, setPlayerSolution) => {
    if (playerSolution === currentLevel.levelData?.levelValue.beginner.solution) {
      setShowCompletedPopup(true);
    }
  },
  delete: (playerSolution, currentLevel, setShowCompletedPopup, setPlayerSolution) => {
    if (playerSolution.length === 1) {
      setPlayerSolution("0");
    } else {
      setPlayerSolution(playerSolution.slice(0, -1));
    }
  },
};
