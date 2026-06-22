import { memo, useMemo } from "react";
import { BaseEdge, EdgeLabelRenderer, EdgeProps, getBezierPath, getSmoothStepPath } from "reactflow";
import { useSelectionStore } from "../../../store/selectionStore";
import { useSettingsStore } from "../../../store/settingsStore";
import type { ArchitectureEdgeData } from "../../../types";
import type { ConnectionType } from "../../../lib/preprocess/types";

interface EdgeStyle {
  color: string;
  width: number;
  dash?: string;
  opacity: number;
}

const CONNECTION_STYLES_DARK: Record<ConnectionType, EdgeStyle> = {
  bus: { color: "#a78bfa", width: 4, opacity: 0.7 },
  interrupt: { color: "#f472b6", width: 3, dash: "6 4", opacity: 0.65 },
  dma: { color: "#2dd4bf", width: 3.5, opacity: 0.65 },
  clock: { color: "#f87171", width: 2.5, opacity: 0.55 },
  reset: { color: "#fb923c", width: 2.5, dash: "3 3", opacity: 0.55 },
  debug: { color: "#94a3b8", width: 2, dash: "2 4", opacity: 0.5 },
  data: { color: "#4ade80", width: 3, opacity: 0.6 },
  control: { color: "#facc15", width: 2.5, dash: "4 2", opacity: 0.55 },
  unknown: { color: "#64748b", width: 2, opacity: 0.45 }
};

const CONNECTION_STYLES_LIGHT: Record<ConnectionType, EdgeStyle> = {
  bus: { color: "#7c3aed", width: 4, opacity: 0.8 },
  interrupt: { color: "#db2777", width: 3, dash: "6 4", opacity: 0.75 },
  dma: { color: "#0d9488", width: 3.5, opacity: 0.75 },
  clock: { color: "#dc2626", width: 2.5, opacity: 0.65 },
  reset: { color: "#ea580c", width: 2.5, dash: "3 3", opacity: 0.65 },
  debug: { color: "#475569", width: 2, dash: "2 4", opacity: 0.6 },
  data: { color: "#16a34a", width: 3, opacity: 0.7 },
  control: { color: "#ca8a04", width: 2.5, dash: "4 2", opacity: 0.65 },
  unknown: { color: "#334155", width: 2, opacity: 0.55 }
};

function getEdgeStyle(
  connectionType: ConnectionType | undefined,
  highlighted: boolean,
  dimmed: boolean,
  isClusterEdge: boolean,
  isDark: boolean
): React.CSSProperties {
  const styles = isDark ? CONNECTION_STYLES_DARK : CONNECTION_STYLES_LIGHT;

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

  const style = styles[connectionType ?? "unknown"] ?? styles.unknown;
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
