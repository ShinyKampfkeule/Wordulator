import { CurrentLevelInterface } from "@/interfaces/currentLevelInterface";

interface Props {
  currentLevel: CurrentLevelInterface;
}

export const HeaderTitle = ({ currentLevel }: Props) => {
  return (
    <div className="flex flex-col items-center">
      <span className="text-2xl">Level {currentLevel.levelData!.levelIndex + 1}</span>
      <span className="textl-sm">{currentLevel.levelDifficulty}</span>
    </div>
  );
};
