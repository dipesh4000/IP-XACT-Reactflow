import { create } from "zustand";
import type { Viewport } from "reactflow";
import type { ArchitectureFlowEdge, ArchitectureFlowNode } from "../types";

interface GraphStore {
  nodes: ArchitectureFlowNode[];
  edges: ArchitectureFlowEdge[];
  viewport: Viewport;
  expandedClusterIds: Set<string>;
  expansionPath: string[];
  isLayoutLoading: boolean;
  childClusterMap: Map<string, string[]>;
  setNodes: (nodes: ArchitectureFlowNode[]) => void;
  setEdges: (edges: ArchitectureFlowEdge[]) => void;
  updateNodePosition: (nodeId: string, position: { x: number; y: number }) => void;
  setViewport: (viewport: Viewport) => void;
  toggleCluster: (clusterId: string) => void;
  expandClusterForComponent: (componentId: string) => void;
  expandToLevel: (nodeId: string) => void;
  collapseToLevel: (nodeId: string) => void;
  resetExpansion: () => void;
  setLayoutLoading: (loading: boolean) => void;
}

function buildChildClusterMap(nodes: ArchitectureFlowNode[]): Map<string, string[]> {
  const map = new Map<string, string[]>();
  for (const node of nodes) {
    if (node.data.kind !== "cluster") continue;
    const path = node.data.cluster.hierarchyPath;
    if (path.length <= 1) continue;
    const parentId = `hierarchy:${path.slice(0, -1).join(":")}`;
    let children = map.get(parentId);
    if (!children) {
      children = [];
      map.set(parentId, children);
    }
    children.push(node.id);
  }
  return map;
}

function getDescendantIds(nodeId: string, childClusterMap: Map<string, string[]>): string[] {
  const result: string[] = [];
  const stack = [nodeId];
  while (stack.length > 0) {
    const current = stack.pop()!;
    const children = childClusterMap.get(current);
    if (children) {
      for (const child of children) {
        result.push(child);
        stack.push(child);
      }
    }
  }
  return result;
}

export const useGraphStore = create<GraphStore>((set) => ({
  nodes: [],
  edges: [],
  viewport: { x: 0, y: 0, zoom: 1 },
  expandedClusterIds: new Set<string>(),
  expansionPath: [],
  isLayoutLoading: false,
  childClusterMap: new Map(),
  setNodes: (nodes) => set({ nodes, childClusterMap: buildChildClusterMap(nodes) }),
  setEdges: (edges) => set({ edges }),
  updateNodePosition: (nodeId, position) =>
    set((state) => ({
      nodes: state.nodes.map((node) => (node.id === nodeId ? { ...node, position } : node))
    })),
  setViewport: (viewport) => set({ viewport }),
  toggleCluster: (clusterId) =>
    set((state) => {
      const expandedClusterIds = new Set(state.expandedClusterIds);
      const expansionPath = [...state.expansionPath];

      if (expandedClusterIds.has(clusterId)) {
        expandedClusterIds.delete(clusterId);
        const pathIndex = expansionPath.indexOf(clusterId);
        if (pathIndex !== -1) {
          expansionPath.splice(pathIndex);
        }
      } else {
        expandedClusterIds.add(clusterId);
        expansionPath.push(clusterId);
      }

      return { expandedClusterIds, expansionPath };
    }),
  expandClusterForComponent: (componentId) =>
    set((state) => {
      const clusterNode = state.nodes.find((node) => {
        return node.data.kind === "cluster" && node.data.cluster.componentIds.includes(componentId);
      });

      if (!clusterNode || state.expandedClusterIds.has(clusterNode.id)) {
        return {};
      }

      const expandedClusterIds = new Set(state.expandedClusterIds);
      expandedClusterIds.add(clusterNode.id);
      const expansionPath = [...state.expansionPath, clusterNode.id];
      return { expandedClusterIds, expansionPath };
    }),
  expandToLevel: (nodeId) =>
    set((state) => {
      const expandedClusterIds = new Set(state.expandedClusterIds);
      const expansionPath = [...state.expansionPath];

      if (expandedClusterIds.has(nodeId)) {
        expandedClusterIds.delete(nodeId);
        const pathIndex = expansionPath.indexOf(nodeId);
        if (pathIndex !== -1) {
          expansionPath.splice(pathIndex);
        }

        const descendants = getDescendantIds(nodeId, state.childClusterMap);
        for (const descId of descendants) {
          expandedClusterIds.delete(descId);
        }
      } else {
        expandedClusterIds.add(nodeId);
        expansionPath.push(nodeId);
      }

      return { expandedClusterIds, expansionPath };
    }),
  collapseToLevel: (nodeId) =>
    set((state) => {
      const expansionPath = [...state.expansionPath];
      const pathIndex = expansionPath.indexOf(nodeId);

      if (pathIndex === -1) return {};

      const removedIds = expansionPath.splice(pathIndex);
      const expandedClusterIds = new Set(state.expandedClusterIds);

      for (const removedId of removedIds) {
        expandedClusterIds.delete(removedId);
        const descendants = getDescendantIds(removedId, state.childClusterMap);
        for (const descId of descendants) {
          expandedClusterIds.delete(descId);
        }
      }

      return { expandedClusterIds, expansionPath };
    }),
  resetExpansion: () =>
    set({
      expandedClusterIds: new Set<string>(),
      expansionPath: []
    }),
  setLayoutLoading: (loading) => set({ isLayoutLoading: loading })
}));
