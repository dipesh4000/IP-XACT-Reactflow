import { nodeColorMap } from "../../lib/transform/colorMap";
import { useArchitectureStore } from "../../store/architectureStore";
import { useGraphStore } from "../../store/graphStore";
import { useSelectionStore } from "../../store/selectionStore";
import { useSettingsStore } from "../../store/settingsStore";
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
  const theme = useSettingsStore((state) => state.theme);
  const isDark = theme === "dark";

  if (!component || sidebarCollapsed) {
    return null;
  }

  const colors = nodeColorMap[component.type];

  return (
    <Panel className="relative h-full w-[360px] shrink-0 overflow-y-auto transition-all duration-300">
      {/* Header with colored accent */}
      <div className={`relative border-b p-5 ${isDark ? "border-white/10" : "border-slate-200"}`}>
        <div
          className="absolute left-0 top-0 h-1 w-full"
          style={{ backgroundColor: colors.base }}
        />
        <button
          className={`absolute right-3 top-4 z-10 flex h-7 w-7 items-center justify-center rounded-md border transition ${
            isDark
              ? "border-white/10 bg-white/5 text-slate-500 hover:bg-white/10 hover:text-slate-200"
              : "border-slate-200 bg-white text-slate-400 hover:bg-slate-50 hover:text-slate-600 shadow-sm"
          }`}
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
              border: `1px solid ${colors.border}40`
            }}
          >
            {component.type.slice(0, 2).toUpperCase()}
          </div>
          <div className="min-w-0 flex-1">
            <Badge color={colors.border}>{component.type}</Badge>
            <h2 className={`mt-2 text-lg font-semibold leading-tight ${isDark ? "text-slate-50" : "text-slate-900"}`}>{component.name}</h2>
            <p className={`mt-1 font-mono text-[11px] ${isDark ? "text-slate-500" : "text-slate-400"}`}>{component.id}</p>
          </div>
        </div>
      </div>

      {/* Stats row */}
      <div className={`flex gap-3 border-b px-5 py-3 ${isDark ? "border-white/10 bg-white/[0.02]" : "border-slate-200 bg-slate-50"}`}>
        <div className="flex-1 text-center">
          <p className={`text-lg font-semibold ${isDark ? "text-slate-200" : "text-slate-700"}`}>{component.ports.length}</p>
          <p className={`text-[10px] font-medium uppercase ${isDark ? "text-slate-500" : "text-slate-400"}`}>Ports</p>
        </div>
        <div className={`w-px ${isDark ? "bg-white/10" : "bg-slate-200"}`}></div>
        <div className="flex-1 text-center">
          <p className={`text-lg font-semibold ${isDark ? "text-slate-200" : "text-slate-700"}`}>{component.registers.length}</p>
          <p className={`text-[10px] font-medium uppercase ${isDark ? "text-slate-500" : "text-slate-400"}`}>Registers</p>
        </div>
        <div className={`w-px ${isDark ? "bg-white/10" : "bg-slate-200"}`}></div>
        <div className="flex-1 text-center">
          <p className={`text-lg font-semibold ${isDark ? "text-slate-200" : "text-slate-700"}`}>{incoming.length + outgoing.length}</p>
          <p className={`text-[10px] font-medium uppercase ${isDark ? "text-slate-500" : "text-slate-400"}`}>Connections</p>
        </div>
      </div>

      {/* Content sections */}
      <div className="p-5">
        <InspectorSection title="Ports">
          <ul className="space-y-1.5">
            {component.ports.map((port) => (
              <li key={port.id} className={`group flex items-center justify-between rounded-lg px-3 py-2.5 text-sm transition ${isDark ? "bg-white/[0.03] hover:bg-white/[0.06]" : "bg-slate-50 border border-slate-100 hover:bg-slate-100 hover:border-slate-200"}`}>
                <div className="flex items-center gap-2">
                  <span className={`h-1.5 w-1.5 rounded-full ${
                    port.direction === "in" ? "bg-emerald-400" : port.direction === "out" ? "bg-amber-400" : "bg-slate-400"
                  }`}></span>
                  <span className={`font-medium ${isDark ? "text-slate-200" : "text-slate-700"}`}>{port.name}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className={`rounded px-1.5 py-0.5 text-[10px] font-medium uppercase ${
                    port.direction === "in" ? "bg-emerald-500/10 text-emerald-600" :
                    port.direction === "out" ? "bg-amber-500/10 text-amber-600" :
                    "bg-slate-500/10 text-slate-600"
                  }`}>
                    {port.direction}
                  </span>
                  {port.width ? (
                    <span className={`font-mono text-xs ${isDark ? "text-slate-500" : "text-slate-400"}`}>
                      {port.width}b
                    </span>
                  ) : null}
                </div>
              </li>
            ))}
          </ul>
        </InspectorSection>

        <InspectorSection title="Registers">
          <ul className="space-y-1.5">
            {component.registers.map((register) => (
              <li key={register.id} className={`rounded-lg px-3 py-2.5 transition ${isDark ? "bg-white/[0.03] hover:bg-white/[0.06]" : "bg-slate-50 border border-slate-100 hover:bg-slate-100 hover:border-slate-200"}`}>
                <div className="flex items-center justify-between gap-3 text-sm">
                  <span className={`font-medium ${isDark ? "text-slate-200" : "text-slate-700"}`}>{register.name}</span>
                  {register.address ? (
                    <span className={`rounded px-1.5 py-0.5 font-mono text-[10px] ${isDark ? "bg-white/5 text-slate-400" : "bg-slate-100 text-slate-500"}`}>
                      {register.address}
                    </span>
                  ) : null}
                </div>
                {register.description ? (
                  <p className={`mt-1.5 text-xs leading-relaxed ${isDark ? "text-slate-500" : "text-slate-500"}`}>{register.description}</p>
                ) : null}
              </li>
            ))}
          </ul>
        </InspectorSection>

        <InspectorSection title="Incoming">
          <ConnectionList connections={incoming} direction="incoming" getName={(id: string) => getComponent(id)?.name ?? id} onSelect={focusNode} />
        </InspectorSection>

        <InspectorSection title="Outgoing">
          <ConnectionList connections={outgoing} direction="outgoing" getName={(id: string) => getComponent(id)?.name ?? id} onSelect={focusNode} />
        </InspectorSection>
      </div>
    </Panel>
  );
}
