import { Button } from "@/components/ui/button";
import { LevelInterface } from "@/interfaces/levelInterface";
import { EntryTitle } from "./entryTitle";
import { LevelIcons } from "./levelIcons";
import { Dispatch, SetStateAction } from "react";
import { LevelDataInterface } from "@/interfaces/levelDataInterface";

interface Props {
  levelName: string;
  levelValue: LevelInterface;
  index: number;
  previousLevel: LevelInterface | null;
  setLevelData: Dispatch<SetStateAction<LevelDataInterface | null>>;
}

export const LevelEntry = ({ levelName, levelValue, index, previousLevel, setLevelData }: Props) => {
  const previousLevelSolved = previousLevel ? previousLevel.beginner.solved : true;
  return (
    <Button
      variant="secondary"
      className="text-lg justify-between"
      disabled={!previousLevelSolved}
      onClick={() =>
        setLevelData({
          levelIndex: index,
          levelName: levelName,
          levelValue: levelValue,
        })
      }
    >
      <EntryTitle
        index={index}
        levelName={levelName}
        previousLevelSolved={previousLevelSolved}
      />
      <LevelIcons
        previousLevelSolved={previousLevelSolved}
        levelValue={levelValue}
      />
    </Button>
  );
};
