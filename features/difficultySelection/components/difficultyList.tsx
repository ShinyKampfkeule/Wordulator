import { LevelDataInterface } from "@/interfaces/levelDataInterface";
import { getDifficultyBtns } from "../functions/getDifficultyBtns";

interface Props {
  levelData: LevelDataInterface;
}

export const DifficultyList = ({ levelData }: Props) => {
  const difficultyBtns = getDifficultyBtns(levelData);

  return (
    <div className="flex flex-col gap-5 justify-center items-center grow">
      <span className="text-2xl">
        Level {levelData.levelIndex + 1} - {levelData.levelName}
      </span>
      {difficultyBtns}
    </div>
  );
};
