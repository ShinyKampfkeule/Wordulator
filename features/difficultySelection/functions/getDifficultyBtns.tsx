import { LevelDataInterface } from "@/interfaces/levelDataInterface";
import { DifficultyBtn } from "../components/difficultyBtn";

export const getDifficultyBtns = (levelData: LevelDataInterface) => {
  const difficultyBtns = Object.keys(levelData.levelValue).map((difficulty) => {
    if (difficulty === "result") return null;

    return (
      <DifficultyBtn
        key={difficulty}
        difficulty={difficulty}
        levelData={levelData}
      />
    );
  });

  return <div className="flex flex-col gap-2">{difficultyBtns}</div>;
};
