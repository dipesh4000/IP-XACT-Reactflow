import { memo, useMemo } from "react";
import { BaseEdge, EdgeLabelRenderer, EdgeProps, getSmoothStepPath } from "reactflow";
import { getEdgeStyle as getEdgeStyleBase } from "../../../lib/edgeStyles";
import { isEdgeDimmed, isEdgeHighlighted } from "../../../lib/focus/nodeFocus";
import { useSelectionStore } from "../../../store/selectionStore";
import type { ArchitectureEdgeData } from "../../../types";

function getEdgeStyle(
  connectionType: ArchitectureEdgeData["connectionType"],
  highlighted: boolean,
  dimmed: boolean,
  isClusterEdge: boolean
): React.CSSProperties {
  if (highlighted) {
    return {
      stroke: "#e5e5e5",
      strokeWidth: 4,
      opacity: 0.96,
      strokeDasharray: "7 5",
    };
  }

  if (dimmed) {
    return {
      stroke: "#404040",
      strokeWidth: 1.25,
      opacity: 0.07,
    };
  }

  if (isClusterEdge) {
    return {
      stroke: "#a3a3a3",
      strokeWidth: 2,
      opacity: 0.6,
      strokeDasharray: "4 3",
    };
  }

  const style = getEdgeStyleBase(connectionType);
  return {
    stroke: style.color,
    strokeWidth: style.width,
    opacity: style.opacity,
    strokeDasharray: style.dash,
  };
}

function ArchitectureEdgeComponent({
  id,
  sourceX,
  sourceY,
  targetX,
  targetY,
  sourcePosition,
  targetPosition,
  data,
  source,
  target,
}: EdgeProps<ArchitectureEdgeData>) {
  const highlighted = useSelectionStore((state) => isEdgeHighlighted(id, state.highlightedEdgeIds));
  const dimmed = useSelectionStore((state) =>
    isEdgeDimmed(id, {
      selectedNodeIds: state.selectedNodeIds,
      selectionFocusNodeIds: state.highlightedNodeIds,
      selectionFocusEdgeIds: state.highlightedEdgeIds,
      searchQuery: state.searchQuery,
      searchMatchNodeIds: state.searchMatchNodeIds,
    })
  );
  const isClusterEdge = source.startsWith("hierarchy:") || target.startsWith("hierarchy:");

  const pathFn = useMemo(() => {
    return getSmoothStepPath({
      sourceX,
      sourceY,
      targetX,
      targetY,
      sourcePosition,
      targetPosition,
      borderRadius: 8,
    });
  }, [sourceX, sourceY, targetX, targetY, sourcePosition, targetPosition]);

  const [edgePath, labelX, labelY] = pathFn;
  const style = getEdgeStyle(data?.connectionType, highlighted, dimmed, isClusterEdge);

  return (
    <>
      <BaseEdge
        id={id}
        path={edgePath}
        markerEnd={highlighted ? "url(#architecture-arrow)" : undefined}
        style={style}
      />
      {highlighted && data ? (
        <EdgeLabelRenderer>
          <div
            className="pointer-events-none absolute rounded-lg border border-white/15 bg-neutral-950/95 px-2.5 py-1.5 text-[10px] text-slate-200 shadow-lg"
            style={{ transform: `translate(-50%, -50%) translate(${labelX}px, ${labelY}px)` }}
          >
            <div className="font-medium">
              {data.connection.sourcePortId} → {data.connection.targetPortId}
            </div>
            {data.connectionType && (
              <div className="mt-0.5 text-[9px] uppercase tracking-wide text-slate-400">{data.connectionType}</div>
            )}
            {data.connectionCount && data.connectionCount > 1 && (
              <span className="text-slate-300">({data.connectionCount}x)</span>
            )}
          </div>
        </EdgeLabelRenderer>
      ) : null}
    </>
  );
}

export const ArchitectureEdge = memo(ArchitectureEdgeComponent);
