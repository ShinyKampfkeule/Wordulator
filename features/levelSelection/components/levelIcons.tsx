import { LevelInterface } from "@/interfaces/levelInterface";
import { difficulties } from "@/public/data/difficulties";
import { Trophy, Lock } from "lucide-react";
import { LevelIcon } from "./levelIcon";

interface Props {
  previousLevelSolved: boolean;
  levelValue: LevelInterface;
}

export const LevelIcons = ({ previousLevelSolved, levelValue }: Props) => {
  const levelIcons = difficulties.map((difficulty, index) => (
    <LevelIcon
      key={difficulty}
      previousLevelSolved={previousLevelSolved}
      levelValue={levelValue}
      difficulty={difficulty}
      index={index}
    />
  ));

  return <div className="flex gap-1">{levelIcons}</div>;
};
