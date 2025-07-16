import { Button } from "@/components/ui/button";
import { LevelDataInterface } from "@/interfaces/levelDataInterface";
import { Play } from "lucide-react";
import { Dispatch, SetStateAction } from "react";

interface Props {
  setLevelData: Dispatch<SetStateAction<LevelDataInterface | null>>;
}

export const StepBackBtn = ({ setLevelData }: Props) => {
  return (
    <Button
      variant="secondary"
      onClick={() => setLevelData(null)}
    >
      <Play className="rotate-180" />
    </Button>
  );
};
