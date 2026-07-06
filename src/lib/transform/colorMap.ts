import type { ComponentType } from "../../types";

export interface NodeColorTokens {
  base: string;
  border: string;
  glow: string;
  text: string;
}

/** Bold, saturated palette shared by canvas nodes and SVG export. */
export const nodeColorMap = {
  cpu: { base: "#1d4ed8", border: "#3b82f6", glow: "rgba(59, 130, 246, 0.55)", text: "#eff6ff" },
  bus: { base: "#6d28d9", border: "#8b5cf6", glow: "rgba(139, 92, 246, 0.52)", text: "#f5f3ff" },
  memory: { base: "#15803d", border: "#22c55e", glow: "rgba(34, 197, 94, 0.5)", text: "#ecfdf5" },
  peripheral: { base: "#c2410c", border: "#f97316", glow: "rgba(249, 115, 22, 0.5)", text: "#fff7ed" },
  interface: { base: "#0e7490", border: "#06b6d4", glow: "rgba(6, 182, 212, 0.5)", text: "#ecfeff" },
  clockReset: { base: "#b91c1c", border: "#ef4444", glow: "rgba(239, 68, 68, 0.5)", text: "#fef2f2" },
  custom: { base: "#7e22ce", border: "#a855f7", glow: "rgba(168, 85, 247, 0.5)", text: "#faf5ff" },
  dma: { base: "#0f766e", border: "#14b8a6", glow: "rgba(20, 184, 166, 0.5)", text: "#f0fdfa" },
  interruptController: { base: "#a21caf", border: "#d946ef", glow: "rgba(217, 70, 239, 0.5)", text: "#fdf4ff" },
  debug: { base: "#3f3f46", border: "#71717a", glow: "rgba(113, 113, 122, 0.45)", text: "#fafafa" },
} satisfies Record<ComponentType, NodeColorTokens>;
