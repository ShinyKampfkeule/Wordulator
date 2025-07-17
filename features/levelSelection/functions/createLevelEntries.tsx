import { levels } from "@/public/data/levels";
import { LevelEntry } from "../components/levelEntry";
import { LevelInterface } from "@/interfaces/levelInterface";
import { Dispatch, JSX, SetStateAction } from "react";
import { LevelDataInterface } from "@/interfaces/levelDataInterface";

export const createLevelEntries = (setLevelData: Dispatch<SetStateAction<LevelDataInterface | null>>) => {
  let previousLevel: null | LevelInterface = null;
  const levelEntries: JSX.Element[] = [];

  Object.entries(levels).forEach(([levelName, levelValue], index) => {
    levelEntries.push(
      <LevelEntry
        key={levelName}
        levelName={levelName}
        levelValue={levelValue}
        index={index}
        previousLevel={previousLevel}
        setLevelData={setLevelData}
      />
    );

    previousLevel = levelValue;
  });

  return levelEntries;
};
