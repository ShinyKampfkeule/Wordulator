import { CurrentLevelInterface } from "@/interfaces/currentLevelInterface";

interface Props {
  currentLevel: CurrentLevelInterface;
  playerSolution: string;
}

export const SolutionDisplay = ({ currentLevel, playerSolution }: Props) => {
  return (
    <div className="flex flex-col w-full grow gap-2 items-center justify-center">
      <span className="text-2xl">{currentLevel.levelData!.levelName}</span>
      <span className="text-2xl rotate-x-180 rotate-y-180">{playerSolution}</span>
    </div>
  );
};
