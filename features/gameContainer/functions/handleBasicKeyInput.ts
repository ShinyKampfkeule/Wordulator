import { CalculatorKeyType } from "@/types/CalculatorKeyType";
import { SPECIAL_KEY_BEHAVIOR } from "../mappings/specialKeyBehavior";
import { Dispatch, SetStateAction } from "react";

export const handleBasicKeyInput = (playerSolution: string, calculatorKey: CalculatorKeyType, setPlayerSolution: Dispatch<SetStateAction<string>>) => {
  let newPlayerSolution = "";

  if (SPECIAL_KEY_BEHAVIOR[calculatorKey]) {
    newPlayerSolution = SPECIAL_KEY_BEHAVIOR[calculatorKey](playerSolution, calculatorKey);
  } else {
    newPlayerSolution = playerSolution === "0" ? calculatorKey : playerSolution + calculatorKey;
  }

  setPlayerSolution(newPlayerSolution);
};
