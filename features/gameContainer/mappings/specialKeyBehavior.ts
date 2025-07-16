import { CalculatorKeyType } from "@/types/CalculatorKeyType";

export const SPECIAL_KEY_BEHAVIOR: Record<string, (playerSolution: string, calculatorKey: CalculatorKeyType) => string> = {
  "0": (playerSolution, calculatorKey) => {
    return playerSolution === "0" ? playerSolution : playerSolution + calculatorKey;
  },
  ".": (playerSolution, calculatorKey) => {
    return playerSolution.includes(".") ? playerSolution : playerSolution + calculatorKey;
  },
};
