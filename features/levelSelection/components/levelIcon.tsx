import { LevelInterface } from "@/interfaces/levelInterface";
import { difficulties } from "@/public/data/difficulties";
import { Trophy, Lock } from "lucide-react";

interface Props {
  previousLevelSolved: boolean;
  levelValue: LevelInterface;
  difficulty: "beginner" | "easy" | "medium" | "hard" | "impossible";
  index: number;
}

const DIFFICULTY_COLORS = {
  beginner: "#69A623",
  easy: "#15821A",
  medium: "#C99600",
  hard: "#E53700",
  impossible: "#BA0D00",
};

export const LevelIcon = ({ previousLevelSolved, levelValue, difficulty, index }: Props) => {
  const isFirstDiffficulty = index === 0;
  const previousDifficulty = difficulties[index - 1];
  const previousDifficultySolved = isFirstDiffficulty ? true : levelValue.difficulties[previousDifficulty].solved;

  if (!previousLevelSolved) return <Lock />;

  if (previousDifficultySolved) return <Trophy style={{ color: levelValue.difficulties[difficulty].solved ? DIFFICULTY_COLORS[difficulty] : "#0A0A23" }} />;

  return <Lock />;
};
