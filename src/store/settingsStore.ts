import { create } from "zustand";

interface SettingsStore {
  nonInteractiveThreshold: number;
  setNonInteractiveThreshold: (threshold: number) => void;
}

export const useSettingsStore = create<SettingsStore>((set) => ({
  nonInteractiveThreshold: 5000,
  setNonInteractiveThreshold: (threshold) => set({ nonInteractiveThreshold: threshold }),
}));
