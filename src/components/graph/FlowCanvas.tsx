import { useCallback, useEffect, useRef, useState, type MouseEvent } from "react";
import ReactFlow, {
  Controls,
  MarkerType,
  useReactFlow,
  type Node,
  type OnNodesChange,
  type OnEdgesChange,
  type Viewport,
  applyNodeChanges,
  applyEdgeChanges,
} from "reactflow";
import "reactflow/dist/style.css";
import { CANVAS_THRESHOLD } from "../../lib/constants";
import { useFitViewOnSelect } from "../../hooks/useFitViewOnSelect";
import { useKeyboardShortcuts } from "../../hooks/useKeyboardShortcuts";
import { useGraphStore } from "../../store/graphStore";
import { useSelectionStore } from "../../store/selectionStore";
import { useSettingsStore } from "../../store/settingsStore";
import type { ArchitectureEdgeData, ArchitectureFlowEdge, ArchitectureFlowNode, ArchitectureNodeData } from "../../types";
import { CanvasOverlay } from "./CanvasOverlay";
import { BackgroundGrid } from "./BackgroundGrid";
import { LoadingSkeleton } from "./LoadingSkeleton";
import { MiniMapPanel } from "./MiniMapPanel";
import { edgeTypes } from "./edges/edgeTypeRegistry";
import { nodeTypes } from "./nodes/nodeTypeRegistry";

const MIN_ZOOM = 0.035;
const MAX_ZOOM = 2.2;
const OVERVIEW_ZOOM = 0.32;

const defaultEdgeOptions = {
  markerEnd: {
    type: MarkerType.ArrowClosed,
    color: "#64748b",
  },
  style: {
    stroke: "#64748b",
    strokeWidth: 2,
  },
};

