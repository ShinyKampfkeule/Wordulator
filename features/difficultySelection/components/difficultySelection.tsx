import { Dispatch, SetStateAction } from "react";
import { StepBackBtn } from "./stepBackBtn";
import { Button } from "@/components/ui/button";
import { LevelDataInterface } from "@/interfaces/levelDataInterface";
import { getDifficultyBtns } from "../functions/getDifficultyBtns";
import { DifficultyList } from "./difficultyList";

interface Props {
  levelData: LevelDataInterface;
  setLevelData: Dispatch<SetStateAction<LevelDataInterface | null>>;
}

export const DifficultySelection = ({ levelData, setLevelData }: Props) => {
  return (
    <div className="absolute top-0 left-0 bg-background/90 z-1">
      <div className="w-screen h-screen p-5 flex flex-col gap-5">
        <div>
          <StepBackBtn setLevelData={setLevelData} />
        </div>
        <DifficultyList levelData={levelData} />
      </div>
    </div>
  );
};
