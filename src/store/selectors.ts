import { useArchitectureStore } from "./architectureStore";
import { useSelectionStore } from "./selectionStore";
import { isEdgeDimmed, isEdgeHighlighted } from "../lib/focus/nodeFocus";
import type { EdgeVisualState } from "../types";

export function getEdgeVisualState(edgeId: string): EdgeVisualState {
  const selection = useSelectionStore.getState();

  if (isEdgeHighlighted(edgeId, selection.highlightedEdgeIds)) {
    return "highlighted";
  }

  if (
    isEdgeDimmed(edgeId, {
      selectedNodeIds: selection.selectedNodeIds,
      selectionFocusNodeIds: selection.highlightedNodeIds,
      selectionFocusEdgeIds: selection.highlightedEdgeIds,
      searchQuery: selection.searchQuery,
      searchMatchNodeIds: selection.searchMatchNodeIds,
    })
  ) {
    return "dimmed";
  }

  return "neutral";
}

export function getConnectedComponentNames(componentId: string): string[] {
  const architecture = useArchitectureStore.getState();
  const names = new Set<string>();

  for (const connection of architecture.getIncoming(componentId)) {
    const component = architecture.getComponent(connection.sourceComponentId);
    if (component) {
      names.add(component.name);
    }
  }

  for (const connection of architecture.getOutgoing(componentId)) {
    const component = architecture.getComponent(connection.targetComponentId);
    if (component) {
      names.add(component.name);
    }
  }

  return [...names].sort();
}