function FlowCanvasInner() {
  const storeNodes = useGraphStore((state) => state.nodes);
  const storeEdges = useGraphStore((state) => state.edges);
  const updateNodePosition = useGraphStore((state) => state.updateNodePosition);
  const setNodes = useGraphStore((state) => state.setNodes);
  const setEdges = useGraphStore((state) => state.setEdges);
  const toggleCluster = useGraphStore((state) => state.toggleCluster);
  const isLayoutLoading = useGraphStore((state) => state.isLayoutLoading);
  const selectNode = useSelectionStore((state) => state.selectNode);
  const clearSelection = useSelectionStore((state) => state.clearSelection);
  const focusNode = useFitViewOnSelect();
  const [isOverview, setIsOverview] = useState(false);
  const nonInteractiveThreshold = useSettingsStore((state) => state.nonInteractiveThreshold);
  const isNonInteractive = storeNodes.length > nonInteractiveThreshold;
  const useCanvas = storeNodes.length > CANVAS_THRESHOLD;
  const containerRef = useRef<HTMLDivElement>(null);
  const observerRef = useRef<ResizeObserver | null>(null);
  const [containerSize, setContainerSize] = useState({ width: 0, height: 0 });
  const reactFlowInstance = useReactFlow();

  const handleContainerRef = useCallback((node: HTMLDivElement | null) => {
    if (observerRef.current) {
      observerRef.current.disconnect();
      observerRef.current = null;
    }
    if (node) {
      const observer = new ResizeObserver((entries) => {
        for (const entry of entries) {
          const { width, height } = entry.contentRect;
          setContainerSize({ width, height });
        }
      });
      observer.observe(node);
      observerRef.current = observer;
    }
  }, []);

  useEffect(() => {
    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  const handleNodesChange: OnNodesChange = useCallback(
    (changes) => {
      const currentNodes = useGraphStore.getState().nodes;
      setNodes(applyNodeChanges(changes, currentNodes as Node[]) as ArchitectureFlowNode[]);
    },
    [setNodes]
  );

  const handleEdgesChange: OnEdgesChange = useCallback(
    (changes) => {
      const currentEdges = useGraphStore.getState().edges;
      setEdges(applyEdgeChanges(changes, currentEdges as ArchitectureFlowEdge[]) as ArchitectureFlowEdge[]);
    },
    [setEdges]
  );

  const handleNodeClick = useCallback(
    (event: MouseEvent, node: Node<ArchitectureNodeData>) => {
      const additive = event.ctrlKey || event.metaKey || event.shiftKey;
      if (node.data.kind === "component" || node.data.kind === "busChannel") {
        selectNode(node.id, additive ? { additive: true } : undefined);
      } else {
        clearSelection();
      }
    },
    [clearSelection, selectNode]
  );

  const handleNodeDoubleClick = useCallback(
    (event: MouseEvent, node: Node<ArchitectureNodeData>) => {
      event.preventDefault();
      if (node.data.kind === "cluster") {
        toggleCluster(node.id);
        selectNode(null);
        return;
      }
      if (node.data.kind === "component" || node.data.kind === "busChannel") {
        focusNode(node.id);
      }
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

  const handleZoomIn = useCallback(() => {
    reactFlowInstance.zoomIn({ duration: 200 });
  }, [reactFlowInstance]);

  const handleZoomOut = useCallback(() => {
    reactFlowInstance.zoomOut({ duration: 200 });
  }, [reactFlowInstance]);

  const handleFitView = useCallback(() => {
    reactFlowInstance.fitView({ padding: 0.18, duration: 300 });
  }, [reactFlowInstance]);

  useKeyboardShortcuts(
    {
      onZoomIn: handleZoomIn,
      onZoomOut: handleZoomOut,
      onFitView: handleFitView,
    },
    !useCanvas && storeNodes.length > 0
  );

  if (useCanvas && containerSize.width > 0) {
    return (
      <div ref={handleContainerRef} className="relative h-full w-full">
        <CanvasOverlay width={containerSize.width} height={containerSize.height} />
        {isLayoutLoading && <LoadingSkeleton />}
        <div className="absolute bottom-5 left-1/2 z-10 -translate-x-1/2 rounded-md border border-white/10 bg-shell-950/90 px-3 py-1.5 text-xs font-medium text-slate-400">
          Canvas Mode — {storeNodes.length} nodes
        </div>
      </div>
    );
  }

  return (
    <div ref={handleContainerRef} className="relative h-full w-full">
      <ReactFlow
        className={`${isOverview ? "architecture-flow architecture-flow--overview" : "architecture-flow"}${isNonInteractive ? " architecture-flow--static" : ""}`}
        nodes={storeNodes}
        edges={storeEdges}
        nodeTypes={nodeTypes}
        edgeTypes={edgeTypes}
        defaultEdgeOptions={defaultEdgeOptions}
        onNodesChange={isNonInteractive ? undefined : handleNodesChange}
        onEdgesChange={isNonInteractive ? undefined : handleEdgesChange}
        onNodeClick={isNonInteractive ? undefined : handleNodeClick}
        onNodeDoubleClick={isNonInteractive ? undefined : handleNodeDoubleClick}
        onNodeDragStop={isNonInteractive ? undefined : handleNodeDragStop}
        onMove={handleMove}
        onPaneClick={isNonInteractive ? undefined : () => clearSelection()}
        nodesDraggable={!isNonInteractive}
        nodesConnectable={!isNonInteractive}
        elementsSelectable={!isNonInteractive}
        nodesFocusable={!isNonInteractive}
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
        <Controls className="!border !border-white/10 !bg-neutral-950/90 !fill-slate-200 !text-slate-200" />
        <MiniMapPanel />
      </ReactFlow>
      {isNonInteractive && (
        <div className="absolute bottom-5 left-1/2 z-10 -translate-x-1/2 rounded-md border border-white/10 bg-shell-950/90 px-3 py-1.5 text-xs text-slate-400">
          Static View — {storeNodes.length} nodes
        </div>
      )}
      {isLayoutLoading && <LoadingSkeleton />}
    </div>
  );
}

export function FlowCanvas() {
  return <FlowCanvasInner />;
}
