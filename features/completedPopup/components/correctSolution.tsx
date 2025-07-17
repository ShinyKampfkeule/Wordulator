import { CurrentLevelInterface } from "@/interfaces/currentLevelInterface";

interface Props {
  currentLevel: CurrentLevelInterface;
}

export const CorrectSolution = ({ currentLevel }: Props) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <span className="text-4xl">{currentLevel.levelData!.levelName}</span>
      <span className="text-4xl rotate-x-180 rotate-y-180">{currentLevel.levelData!.levelValue.difficulties[currentLevel.levelDifficulty!].solution}</span>
    </div>
  );
};
