import { create } from "zustand";
import { useArchitectureStore } from "./architectureStore";
import { useGraphStore } from "./graphStore";

interface SelectionStore {
  selectedNodeId: string | null;
  expandedNodeId: string | null;
  searchQuery: string;
  highlightedNodeIds: Set<string>;
  highlightedEdgeIds: Set<string>;
  selectNode: (id: string | null) => void;
  expandNode: (id: string | null) => void;
  setSearchQuery: (query: string) => void;
}

function emptySets() {
  return {
    highlightedNodeIds: new Set<string>(),
    highlightedEdgeIds: new Set<string>()
  };
}

export const useSelectionStore = create<SelectionStore>((set) => ({
  selectedNodeId: null,
  expandedNodeId: null,
  searchQuery: "",
  ...emptySets(),
  selectNode: (id) => {
    const architecture = useArchitectureStore.getState();
    const model = architecture.model;

    if (!id || !model) {
      useGraphStore.setState({ sidebarCollapsed: true });
      set({ selectedNodeId: id, ...emptySets() });
      return;
    }

    useGraphStore.setState({ sidebarCollapsed: false });

    const highlightedNodeIds = new Set<string>([id]);
    const highlightedEdgeIds = new Set<string>(architecture.edgeIdsByComponentId.get(id) ?? []);

    for (const connection of architecture.getIncoming(id)) {
      highlightedNodeIds.add(connection.sourceComponentId);
    }

    for (const connection of architecture.getOutgoing(id)) {
      highlightedNodeIds.add(connection.targetComponentId);
    }

    set({ selectedNodeId: id, highlightedNodeIds, highlightedEdgeIds });
  },
  expandNode: (id) => set((state) => ({ expandedNodeId: state.expandedNodeId === id ? null : id })),
  setSearchQuery: (query) => set({ searchQuery: query })
}));
