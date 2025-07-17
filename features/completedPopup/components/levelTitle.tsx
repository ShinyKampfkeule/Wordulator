import { CurrentLevelInterface } from "@/interfaces/currentLevelInterface";

interface Props {
  currentLevel: CurrentLevelInterface;
}

export const LevelTitle = ({ currentLevel }: Props) => {
  return (
    <div className="flex justify-center items-center">
      <span className="text-2xl">
        Level {currentLevel.levelData!.levelIndex + 1} - {currentLevel.levelDifficulty}
      </span>
    </div>
  );
};
