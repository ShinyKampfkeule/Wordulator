import { GeneralHeader } from "@/features/generalHeader/components/generalHeader";
import { CurrentLevelInterface } from "@/interfaces/currentLevelInterface";
import { Dispatch, SetStateAction, useState } from "react";
import { SolutionDisplay } from "./solutionDisplay";
import { Calculator } from "./calculator";
import { HeaderTitle } from "./headerTitle";

interface Props {
  currentLevel: CurrentLevelInterface;
  setShowCompletedPopup: Dispatch<SetStateAction<boolean>>;
}

export const GameContainer = ({ currentLevel, setShowCompletedPopup }: Props) => {
  const [playerSolution, setPlayerSolution] = useState("0");

  return (
    <>
      <GeneralHeader
        destination="/levelSelect"
        titleComponent={<HeaderTitle currentLevel={currentLevel} />}
      />
      <div className="grow flex flex-col justify-between items-center p-5">
        <SolutionDisplay
          currentLevel={currentLevel}
          playerSolution={playerSolution}
        />
        <Calculator
          playerSolution={playerSolution}
          setPlayerSolution={setPlayerSolution}
          currentLevel={currentLevel}
          setShowCompletedPopup={setShowCompletedPopup}
        />
      </div>
    </>
  );
};
