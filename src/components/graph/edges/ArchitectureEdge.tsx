import { memo, useMemo } from "react";
import { BaseEdge, EdgeLabelRenderer, EdgeProps, getSmoothStepPath } from "reactflow";
import { getEdgeStyle as getEdgeStyleBase } from "../../../lib/edgeStyles";
import { useSelectionStore } from "../../../store/selectionStore";
import { useSettingsStore } from "../../../store/settingsStore";
import type { ArchitectureEdgeData } from "../../../types";

function getEdgeStyle(
  connectionType: ArchitectureEdgeData["connectionType"],
  highlighted: boolean,
  dimmed: boolean,
  isClusterEdge: boolean,
  isDark: boolean
): React.CSSProperties {
  if (highlighted) {
    return {
      stroke: isDark ? "#67e8f9" : "#0369a1",
      strokeWidth: 4,
      opacity: 0.96,
      strokeDasharray: "7 5"
    };
  }

  if (dimmed) {
    return {
      stroke: isDark ? "#64748b" : "#94a3b8",
      strokeWidth: 1.5,
      opacity: 0.15
    };
  }

  if (isClusterEdge) {
    return {
      stroke: isDark ? "#818cf8" : "#6366f1",
      strokeWidth: 2,
      opacity: 0.6,
      strokeDasharray: "4 3"
    };
  }

  const style = getEdgeStyleBase(connectionType, isDark);
  return {
    stroke: style.color,
    strokeWidth: style.width,
    opacity: style.opacity,
    strokeDasharray: style.dash
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
  target
}: EdgeProps<ArchitectureEdgeData>) {
  const highlighted = useSelectionStore((state) => state.highlightedEdgeIds.has(id));
  const hasSelection = useSelectionStore((state) => state.selectedNodeIds.size > 0);
  const dimmed = hasSelection && !highlighted;
  const theme = useSettingsStore((state) => state.theme);
  const isDark = theme === "dark";

  const isClusterEdge = source.startsWith("hierarchy:") || target.startsWith("hierarchy:");

  const pathFn = useMemo(() => {
    return getSmoothStepPath({
      sourceX,
      sourceY,
      targetX,
      targetY,
      sourcePosition,
      targetPosition,
      borderRadius: 8
    });
  }, [sourceX, sourceY, targetX, targetY, sourcePosition, targetPosition]);

  const [edgePath, labelX, labelY] = pathFn;

  const style = getEdgeStyle(
    data?.connectionType,
    highlighted,
    dimmed,
    isClusterEdge,
    isDark
  );

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
            className={`pointer-events-none absolute rounded-lg border px-2.5 py-1.5 text-[10px] shadow-lg ${
              isDark
                ? "border-cyan-300/30 bg-shell-950/95 text-cyan-100"
                : "border-slate-300 bg-white text-slate-800"
            }`}
            style={{ transform: `translate(-50%, -50%) translate(${labelX}px, ${labelY}px)` }}
          >
            <div className="font-medium">{data.connection.sourcePortId} → {data.connection.targetPortId}</div>
            {data.connectionType && (
              <div className={`mt-0.5 text-[9px] uppercase tracking-wide ${isDark ? "text-cyan-300/80" : "text-cyan-700"}`}>
                {data.connectionType}
              </div>
            )}
            {data.connectionCount && data.connectionCount > 1 && (
              <span className={isDark ? "text-cyan-300" : "text-cyan-600"}>({data.connectionCount}x)</span>
            )}
          </div>
        </EdgeLabelRenderer>
      ) : null}
    </>
  );
}

export const ArchitectureEdge = memo(ArchitectureEdgeComponent);
