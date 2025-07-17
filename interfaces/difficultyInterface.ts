import { DifficultyStatisticsInterface } from "./difficultyStatisticsInterface";
import { SymbolCountInterface } from "./symbolCountInterface";

export interface DifficultyInterface extends DifficultyStatisticsInterface {
  solution: string;
  symbolCount: SymbolCountInterface;
}
