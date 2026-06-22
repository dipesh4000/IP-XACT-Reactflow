import { Background, BackgroundVariant } from "reactflow";
import { useSettingsStore } from "../../store/settingsStore";

export function BackgroundGrid() {
  const theme = useSettingsStore((state) => state.theme);
  const isDark = theme === "dark";

  return (
    <Background
      color={isDark ? "rgba(148, 163, 184, 0.18)" : "rgba(0, 0, 0, 0.08)"}
      gap={24}
      size={1.2}
      variant={BackgroundVariant.Dots}
    />
  );
}
