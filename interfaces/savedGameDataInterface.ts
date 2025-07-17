import { DifficultyStatisticsInterface } from "./difficultyStatisticsInterface";

export interface SavedGameDataInterface {
  [key: string]: {
    beginner: DifficultyStatisticsInterface;
    easy: DifficultyStatisticsInterface;
    medium: DifficultyStatisticsInterface;
    hard: DifficultyStatisticsInterface;
    impossible: DifficultyStatisticsInterface;
  };
}
