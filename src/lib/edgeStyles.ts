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

export const EDGE_STYLES_LIGHT: Record<ConnectionType, EdgeStyle> = {
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

export function getEdgeStyle(
  connectionType: ConnectionType | undefined,
  isDark: boolean,
): EdgeStyle {
  const styles = isDark ? EDGE_STYLES_DARK : EDGE_STYLES_LIGHT;
  return styles[connectionType ?? "unknown"] ?? styles.unknown;
}
