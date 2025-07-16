import { Button } from "@/components/ui/button";
import { CurrentLevelInterface } from "@/interfaces/currentLevelInterface";
import { Delete } from "lucide-react";
import { Dispatch, JSX, SetStateAction } from "react";
import { CalculatorDisplay } from "./calculatorDisplay";
import { CalculatorKeypad } from "./calculatorKeypad";

interface Props {
  playerSolution: string;
  setPlayerSolution: Dispatch<SetStateAction<string>>;
  currentLevel: CurrentLevelInterface;
  setShowCompletedPopup: Dispatch<SetStateAction<boolean>>;
}

export const Calculator = ({ playerSolution, setPlayerSolution, currentLevel, setShowCompletedPopup }: Props) => {
  return (
    <div className="flex flex-col items-center justify-end gap-1">
      <CalculatorDisplay playerSolution={playerSolution} />
      <CalculatorKeypad
        playerSolution={playerSolution}
        setPlayerSolution={setPlayerSolution}
        currentLevel={currentLevel}
        setShowCompletedPopup={setShowCompletedPopup}
      />
    </div>
  );
};
