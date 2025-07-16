import { Button } from "@/components/ui/button";
import { LevelDataInterface } from "@/interfaces/levelDataInterface";
import { useCurrentLevelStore } from "@/stores/currentLevel";
import { Trophy } from "lucide-react";
import Link from "next/link";

interface Props {
  difficulty: string;
  levelData: LevelDataInterface;
}

export const DifficultyBtn = ({ difficulty, levelData }: Props) => {
  const currentLevel = useCurrentLevelStore((state) => state);

  let btnStyle: "beginner" | "easy" | "medium" | "hard" | "impossible" = "beginner";

  switch (difficulty) {
    case "beginner":
      btnStyle = "beginner";
      break;
    case "easy":
      btnStyle = "easy";
      break;
    case "medium":
      btnStyle = "medium";
      break;
    case "hard":
      btnStyle = "hard";
      break;
    case "impossible":
      btnStyle = "impossible";
      break;
  }

  return (
    <Link href="/game">
      <Button
        size="difficulty"
        variant={btnStyle}
        onClick={() => currentLevel.update(levelData, btnStyle)}
      >
        <div className="w-full p-5 flex justify-between items-center">
          <span>{difficulty}</span>
          <Trophy className="size-3" />
        </div>
      </Button>
    </Link>
  );
};
