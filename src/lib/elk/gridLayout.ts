import {
  NODE_WIDTH,
  NODE_HEIGHT,
  BUS_CHANNEL_WIDTH,
  BUS_CHANNEL_HEIGHT,
  CLUSTER_WIDTH,
  CLUSTER_HEIGHT,
  LAYER_X,
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

function getColumns(count: number, layer: number): number {
  if (count <= 3) return count;
  if (layer === 1) return 1;
  if (count <= 8) return 2;
  if (count <= 20) return 3;
  if (count <= 45) return 4;
  if (count <= 80) return 5;
  return 6;
}

function getRowSpacing(count: number, layer: number): number {
  if (layer === 1) return 260;
  if (count > 80) return 210;
  if (count > 40) return 195;
  if (count > 15) return 180;
  return 160;
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

  for (const layer of layers) {
    const layerNodes = layerGroups.get(layer)!;
    const sorted = [...layerNodes].sort((a, b) => {
      const kindDelta = (KIND_ORDER[a.data.kind] ?? 99) - (KIND_ORDER[b.data.kind] ?? 99);
      if (kindDelta !== 0) return kindDelta;

      const degreeDelta = (degreeMap.get(b.id) ?? 0) - (degreeMap.get(a.id) ?? 0);
      if (degreeDelta !== 0) return degreeDelta;

      return a.id.localeCompare(b.id);
    });

    const columns = getColumns(sorted.length, layer);
    const rows = Math.ceil(sorted.length / columns);
    const rowSpacing = getRowSpacing(sorted.length, layer);
    const columnSpacing = layer === 1 ? 460 : layer === 4 ? 340 : 300;
    const centerX = LAYER_X[layer] ?? layer * 420;
    const startX = centerX - ((columns - 1) * columnSpacing) / 2;
    const startY = -((rows - 1) * rowSpacing) / 2;

    for (let index = 0; index < sorted.length; index++) {
      const node = sorted[index];
      if (!node) continue;

      const { width, height } = getNodeSize(node);
      const col = index % columns;
      const row = Math.floor(index / columns);

      result.push({
        ...node,
        position: {
          x: startX + col * columnSpacing - width / 2,
          y: startY + row * rowSpacing
        }
      });
    }
  }

  return result;
}
