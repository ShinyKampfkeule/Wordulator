import { CurrentLevelInterface } from "@/interfaces/currentLevelInterface";
import { Dispatch, JSX, SetStateAction } from "react";
import { getCalculatorKeys } from "../functions/getCalculatorKeys";

interface Props {
  playerSolution: string;
  setPlayerSolution: Dispatch<SetStateAction<string>>;
  currentLevel: CurrentLevelInterface;
  setShowCompletedPopup: Dispatch<SetStateAction<boolean>>;
}

export const CalculatorKeypad = ({ playerSolution, setPlayerSolution, currentLevel, setShowCompletedPopup }: Props) => {
  const calculatorKeys = getCalculatorKeys(playerSolution, setPlayerSolution, currentLevel, setShowCompletedPopup);

  return <div className="flex flex-wrap-reverse gap-1 w-54">{calculatorKeys}</div>;
};
