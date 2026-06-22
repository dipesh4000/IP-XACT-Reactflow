import { MiniMap } from "reactflow";
import { useSettingsStore } from "../../store/settingsStore";

export function MiniMapPanel() {
  const theme = useSettingsStore((state) => state.theme);
  const isDark = theme === "dark";

  return (
    <MiniMap
      className={`!border ${
        isDark ? "!border-white/10 !bg-shell-950/90" : "!border-slate-300 !bg-white/90"
      }`}
      maskColor={isDark ? "rgba(2, 6, 23, 0.58)" : "rgba(255, 252, 249, 0.58)"}
      nodeBorderRadius={8}
      nodeColor={isDark ? "#334155" : "#94a3b8"}
      pannable
      zoomable
    />
  );
}
