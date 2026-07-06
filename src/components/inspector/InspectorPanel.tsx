import { nodeColorMap } from "../../lib/transform/colorMap";
import { useArchitectureStore } from "../../store/architectureStore";
import { useGraphStore } from "../../store/graphStore";
import { useSelectionStore } from "../../store/selectionStore";
import { Badge } from "../ui/Badge";
import { Panel } from "../ui/Panel";
import { ConnectionList } from "./ConnectionList";
import { InspectorSection } from "./InspectorSection";
import { useFitViewOnSelect } from "../../hooks/useFitViewOnSelect";
import type { Connection } from "../../types";

const EMPTY_CONNECTIONS: Connection[] = [];

export function InspectorPanel() {
  const selectedNodeId = useSelectionStore((state) => state.selectedNodeId);
  const component = useArchitectureStore((state) => (selectedNodeId ? state.componentById.get(selectedNodeId) : undefined));
  const incoming = useArchitectureStore((state) => (selectedNodeId ? state.getIncoming(selectedNodeId) : EMPTY_CONNECTIONS));
  const outgoing = useArchitectureStore((state) => (selectedNodeId ? state.getOutgoing(selectedNodeId) : EMPTY_CONNECTIONS));
  const getComponent = useArchitectureStore((state) => state.getComponent);
  const focusNode = useFitViewOnSelect();
  const sidebarCollapsed = useGraphStore((state) => state.sidebarCollapsed);
  const toggleSidebar = useGraphStore((state) => state.toggleSidebar);

  if (!component || sidebarCollapsed) {
    return null;
  }

  const colors = nodeColorMap[component.type];

  return (
    <Panel className="relative h-full w-[360px] shrink-0 overflow-y-auto transition-all duration-300">
      <div className="relative border-b border-white/10 p-5">
        <div className="absolute left-0 top-0 h-1 w-full" style={{ backgroundColor: colors.base }} />
        <button
          className="absolute right-3 top-4 z-10 flex h-7 w-7 items-center justify-center rounded-md border border-white/10 bg-white/5 text-slate-500 transition hover:bg-white/10 hover:text-slate-200"
          onClick={toggleSidebar}
          title="Collapse sidebar"
          type="button"
        >
          <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="flex items-start gap-3">
          <div
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg text-sm font-bold"
            style={{
              backgroundColor: `${colors.base}20`,
              color: colors.border,
              border: `1px solid ${colors.border}40`,
            }}
          >
            {component.type.slice(0, 2).toUpperCase()}
          </div>
          <div className="min-w-0 flex-1">
            <Badge color={colors.border}>{component.type}</Badge>
            <h2 className="mt-2 text-lg font-semibold leading-tight text-slate-50">{component.name}</h2>
            <p className="mt-1 font-mono text-[11px] text-slate-500">{component.id}</p>
          </div>
        </div>
      </div>

      <div className="flex gap-3 border-b border-white/10 bg-white/[0.02] px-5 py-3">
        <div className="flex-1 text-center">
          <p className="text-lg font-semibold text-slate-200">{component.ports.length}</p>
          <p className="text-[10px] font-medium uppercase text-slate-500">Ports</p>
        </div>
        <div className="w-px bg-white/10"></div>
        <div className="flex-1 text-center">
          <p className="text-lg font-semibold text-slate-200">{component.registers.length}</p>
          <p className="text-[10px] font-medium uppercase text-slate-500">Registers</p>
        </div>
        <div className="w-px bg-white/10"></div>
        <div className="flex-1 text-center">
          <p className="text-lg font-semibold text-slate-200">{incoming.length + outgoing.length}</p>
          <p className="text-[10px] font-medium uppercase text-slate-500">Connections</p>
        </div>
      </div>

      <div className="p-5">
        <InspectorSection title="Ports">
          <ul className="space-y-1.5">
            {component.ports.map((port) => (
              <li
                key={port.id}
                className="group flex items-center justify-between rounded-lg bg-white/[0.03] px-3 py-2.5 text-sm transition hover:bg-white/[0.06]"
              >
                <div className="flex items-center gap-2">
                  <span
                    className={`h-1.5 w-1.5 rounded-full ${
                      port.direction === "in" ? "bg-emerald-400" : port.direction === "out" ? "bg-amber-400" : "bg-slate-400"
                    }`}
                  ></span>
                  <span className="font-medium text-slate-200">{port.name}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span
                    className={`rounded px-1.5 py-0.5 text-[10px] font-medium uppercase ${
                      port.direction === "in"
                        ? "bg-emerald-500/10 text-emerald-400"
                        : port.direction === "out"
                          ? "bg-amber-500/10 text-amber-400"
                          : "bg-slate-500/10 text-slate-400"
                    }`}
                  >
                    {port.direction}
                  </span>
                  {port.width ? <span className="font-mono text-xs text-slate-500">{port.width}b</span> : null}
                </div>
              </li>
            ))}
          </ul>
        </InspectorSection>

        <InspectorSection title="Registers">
          <ul className="space-y-1.5">
            {component.registers.map((register) => (
              <li key={register.id} className="rounded-lg bg-white/[0.03] px-3 py-2.5 transition hover:bg-white/[0.06]">
                <div className="flex items-center justify-between gap-3 text-sm">
                  <span className="font-medium text-slate-200">{register.name}</span>
                  {register.address ? (
                    <span className="rounded bg-white/5 px-1.5 py-0.5 font-mono text-[10px] text-slate-400">{register.address}</span>
                  ) : null}
                </div>
                {register.description ? (
                  <p className="mt-1.5 text-xs leading-relaxed text-slate-500">{register.description}</p>
                ) : null}
              </li>
            ))}
          </ul>
        </InspectorSection>

        <InspectorSection title="Incoming">
          <ConnectionList connections={incoming} direction="incoming" getName={(id) => getComponent(id)?.name ?? id} onSelect={focusNode} />
        </InspectorSection>

        <InspectorSection title="Outgoing">
          <ConnectionList connections={outgoing} direction="outgoing" getName={(id) => getComponent(id)?.name ?? id} onSelect={focusNode} />
        </InspectorSection>
      </div>
    </Panel>
  );
}
