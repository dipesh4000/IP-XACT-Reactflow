import {
  NODE_WIDTH,
  NODE_HEIGHT,
  CLUSTER_WIDTH,
  CLUSTER_HEIGHT,
  BUS_CHANNEL_WIDTH,
  BUS_CHANNEL_HEIGHT,
} from "../constants";
import type { ArchitectureFlowNode, ArchitectureFlowEdge } from "../../types";
import { nodeColorMap } from "../transform/colorMap";

interface Viewport {
  x: number;
  y: number;
  width: number;
  height: number;
  zoom: number;
}

export function renderToCanvas(
  ctx: CanvasRenderingContext2D,
  nodes: ArchitectureFlowNode[],
  edges: ArchitectureFlowEdge[],
  viewport: Viewport,
  selectedNodeIds: Set<string>,
  highlightedEdgeIds: Set<string>
) {
  const { width, height } = ctx.canvas;
  ctx.clearRect(0, 0, width, height);

  // Calculate visible bounds in graph coordinates
  const left = -viewport.x / viewport.zoom;
  const top = -viewport.y / viewport.zoom;
  const right = left + width / viewport.zoom;
  const bottom = top + height / viewport.zoom;

  // Build spatial index for nodes
  const visibleNodes: ArchitectureFlowNode[] = [];
  for (const node of nodes) {
    const nodeWidth = getNodeWidth(node);
    const nodeHeight = getNodeHeight(node);
    const nodeRight = node.position.x + nodeWidth;
    const nodeBottom = node.position.y + nodeHeight;

    if (node.position.x < right && nodeRight > left && node.position.y < bottom && nodeBottom > top) {
      visibleNodes.push(node);
    }
  }

  const nodeMap = new Map(visibleNodes.map(n => [n.id, n]));

  // Draw edges (only those connecting visible nodes)
  ctx.save();
  ctx.translate(viewport.x, viewport.y);
  ctx.scale(viewport.zoom, viewport.zoom);

  for (const edge of edges) {
    const source = nodeMap.get(edge.source);
    const target = nodeMap.get(edge.target);
    if (!source || !target) continue;

    const sourceX = source.position.x + getNodeWidth(source) / 2;
    const sourceY = source.position.y + getNodeHeight(source) / 2;
    const targetX = target.position.x + getNodeWidth(target) / 2;
    const targetY = target.position.y + getNodeHeight(target) / 2;

    ctx.beginPath();
    ctx.moveTo(sourceX, sourceY);
    ctx.lineTo(targetX, targetY);
    ctx.strokeStyle = highlightedEdgeIds.has(edge.id) ? "#22d3ee" : "#64748b";
    ctx.lineWidth = 1.5 / viewport.zoom;
    ctx.globalAlpha = highlightedEdgeIds.has(edge.id) ? 0.9 : 0.4;
    ctx.stroke();
  }

  ctx.globalAlpha = 1;

  // Draw nodes
  for (const node of visibleNodes) {
    drawNode(ctx, node, viewport.zoom, selectedNodeIds.has(node.id));
  }

  ctx.restore();

  // Draw node count overlay
  ctx.fillStyle = "rgba(15, 23, 42, 0.8)";
  ctx.fillRect(8, height - 32, 180, 24);
  ctx.fillStyle = "#94a3b8";
  ctx.font = "12px Inter, sans-serif";
  ctx.fillText(`${visibleNodes.length} / ${nodes.length} nodes visible`, 16, height - 14);
}

