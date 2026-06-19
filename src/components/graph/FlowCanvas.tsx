import { useCallback, useState, type MouseEvent } from "react";
import ReactFlow, { Controls, MarkerType, type Node, type OnNodesChange, type OnEdgesChange, type Viewport, applyNodeChanges, applyEdgeChanges } from "reactflow";
import "reactflow/dist/style.css";
import { useFitViewOnSelect } from "../../hooks/useFitViewOnSelect";
import { useGraphStore } from "../../store/graphStore";
import { useSelectionStore } from "../../store/selectionStore";
import type { ArchitectureEdgeData, ArchitectureFlowEdge, ArchitectureFlowNode, ArchitectureNodeData } from "../../types";
import { BackgroundGrid } from "./BackgroundGrid";
import { LoadingSkeleton } from "./LoadingSkeleton";
import { MiniMapPanel } from "./MiniMapPanel";
import { edgeTypes } from "./edges/edgeTypeRegistry";
import { nodeTypes } from "./nodes/nodeTypeRegistry";

const defaultEdgeOptions = {
  markerEnd: {
    type: MarkerType.ArrowClosed,
    color: "#64748b"
  }
};

const MIN_ZOOM = 0.035;
const MAX_ZOOM = 2.2;
const OVERVIEW_ZOOM = 0.32;

function FlowCanvasInner() {
  const storeNodes = useGraphStore((state) => state.nodes);
  const storeEdges = useGraphStore((state) => state.edges);
  const updateNodePosition = useGraphStore((state) => state.updateNodePosition);
  const setNodes = useGraphStore((state) => state.setNodes);
  const setEdges = useGraphStore((state) => state.setEdges);
  const toggleCluster = useGraphStore((state) => state.toggleCluster);
  const isLayoutLoading = useGraphStore((state) => state.isLayoutLoading);
  const selectNode = useSelectionStore((state) => state.selectNode);
  const focusNode = useFitViewOnSelect();
  const [isOverview, setIsOverview] = useState(false);

  const handleNodesChange: OnNodesChange = useCallback(
    (changes) => {
      const currentNodes = useGraphStore.getState().nodes;
      setNodes(applyNodeChanges(changes, currentNodes as any) as ArchitectureFlowNode[]);
    },
    [setNodes]
  );

  const handleEdgesChange: OnEdgesChange = useCallback(
    (changes) => {
      const currentEdges = useGraphStore.getState().edges;
      setEdges(applyEdgeChanges(changes, currentEdges as any) as ArchitectureFlowEdge[]);
    },
    [setEdges]
  );

  const handleNodeClick = useCallback(
    (_event: MouseEvent, node: Node<ArchitectureNodeData>) => {
      selectNode(node.data.kind === "component" ? node.id : null);
    },
    [selectNode]
  );

  const handleNodeDoubleClick = useCallback(
    (event: MouseEvent, node: Node<ArchitectureNodeData>) => {
      event.preventDefault();
      if (node.data.kind === "cluster") {
        toggleCluster(node.id);
        selectNode(null);
        return;
      }

      focusNode(node.id);
    },
    [focusNode, selectNode, toggleCluster]
  );

  const handleNodeDragStop = useCallback(
    (_event: MouseEvent, node: Node<ArchitectureNodeData>) => {
      updateNodePosition(node.id, node.position);
    },
    [updateNodePosition]
  );

  const handleMove = useCallback((_event: unknown, viewport: Viewport) => {
    setIsOverview((current) => {
      const next = viewport.zoom <= OVERVIEW_ZOOM;
      return current === next ? current : next;
    });
  }, []);

  return (
    <div className="relative h-full w-full">
      <ReactFlow
        className={isOverview ? "architecture-flow architecture-flow--overview" : "architecture-flow"}
        nodes={storeNodes}
        edges={storeEdges}
        nodeTypes={nodeTypes}
        edgeTypes={edgeTypes}
        defaultEdgeOptions={defaultEdgeOptions}
        onNodesChange={handleNodesChange}
        onEdgesChange={handleEdgesChange}
        onNodeClick={handleNodeClick}
        onNodeDoubleClick={handleNodeDoubleClick}
        onNodeDragStop={handleNodeDragStop}
        onMove={handleMove}
        onPaneClick={() => selectNode(null)}
        fitView
        fitViewOptions={{ padding: 0.18, minZoom: MIN_ZOOM, maxZoom: 0.9 }}
        onlyRenderVisibleElements
        zoomOnDoubleClick={false}
        minZoom={MIN_ZOOM}
        maxZoom={MAX_ZOOM}
        proOptions={{ hideAttribution: true }}
      >
        <svg>
          <defs>
            <marker id="architecture-arrow" markerHeight="12" markerWidth="12" orient="auto" refX="10" refY="6">
              <path d="M2,2 L10,6 L2,10 z" fill="#67e8f9" />
            </marker>
          </defs>
        </svg>
        <BackgroundGrid />
        <Controls className="!border !border-white/10 !bg-shell-950/90 !fill-slate-200 !text-slate-200" />
        <MiniMapPanel />
      </ReactFlow>
      {isLayoutLoading && <LoadingSkeleton />}
    </div>
  );
}

export function FlowCanvas() {
  return <FlowCanvasInner />;
}
