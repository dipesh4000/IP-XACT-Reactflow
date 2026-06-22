import type { PropsWithChildren } from "react";
import { useSettingsStore } from "../../store/settingsStore";

interface InspectorSectionProps {
  title: string;
}

export function InspectorSection({ title, children }: PropsWithChildren<InspectorSectionProps>) {
  const theme = useSettingsStore((state) => state.theme);
  const isDark = theme === "dark";

  return (
    <section className={`border-t pt-4 ${isDark ? "border-white/10" : "border-slate-200"}`}>
      <h3 className={`mb-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider ${isDark ? "text-slate-500" : "text-slate-400"}`}>
        <span className={`inline-block h-1 w-1 rounded-full ${isDark ? "bg-cyan-400" : "bg-cyan-500"}`}></span>
        {title}
      </h3>
      {children}
    </section>
  );
}
