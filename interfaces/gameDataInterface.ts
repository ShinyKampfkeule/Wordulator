import { LevelsInterface } from "./levelsInterface";

export interface GameDataInterface {
  levels: LevelsInterface;
  updateLevels: (updatedLevels: LevelsInterface) => void;
}
