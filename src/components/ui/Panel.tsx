import clsx from "clsx";
import type { PropsWithChildren } from "react";
import { useSettingsStore } from "../../store/settingsStore";

interface PanelProps {
  className?: string;
}

export function Panel({ children, className }: PropsWithChildren<PanelProps>) {
  const theme = useSettingsStore((state) => state.theme);
  const isDark = theme === "dark";

  return (
    <section
      className={clsx(
        "border shadow-xl backdrop-blur-sm",
        isDark
          ? "border-white/10 bg-shell-900/95"
          : "border-[#e5e0d8] bg-[#fffcf9]/95",
        className
      )}
    >
      {children}
    </section>
  );
}
