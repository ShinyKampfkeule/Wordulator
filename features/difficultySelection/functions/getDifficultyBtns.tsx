import { LevelDataInterface } from "@/interfaces/levelDataInterface";
import { DifficultyBtn } from "../components/difficultyBtn";
import { Difficulty } from "@/types/difficulty";

export const getDifficultyBtns = (levelData: LevelDataInterface) => {
  const difficultyBtns = Object.keys(levelData.levelValue.difficulties).map((difficulty) => {
    return (
      <DifficultyBtn
        key={difficulty}
        difficulty={difficulty as Difficulty}
        levelData={levelData}
      />
    );
  });

  return <div className="flex flex-col gap-2">{difficultyBtns}</div>;
};
