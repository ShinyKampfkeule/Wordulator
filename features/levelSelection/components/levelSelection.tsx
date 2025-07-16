import { GeneralHeader } from "@/features/generalHeader/components/generalHeader";
import { LevelsList } from "./levelsList";
import { Dispatch, SetStateAction } from "react";
import { LevelDataInterface } from "@/interfaces/levelDataInterface";

interface Props {
  setLevelData: Dispatch<SetStateAction<LevelDataInterface | null>>;
}

export const LevelSelection = ({ setLevelData }: Props) => {
  return (
    <div className="h-screen w-screen">
      <GeneralHeader
        destination="/"
        titleComponent={<span className="text-2xl">Level Selection</span>}
      />
      <LevelsList setLevelData={setLevelData} />
    </div>
  );
};
