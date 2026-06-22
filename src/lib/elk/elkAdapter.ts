import type { ElkExtendedEdge, ElkNode } from "elkjs";
import type { ArchitectureFlowEdge, ArchitectureFlowNode } from "../../types";
import type { ELKLayoutHints } from "../preprocess/types";

const COLLAPSED_NODE_WIDTH = 220;
const COLLAPSED_NODE_HEIGHT = 88;
const CLUSTER_NODE_WIDTH = 280;
const CLUSTER_NODE_HEIGHT = 118;
const BUS_CHANNEL_WIDTH = 32;
const BUS_CHANNEL_HEIGHT = 720;

// Mirrors the layer table from preprocess/classifier.ts.
// Used to assign ELK partition IDs so the architectural hierarchy
// (CPU → Bus → Memory → Peripheral → ...) is enforced by layout.
const COMPONENT_TYPE_LAYER: Partial<Record<string, number>> = {
  cpu: 0,
  bus: 1,
  memory: 2,
  dma: 2,
  custom: 3,
  peripheral: 4,
  interruptController: 5,
  interface: 6,
  clockReset: 6,
  debug: 6,
};

// ---------------------------------------------------------------------------
// Algorithm + option selection
// ---------------------------------------------------------------------------

function buildLayoutOptions(
  nodes: ArchitectureFlowNode[],
  edges: ArchitectureFlowEdge[],
  elkHints?: ELKLayoutHints
): Record<string, string> {
  const nodeCount = nodes.length;
  const edgeDensity = edges.length / Math.max(nodeCount, 1);
  const hasBusChannels = nodes.some((n) => n.data.kind === "busChannel");

  // Small, sparse, no bus channels → stress gives a more organic,
  // topology-revealing layout than layered for exploration graphs.
  if (nodeCount <= 25 && edgeDensity < 1.5 && !hasBusChannels) {
    return {
      "elk.algorithm": "stress",
      "elk.stress.desiredEdgeLength": "150",
      "elk.spacing.nodeNode": "64",
      "elk.edgeRouting": "SPLINES",
      ...(elkHints?.elkOptions ?? {}),
    };
  }

  // Sparse tree-like topology with no bus channels → mrtree.
  // Cleaner than layered when there are few cross-layer edges.
  if (!hasBusChannels && edgeDensity < 0.8 && nodeCount <= 150) {
    return {
      "elk.algorithm": "mrtree",
      "elk.direction": "RIGHT",
      "elk.spacing.nodeNode": "52",
      "elk.spacing.edgeNode": "24",
      "elk.edgeRouting": "SPLINES",
      ...(elkHints?.elkOptions ?? {}),
    };
  }

  // Default: layered. Also the right choice for bus-heavy topologies
  // because bus channels act as virtual layer anchors.

  // BRANDES_KOEPF: correct choice for fresh layouts — produces compact,
  // edge-aligned placement. INTERACTIVE is for re-layout with pre-existing
  // node positions; on a blank canvas it gives arbitrary results.
  const nodePlacement =
    nodeCount > 500 ? "NETWORK_SIMPLEX" : "BRANDES_KOEPF";

  // Splines look noticeably better at small scale; orthogonal is faster
  // and clearer at large scale where edge counts create visual noise.
  const edgeRouting = nodeCount <= 60 ? "SPLINES" : "ORTHOGONAL";

  // Tighten spacing as graphs get denser so the canvas stays navigable.
  const nodeSpacing =
    edgeDensity > 2.5 ? "36" : edgeDensity > 1.5 ? "48" : "60";

  // Crossing minimisation is expensive; cap iterations for large graphs.
  const crossingIterations = nodeCount > 500 ? "10" : "30";

  return {
    "elk.algorithm": "layered",
    "elk.direction": "RIGHT",
    "elk.spacing.nodeNode": nodeSpacing,
    "elk.spacing.edgeEdge": "12",
    "elk.spacing.edgeNode": "20",
    "elk.layered.spacing.nodeNodeBetweenLayers": "88",
    "elk.layered.nodePlacement.strategy": nodePlacement,
    "elk.layered.nodePlacement.bk.edgeStraightening": "true",
    "elk.layered.crossingMinimization.strategy": "LAYER_SWEEP",
    "elk.layered.crossingMinimization.greedySwitch": "true",
    "elk.layered.crossingMinimization.iterations": crossingIterations,
    "elk.layered.mergeEdges": "true",
    "elk.layered.mergeNodes": "true",
    "elk.layered.wrapping.strategy": "OFF",
    "elk.edgeRouting": edgeRouting,
    "org.eclipse.elk.portConstraints": "FIXED_ORDER",
    // Activate partition-based layering. Individual nodes get a partition
    // ID below; this tells ELK to treat those IDs as hard layer constraints
    // instead of computing layers from scratch.
    "elk.partitioning.activate": "true",
    ...(elkHints?.elkOptions ?? {}),
  };
}

// ---------------------------------------------------------------------------
// Bus channel port distribution
// ---------------------------------------------------------------------------
// Previously every bus channel had a single port at y = height/2 on each
// side, so all N connections converged on the same point. This distributes
// one port per connected edge along the vertical axis.

