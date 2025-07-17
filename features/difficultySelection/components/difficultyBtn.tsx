import { Button } from "@/components/ui/button";
import { LevelDataInterface } from "@/interfaces/levelDataInterface";
import { useCurrentLevelStore } from "@/stores/currentLevel";
import { Difficulty } from "@/types/difficulty";
import { Trophy } from "lucide-react";
import Link from "next/link";

interface Props {
  difficulty: Difficulty;
  levelData: LevelDataInterface;
}

export const DifficultyBtn = ({ difficulty, levelData }: Props) => {
  const currentLevel = useCurrentLevelStore((state) => state);

  return (
    <Link href="/game">
      <Button
        size="difficulty"
        variant={difficulty}
        onClick={() => currentLevel.update(levelData, difficulty)}
      >
        <div className="w-full p-5 flex justify-between items-center">
          <span>{difficulty}</span>
          <Trophy className="size-3" />
        </div>
      </Button>
    </Link>
  );
};
