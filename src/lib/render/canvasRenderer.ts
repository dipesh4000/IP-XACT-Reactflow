import {
  NODE_WIDTH,
  NODE_HEIGHT,
  CLUSTER_WIDTH,
  CLUSTER_HEIGHT,
  BUS_CHANNEL_WIDTH,
  BUS_CHANNEL_HEIGHT,
} from "../constants";
import type { ArchitectureFlowNode, ArchitectureFlowEdge } from "../../types";
import type { PortDirection } from "../../types/architecture";
import { nodeColorMap } from "../transform/colorMap";

interface Viewport {
  x: number;
  y: number;
  width: number;
  height: number;
  zoom: number;
}

const FONT_FAMILY = 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';
const MONO_FONT = '"SF Mono", "Cascadia Code", "Fira Code", Consolas, monospace';

const PORT_COLORS: Record<PortDirection, string> = {
  in: "#22c55e",
  out: "#3b82f6",
  inout: "#eab308",
};

const PORT_RADIUS = 3;
const MAX_VISIBLE_PORTS = 6;

export function renderToCanvas(
  ctx: CanvasRenderingContext2D,
  nodes: ArchitectureFlowNode[],
  edges: ArchitectureFlowEdge[],
  viewport: Viewport,
  selectedNodeIds: Set<string>,
  highlightedEdgeIds: Set<string>,
  isDark: boolean = true
) {
  const { width, height } = ctx.canvas;
  ctx.clearRect(0, 0, width, height);

  const left = -viewport.x / viewport.zoom;
  const top = -viewport.y / viewport.zoom;
  const right = left + width / viewport.zoom;
  const bottom = top + height / viewport.zoom;

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

    const isHighlighted = highlightedEdgeIds.has(edge.id);
    ctx.beginPath();
    ctx.moveTo(sourceX, sourceY);
    ctx.lineTo(targetX, targetY);
    ctx.strokeStyle = isHighlighted ? "#22d3ee" : isDark ? "#64748b" : "#94a3b8";
    ctx.lineWidth = isHighlighted ? 2 : 1.5;
    ctx.globalAlpha = isHighlighted ? 0.9 : isDark ? 0.4 : 0.5;
    ctx.stroke();

    if (isHighlighted) {
      drawArrowhead(ctx, sourceX, sourceY, targetX, targetY, isDark);
    }
  }

  ctx.globalAlpha = 1;

  for (const node of visibleNodes) {
    drawNode(ctx, node, viewport.zoom, selectedNodeIds.has(node.id), isDark);
  }

  ctx.restore();

  ctx.fillStyle = isDark ? "rgba(15, 23, 42, 0.8)" : "rgba(255, 252, 249, 0.9)";
  ctx.fillRect(8, height - 32, 180, 24);
  ctx.fillStyle = isDark ? "#94a3b8" : "#64748b";
  ctx.font = `12px ${FONT_FAMILY}`;
  ctx.fillText(`${visibleNodes.length} / ${nodes.length} nodes visible`, 16, height - 14);
}

function drawArrowhead(ctx: CanvasRenderingContext2D, fromX: number, fromY: number, toX: number, toY: number, isDark: boolean) {
  const angle = Math.atan2(toY - fromY, toX - fromX);
  const headLen = 8;

  ctx.beginPath();
  ctx.moveTo(toX, toY);
  ctx.lineTo(toX - headLen * Math.cos(angle - Math.PI / 6), toY - headLen * Math.sin(angle - Math.PI / 6));
  ctx.moveTo(toX, toY);
  ctx.lineTo(toX - headLen * Math.cos(angle + Math.PI / 6), toY - headLen * Math.sin(angle + Math.PI / 6));
  ctx.strokeStyle = "#22d3ee";
  ctx.lineWidth = 2;
  ctx.globalAlpha = 0.9;
  ctx.stroke();
}

