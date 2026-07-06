import { useShallow } from "zustand/react/shallow";
import { useSelectionStore } from "../store/selectionStore";
import { getNodeFocusState } from "../lib/focus/nodeFocus";

export function useNodeFocus(nodeId: string) {
  return useSelectionStore(
    useShallow((state) =>
      getNodeFocusState(nodeId, {
        selectedNodeIds: state.selectedNodeIds,
        selectionFocusNodeIds: state.highlightedNodeIds,
        searchQuery: state.searchQuery,
        searchMatchNodeIds: state.searchMatchNodeIds,
      })
    )
  );
}
