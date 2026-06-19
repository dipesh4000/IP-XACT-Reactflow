import { ReactFlowProvider } from "reactflow";
import { FlowCanvas } from "./components/graph/FlowCanvas";
import { ModelImportPanel } from "./components/import/ModelImportPanel";
import { InspectorPanel } from "./components/inspector/InspectorPanel";
import { SearchBar } from "./components/search/SearchBar";
import { useElkLayout } from "./hooks/useElkLayout";
import { useArchitectureStore } from "./store/architectureStore";
import { useGraphStore } from "./store/graphStore";
import { useSelectionStore } from "./store/selectionStore";

export function App() {
  const hasModel = useArchitectureStore((state) => state.model !== null);
  const componentCount = useArchitectureStore((state) => state.model?.components.length ?? 0);
  const connectionCount = useArchitectureStore((state) => state.model?.connections.length ?? 0);
  const clearModel = useArchitectureStore((state) => state.clearModel);
  const setGraphNodes = useGraphStore((state) => state.setNodes);
  const setGraphEdges = useGraphStore((state) => state.setEdges);
  const resetExpansion = useGraphStore((state) => state.resetExpansion);
  const selectNode = useSelectionStore((state) => state.selectNode);
  const setSearchQuery = useSelectionStore((state) => state.setSearchQuery);

  useElkLayout();

  function handleClearModel() {
    selectNode(null);
    setSearchQuery("");
    setGraphNodes([]);
    setGraphEdges([]);
    resetExpansion();
    clearModel();
  }

  return (
    <ReactFlowProvider>
      <main className="flex h-screen overflow-hidden bg-shell-950 text-slate-100">
        <section className="relative min-w-0 flex-1">
          <div className="absolute left-5 top-5 z-10 flex items-start gap-3">
            <div className="flex items-center gap-3">
              <h1 className="text-lg font-semibold text-slate-50">ip-xact</h1>
              {hasModel ? (
                <button
                  className="flex items-center gap-1.5 rounded-md border border-white/10 bg-white/5 px-2.5 py-1 text-xs font-medium text-slate-400 transition hover:bg-white/10 hover:text-slate-200"
                  onClick={handleClearModel}
                  title="Load new architecture"
                  type="button"
                >
                  <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                  </svg>
                  New
                </button>
              ) : null}
            </div>
            {hasModel ? (
              <p className="mt-1 text-xs text-slate-500">
                {componentCount} components / {connectionCount} connections
              </p>
            ) : null}
            <SearchBar />
          </div>
          <FlowCanvas />
          {!hasModel ? <ModelImportPanel /> : null}
        </section>
        <InspectorPanel />
      </main>
    </ReactFlowProvider>
  );
}
