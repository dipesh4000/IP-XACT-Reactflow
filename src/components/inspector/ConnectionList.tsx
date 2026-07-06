import type { Connection } from "../../types";

interface ConnectionListProps {
  connections: Connection[];
  direction: "incoming" | "outgoing";
  getName: (id: string) => string;
  onSelect: (id: string) => void;
}

export function ConnectionList({ connections, direction, getName, onSelect }: ConnectionListProps) {
  if (connections.length === 0) {
    return <div className="rounded-lg py-4 text-center text-sm text-slate-500">No {direction} connections.</div>;
  }

  return (
    <ul className="space-y-1.5">
      {connections.map((connection) => {
        const peerId = direction === "incoming" ? connection.sourceComponentId : connection.targetComponentId;
        const fromPort = direction === "incoming" ? connection.sourcePortId : connection.targetPortId;
        const toPort = direction === "incoming" ? connection.targetPortId : connection.sourcePortId;

        return (
          <li
            key={connection.id}
            className="group rounded-lg border border-white/5 bg-white/[0.03] p-3 transition hover:bg-white/[0.06]"
          >
            <button
              className="mb-1.5 text-left text-sm font-semibold text-slate-200 transition hover:text-white"
              onClick={() => onSelect(peerId)}
              type="button"
            >
              {getName(peerId)}
            </button>
            <div className="flex items-center gap-1.5 font-mono text-[11px] text-slate-500">
              <span className="rounded bg-white/5 px-1 py-0.5">{fromPort}</span>
              <svg className="h-3 w-3 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
              <span className="rounded bg-white/5 px-1 py-0.5">{toPort}</span>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
