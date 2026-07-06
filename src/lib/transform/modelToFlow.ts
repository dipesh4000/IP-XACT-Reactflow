import { MarkerType } from "reactflow";
import {
  NODE_Y_SPACING,
  BUS_PILLAR_WIDTH,
  BUS_COMPACT_WIDTH,
  BUS_COMPACT_HEIGHT,
  BUS_COMPACT_GAP,
  NODE_WIDTH,
  CLUSTER_WIDTH,
  EXPAND_THRESHOLD,
} from "../constants";
import type {
  ArchitectureCluster,
  ArchitectureEdgeData,
  ArchitectureFlowEdge,
  ArchitectureFlowNode,
  ArchitectureModel,
  ArchitectureNodeData,
  BusChannelNodeData,
  Component,
  ComponentType,
  Connection,
  HierarchyNode
} from "../../types";
import type { LayoutLayer } from "../preprocess/types";
import type { PreprocessedArchitecture } from "../preprocess";
import { buildHierarchy } from "../clustering/hierarchyBuilder";
import { getComponentLayer } from "./layerAssignment";
import { assignBusLayers } from "./busLayerAssignment";
import {
  centerLayoutHorizontally,
  getBusChannelHeight,
  getBusChannelTopY,
  getBusColumnWidth,
  getCompactBusStackHeight,
  getLayerGridLayout,
  getLayerGridPosition,
  LAYER_BLOCK_GAP,
} from "./layerGridLayout";

function getDegreeMap(model: ArchitectureModel): Map<string, number> {
  const degree = new Map(model.components.map((component) => [component.id, 0]));
  for (const connection of model.connections) {
    degree.set(connection.sourceComponentId, (degree.get(connection.sourceComponentId) ?? 0) + 1);
    degree.set(connection.targetComponentId, (degree.get(connection.targetComponentId) ?? 0) + 1);
  }
  return degree;
}

function buildConnectionIndex(model: ArchitectureModel): Map<string, Set<string>> {
  const index = new Map<string, Set<string>>();
  for (const connection of model.connections) {
    let sourceSet = index.get(connection.sourceComponentId);
    if (!sourceSet) {
      sourceSet = new Set();
      index.set(connection.sourceComponentId, sourceSet);
    }
    sourceSet.add(connection.id);

    let targetSet = index.get(connection.targetComponentId);
    if (!targetSet) {
      targetSet = new Set();
      index.set(connection.targetComponentId, targetSet);
    }
    targetSet.add(connection.id);
  }
  return index;
}

function countConnectionsForComponentIds(
  componentIds: string[],
  connectionIndex: Map<string, Set<string>>
): number {
  const seen = new Set<string>();
  for (const id of componentIds) {
    const connIds = connectionIndex.get(id);
    if (connIds) {
      for (const connId of connIds) {
        seen.add(connId);
      }
    }
  }
  return seen.size;
}

function isBusType(type: ComponentType): boolean {
  return type === "bus";
}

function makeBusChannelNode(
  component: Component,
  layer: LayoutLayer,
  x: number,
  y: number,
  channelHeight?: number,
  display: "pillar" | "compact" = "pillar"
): ArchitectureFlowNode {
  return {
    id: component.id,
    type: "busChannel",
    position: { x, y },
    data: {
      kind: "busChannel",
      component,
      layer,
      channelHeight: display === "pillar" ? channelHeight : undefined,
      display,
    } as BusChannelNodeData
  };
}

function makeComponentNode(
  component: Component,
  layer: LayoutLayer | undefined,
  x: number,
  y: number
): ArchitectureFlowNode {
  return {
    id: component.id,
    type: "architecture",
    position: { x, y },
    data: {
      kind: "component",
      component,
      layer
    }
  };
}

function makeClusterNode(
  cluster: ArchitectureCluster,
  x: number,
  y: number
): ArchitectureFlowNode {
  return {
    id: cluster.id,
    type: "architecture",
    position: { x, y },
    data: { kind: "cluster", cluster }
  };
}

