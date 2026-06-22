import { create } from "zustand";

type Theme = "dark" | "light";

interface SettingsStore {
  theme: Theme;
  nonInteractiveThreshold: number;
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
  setNonInteractiveThreshold: (threshold: number) => void;
}

function getInitialTheme(): Theme {
  if (typeof window === "undefined") return "dark";
  const stored = localStorage.getItem("ip-xact-theme");
  if (stored === "light" || stored === "dark") return stored;
  return window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";
}

export const useSettingsStore = create<SettingsStore>((set, get) => ({
  theme: getInitialTheme(),
  nonInteractiveThreshold: 5000,
  setTheme: (theme) => {
    localStorage.setItem("ip-xact-theme", theme);
    set({ theme });
  },
  toggleTheme: () => {
    const next = get().theme === "dark" ? "light" : "dark";
    localStorage.setItem("ip-xact-theme", next);
    set({ theme: next });
  },
  setNonInteractiveThreshold: (threshold) => set({ nonInteractiveThreshold: threshold })
}));
