import { SymbolCountInterface } from "./symbolCountInterface";

export interface DifficultyInterface {
  solution: string;
  symbolCount: SymbolCountInterface;
  solved: boolean;
  time: number;
  tips: number;
}
