import { CurrentLevelInterface } from "@/interfaces/currentLevelInterface";
import { BtnVariant } from "@/types/btnVariant";
import { CalculatorKeyType } from "@/types/CalculatorKeyType";
import { Delete } from "lucide-react";
import { Dispatch, JSX, SetStateAction } from "react";
import { CalculatorKey } from "../components/calculatorKey";

const KEY_CONFIG: Record<string, { variant: BtnVariant; content?: JSX.Element | string }> = {
  "?": { variant: "calculator_tip" },
  "=": { variant: "calculator_result" },
  delete: { variant: "calculator_delete", content: <Delete className="size-5" /> },
};

export const getCalculatorKeys = (
  playerSolution: string,
  setPlayerSolution: Dispatch<SetStateAction<string>>,
  currentLevel: CurrentLevelInterface,
  setShowCompletedPopup: Dispatch<SetStateAction<boolean>>
) => {
  const calculatorKeys: CalculatorKeyType[] = [".", "0", "delete", "=", "?", "1", "2", "3", "+", "-", "4", "5", "6", "*", "/", "7", "8", "9", "(", ")"];
  const available_chars = Object.keys(currentLevel.levelData?.levelValue.difficulties[currentLevel.levelDifficulty!].symbolCount!);

  return calculatorKeys.map((calculatorKey) => {
    let config = KEY_CONFIG[calculatorKey] || { variant: "calculator_active" };
    let btn_disabled = !available_chars.includes(calculatorKey) && !KEY_CONFIG[calculatorKey];
    let btn_variant = btn_disabled ? "calculator_inactive" : config.variant;
    let btn_content = config.content ?? calculatorKey;

    return (
      <CalculatorKey
        key={calculatorKey}
        calculatorKey={calculatorKey}
        btn_variant={btn_variant}
        btn_disabled={btn_disabled}
        playerSolution={playerSolution}
        currentLevel={currentLevel}
        setShowCompletedPopup={setShowCompletedPopup}
        setPlayerSolution={setPlayerSolution}
        btn_content={btn_content}
      />
    );
  });
};