function drawNode(
  ctx: CanvasRenderingContext2D,
  node: ArchitectureFlowNode,
  zoom: number,
  isSelected: boolean,
  isDark: boolean
) {
  const x = node.position.x;
  const y = node.position.y;
  const width = getNodeWidth(node);
  const height = getNodeHeight(node);

  if (node.data.kind === "busChannel") {
    drawBusChannel(ctx, x, y, width, height, node, zoom, isDark);
    return;
  }

  if (node.data.kind === "cluster") {
    drawCluster(ctx, x, y, width, height, node, zoom, isSelected, isDark);
    return;
  }

  const componentData = node.data;
  const colors = nodeColorMap[componentData.component.type];

  ctx.shadowColor = "rgba(0, 0, 0, 0.15)";
  ctx.shadowBlur = 8;
  ctx.shadowOffsetY = 2;

  ctx.fillStyle = colors.base;
  ctx.strokeStyle = isSelected ? "#ffffff" : colors.border;
  ctx.lineWidth = isSelected ? 2 : 1;
  roundRect(ctx, x, y, width, height, 12);
  ctx.fill();
  ctx.shadowColor = "transparent";

  const iconSize = Math.min(Math.max(24, 40 * zoom), 32);
  const iconX = x + 16;
  const iconY = y + (height - iconSize) / 2;

  ctx.fillStyle = `${colors.border}20`;
  ctx.strokeStyle = `${colors.border}60`;
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.roundRect(iconX, iconY, iconSize, iconSize, 6);
  ctx.fill();
  ctx.stroke();

  ctx.fillStyle = colors.text;
  ctx.font = `bold ${Math.max(8, 10)}px ${FONT_FAMILY}`;
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  const typeIcon = componentData.component.type.slice(0, 3).toUpperCase();
  ctx.fillText(typeIcon, iconX + iconSize / 2, iconY + iconSize / 2);

  ctx.fillStyle = "#ffffff";
  ctx.font = `600 ${Math.max(10, 13)}px ${FONT_FAMILY}`;
  ctx.textAlign = "left";
  ctx.textBaseline = "top";
  const nameX = iconX + iconSize + 8;
  const nameMaxWidth = width - (nameX - x) - 8;
  ctx.save();
  ctx.beginPath();
  ctx.rect(x, y, width, height);
  ctx.clip();
  ctx.fillText(truncateText(ctx, componentData.component.name, nameMaxWidth), nameX, y + 14);

  ctx.fillStyle = "rgba(255, 255, 255, 0.6)";
  ctx.font = `${Math.max(8, 10)}px ${MONO_FONT}`;
  ctx.fillText(truncateText(ctx, componentData.component.id, nameMaxWidth), nameX, y + 30);
  ctx.restore();

  drawPortIndicators(ctx, componentData.component.ports, x, y, width, height, zoom);

  ctx.textAlign = "left";
  ctx.textBaseline = "alphabetic";
}

function drawPortIndicators(
  ctx: CanvasRenderingContext2D,
  ports: { id: string; name: string; direction: PortDirection }[],
  x: number,
  y: number,
  width: number,
  height: number,
  zoom: number
) {
  if (!ports || ports.length === 0) return;

  const inPorts = ports.filter(p => p.direction === "in");
  const outPorts = ports.filter(p => p.direction === "out");
  const inoutPorts = ports.filter(p => p.direction === "inout");

  const rightPorts = [...inPorts, ...inoutPorts];
  const leftPorts = [...outPorts];

  const maxDots = Math.min(Math.max(rightPorts.length, leftPorts.length), MAX_VISIBLE_PORTS);

  const dotSpacing = Math.min(14, (height - 16) / Math.max(maxDots, 1));
  const startY = y + (height - (maxDots - 1) * dotSpacing) / 2;

  for (let i = 0; i < Math.min(rightPorts.length, MAX_VISIBLE_PORTS); i++) {
    const port = rightPorts[i];
    if (!port) continue;
    const py = startY + i * dotSpacing;
    ctx.beginPath();
    ctx.arc(x + width + PORT_RADIUS + 1, py, PORT_RADIUS, 0, Math.PI * 2);
    ctx.fillStyle = PORT_COLORS[port.direction];
    ctx.fill();
  }
  if (rightPorts.length > MAX_VISIBLE_PORTS) {
    ctx.fillStyle = "#94a3b8";
    ctx.font = `bold ${Math.max(7, 8)}px ${FONT_FAMILY}`;
    ctx.textAlign = "left";
    ctx.textBaseline = "middle";
    ctx.fillText(`+${rightPorts.length - MAX_VISIBLE_PORTS}`, x + width + 8, startY + MAX_VISIBLE_PORTS * dotSpacing);
  }

  for (let i = 0; i < Math.min(leftPorts.length, MAX_VISIBLE_PORTS); i++) {
    const port = leftPorts[i];
    if (!port) continue;
    const py = startY + i * dotSpacing;
    ctx.beginPath();
    ctx.arc(x - PORT_RADIUS - 1, py, PORT_RADIUS, 0, Math.PI * 2);
    ctx.fillStyle = PORT_COLORS[port.direction];
    ctx.fill();
  }
  if (leftPorts.length > MAX_VISIBLE_PORTS) {
    ctx.fillStyle = "#94a3b8";
    ctx.font = `bold ${Math.max(7, 8)}px ${FONT_FAMILY}`;
    ctx.textAlign = "right";
    ctx.textBaseline = "middle";
    ctx.fillText(`+${leftPorts.length - MAX_VISIBLE_PORTS}`, x - 8, startY + MAX_VISIBLE_PORTS * dotSpacing);
  }
}

