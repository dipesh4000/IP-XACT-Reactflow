/**
 * Canvas focus model — single source of truth for node/edge emphasis while
 * searching or inspecting a selection.
 *
 * Selection focus: selected node + direct neighbors stay emphasized; others dim.
 * Search focus: name matches stay emphasized; others dim.
 * Search takes priority when the query is non-empty.
 */

export interface FocusContext {
  selectedNodeIds: Set<string>;
  /** Selected node(s) plus direct connection partners. */
  selectionFocusNodeIds: Set<string>;
  searchQuery: string;
  searchMatchNodeIds: Set<string>;
}

export interface NodeFocusState {
  isSelected: boolean;
  /** Node stays full color — selected, neighbor, or search hit. */
  isEmphasized: boolean;
  isDimmed: boolean;
}

export function getNodeFocusState(nodeId: string, context: FocusContext): NodeFocusState {
  const isSelected = context.selectedNodeIds.has(nodeId);
  const trimmedQuery = context.searchQuery.trim();
  const isSearching = trimmedQuery.length > 0;
  const hasSelection = context.selectedNodeIds.size > 0;

  let isEmphasized = false;

  if (isSearching && context.searchMatchNodeIds.size > 0) {
    isEmphasized = context.searchMatchNodeIds.has(nodeId);
  } else if (hasSelection) {
    isEmphasized = context.selectionFocusNodeIds.has(nodeId);
  }

  const focusActive =
    (isSearching && context.searchMatchNodeIds.size > 0) || hasSelection;

  return {
    isSelected,
    isEmphasized,
    isDimmed: focusActive && !isEmphasized,
  };
}

export function isEdgeDimmed(
  edgeId: string,
  context: FocusContext & { selectionFocusEdgeIds: Set<string> }
): boolean {
  const trimmedQuery = context.searchQuery.trim();
  const isSearching = trimmedQuery.length > 0;
  const hasSelection = context.selectedNodeIds.size > 0;

  if (isSearching && context.searchMatchNodeIds.size > 0) {
    return true;
  }

  if (hasSelection) {
    return !context.selectionFocusEdgeIds.has(edgeId);
  }

  return false;
}

export function isEdgeHighlighted(
  edgeId: string,
  selectionFocusEdgeIds: Set<string>
): boolean {
  return selectionFocusEdgeIds.has(edgeId);
}
