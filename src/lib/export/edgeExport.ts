import type { ArchitectureFlowEdge } from "../../types";
import type { ConnectionType } from "../preprocess/types";

export interface ExportEdgeStyle {
  color: string;
  width: number;
  dash?: string;
  opacity: number;
}

const EDGE_STYLES_DARK: Record<ConnectionType, ExportEdgeStyle> = {
  bus: { color: "#a78bfa", width: 4, opacity: 0.72 },
  interrupt: { color: "#f472b6", width: 3, dash: "6 4", opacity: 0.66 },
  dma: { color: "#2dd4bf", width: 3.5, opacity: 0.66 },
  clock: { color: "#f87171", width: 2.5, opacity: 0.58 },
  reset: { color: "#fb923c", width: 2.5, dash: "3 3", opacity: 0.58 },
  debug: { color: "#94a3b8", width: 2, dash: "2 4", opacity: 0.54 },
  data: { color: "#4ade80", width: 3, opacity: 0.62 },
  control: { color: "#facc15", width: 2.5, dash: "4 2", opacity: 0.58 },
  unknown: { color: "#64748b", width: 2, opacity: 0.46 },
};

const EDGE_STYLES_LIGHT: Record<ConnectionType, ExportEdgeStyle> = {
  bus: { color: "#7c3aed", width: 4, opacity: 0.82 },
  interrupt: { color: "#db2777", width: 3, dash: "6 4", opacity: 0.76 },
  dma: { color: "#0d9488", width: 3.5, opacity: 0.76 },
  clock: { color: "#dc2626", width: 2.5, opacity: 0.68 },
  reset: { color: "#ea580c", width: 2.5, dash: "3 3", opacity: 0.68 },
  debug: { color: "#475569", width: 2, dash: "2 4", opacity: 0.62 },
  data: { color: "#16a34a", width: 3, opacity: 0.72 },
  control: { color: "#ca8a04", width: 2.5, dash: "4 2", opacity: 0.68 },
  unknown: { color: "#334155", width: 2, opacity: 0.56 },
};

export function getExportEdgeStyle(
  connectionType: ConnectionType | undefined,
  isDark: boolean,
  isClusterEdge: boolean
): ExportEdgeStyle {
  const styles = isDark ? EDGE_STYLES_DARK : EDGE_STYLES_LIGHT;

  if (isClusterEdge) {
    return { color: isDark ? "#818cf8" : "#6366f1", width: 2, dash: "4 3", opacity: 0.65 };
  }

  return styles[connectionType ?? "unknown"] ?? styles.unknown;
}

interface SmoothStepResult {
  path: string;
  labelX: number;
  labelY: number;
}

export function makeSmoothStepPath(
  sx: number,
  sy: number,
  tx: number,
  ty: number,
  borderRadius: number = 8
): SmoothStepResult {
  const dx = tx - sx;
  const dy = ty - sy;
  const absDx = Math.abs(dx);
  const absDy = Math.abs(dy);

  const cornerRadius = Math.min(borderRadius, absDx / 2, absDy / 2);

  if (cornerRadius <= 0 || absDx < 1 || absDy < 1) {
    return {
      path: `M ${sx} ${sy} L ${tx} ${ty}`,
      labelX: (sx + tx) / 2,
      labelY: (sy + ty) / 2,
    };
  }

  const signDy = Math.sign(dy) || 1;
  const turnX = dx >= 0 ? sx + dx / 2 : sx + 40;

  const path = `M ${sx} ${sy} L ${turnX - cornerRadius} ${sy} Q ${turnX} ${sy} ${turnX} ${sy + signDy * cornerRadius} L ${turnX} ${ty - signDy * cornerRadius} Q ${turnX} ${ty} ${turnX - cornerRadius} ${ty} L ${tx} ${ty}`;

  return { path, labelX: turnX, labelY: (sy + ty) / 2 };
}

export function getEdgeLabel(edge: ArchitectureFlowEdge): string {
  if (edge.data?.connectionType) {
    return edge.data.connectionType;
  }
  if (edge.data?.connectionCount && edge.data.connectionCount > 1) {
    return `${edge.data.connectionCount}x`;
  }
  return "";
}
