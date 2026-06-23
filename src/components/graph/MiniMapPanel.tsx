import { MiniMap } from "reactflow";
import { useSettingsStore } from "../../store/settingsStore";

export function MiniMapPanel() {
  const theme = useSettingsStore((state) => state.theme);
  const isDark = theme === "dark";

  return (
    <MiniMap
      className={`!border !shadow-lg ${
        isDark ? "!border-white/10 !bg-shell-950/90" : "!border-[#d6cfc4] !bg-[#f5f0e8]/95"
      }`}
      maskColor={isDark ? "rgba(2, 6, 23, 0.58)" : "rgba(6, 8, 13, 0.12)"}
      nodeBorderRadius={8}
      nodeColor={isDark ? "#334155" : "#94a3b8"}
      pannable
      zoomable
    />
  );
}
