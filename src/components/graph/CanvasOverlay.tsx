import { useRef, useEffect, useCallback, useState } from "react";
import { useGraphStore } from "../../store/graphStore";
import { useSelectionStore } from "../../store/selectionStore";
import { renderToCanvas } from "../../lib/render/canvasRenderer";
import type { ArchitectureFlowNode } from "../../types";

interface CanvasOverlayProps {
  width: number;
  height: number;
}

export function CanvasOverlay({ width, height }: CanvasOverlayProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const nodes = useGraphStore((state) => state.nodes);
  const edges = useGraphStore((state) => state.edges);
  const selectNode = useSelectionStore((state) => state.selectNode);
  const clearSelection = useSelectionStore((state) => state.clearSelection);
  const selectedNodeIds = useSelectionStore((state) => state.selectedNodeIds);
  const highlightedEdgeIds = useSelectionStore((state) => state.highlightedEdgeIds);

  const [viewport, setViewport] = useState({
    x: 0,
    y: 0,
    zoom: 0.1
  });

  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const [viewportStart, setViewportStart] = useState({ x: 0, y: 0 });

  // Fit view on initial load
  useEffect(() => {
    if (nodes.length === 0) return;

    let minX = Infinity, minY = Infinity, maxX = -Infinity, maxY = -Infinity;
    for (const node of nodes) {
      minX = Math.min(minX, node.position.x);
      minY = Math.min(minY, node.position.y);
      maxX = Math.max(maxX, node.position.x + 220);
      maxY = Math.max(maxY, node.position.y + 88);
    }

    const graphWidth = maxX - minX;
    const graphHeight = maxY - minY;
    const padding = 100;

    const scaleX = (width - padding * 2) / graphWidth;
    const scaleY = (height - padding * 2) / graphHeight;
    const zoom = Math.min(scaleX, scaleY, 0.3);

    const centerX = (minX + maxX) / 2;
    const centerY = (minY + maxY) / 2;

    setViewport({
      x: width / 2 - centerX * zoom,
      y: height / 2 - centerY * zoom,
      zoom
    });
  }, [nodes, width, height]);

  // Render loop
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas size for retina
    const dpr = window.devicePixelRatio || 1;
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    ctx.scale(dpr, dpr);

    renderToCanvas(ctx, nodes, edges, { ...viewport, width, height }, selectedNodeIds, highlightedEdgeIds);
  }, [nodes, edges, viewport, width, height, selectedNodeIds, highlightedEdgeIds]);

  // Mouse handlers
  const handleMouseDown = useCallback((e: React.MouseEvent) => {
    setIsDragging(true);
    setDragStart({ x: e.clientX, y: e.clientY });
    setViewportStart({ x: viewport.x, y: viewport.y });
  }, [viewport]);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!isDragging) return;

    const dx = e.clientX - dragStart.x;
    const dy = e.clientY - dragStart.y;

    setViewport(prev => ({
      ...prev,
      x: viewportStart.x + dx,
      y: viewportStart.y + dy
    }));
  }, [isDragging, dragStart, viewportStart]);

  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
  }, []);

  const handleWheel = useCallback((e: React.WheelEvent) => {
    e.preventDefault();

    const delta = e.deltaY > 0 ? 0.9 : 1.1;
    const newZoom = Math.max(0.02, Math.min(1, viewport.zoom * delta));

    // Zoom toward cursor position
    const rect = canvasRef.current?.getBoundingClientRect();
    if (!rect) return;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const graphX = (mouseX - viewport.x) / viewport.zoom;
    const graphY = (mouseY - viewport.y) / viewport.zoom;

    setViewport({
      x: mouseX - graphX * newZoom,
      y: mouseY - graphY * newZoom,
      zoom: newZoom
    });
  }, [viewport]);

  const handleClick = useCallback((e: React.MouseEvent) => {
    if (isDragging) return;

    const rect = canvasRef.current?.getBoundingClientRect();
    if (!rect) return;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    // Find clicked node
    const graphX = (mouseX - viewport.x) / viewport.zoom;
    const graphY = (mouseY - viewport.y) / viewport.zoom;

    for (const node of nodes) {
      const nodeWidth = node.data.kind === "busChannel" ? 32 : node.data.kind === "cluster" ? 280 : 220;
      const nodeHeight = node.data.kind === "busChannel" ? 720 : node.data.kind === "cluster" ? 118 : 88;

      if (
        graphX >= node.position.x &&
        graphX <= node.position.x + nodeWidth &&
        graphY >= node.position.y &&
        graphY <= node.position.y + nodeHeight
      ) {
        if (node.data.kind === "component") {
          selectNode(node.id, { additive: e.ctrlKey || e.metaKey || e.shiftKey });
        } else {
          clearSelection();
        }
        return;
      }
    }

    if (!(e.ctrlKey || e.metaKey || e.shiftKey)) {
      clearSelection();
    }
  }, [clearSelection, isDragging, viewport, nodes, selectNode]);

  return (
    <canvas
      ref={canvasRef}
      style={{ width, height, cursor: isDragging ? "grabbing" : "grab" }}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      onWheel={handleWheel}
      onClick={handleClick}
    />
  );
}
