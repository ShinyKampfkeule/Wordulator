import { Button } from "@/components/ui/button";
import { CurrentLevelInterface } from "@/interfaces/currentLevelInterface";
import { Menu, Play, Star } from "lucide-react";
import Link from "next/link";

interface Props {
  currentLevel: CurrentLevelInterface;
  showCompletedPopup: boolean;
}

export const CompletedPopup = ({ currentLevel, showCompletedPopup }: Props) => {
  if (!showCompletedPopup) return null;

  return (
    <div className="absolute w-screen h-screen bg-background/90 p-5 flex flex-col items-center gap-3">
      <div className="w-full flex gap-2 items-center justify-center">
        <div className="relative w-16 h-18">
          <Star className="size-16 absolute top-4 left-1 fill-[#4F5506] text-[#4F5506]" />
          <Star className="size-16 absolute top-3 fill-[#EEFF00] text-[#EEFF00]" />
        </div>
        <div className="relative w-16 h-18">
          <Star className="size-16 absolute top-1 left-1 fill-[#4F5506] text-[#4F5506]" />
          <Star className="size-16 absolute fill-[#EEFF00] text-[#EEFF00]" />
        </div>
        <div className="relative w-16 h-18">
          <Star className="size-16 absolute top-4 left-1 fill-[#4F5506] text-[#4F5506]" />
          <Star className="size-16 absolute top-3 fill-[#EEFF00] text-[#EEFF00]" />
        </div>
      </div>
      <div className="flex justify-center items-center">
        <span className="text-2xl">
          Level {currentLevel.levelData!.levelIndex + 1} - {currentLevel.levelDifficulty}
        </span>
      </div>
      <div className="flex flex-col items-center justify-center">
        <span className="text-2xl">{currentLevel.levelData!.levelName}</span>
        <span className="text-2xl rotate-x-180 rotate-y-180">{currentLevel.levelData!.levelValue[currentLevel.levelDifficulty!].solution}</span>
      </div>
      <div className="w-full">
        <div className="flex justify-between">
          <span>Solution</span>
          <span>0.1134</span>
        </div>
        <div className="flex justify-between">
          <span>Time</span>
          <span>0:02.518</span>
        </div>
        <div className="flex justify-between">
          <span>Tips</span>
          <span>0</span>
        </div>
      </div>
      <Button
        variant="primary"
        size="menu"
      >
        <Play className="size-6" />
        <span>Next</span>
      </Button>
      <Link href="/levelSelect">
        <Button
          variant="accent"
          size="menu"
        >
          <Menu className="size-6" />
          <span>Menu</span>
        </Button>
      </Link>
    </div>
  );
};
