import type { ArchitectureFlowNode } from "../../types";
import {
  BUS_CHANNEL_HEIGHT,
  BUS_COMPACT_GAP,
  BUS_COMPACT_HEIGHT,
  BUS_COMPACT_WIDTH,
  BUS_PILLAR_WIDTH,
  CLUSTER_WIDTH,
  MAX_LAYER_COLUMNS,
  NODE_WIDTH,
  NODE_Y_SPACING,
} from "../constants";

/** Horizontal gap between layer blocks (CPU column, bus, memory grid, …). */
export const LAYER_BLOCK_GAP = 185;

/** Spacing between sub-columns inside one layer (tighter than NODE_X_SPACING). */
export const INTRA_LAYER_X_SPACING = 348;

export function getLayerColumnCount(nodeCount: number): number {
  if (nodeCount <= 6) return 1;
  if (nodeCount <= 14) return 2;
  if (nodeCount <= 28) return 3;
  if (nodeCount <= 48) return 4;
  if (nodeCount <= 72) return 5;
  return MAX_LAYER_COLUMNS;
}

export interface LayerGridLayout {
  columns: number;
  rows: number;
  width: number;
  height: number;
}

export function getLayerGridLayout(nodeCount: number): LayerGridLayout {
  const columns = getLayerColumnCount(nodeCount);
  const rows = Math.ceil(nodeCount / columns);
  return {
    columns,
    rows,
    width: columns * INTRA_LAYER_X_SPACING,
    height: rows * NODE_Y_SPACING,
  };
}

export function getLayerGridPosition(
  index: number,
  layerStartX: number,
  grid: LayerGridLayout
): { x: number; y: number } {
  const col = index % grid.columns;
  const row = Math.floor(index / grid.columns);
  const x = layerStartX + col * INTRA_LAYER_X_SPACING;
  const y = -grid.height / 2 + row * NODE_Y_SPACING + NODE_Y_SPACING / 2;
  return { x, y };
}

export function getCompactBusStackHeight(busCount: number): number {
  if (busCount <= 0) return 0;
  return busCount * BUS_COMPACT_HEIGHT + (busCount - 1) * BUS_COMPACT_GAP;
}

export function getBusColumnWidth(busCount: number): number {
  if (busCount <= 0) return 0;
  if (busCount === 1) return BUS_PILLAR_WIDTH;
  return BUS_COMPACT_WIDTH;
}

export function getBusChannelTopY(channelHeight: number): number {
  return -channelHeight / 2;
}

export function getBusChannelHeight(layerHeights: number[]): number {
  const tallest = layerHeights.length > 0 ? Math.max(...layerHeights) : BUS_CHANNEL_HEIGHT;
  return Math.max(BUS_CHANNEL_HEIGHT, Math.min(tallest + 120, 1000));
}

function getLayoutNodeWidth(node: ArchitectureFlowNode): number {
  if (node.data.kind === "busChannel") {
    if (node.data.display === "compact") {
      return BUS_COMPACT_WIDTH;
    }
    return BUS_PILLAR_WIDTH;
  }
  if (node.data.kind === "cluster") {
    return CLUSTER_WIDTH;
  }
  return NODE_WIDTH;
}

export function centerLayoutHorizontally(nodes: ArchitectureFlowNode[]): ArchitectureFlowNode[] {
  if (nodes.length === 0) {
    return nodes;
  }

  let minX = Infinity;
  let maxX = -Infinity;
  for (const node of nodes) {
    const width = getLayoutNodeWidth(node);
    minX = Math.min(minX, node.position.x);
    maxX = Math.max(maxX, node.position.x + width);
  }

  const offsetX = -(minX + maxX) / 2;
  if (offsetX === 0) {
    return nodes;
  }

  return nodes.map((node) => ({
    ...node,
    position: {
      x: node.position.x + offsetX,
      y: node.position.y,
    },
  }));
}
