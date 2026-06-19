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

  return (
    <Panel className="relative h-full w-[360px] shrink-0 overflow-y-auto p-5">
      <button
        className="absolute right-3 top-3 z-10 flex h-7 w-7 items-center justify-center rounded-md border border-white/10 bg-white/5 text-slate-500 transition hover:bg-white/10 hover:text-slate-200"
        onClick={toggleSidebar}
        title="Collapse sidebar"
        type="button"
      >
        <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      <div className="mb-5">
        <Badge color={nodeColorMap[component.type].border}>{component.type}</Badge>
        <h2 className="mt-3 text-xl font-semibold text-slate-50">{component.name}</h2>
        <p className="mt-1 font-mono text-xs text-slate-500">{component.id}</p>
      </div>

      <InspectorSection title="Ports">
        <ul className="space-y-2">
          {component.ports.map((port) => (
            <li key={port.id} className="flex items-center justify-between rounded-md bg-white/[0.03] px-3 py-2 text-sm">
              <span className="text-slate-200">{port.name}</span>
              <span className="font-mono text-xs text-slate-500">
                {port.direction}
                {port.width ? `:${port.width}` : ""}
              </span>
            </li>
          ))}
        </ul>
      </InspectorSection>

      <InspectorSection title="Registers">
        <ul className="space-y-2">
          {component.registers.map((register) => (
            <li key={register.id} className="rounded-md bg-white/[0.03] px-3 py-2">
              <div className="flex items-center justify-between gap-3 text-sm">
                <span className="text-slate-200">{register.name}</span>
                {register.address ? <span className="font-mono text-xs text-slate-500">{register.address}</span> : null}
              </div>
              {register.description ? <p className="mt-1 text-xs text-slate-500">{register.description}</p> : null}
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
    </Panel>
  );
}
