import type { ConnectionType } from "./preprocess/types";

export interface EdgeStyle {
  color: string;
  width: number;
  dash?: string;
  opacity: number;
}

export const EDGE_STYLES_DARK: Record<ConnectionType, EdgeStyle> = {
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

export function getEdgeStyle(connectionType: ConnectionType | undefined): EdgeStyle {
  const styles = EDGE_STYLES_DARK;
  return styles[connectionType ?? "unknown"] ?? styles.unknown;
}