function aggregateEdges(
  model: ArchitectureModel,
  componentToVisibleId: Map<string, string>,
  connectionMetadata?: Map<string, { connectionType: string }>
): ArchitectureFlowEdge[] {
  const edgeByKey = new Map<
    string,
    { connection: Connection; count: number; source: string; target: string }
  >();

  for (const connection of model.connections) {
    const source = componentToVisibleId.get(connection.sourceComponentId);
    const target = componentToVisibleId.get(connection.targetComponentId);

    if (!source || !target || source === target) {
      continue;
    }

    const key = `${source}->${target}`;
    const existing = edgeByKey.get(key);

    if (existing) {
      existing.count += 1;
    } else {
      edgeByKey.set(key, {
        connection,
        count: 1,
        source,
        target
      });
    }
  }

  return [...edgeByKey.values()].map(({ connection, count, source, target }): ArchitectureFlowEdge => {
    const connMeta = connectionMetadata?.get(connection.id);
    const data: ArchitectureEdgeData = {
      connection,
      connectionCount: count,
      connectionType: connMeta?.connectionType as ArchitectureEdgeData["connectionType"]
    };
    const isClusterSource = source.startsWith("hierarchy:");
    const isClusterTarget = target.startsWith("hierarchy:");

    return {
      id: count > 1 ? `agg_${source}_to_${target}` : connection.id,
      source,
      target,
      sourceHandle: isClusterSource ? undefined : `right:${source}`,
      targetHandle: isClusterTarget ? undefined : `left:${target}`,
      type: "architecture",
      data,
      markerEnd: { type: MarkerType.ArrowClosed }
    };
  });
}

function walkHierarchy(
  node: HierarchyNode,
  expandedClusterIds: Set<string>,
  model: ArchitectureModel,
  componentById: Map<string, Component>,
  componentToVisibleId: Map<string, string>,
  connectionIndex: Map<string, Set<string>>
): { visibleComponents: Component[]; clusters: ArchitectureCluster[] } {
  const visibleComponents: Component[] = [];
  const clusters: ArchitectureCluster[] = [];

  if (node.childGroups.length === 0) {
    for (const compId of node.componentIds) {
      const comp = componentById.get(compId);
      if (comp) {
        visibleComponents.push(comp);
        componentToVisibleId.set(compId, compId);
      }
    }
    return { visibleComponents, clusters };
  }

  const isExpanded = expandedClusterIds.has(node.id);

  if (isExpanded) {
    for (const child of node.childGroups) {
      const childCompCount = child.componentIds.length;
      const childHasGrandChildren = child.childGroups.length > 0;

      if (childCompCount <= EXPAND_THRESHOLD || !childHasGrandChildren) {
        for (const compId of child.componentIds) {
          const comp = componentById.get(compId);
          if (comp) {
            visibleComponents.push(comp);
            componentToVisibleId.set(compId, compId);
          }
        }
      } else {
        const connectionCount = countConnectionsForComponentIds(child.componentIds, connectionIndex);

        const typeBreakdown: Partial<Record<ComponentType, number>> = {};
        for (const compId of child.componentIds) {
          const comp = componentById.get(compId);
          if (comp) {
            typeBreakdown[comp.type] = (typeBreakdown[comp.type] ?? 0) + 1;
          }
        }

        clusters.push({
          id: child.id,
          name: child.name,
          type: child.type === "group" ? "custom" : child.type,
          componentIds: child.componentIds,
          componentCount: child.componentIds.length,
          connectionCount,
          expanded: false,
          hierarchyPath: child.id.replace("hierarchy:", "").split(":"),
          depth: child.depth,
          typeBreakdown
        });

        for (const compId of child.componentIds) {
          componentToVisibleId.set(compId, child.id);
        }
      }
    }
  } else {
    const connectionCount = countConnectionsForComponentIds(node.componentIds, connectionIndex);

    const typeBreakdown: Partial<Record<ComponentType, number>> = {};
    for (const compId of node.componentIds) {
      const comp = componentById.get(compId);
      if (comp) {
        typeBreakdown[comp.type] = (typeBreakdown[comp.type] ?? 0) + 1;
      }
    }

    clusters.push({
      id: node.id,
      name: node.name,
      type: node.type === "group" ? "custom" : node.type,
      componentIds: node.componentIds,
      componentCount: node.componentIds.length,
      connectionCount,
      expanded: false,
      hierarchyPath: node.id.replace("hierarchy:", "").split(":"),
      depth: node.depth,
      typeBreakdown
    });

    for (const compId of node.componentIds) {
      componentToVisibleId.set(compId, node.id);
    }
  }

  return { visibleComponents, clusters };
}

