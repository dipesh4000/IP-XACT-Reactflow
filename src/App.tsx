import { useCallback, useEffect, useRef, useState, type DragEvent } from "react";
import { useReactFlow } from "reactflow";
import { useKeyboardShortcuts } from "./hooks/useKeyboardShortcuts";
import { ReactFlowProvider } from "reactflow";
import { FlowCanvas } from "./components/graph/FlowCanvas";
import { ModelImportPanel } from "./components/import/ModelImportPanel";
import { InspectorPanel } from "./components/inspector/InspectorPanel";
import { AppNavbar } from "./components/layout/AppNavbar";
import type { SearchBarHandle } from "./components/search/SearchBar";
import { useGraphLayout } from "./hooks/useGraphLayout";
import { useLoadArchitecture } from "./hooks/useLoadArchitecture";
import { exportGraph } from "./lib/export";
import { isConvertibleCircuitFile } from "./lib/api/circuitApi";
import { RECOMMENDED_MAX_COMPONENTS } from "./lib/constants";
import { loadPersistedModel, useArchitectureStore } from "./store/architectureStore";
import { useGraphStore } from "./store/graphStore";
import { useSelectionStore } from "./store/selectionStore";

function AppInner() {
  const hasModel = useArchitectureStore((state) => state.model !== null);
  const componentCount = useArchitectureStore((state) => state.model?.components.length ?? 0);
  const connectionCount = useArchitectureStore((state) => state.model?.connections.length ?? 0);
  const loadModel = useArchitectureStore((state) => state.loadModel);
  const clearModel = useArchitectureStore((state) => state.clearModel);
  const selectedNodeId = useSelectionStore((state) => state.selectedNodeId);
  const selectedNodeIds = useSelectionStore((state) => state.selectedNodeIds);
  const sidebarCollapsed = useGraphStore((state) => state.sidebarCollapsed);
  const setGraphNodes = useGraphStore((state) => state.setNodes);
  const setGraphEdges = useGraphStore((state) => state.setEdges);
  const resetExpansion = useGraphStore((state) => state.resetExpansion);
  const setLayoutLoading = useGraphStore((state) => state.setLayoutLoading);
  const clearSelection = useSelectionStore((state) => state.clearSelection);
  const setSearchQuery = useSelectionStore((state) => state.setSearchQuery);
  const [isExporting, setIsExporting] = useState(false);
  const [exportError, setExportError] = useState<string | null>(null);
  const [importError, setImportError] = useState<string | null>(null);
  const [restoredFromStorage, setRestoredFromStorage] = useState(false);
  const [isDraggingFile, setIsDraggingFile] = useState(false);
  const [isImportOverlayOpen, setIsImportOverlayOpen] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const searchRef = useRef<SearchBarHandle>(null);
  const { fitView } = useReactFlow();
  const { loadFromText, loadFromFile } = useLoadArchitecture();

  useGraphLayout();

  useEffect(() => {
    try {
      const persisted = loadPersistedModel();
      if (persisted && persisted.components.length > 0) {
        setLayoutLoading(true);
        loadModel(persisted);
      }
    } catch {
      // Invalid persisted model is cleared in loadPersistedModel
    }
    setRestoredFromStorage(true);
  }, [loadModel, setLayoutLoading]);

  const handleClearModel = useCallback(() => {
    clearSelection();
    setSearchQuery("");
    setGraphNodes([]);
    setGraphEdges([]);
    resetExpansion();
    clearModel();
    setImportError(null);
  }, [clearModel, clearSelection, resetExpansion, setGraphEdges, setGraphNodes, setSearchQuery]);

  const handleImportText = useCallback(
    (text: string) => {
      loadFromText(text);
      setImportError(null);
      setIsImportOverlayOpen(false);
    },
    [loadFromText]
  );

  const handleImportFile = useCallback(
    async (file: File) => {
      if (hasModel) {
        handleClearModel();
      }
      await loadFromFile(file);
      setImportError(null);
      setIsImportOverlayOpen(false);
    },
    [handleClearModel, hasModel, loadFromFile]
  );

  const handleOpenFile = useCallback(() => {
    if (hasModel) {
      handleClearModel();
    }
    setIsImportOverlayOpen(true);
  }, [handleClearModel, hasModel]);

  const handleFitView = useCallback(() => {
    if (!hasModel) return;
    fitView({ padding: 0.18, duration: 300 });
  }, [fitView, hasModel]);

  const handleFind = useCallback(() => {
    if (!hasModel) return;
    searchRef.current?.focus();
  }, [hasModel]);

  const importDroppedFile = useCallback(
    async (file: File) => {
      try {
        if (hasModel) {
          handleClearModel();
        }
        if (isConvertibleCircuitFile(file)) {
          await loadFromFile(file);
        } else {
          const contents = await file.text();
          loadFromText(contents);
        }
        setImportError(null);
      } catch (error) {
        const message = error instanceof Error ? error.message : "Unable to read architecture file.";
        setImportError(message);
        setLayoutLoading(false);
      }
    },
    [handleClearModel, hasModel, loadFromFile, loadFromText, setLayoutLoading]
  );

  const handleFileInputChange = useCallback(
    async (event: React.ChangeEvent<HTMLInputElement>) => {
      const file = event.target.files?.[0];
      event.target.value = "";
      if (!file) return;
      await importDroppedFile(file);
    },
    [importDroppedFile]
  );

  const handleDragOver = useCallback((event: DragEvent<HTMLElement>) => {
    event.preventDefault();
    setIsDraggingFile(true);
  }, []);

  const handleDragLeave = useCallback((event: DragEvent<HTMLElement>) => {
    if (event.currentTarget === event.target) {
      setIsDraggingFile(false);
    }
  }, []);

  const handleDrop = useCallback(
    async (event: DragEvent<HTMLElement>) => {
      event.preventDefault();
      setIsDraggingFile(false);
      const file = event.dataTransfer.files[0];
      if (!file) return;
      await importDroppedFile(file);
    },
    [importDroppedFile]
  );

  const handleExport = useCallback(async (scope: "full" | "selection" = "full") => {
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
  }, []);

  useKeyboardShortcuts(
    {
      onOpenFile: handleOpenFile,
      onFitView: handleFitView,
      onFind: handleFind,
      onExport: () => {
        if (hasModel && !isExporting) {
          void handleExport("full");
        }
      },
      onExportSelection: () => {
        if (hasModel && selectedNodeIds.size > 0 && !isExporting) {
          void handleExport("selection");
        }
      },
    },
    true
  );

  const showLargeModelWarning = hasModel && componentCount > RECOMMENDED_MAX_COMPONENTS;
  const workspaceClass = `grid min-h-0 flex-1 ${
    selectedNodeId && !sidebarCollapsed ? "grid-cols-[minmax(0,1fr)_360px]" : "grid-cols-[minmax(0,1fr)]"
  }`;

  return (
    <main className="grid h-screen grid-rows-[auto_minmax(0,1fr)] overflow-hidden bg-neutral-950 text-slate-100">
      <input
        ref={fileInputRef}
        accept=".json,.xlsx,.xls,.xml,application/json"
        className="sr-only"
        onChange={handleFileInputChange}
        type="file"
      />

      <AppNavbar
        componentCount={componentCount}
        connectionCount={connectionCount}
        hasModel={hasModel}
        isExporting={isExporting}
        onExport={() => void handleExport("full")}
        onExportSelection={() => void handleExport("selection")}
        onFitView={handleFitView}
        onOpenFile={handleOpenFile}
        searchRef={searchRef}
        selectedCount={selectedNodeIds.size}
      />

      <div className={workspaceClass}>
        <section
          className="dot-grid-bg relative min-w-0 overflow-hidden"
          onDragLeave={handleDragLeave}
          onDragOver={handleDragOver}
          onDrop={handleDrop}
        >
          {isDraggingFile ? (
            <div className="pointer-events-none absolute inset-0 z-30 grid place-items-center border-2 border-dashed border-white/20 bg-white/5 backdrop-blur-sm">
              <p className="rounded-lg bg-neutral-950/90 px-4 py-2 text-sm font-medium text-slate-200">
                Drop JSON, Excel, or XML file to load
              </p>
            </div>
          ) : null}

          {showLargeModelWarning ? (
            <div className="absolute left-1/2 top-3 z-10 max-w-lg -translate-x-1/2 rounded-lg border border-amber-300/30 bg-amber-300/10 px-4 py-2 text-center text-xs text-amber-100">
              {componentCount} components exceeds the recommended {RECOMMENDED_MAX_COMPONENTS}. Layout may be dense.
            </div>
          ) : null}

          <FlowCanvas />
          {((!hasModel && restoredFromStorage) || isImportOverlayOpen) && (
            <ModelImportPanel error={importError} onLoad={handleImportText} onLoadFile={handleImportFile} />
          )}
          {exportError ? (
            <div className="absolute bottom-5 left-1/2 z-50 -translate-x-1/2 rounded-lg border border-red-800 bg-red-950 px-4 py-2.5 text-xs font-medium text-red-300 shadow-lg">
              {exportError}
            </div>
          ) : null}
          {importError && hasModel ? (
            <div className="absolute bottom-5 left-1/2 z-50 -translate-x-1/2 rounded-lg border border-red-800 bg-red-950 px-4 py-2.5 text-xs font-medium text-red-300 shadow-lg">
              {importError}
            </div>
          ) : null}
        </section>
        <InspectorPanel />
      </div>
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
