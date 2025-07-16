import { LevelDataInterface } from "./levelDataInterface";

export interface CurrentLevelInterface {
  levelData: LevelDataInterface | null;
  levelDifficulty: "beginner" | "easy" | "medium" | "hard" | "impossible" | null;
  update: (newLevelData: LevelDataInterface | null, newLevelDifficulty: "beginner" | "easy" | "medium" | "hard" | "impossible" | null) => void;
}