function layoutWithLayers(
  components: Component[],
  clusters: ArchitectureCluster[],
  preprocessed?: PreprocessedArchitecture,
  degree?: Map<string, number>
): ArchitectureFlowNode[] {
  const nodes: ArchitectureFlowNode[] = [];

  const buses: Array<{ component: Component; layer: LayoutLayer }> = [];
  const nonBuses: Array<{ component: Component; layer: LayoutLayer }> = [];
  const busComponents = components.filter((comp) => isBusType(comp.type));
  const busLayerOverrides = assignBusLayers(busComponents, degree ?? new Map());

  for (const comp of components) {
    const meta = preprocessed?.componentMetadata.get(comp.id);
    if (isBusType(comp.type)) {
      const layer = busLayerOverrides.get(comp.id) ?? getComponentLayer(comp, meta?.layer);
      buses.push({ component: comp, layer });
    } else {
      const layer = getComponentLayer(comp, meta?.layer);
      nonBuses.push({ component: comp, layer });
    }
  }

  const layerGroups = new Map<number, Array<{ component: Component; layer: LayoutLayer }>>();
  for (const item of nonBuses) {
    const existing = layerGroups.get(item.layer);
    if (existing) {
      existing.push(item);
    } else {
      layerGroups.set(item.layer, [item]);
    }
  }

  const busLayers = new Map<number, Array<{ component: Component; layer: LayoutLayer }>>();
  for (const item of buses) {
    const existing = busLayers.get(item.layer);
    if (existing) {
      existing.push(item);
    } else {
      busLayers.set(item.layer, [item]);
    }
  }

  const layerIndices = new Set([...layerGroups.keys(), ...busLayers.keys()]);
  const sortedLayers = [...layerIndices].sort((a, b) => a - b);

  const layerHeightsByIndex = new Map<number, number>();
  for (const layer of sortedLayers) {
    const compCount = layerGroups.get(layer)?.length ?? 0;
    if (compCount > 0) {
      layerHeightsByIndex.set(layer, getLayerGridLayout(compCount).height);
    }
  }

  const busChannelHeight = getBusChannelHeight([...layerHeightsByIndex.values()]);
  let cursorX = 0;

  for (const layer of sortedLayers) {
    const busItems = busLayers.get(layer) ?? [];
    const compItems = layerGroups.get(layer)
      ? [...layerGroups.get(layer)!].sort((a, b) => {
          const degreeDelta = (degree?.get(b.component.id) ?? 0) - (degree?.get(a.component.id) ?? 0);
          if (degreeDelta !== 0) return degreeDelta;
          return a.component.name.localeCompare(b.component.name);
        })
      : [];

    if (busItems.length > 0) {
      if (busItems.length === 1) {
        const item = busItems[0];
        if (item) {
          const busY = getBusChannelTopY(busChannelHeight);
          nodes.push(
            makeBusChannelNode(item.component, item.layer, cursorX, busY, busChannelHeight, "pillar")
          );
        }
      } else {
        const stackHeight = getCompactBusStackHeight(busItems.length);
        const startY = -stackHeight / 2;
        for (let i = 0; i < busItems.length; i++) {
          const item = busItems[i];
          if (!item) continue;
          const y = startY + i * (BUS_COMPACT_HEIGHT + BUS_COMPACT_GAP);
          nodes.push(makeBusChannelNode(item.component, item.layer, cursorX, y, undefined, "compact"));
        }
      }

      cursorX += getBusColumnWidth(busItems.length) + LAYER_BLOCK_GAP;
    }

    if (compItems.length > 0) {
      const grid = getLayerGridLayout(compItems.length);

      for (let i = 0; i < compItems.length; i++) {
        const item = compItems[i];
        if (!item) continue;
        const { x, y } = getLayerGridPosition(i, cursorX, grid);
        nodes.push(makeComponentNode(item.component, item.layer, x, y));
      }

      cursorX += grid.width + LAYER_BLOCK_GAP;
    }
  }

  for (let i = 0; i < clusters.length; i++) {
    const cluster = clusters[i];
    if (!cluster) continue;
    const clusterY = -200 + i * (CLUSTER_WIDTH + 80);
    nodes.push(makeClusterNode(cluster, cursorX + 400, clusterY));
  }

  return centerLayoutHorizontally(nodes);
}

export function modelToFlow(
  model: ArchitectureModel,
  expandedClusterIds?: Set<string>,
  preprocessed?: PreprocessedArchitecture
): {
  nodes: ArchitectureFlowNode[];
  edges: ArchitectureFlowEdge[];
} {
  const degree = getDegreeMap(model);
  const hierarchy = buildHierarchy(model, degree);
  const componentById = new Map(model.components.map((component) => [component.id, component]));
  const connectionIndex = buildConnectionIndex(model);
  const expandedSet = expandedClusterIds ?? new Set<string>();
  const componentToVisibleId = new Map<string, string>();

  const visibleComponents: Component[] = [];
  const clusters: ArchitectureCluster[] = [];

  if (hierarchy.childGroups.length === 0) {
    for (const compId of hierarchy.componentIds) {
      const comp = componentById.get(compId);
      if (comp) {
        visibleComponents.push(comp);
        componentToVisibleId.set(compId, compId);
      }
    }
  } else {
    for (const child of hierarchy.childGroups) {
      const result = walkHierarchy(child, expandedSet, model, componentById, componentToVisibleId, connectionIndex);
      visibleComponents.push(...result.visibleComponents);
      clusters.push(...result.clusters);
    }
  }

  const nodes = layoutWithLayers(visibleComponents, clusters, preprocessed, degree);
  const edges = aggregateEdges(model, componentToVisibleId, preprocessed?.connectionMetadata);

  return { nodes, edges };
}
