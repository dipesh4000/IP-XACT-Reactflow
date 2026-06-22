import { useSelectionStore } from "../store/selectionStore";

export function useNodeHighlighting(nodeId: string): {
  isSelected: boolean;
  isExpanded: boolean;
  isDimmed: boolean;
} {
  const isSelected = useSelectionStore((state) => state.selectedNodeIds.has(nodeId));
  const isExpanded = useSelectionStore((state) => state.expandedNodeId === nodeId);
  const isDimmed = useSelectionStore(
    (state) => state.highlightedNodeIds.size > 0 && !state.highlightedNodeIds.has(nodeId)
  );

  return { isSelected, isExpanded, isDimmed };
}