function drawCluster(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  width: number,
  height: number,
  node: ArchitectureFlowNode,
  zoom: number,
  isSelected: boolean,
  isDark: boolean
) {
  if (node.data.kind !== "cluster") return;
  const cluster = node.data.cluster;

  const firstType = Object.keys(cluster.typeBreakdown ?? {})[0];
  const clusterColor = firstType ? nodeColorMap[firstType as keyof typeof nodeColorMap] : nodeColorMap.custom;

  ctx.shadowColor = "rgba(0, 0, 0, 0.1)";
  ctx.shadowBlur = 6;
  ctx.shadowOffsetY = 2;

  ctx.fillStyle = clusterColor.base;
  ctx.strokeStyle = isSelected ? "#ffffff" : clusterColor.border;
  ctx.lineWidth = isSelected ? 2 : 1;
  roundRect(ctx, x, y, width, height, 12);
  ctx.fill();
  ctx.shadowColor = "transparent";

  ctx.fillStyle = "#ffffff";
  ctx.font = `600 ${Math.max(10, 13)}px ${FONT_FAMILY}`;
  ctx.textAlign = "left";
  ctx.textBaseline = "top";
  ctx.fillText(truncateText(ctx, cluster.name, width - 20), x + 16, y + 14);

  ctx.fillStyle = "rgba(255, 255, 255, 0.6)";
  ctx.font = `${Math.max(8, 11)}px ${FONT_FAMILY}`;
  ctx.fillText(`${cluster.componentCount} blocks`, x + 16, y + 34);

  if (cluster.typeBreakdown) {
    const types = Object.entries(cluster.typeBreakdown);
    const tagY = y + 52;
    let tagX = x + 16;

    for (const [type, count] of types.slice(0, 3)) {
      const tagText = `${type}:${count}`;
      const tagWidth = ctx.measureText(tagText).width + 12;

      ctx.fillStyle = "rgba(255, 255, 255, 0.15)";
      ctx.beginPath();
      ctx.roundRect(tagX, tagY, tagWidth, 16, 4);
      ctx.fill();

      ctx.fillStyle = "rgba(255, 255, 255, 0.7)";
      ctx.font = `${Math.max(7, 9)}px ${FONT_FAMILY}`;
      ctx.fillText(tagText, tagX + 6, tagY + 3);

      tagX += tagWidth + 4;
    }
  }

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
  zoom: number,
  isDark: boolean
) {
  if (node.data.kind !== "busChannel") return;
  const busData = node.data;
  const colors = nodeColorMap[busData.component.type];

  ctx.fillStyle = isDark ? `${colors.base}30` : `${colors.base}35`;
  ctx.strokeStyle = isDark ? `${colors.base}60` : `${colors.base}80`;
  ctx.lineWidth = 1;
  roundRect(ctx, x, y, width, height, 4);
  ctx.fill();
  ctx.stroke();

  ctx.fillStyle = colors.base;
  ctx.fillRect(x + 2, y, width - 4, 2);
  ctx.fillRect(x + 2, y + height - 2, width - 4, 2);

  ctx.save();
  ctx.translate(x + width / 2, y + height / 2);
  ctx.rotate(-Math.PI / 2);
  ctx.fillStyle = isDark ? colors.text : colors.border;
  ctx.font = `600 ${Math.max(8, 10)}px ${FONT_FAMILY}`;
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillText(truncateText(ctx, busData.component.name, height - 8), 0, 0);
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
