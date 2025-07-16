import { ScrollArea } from "@/components/ui/scroll-area";
import { createLevelEntries } from "../functions/createLevelEntries";
import { Dispatch, SetStateAction } from "react";
import { LevelDataInterface } from "@/interfaces/levelDataInterface";

interface Props {
  setLevelData: Dispatch<SetStateAction<LevelDataInterface | null>>;
}

export const LevelsList = ({ setLevelData }: Props) => {
  const levelEntries = createLevelEntries(setLevelData);

  return (
    <ScrollArea className="h-[calc(100%-100px)]">
      <div className="flex flex-col gap-2 px-5">{levelEntries}</div>
    </ScrollArea>
  );
};