function buildBusChannelPorts(
  nodeId: string,
  width: number,
  height: number,
  incomingEdgeIds: string[],
  outgoingEdgeIds: string[]
) {
  const ports: { id: string; side: "LEFT" | "RIGHT"; x: number; y: number }[] =
    [];

  if (incomingEdgeIds.length === 0) {
    // Fallback: keep a single centered port so layout doesn't break
    ports.push({ id: `left:${nodeId}`, side: "LEFT", x: 0, y: height / 2 });
  } else {
    const step = height / (incomingEdgeIds.length + 1);
    incomingEdgeIds.forEach((edgeId, i) => {
      ports.push({
        id: `left:${nodeId}:${edgeId}`,
        side: "LEFT",
        x: 0,
        y: step * (i + 1),
      });
    });
  }

  if (outgoingEdgeIds.length === 0) {
    ports.push({
      id: `right:${nodeId}`,
      side: "RIGHT",
      x: width,
      y: height / 2,
    });
  } else {
    const step = height / (outgoingEdgeIds.length + 1);
    outgoingEdgeIds.forEach((edgeId, i) => {
      ports.push({
        id: `right:${nodeId}:${edgeId}`,
        side: "RIGHT",
        x: width,
        y: step * (i + 1),
      });
    });
  }

  return ports;
}

// ---------------------------------------------------------------------------
// Main export
// ---------------------------------------------------------------------------

export function flowToElkGraph(
  nodes: ArchitectureFlowNode[],
  edges: ArchitectureFlowEdge[],
  elkHints?: ELKLayoutHints
): ElkNode {
  const layoutOptions = buildLayoutOptions(nodes, edges, elkHints);
  const algorithm = layoutOptions["elk.algorithm"];
  const isLayered = algorithm === "layered";

  // Ports and partitions are only meaningful for the layered algorithm.
  // stress/mrtree don't support port constraints.
  const usePortsAndPartitions = isLayered;

  // Pre-index edges by which bus channels they touch.
  const busChannelIds = new Set(
    nodes.filter((n) => n.data.kind === "busChannel").map((n) => n.id)
  );
  const busIncoming = new Map<string, string[]>();
  const busOutgoing = new Map<string, string[]>();

  if (usePortsAndPartitions) {
    for (const edge of edges) {
      if (busChannelIds.has(edge.target)) {
        if (!busIncoming.has(edge.target)) busIncoming.set(edge.target, []);
        busIncoming.get(edge.target)!.push(edge.id);
      }
      if (busChannelIds.has(edge.source)) {
        if (!busOutgoing.has(edge.source)) busOutgoing.set(edge.source, []);
        busOutgoing.get(edge.source)!.push(edge.id);
      }
    }
  }

  return {
    id: "root",
    layoutOptions,
    children: nodes.map((node) => {
      const isBusChannel = node.data.kind === "busChannel";
      const isCluster = node.data.kind === "cluster";

      const width = isBusChannel
        ? BUS_CHANNEL_WIDTH
        : isCluster
          ? CLUSTER_NODE_WIDTH
          : COLLAPSED_NODE_WIDTH;
      const height = isBusChannel
        ? BUS_CHANNEL_HEIGHT
        : isCluster
          ? CLUSTER_NODE_HEIGHT
          : COLLAPSED_NODE_HEIGHT;

      // Build ports
      let ports: { id: string; side: "LEFT" | "RIGHT"; x: number; y: number }[] =
        [];

      if (usePortsAndPartitions) {
        if (isBusChannel) {
          ports = buildBusChannelPorts(
            node.id,
            width,
            height,
            busIncoming.get(node.id) ?? [],
            busOutgoing.get(node.id) ?? []
          );
        } else if (!isCluster) {
          ports = [
            { id: `left:${node.id}`, side: "LEFT", x: 0, y: height / 2 },
            { id: `right:${node.id}`, side: "RIGHT", x: width, y: height / 2 },
          ];
        }
      }

      // Per-node layout options: partition ID enforces the architectural layer
      const nodeLayoutOptions: Record<string, string> = {};
      if (usePortsAndPartitions && !isBusChannel && !isCluster) {
        // Get component type from the node data
        const componentType = node.data.kind === "component"
          ? node.data.component.type
          : node.data.kind === "busChannel"
            ? node.data.component.type
            : undefined;

        const partition = componentType
          ? COMPONENT_TYPE_LAYER[componentType]
          : undefined;

        if (partition != null) {
          nodeLayoutOptions["elk.partitioning.partition"] = String(partition);
        }
      }

      return {
        id: node.id,
        width,
        height,
        ...(ports.length ? { ports } : {}),
        ...(Object.keys(nodeLayoutOptions).length
          ? { layoutOptions: nodeLayoutOptions }
          : {}),
      };
    }),
    edges: edges.map((edge): ElkExtendedEdge => {
      // For bus channels, reference the per-edge distributed port.
      // For regular nodes, use the single shared port as before.
      const sourcePort = busChannelIds.has(edge.source)
        ? `right:${edge.source}:${edge.id}`
        : `right:${edge.source}`;
      const targetPort = busChannelIds.has(edge.target)
        ? `left:${edge.target}:${edge.id}`
        : `left:${edge.target}`;

      return {
        id: edge.id,
        sources: [{ id: edge.source, port: sourcePort }],
        targets: [{ id: edge.target, port: targetPort }],
      } as any;
    }),
  };
}
