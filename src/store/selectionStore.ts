import { create } from "zustand";
import { useArchitectureStore } from "./architectureStore";
import { useGraphStore } from "./graphStore";

interface SelectionStore {
  selectedNodeId: string | null;
  selectedNodeIds: Set<string>;
  expandedNodeId: string | null;
  searchQuery: string;
  highlightedNodeIds: Set<string>;
  highlightedEdgeIds: Set<string>;
  selectNode: (id: string | null, options?: { additive?: boolean }) => void;
  clearSelection: () => void;
  expandNode: (id: string | null) => void;
  setSearchQuery: (query: string) => void;
}

function emptySets() {
  return {
    highlightedNodeIds: new Set<string>(),
    highlightedEdgeIds: new Set<string>(),
    selectedNodeIds: new Set<string>()
  };
}

function buildSelectionState(selectedIds: Set<string>) {
  const architecture = useArchitectureStore.getState();
  const selectedNodeIds = new Set(selectedIds);
  const highlightedNodeIds = new Set<string>();
  const highlightedEdgeIds = new Set<string>();
  const selectedArray = [...selectedNodeIds];
  const primarySelectedNodeId = selectedArray[selectedArray.length - 1] ?? null;

  if (selectedNodeIds.size === 0) {
    return {
      selectedNodeId: null,
      selectedNodeIds,
      highlightedNodeIds,
      highlightedEdgeIds
    };
  }

  if (selectedNodeIds.size === 1) {
    const [selectedNodeId] = selectedNodeIds;
    if (selectedNodeId) {
      highlightedNodeIds.add(selectedNodeId);
      for (const connection of architecture.getIncoming(selectedNodeId)) {
        highlightedNodeIds.add(connection.sourceComponentId);
        highlightedEdgeIds.add(connection.id);
      }
      for (const connection of architecture.getOutgoing(selectedNodeId)) {
        highlightedNodeIds.add(connection.targetComponentId);
        highlightedEdgeIds.add(connection.id);
      }
      return {
        selectedNodeId,
        selectedNodeIds,
        highlightedNodeIds,
        highlightedEdgeIds
      };
    }
  }

  for (const nodeId of selectedNodeIds) {
    highlightedNodeIds.add(nodeId);
  }

  for (const connection of architecture.model?.connections ?? []) {
    if (selectedNodeIds.has(connection.sourceComponentId) && selectedNodeIds.has(connection.targetComponentId)) {
      highlightedEdgeIds.add(connection.id);
    }
  }

  return {
    selectedNodeId: primarySelectedNodeId,
    selectedNodeIds,
    highlightedNodeIds,
    highlightedEdgeIds
  };
}

export const useSelectionStore = create<SelectionStore>((set) => ({
  selectedNodeId: null,
  expandedNodeId: null,
  searchQuery: "",
  ...emptySets(),
  selectNode: (id, options) => {
    const architecture = useArchitectureStore.getState();
    const model = architecture.model;

    if (!id || !model) {
      useGraphStore.setState({ sidebarCollapsed: true });
      set({ selectedNodeId: null, ...emptySets() });
      return;
    }

    useGraphStore.setState({ sidebarCollapsed: false });
    const currentIds = new Set(useSelectionStore.getState().selectedNodeIds);
    const shouldToggle = options?.additive ?? false;

    if (shouldToggle) {
      if (currentIds.has(id)) {
        currentIds.delete(id);
      } else {
        currentIds.add(id);
      }
    } else {
      currentIds.clear();
      currentIds.add(id);
    }

    const selectionState = buildSelectionState(currentIds);
    set(selectionState);
  },
  clearSelection: () => {
    useGraphStore.setState({ sidebarCollapsed: true });
    set({ selectedNodeId: null, ...emptySets() });
  },
  expandNode: (id) => set((state) => ({ expandedNodeId: state.expandedNodeId === id ? null : id })),
  setSearchQuery: (query) => set({ searchQuery: query })
}));
