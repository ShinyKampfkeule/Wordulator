import { DifficultyInterface } from "./difficultyInterface";

export interface LevelInterface {
  result: number;
  beginner: DifficultyInterface;
  easy: DifficultyInterface;
  medium: DifficultyInterface;
  hard: DifficultyInterface;
  impossible: DifficultyInterface;
}
