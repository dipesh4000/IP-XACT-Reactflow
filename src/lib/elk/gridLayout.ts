import {
  NODE_WIDTH,
  NODE_HEIGHT,
  BUS_CHANNEL_WIDTH,
  BUS_CHANNEL_HEIGHT,
  CLUSTER_WIDTH,
  CLUSTER_HEIGHT,
  NODE_X_SPACING,
  NODE_Y_SPACING,
  MAX_LAYER_COLUMNS,
} from "../constants";
import type { ArchitectureFlowEdge, ArchitectureFlowNode } from "../../types";

const KIND_ORDER: Record<string, number> = {
  component: 0,
  cluster: 1,
  busChannel: 2
};

function getNodeSize(node: ArchitectureFlowNode): { width: number; height: number } {
  if (node.data.kind === "busChannel") {
    return { width: BUS_CHANNEL_WIDTH, height: BUS_CHANNEL_HEIGHT };
  }
  if (node.data.kind === "cluster") {
    return { width: CLUSTER_WIDTH, height: CLUSTER_HEIGHT };
  }
  return { width: NODE_WIDTH, height: NODE_HEIGHT };
}

function getNodeLayer(node: ArchitectureFlowNode): number {
  if (node.data.kind === "component") {
    return node.data.layer ?? 3;
  }
  if (node.data.kind === "busChannel") {
    return node.data.layer ?? 1;
  }
  return 4;
}

function getDegreeMap(edges: ArchitectureFlowEdge[]): Map<string, number> {
  const degree = new Map<string, number>();
  for (const edge of edges) {
    degree.set(edge.source, (degree.get(edge.source) ?? 0) + 1);
    degree.set(edge.target, (degree.get(edge.target) ?? 0) + 1);
  }
  return degree;
}

export function computeGridLayout(
  nodes: ArchitectureFlowNode[],
  edges: ArchitectureFlowEdge[]
): ArchitectureFlowNode[] {
  const layerGroups = new Map<number, ArchitectureFlowNode[]>();
  const degreeMap = getDegreeMap(edges);

  for (const node of nodes) {
    const layer = getNodeLayer(node);
    const existing = layerGroups.get(layer);
    if (existing) {
      existing.push(node);
    } else {
      layerGroups.set(layer, [node]);
    }
  }

  const result: ArchitectureFlowNode[] = [];
  const layers = [...layerGroups.keys()].sort((a, b) => a - b);

  let currentX = 0;
  let maxHeight = 0;

  for (const layer of layers) {
    const layerNodes = layerGroups.get(layer)!;

    const sorted = [...layerNodes].sort((a, b) => {
      const kindDelta = (KIND_ORDER[a.data.kind] ?? 99) - (KIND_ORDER[b.data.kind] ?? 99);
      if (kindDelta !== 0) return kindDelta;

      const degreeDelta = (degreeMap.get(b.id) ?? 0) - (degreeMap.get(a.id) ?? 0);
      if (degreeDelta !== 0) return degreeDelta;

      return a.id.localeCompare(b.id);
    });

    const isBusLayer = sorted.every(n => n.data.kind === "busChannel");

    if (isBusLayer) {
      for (const node of sorted) {
        const { width, height } = getNodeSize(node);
        result.push({
          ...node,
          id: node.id,
          position: { x: currentX, y: -height / 2 }
        } as ArchitectureFlowNode);
      }
      currentX += BUS_CHANNEL_WIDTH + 120;
      maxHeight = Math.max(maxHeight, BUS_CHANNEL_HEIGHT);
    } else {
      const count = sorted.length;
      const columns = count <= 6 ? 1
        : count <= 14 ? 2
        : count <= 28 ? 3
        : count <= 48 ? 4
        : count <= 72 ? 5
        : MAX_LAYER_COLUMNS;
      const rows = Math.ceil(sorted.length / columns);

      const colSpacing = NODE_X_SPACING;
      const rowSpacing = NODE_Y_SPACING;

      const layerWidth = columns * colSpacing;
      const layerHeight = rows * rowSpacing;

      const startX = currentX;
      const startY = -layerHeight / 2;

      for (let i = 0; i < sorted.length; i++) {
        const node = sorted[i];
        if (!node) continue;
        const { width, height } = getNodeSize(node);
        const col = i % columns;
        const row = Math.floor(i / columns);

        result.push({
          ...node,
          id: node.id,
          position: {
            x: startX + col * colSpacing,
            y: startY + row * rowSpacing
          }
        } as ArchitectureFlowNode);
      }

      currentX += layerWidth + 160;
      maxHeight = Math.max(maxHeight, layerHeight);
    }
  }

  const totalWidth = currentX - 160;
  const offsetX = -totalWidth / 2;

  return result.map(node => ({
    ...node,
    id: node.id,
    position: {
      x: node.position.x + offsetX,
      y: node.position.y
    }
  } as ArchitectureFlowNode));
}