function drawNode(
  ctx: CanvasRenderingContext2D,
  node: ArchitectureFlowNode,
  zoom: number,
  isSelected: boolean
) {
  const x = node.position.x;
  const y = node.position.y;
  const width = getNodeWidth(node);
  const height = getNodeHeight(node);

  if (node.data.kind === "busChannel") {
    drawBusChannel(ctx, x, y, width, height, node, zoom);
    return;
  }

  if (node.data.kind === "cluster") {
    drawCluster(ctx, x, y, width, height, node, zoom, isSelected);
    return;
  }

  // Component node
  const componentData = node.data;
  const colors = nodeColorMap[componentData.component.type];

  // Shadow
  ctx.shadowColor = "rgba(0, 0, 0, 0.15)";
  ctx.shadowBlur = 8;
  ctx.shadowOffsetY = 2;

  // Background
  ctx.fillStyle = "#ffffff";
  ctx.strokeStyle = isSelected ? "#22d3ee" : `${colors.border}60`;
  ctx.lineWidth = isSelected ? 2 / zoom : 1 / zoom;
  roundRect(ctx, x, y, width, height, 12 / zoom);
  ctx.fill();
  ctx.shadowColor = "transparent";

  // Left color rail
  ctx.fillStyle = colors.base;
  ctx.beginPath();
  ctx.roundRect(x, y, 6 / zoom, height, [12 / zoom, 0, 0, 12 / zoom]);
  ctx.fill();

  // Type icon
  const iconSize = Math.max(24, 40 * zoom);
  const iconX = x + 16 / zoom;
  const iconY = y + (height - iconSize) / 2;

  ctx.fillStyle = `${colors.border}18`;
  ctx.strokeStyle = `${colors.border}60`;
  ctx.lineWidth = 1 / zoom;
  ctx.beginPath();
  ctx.roundRect(iconX, iconY, iconSize, iconSize, 6 / zoom);
  ctx.fill();
  ctx.stroke();

  // Type text
  ctx.fillStyle = colors.border;
  ctx.font = `bold ${Math.max(8, 10 / zoom)}px Inter, sans-serif`;
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  const typeIcon = componentData.component.type.slice(0, 3).toUpperCase();
  ctx.fillText(typeIcon, iconX + iconSize / 2, iconY + iconSize / 2);

  // Name
  ctx.fillStyle = "#0f172a";
  ctx.font = `600 ${Math.max(10, 13 / zoom)}px Inter, sans-serif`;
  ctx.textAlign = "left";
  ctx.textBaseline = "top";
  const nameX = iconX + iconSize + 8 / zoom;
  const nameMaxWidth = width - (nameX - x) - 8 / zoom;
  ctx.fillText(truncateText(ctx, componentData.component.name, nameMaxWidth), nameX, y + 14 / zoom);

  // ID
  ctx.fillStyle = "#64748b";
  ctx.font = `${Math.max(8, 10 / zoom)}px "SF Mono", monospace`;
  ctx.fillText(truncateText(ctx, componentData.component.id, nameMaxWidth), nameX, y + 30 / zoom);

  // Reset
  ctx.textAlign = "left";
  ctx.textBaseline = "alphabetic";
}

function drawCluster(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  width: number,
  height: number,
  node: ArchitectureFlowNode,
  zoom: number,
  isSelected: boolean
) {
  if (node.data.kind !== "cluster") return;
  const cluster = node.data.cluster;

  // Shadow
  ctx.shadowColor = "rgba(0, 0, 0, 0.1)";
  ctx.shadowBlur = 6;
  ctx.shadowOffsetY = 2;

  // Background
  ctx.fillStyle = "#ffffff";
  ctx.strokeStyle = isSelected ? "#22d3ee" : "#cbd5e1";
  ctx.lineWidth = isSelected ? 2 / zoom : 1 / zoom;
  roundRect(ctx, x, y, width, height, 12 / zoom);
  ctx.fill();
  ctx.shadowColor = "transparent";

  // Left color rail (use first type's color)
  const firstType = Object.keys(cluster.typeBreakdown ?? {})[0];
  const railColor = firstType ? nodeColorMap[firstType as keyof typeof nodeColorMap]?.base : "#94a3b8";
  ctx.fillStyle = railColor;
  ctx.beginPath();
  ctx.roundRect(x, y, 6 / zoom, height, [12 / zoom, 0, 0, 12 / zoom]);
  ctx.fill();

  // Name
  ctx.fillStyle = "#0f172a";
  ctx.font = `600 ${Math.max(10, 13 / zoom)}px Inter, sans-serif`;
  ctx.textAlign = "left";
  ctx.textBaseline = "top";
  ctx.fillText(truncateText(ctx, cluster.name, width - 20 / zoom), x + 16 / zoom, y + 14 / zoom);

  // Component count
  ctx.fillStyle = "#64748b";
  ctx.font = `${Math.max(8, 11 / zoom)}px Inter, sans-serif`;
  ctx.fillText(`${cluster.componentCount} blocks`, x + 16 / zoom, y + 34 / zoom);

  // Type breakdown
  if (cluster.typeBreakdown) {
    const types = Object.entries(cluster.typeBreakdown);
    const tagY = y + 52 / zoom;
    let tagX = x + 16 / zoom;

    for (const [type, count] of types.slice(0, 3)) {
      const tagText = `${type}:${count}`;
      const tagWidth = ctx.measureText(tagText).width + 12 / zoom;

      ctx.fillStyle = "#f1f5f9";
      ctx.beginPath();
      ctx.roundRect(tagX, tagY, tagWidth, 16 / zoom, 4 / zoom);
      ctx.fill();

      ctx.fillStyle = "#64748b";
      ctx.font = `${Math.max(7, 9 / zoom)}px Inter, sans-serif`;
      ctx.fillText(tagText, tagX + 6 / zoom, tagY + 3 / zoom);

      tagX += tagWidth + 4 / zoom;
    }
  }

  // Reset
  ctx.textAlign = "left";
  ctx.textBaseline = "alphabetic";
}

