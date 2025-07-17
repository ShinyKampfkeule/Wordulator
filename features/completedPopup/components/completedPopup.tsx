import { CurrentLevelInterface } from "@/interfaces/currentLevelInterface";
import { StarScore } from "./starScore";
import { LevelTitle } from "./levelTitle";
import { CorrectSolution } from "./correctSolution";
import { Statistics } from "./statistics";
import { BtnContainer } from "./btnContainer";

interface Props {
  currentLevel: CurrentLevelInterface;
  showCompletedPopup: boolean;
}

export const CompletedPopup = ({ currentLevel, showCompletedPopup }: Props) => {
  if (!showCompletedPopup) return null;

  return (
    <div className="absolute w-screen h-screen bg-background/90 p-10 flex flex-col items-center justify-between gap-3">
      <StarScore />
      <LevelTitle currentLevel={currentLevel} />
      <CorrectSolution currentLevel={currentLevel} />
      <Statistics />
      <BtnContainer />
    </div>
  );
};
