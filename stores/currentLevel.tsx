import { create } from "zustand";
import { CurrentLevelInterface } from "@/interfaces/currentLevelInterface";

export const useCurrentLevelStore = create<CurrentLevelInterface>((set) => ({
  levelData: null,
  levelDifficulty: null,
  update: (newLevelData, newLevelDifficulty) => set(() => ({ levelData: newLevelData, levelDifficulty: newLevelDifficulty })),
}));
