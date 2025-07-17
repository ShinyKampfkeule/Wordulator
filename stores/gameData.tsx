import { GameDataInterface } from "@/interfaces/gameDataInterface";
import { LevelsInterface } from "@/interfaces/levelsInterface";
import { levels } from "@/public/data/levels";
import { create } from "zustand";

export const useGameDataStore = create<GameDataInterface>((set) => ({
  levels: levels,
  updateLevels: (updatedLevels: LevelsInterface) => set({ levels: updatedLevels }),
}));