function drawBusChannel(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  width: number,
  height: number,
  node: ArchitectureFlowNode,
  zoom: number
) {
  if (node.data.kind !== "busChannel") return;
  const busData = node.data;
  const colors = nodeColorMap[busData.component.type];

  ctx.fillStyle = `${colors.base}30`;
  ctx.strokeStyle = `${colors.base}60`;
  ctx.lineWidth = 1 / zoom;
  roundRect(ctx, x, y, width, height, 4 / zoom);
  ctx.fill();
  ctx.stroke();

  // Top/bottom accent lines
  ctx.fillStyle = colors.base;
  ctx.fillRect(x + 2 / zoom, y, width - 4 / zoom, 2 / zoom);
  ctx.fillRect(x + 2 / zoom, y + height - 2 / zoom, width - 4 / zoom, 2 / zoom);

  // Vertical text
  ctx.save();
  ctx.translate(x + width / 2, y + height / 2);
  ctx.rotate(-Math.PI / 2);
  ctx.fillStyle = colors.text;
  ctx.font = `600 ${Math.max(8, 10 / zoom)}px Inter, sans-serif`;
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillText(busData.component.name, 0, 0);
  ctx.restore();
}

function getNodeWidth(node: ArchitectureFlowNode): number {
  if (node.data.kind === "busChannel") return BUS_CHANNEL_WIDTH;
  if (node.data.kind === "cluster") return CLUSTER_WIDTH;
  return NODE_WIDTH;
}

function getNodeHeight(node: ArchitectureFlowNode): number {
  if (node.data.kind === "busChannel") return BUS_CHANNEL_HEIGHT;
  if (node.data.kind === "cluster") return CLUSTER_HEIGHT;
  return NODE_HEIGHT;
}

function roundRect(ctx: CanvasRenderingContext2D, x: number, y: number, w: number, h: number, r: number) {
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.lineTo(x + w - r, y);
  ctx.quadraticCurveTo(x + w, y, x + w, y + r);
  ctx.lineTo(x + w, y + h - r);
  ctx.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
  ctx.lineTo(x + r, y + h);
  ctx.quadraticCurveTo(x, y + h, x, y + h - r);
  ctx.lineTo(x, y + r);
  ctx.quadraticCurveTo(x, y, x + r, y);
  ctx.closePath();
}

function truncateText(ctx: CanvasRenderingContext2D, text: string, maxWidth: number): string {
  if (ctx.measureText(text).width <= maxWidth) return text;
  let truncated = text;
  while (truncated.length > 0 && ctx.measureText(truncated + "...").width > maxWidth) {
    truncated = truncated.slice(0, -1);
  }
  return truncated + "...";
}
