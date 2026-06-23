import { useEffect, useState } from "react";
import { ReactFlowProvider } from "reactflow";
import { FlowCanvas } from "./components/graph/FlowCanvas";
import { ModelImportPanel } from "./components/import/ModelImportPanel";
import { InspectorPanel } from "./components/inspector/InspectorPanel";
import { SearchBar } from "./components/search/SearchBar";
import { ThemeToggle } from "./components/ui/ThemeToggle";
import { useElkLayout } from "./hooks/useElkLayout";
import { exportGraph } from "./lib/export";
import { useArchitectureStore } from "./store/architectureStore";
import { useGraphStore } from "./store/graphStore";
import { useSelectionStore } from "./store/selectionStore";
import { useSettingsStore } from "./store/settingsStore";

function AppInner() {
  const hasModel = useArchitectureStore((state) => state.model !== null);
  const componentCount = useArchitectureStore((state) => state.model?.components.length ?? 0);
  const connectionCount = useArchitectureStore((state) => state.model?.connections.length ?? 0);
  const clearModel = useArchitectureStore((state) => state.clearModel);
  const selectedNodeId = useSelectionStore((state) => state.selectedNodeId);
  const selectedNodeIds = useSelectionStore((state) => state.selectedNodeIds);
  const sidebarCollapsed = useGraphStore((state) => state.sidebarCollapsed);
  const setGraphNodes = useGraphStore((state) => state.setNodes);
  const setGraphEdges = useGraphStore((state) => state.setEdges);
  const resetExpansion = useGraphStore((state) => state.resetExpansion);
  const clearSelection = useSelectionStore((state) => state.clearSelection);
  const setSearchQuery = useSelectionStore((state) => state.setSearchQuery);
  const theme = useSettingsStore((state) => state.theme);
  const isDark = theme === "dark";
  const [isExporting, setIsExporting] = useState(false);
  const [exportError, setExportError] = useState<string | null>(null);

  useElkLayout();

  // Apply theme to document
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme, isDark]);

  function handleClearModel() {
    clearSelection();
    setSearchQuery("");
    setGraphNodes([]);
    setGraphEdges([]);
    resetExpansion();
    clearModel();
  }

  async function handleExport(scope: "full" | "selection" = "full") {
    setIsExporting(true);
    setExportError(null);
    try {
      await exportGraph("svg", { scope });
    } catch (error) {
      const message = error instanceof Error ? error.message : "Export failed";
      setExportError(message);
      setTimeout(() => setExportError(null), 4000);
    } finally {
      setIsExporting(false);
    }
  }

  const mainClass = `grid h-screen overflow-hidden transition-colors duration-200 ${
    isDark ? "bg-shell-950 text-slate-100" : "bg-[#f5f0e8] text-[#1a1a1a]"
  } ${selectedNodeId && !sidebarCollapsed ? "grid-cols-[minmax(0,1fr)_360px]" : "grid-cols-[minmax(0,1fr)]"}`;

  return (
    <main className={mainClass}>
      <section className="relative min-w-0 overflow-hidden">
        <div className="absolute left-5 top-5 z-10 flex items-start gap-3">
          <div className="flex items-center gap-3">
            <h1 className={`text-lg font-semibold ${isDark ? "text-slate-50" : "text-slate-900"}`}>ip-xact</h1>
            {hasModel ? (
              <button
                className={`flex items-center gap-1.5 rounded-md border px-2.5 py-1 text-xs font-medium transition ${
                  isDark
                    ? "border-white/10 bg-white/5 text-slate-400 hover:bg-white/10 hover:text-slate-200"
                    : "border-slate-300 bg-white text-slate-600 hover:bg-slate-50 hover:text-slate-800 shadow-sm"
                }`}
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
            <>
              <p className={`mt-1 text-xs font-medium ${isDark ? "text-slate-500" : "text-slate-500"}`}>
                {componentCount} components / {connectionCount} connections
              </p>
              {selectedNodeIds.size > 1 ? (
                <p className={`mt-0.5 text-[11px] font-medium ${isDark ? "text-cyan-300/80" : "text-cyan-700"}`}>
                  {selectedNodeIds.size} selected for export
                </p>
              ) : null}
            </>
          ) : null}
          <SearchBar />
        </div>
        <div className="absolute right-5 top-5 z-10 flex items-center gap-2">
          {hasModel ? (
            <div className="flex items-center gap-2">
              <button
                className={`flex items-center gap-1.5 rounded-md border px-2.5 py-1.5 text-xs font-medium transition ${
                  isDark
                    ? "border-white/10 bg-white/5 text-slate-400 hover:bg-white/10 hover:text-slate-200"
                    : "border-slate-300 bg-white text-slate-600 hover:bg-slate-50 hover:text-slate-800 shadow-sm"
                }`}
                disabled={isExporting}
                onClick={() => handleExport("full")}
                type="button"
              >
                <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                {isExporting ? "Exporting..." : "Export SVG"}
              </button>
              {selectedNodeIds.size > 0 && (
                <button
                  className={`flex items-center gap-1.5 rounded-md border px-2.5 py-1.5 text-xs font-medium transition ${
                    isDark
                      ? "border-cyan-300/30 bg-cyan-300/10 text-cyan-100 hover:bg-cyan-300/15"
                      : "border-cyan-600 bg-cyan-600 text-white hover:bg-cyan-700 shadow-sm"
                  }`}
                  disabled={isExporting}
                  onClick={() => handleExport("selection")}
                  type="button"
                >
                  <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                  Export Selected ({selectedNodeIds.size})
                </button>
              )}
            </div>
          ) : null}
          <ThemeToggle />
        </div>
        <FlowCanvas />
        {!hasModel ? <ModelImportPanel /> : null}
        {exportError ? (
          <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-50 px-4 py-2.5 rounded-lg border shadow-lg text-xs font-medium bg-red-50 text-red-700 border-red-200 dark:bg-red-950 dark:text-red-300 dark:border-red-800">
            {exportError}
          </div>
        ) : null}
      </section>
      <InspectorPanel />
    </main>
  );
}

export function App() {
  return (
    <ReactFlowProvider>
      <AppInner />
    </ReactFlowProvider>
  );
}
