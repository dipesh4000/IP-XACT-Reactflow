import { useSettingsStore } from "../../store/settingsStore";
import type { Connection } from "../../types";

interface ConnectionListProps {
  connections: Connection[];
  direction: "incoming" | "outgoing";
  getName: (id: string) => string;
  onSelect: (id: string) => void;
}

export function ConnectionList({ connections, direction, getName, onSelect }: ConnectionListProps) {
  const theme = useSettingsStore((state) => state.theme);
  const isDark = theme === "dark";

  if (connections.length === 0) {
    return (
      <div className={`rounded-lg py-4 text-center text-sm ${isDark ? "text-slate-500" : "text-slate-400"}`}>
        No {direction} connections.
      </div>
    );
  }

  return (
    <ul className="space-y-1.5">
      {connections.map((connection) => {
        const peerId = direction === "incoming" ? connection.sourceComponentId : connection.targetComponentId;
        const fromPort = direction === "incoming" ? connection.sourcePortId : connection.targetPortId;
        const toPort = direction === "incoming" ? connection.targetPortId : connection.sourcePortId;

        return (
          <li key={connection.id} className={`group rounded-lg p-3 transition ${isDark ? "bg-white/[0.03] hover:bg-white/[0.06] border border-white/5" : "bg-slate-50 border border-slate-100 hover:bg-slate-100 hover:border-slate-200"}`}>
            <button
              className={`mb-1.5 text-left text-sm font-semibold transition ${isDark ? "text-cyan-300 hover:text-cyan-200" : "text-cyan-600 hover:text-cyan-700"}`}
              onClick={() => onSelect(peerId)}
              type="button"
            >
              {getName(peerId)}
            </button>
            <div className={`flex items-center gap-1.5 font-mono text-[11px] ${isDark ? "text-slate-500" : "text-slate-400"}`}>
              <span className={`rounded px-1 py-0.5 ${isDark ? "bg-white/5" : "bg-slate-100"}`}>{fromPort}</span>
              <svg className="h-3 w-3 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
              <span className={`rounded px-1 py-0.5 ${isDark ? "bg-white/5" : "bg-slate-100"}`}>{toPort}</span>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
