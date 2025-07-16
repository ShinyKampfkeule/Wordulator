import { Button } from "@/components/ui/button";
import { CurrentLevelInterface } from "@/interfaces/currentLevelInterface";
import { BtnVariant } from "@/types/btnVariant";
import { CalculatorKeyType } from "@/types/CalculatorKeyType";
import { Dispatch, JSX, SetStateAction } from "react";
import { KEY_BEHAVIOR } from "../mappings/keyBehavior";
import { handleBasicKeyInput } from "../functions/handleBasicKeyInput";

interface Props {
  calculatorKey: CalculatorKeyType;
  btn_variant: BtnVariant;
  btn_disabled: boolean;
  playerSolution: string;
  currentLevel: CurrentLevelInterface;
  setShowCompletedPopup: Dispatch<SetStateAction<boolean>>;
  setPlayerSolution: Dispatch<SetStateAction<string>>;
  btn_content: string | JSX.Element;
}

export const CalculatorKey = ({
  calculatorKey,
  btn_variant,
  btn_disabled,
  playerSolution,
  currentLevel,
  setShowCompletedPopup,
  setPlayerSolution,
  btn_content,
}: Props) => {
  return (
    <Button
      variant={btn_variant}
      className="w-10 h-10"
      disabled={btn_disabled}
      onClick={() => {
        if (KEY_BEHAVIOR[calculatorKey]) {
          KEY_BEHAVIOR[calculatorKey](playerSolution, currentLevel, setShowCompletedPopup, setPlayerSolution);
        } else {
          handleBasicKeyInput(playerSolution, calculatorKey, setPlayerSolution);
        }
      }}
    >
      {btn_content}
    </Button>
  );
};
