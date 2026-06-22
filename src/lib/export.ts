import { nodeColorMap } from "./transform/colorMap";
import { useGraphStore } from "../store/graphStore";
import { useSelectionStore } from "../store/selectionStore";
import { useSettingsStore } from "../store/settingsStore";
import type { ArchitectureFlowEdge, ArchitectureFlowNode } from "../types";
import type { ConnectionType } from "./preprocess/types";

type ExportFormat = "png" | "svg";
type ExportScope = "auto" | "selection" | "full";

interface ExportOptions {
  scope?: ExportScope;
}

interface Bounds {
  minX: number;
  minY: number;
  maxX: number;
  maxY: number;
}

interface Size {
  width: number;
  height: number;
}

interface Point {
  x: number;
  y: number;
}

const SVG_NS = "http://www.w3.org/2000/svg";

// Match the canvas renderer so exported SVG feels like the live graph.
const NODE_EXPORT_SIZE: Record<ArchitectureFlowNode["data"]["kind"], Size> = {
  component: { width: 220, height: 88 },
  cluster: { width: 280, height: 118 },
  busChannel: { width: 32, height: 720 }
};

const EDGE_STYLES_DARK: Record<ConnectionType, { color: string; width: number; dash?: string; opacity: number }> = {
  bus: { color: "#a78bfa", width: 4, opacity: 0.72 },
  interrupt: { color: "#f472b6", width: 3, dash: "6 4", opacity: 0.66 },
  dma: { color: "#2dd4bf", width: 3.5, opacity: 0.66 },
  clock: { color: "#f87171", width: 2.5, opacity: 0.58 },
  reset: { color: "#fb923c", width: 2.5, dash: "3 3", opacity: 0.58 },
  debug: { color: "#94a3b8", width: 2, dash: "2 4", opacity: 0.54 },
  data: { color: "#4ade80", width: 3, opacity: 0.62 },
  control: { color: "#facc15", width: 2.5, dash: "4 2", opacity: 0.58 },
  unknown: { color: "#64748b", width: 2, opacity: 0.46 }
};

const EDGE_STYLES_LIGHT: Record<ConnectionType, { color: string; width: number; dash?: string; opacity: number }> = {
  bus: { color: "#7c3aed", width: 4, opacity: 0.82 },
  interrupt: { color: "#db2777", width: 3, dash: "6 4", opacity: 0.76 },
  dma: { color: "#0d9488", width: 3.5, opacity: 0.76 },
  clock: { color: "#dc2626", width: 2.5, opacity: 0.68 },
  reset: { color: "#ea580c", width: 2.5, dash: "3 3", opacity: 0.68 },
  debug: { color: "#475569", width: 2, dash: "2 4", opacity: 0.62 },
  data: { color: "#16a34a", width: 3, opacity: 0.72 },
  control: { color: "#ca8a04", width: 2.5, dash: "4 2", opacity: 0.68 },
  unknown: { color: "#334155", width: 2, opacity: 0.56 }
};

function downloadHref(href: string, filename: string): void {
  const link = document.createElement("a");
  link.href = href;
  link.download = filename;
  link.click();
}

function downloadBlob(blob: Blob, filename: string): void {
  const href = URL.createObjectURL(blob);
  try {
    downloadHref(href, filename);
  } finally {
    setTimeout(() => URL.revokeObjectURL(href), 0);
  }
}

function getNodeSize(node: ArchitectureFlowNode): Size {
  return NODE_EXPORT_SIZE[node.data.kind];
}

function getNodeBounds(node: ArchitectureFlowNode): Bounds {
  const { width, height } = getNodeSize(node);
  return {
    minX: node.position.x,
    minY: node.position.y,
    maxX: node.position.x + width,
    maxY: node.position.y + height
  };
}

function getNodeCenter(node: ArchitectureFlowNode): Point {
  const { width, height } = getNodeSize(node);
  return {
    x: node.position.x + width / 2,
    y: node.position.y + height / 2
  };
}

function unionBounds(bounds: Bounds[]): Bounds | null {
  if (bounds.length === 0) return null;

  return bounds.reduce<Bounds>(
    (acc, item) => ({
      minX: Math.min(acc.minX, item.minX),
      minY: Math.min(acc.minY, item.minY),
      maxX: Math.max(acc.maxX, item.maxX),
      maxY: Math.max(acc.maxY, item.maxY)
    }),
    { ...bounds[0]! }
  );
}

function getGraphBounds(nodes: ArchitectureFlowNode[], edges: ArchitectureFlowEdge[]): Bounds | null {
  const bounds: Bounds[] = nodes.map(getNodeBounds);

  for (const edge of edges) {
    const source = nodes.find((node) => node.id === edge.source);
    const target = nodes.find((node) => node.id === edge.target);
    if (!source || !target) continue;

    const sourceCenter = getNodeCenter(source);
    const targetCenter = getNodeCenter(target);
    bounds.push({
      minX: Math.min(sourceCenter.x, targetCenter.x) - 20,
      minY: Math.min(sourceCenter.y, targetCenter.y) - 20,
      maxX: Math.max(sourceCenter.x, targetCenter.x) + 20,
      maxY: Math.max(sourceCenter.y, targetCenter.y) + 20
    });
  }

  return unionBounds(bounds);
}

function getExportSubset(
  nodes: ArchitectureFlowNode[],
  edges: ArchitectureFlowEdge[],
  scope: ExportScope
): { nodes: ArchitectureFlowNode[]; edges: ArchitectureFlowEdge[] } {
  if (scope === "full") {
    return { nodes, edges };
  }

  const selectedNodeIds = useSelectionStore.getState().selectedNodeIds;
  if (selectedNodeIds.size === 0) {
    return { nodes, edges };
  }

  const subsetNodes = nodes.filter((node) => selectedNodeIds.has(node.id));
  const subsetEdges = edges.filter((edge) => selectedNodeIds.has(edge.source) && selectedNodeIds.has(edge.target));

  if (subsetNodes.length === 0) {
    return { nodes, edges };
  }

  return { nodes: subsetNodes, edges: subsetEdges };
}

function getColorTokens(type: string) {
  return nodeColorMap[type as keyof typeof nodeColorMap] ?? nodeColorMap.custom;
}

function getEdgeStyles(isDark: boolean) {
  return isDark ? EDGE_STYLES_DARK : EDGE_STYLES_LIGHT;
}

function createElement<K extends keyof SVGElementTagNameMap>(
  tag: K,
  attrs: Record<string, string> = {},
  text?: string
): SVGElementTagNameMap[K] {
  const el = document.createElementNS(SVG_NS, tag);
  for (const [key, value] of Object.entries(attrs)) {
    el.setAttribute(key, value);
  }
  if (text != null) {
    el.textContent = text;
  }
  return el;
}

function addText(parent: SVGGElement | SVGSVGElement, x: number, y: number, text: string, attrs: Record<string, string> = {}): SVGTextElement {
  const element = createElement("text", { x: String(x), y: String(y), ...attrs }, text);
  parent.appendChild(element);
  return element;
}

function addRect(parent: SVGGElement | SVGSVGElement, attrs: Record<string, string>): SVGRectElement {
  const element = createElement("rect", attrs);
  parent.appendChild(element);
  return element;
}

function addRoundRect(parent: SVGGElement | SVGSVGElement, attrs: Record<string, string>): SVGRectElement {
  return addRect(parent, { rx: "10", ry: "10", ...attrs });
}

function formatPortLabel(port: { name: string; direction: string; width?: number }): string {
  return `${port.name} (${port.direction}${port.width ? ` ${port.width}b` : ""})`;
}

function getEdgeStyle(
  connectionType: ConnectionType | undefined,
  isDark: boolean,
  isClusterEdge: boolean
): { color: string; width: number; dash?: string; opacity: number } {
  const styles = getEdgeStyles(isDark);

  if (isClusterEdge) {
    return { color: isDark ? "#818cf8" : "#6366f1", width: 2, dash: "4 3", opacity: 0.65 };
  }

  return styles[connectionType ?? "unknown"] ?? styles.unknown;
}

function makeEdgePath(source: ArchitectureFlowNode, target: ArchitectureFlowNode): string {
  const sourceCenter = getNodeCenter(source);
  const targetCenter = getNodeCenter(target);
  return `M ${sourceCenter.x} ${sourceCenter.y} L ${targetCenter.x} ${targetCenter.y}`;
}

function getEdgeLabel(edge: ArchitectureFlowEdge): string {
  if (edge.data?.connectionType) {
    return edge.data.connectionType;
  }
  if (edge.data?.connectionCount && edge.data.connectionCount > 1) {
    return `${edge.data.connectionCount}x`;
  }
  return "";
}

function createArrowMarker(defs: SVGDefsElement, isDark: boolean): void {
  const marker = createElement("marker", {
    id: "export-arrow",
    markerWidth: "10",
    markerHeight: "10",
    refX: "8",
    refY: "5",
    orient: "auto",
    markerUnits: "strokeWidth"
  });
  marker.appendChild(createElement("path", {
    d: "M 0 0 L 10 5 L 0 10 z",
    fill: isDark ? "#67e8f9" : "#0f172a"
  }));
  defs.appendChild(marker);
}

function makeNodeGroup(node: ArchitectureFlowNode, detailLevel: "compact" | "full"): SVGGElement {
  const group = createElement("g", { class: `node node-${node.data.kind}` });
  const { width, height } = getNodeSize(node);

  if (node.data.kind === "busChannel") {
    const colors = getColorTokens(node.data.component.type);
    addRoundRect(group, {
      x: String(node.position.x),
      y: String(node.position.y),
      width: String(width),
      height: String(height),
      fill: `${colors.base}26`,
      stroke: `${colors.base}66`,
      "stroke-width": "1.2"
    });
    addRect(group, {
      x: String(node.position.x + 2),
      y: String(node.position.y),
      width: String(width - 4),
      height: "2",
      fill: colors.base
    });
    addRect(group, {
      x: String(node.position.x + 2),
      y: String(node.position.y + height - 2),
      width: String(width - 4),
      height: "2",
      fill: colors.base
    });
    const centerX = node.position.x + width / 2;
    const centerY = node.position.y + height / 2;
    addText(group, centerX, centerY, node.data.component.name, {
      fill: colors.text,
      "font-size": "13px",
      "font-family": "Inter, ui-sans-serif, system-ui, sans-serif",
      "text-anchor": "middle",
      "dominant-baseline": "middle",
      transform: `rotate(-90 ${centerX} ${centerY})`
    }).setAttribute("font-weight", "600");
    return group;
  }

  addRoundRect(group, {
    x: String(node.position.x + 2),
    y: String(node.position.y + 3),
    width: String(width),
    height: String(height),
    rx: "12",
    fill: "rgba(0,0,0,0.10)",
    opacity: "0.20"
  });

  addRoundRect(group, {
    x: String(node.position.x),
    y: String(node.position.y),
    width: String(width),
    height: String(height),
    fill: "#ffffff",
    stroke: "#cbd5e1",
    "stroke-width": "1.2"
  });

  if (node.data.kind === "cluster") {
    const cluster = node.data.cluster;
    const firstType = Object.keys(cluster.typeBreakdown ?? {})[0];
    const railColor = firstType ? nodeColorMap[firstType as keyof typeof nodeColorMap]?.base ?? "#94a3b8" : "#94a3b8";

    addRect(group, {
      x: String(node.position.x),
      y: String(node.position.y),
      width: "6",
      height: String(height),
      rx: "12",
      fill: railColor
    });
    addText(group, node.position.x + 16, node.position.y + 22, cluster.name, {
      fill: "#0f172a",
      "font-size": "14px",
      "font-weight": "700",
      "font-family": "Inter, ui-sans-serif, system-ui, sans-serif"
    });
    addText(group, node.position.x + 16, node.position.y + 42, `${cluster.componentCount} blocks`, {
      fill: "#475569",
      "font-size": "11px",
      "font-family": "Inter, ui-sans-serif, system-ui, sans-serif"
    });
    addText(group, node.position.x + 16, node.position.y + 58, `Connections: ${cluster.connectionCount}`, {
      fill: "#64748b",
      "font-size": "10px",
      "font-family": "Inter, ui-sans-serif, system-ui, sans-serif"
    });

    const breakdown = Object.entries(cluster.typeBreakdown ?? {}).slice(0, detailLevel === "full" ? 4 : 3);
    let badgeX = node.position.x + 16;
    for (const [type, count] of breakdown) {
      const badgeWidth = Math.max(56, type.length * 5 + String(count).length * 8 + 18);
      addRoundRect(group, {
        x: String(badgeX),
        y: String(node.position.y + 72),
        width: String(badgeWidth),
        height: "18",
        fill: "#f1f5f9",
        stroke: "#e2e8f0",
        "stroke-width": "1"
      });
      addText(group, badgeX + 6, node.position.y + 85, `${type}:${count}`, {
        fill: "#475569",
        "font-size": "9px",
        "font-family": "Inter, ui-sans-serif, system-ui, sans-serif"
      });
      badgeX += badgeWidth + 6;
    }
    return group;
  }

  const component = node.data.component;
  const colors = getColorTokens(component.type);

  addRect(group, {
    x: String(node.position.x),
    y: String(node.position.y),
    width: "6",
    height: String(height),
    rx: "12",
    fill: colors.base
  });

  addRoundRect(group, {
    x: String(node.position.x + 16),
    y: String(node.position.y + 16),
    width: "40",
    height: "40",
    fill: `${colors.base}18`,
    stroke: `${colors.border}88`,
    "stroke-width": "1.2"
  });
  addText(group, node.position.x + 36, node.position.y + 40, component.type.slice(0, 3).toUpperCase(), {
    fill: colors.border,
    "font-size": "10px",
    "font-weight": "700",
    "font-family": "Inter, ui-sans-serif, system-ui, sans-serif",
    "text-anchor": "middle"
  });

  addText(group, node.position.x + 64, node.position.y + 26, component.name, {
    fill: "#0f172a",
    "font-size": "13px",
    "font-weight": "600",
    "font-family": "Inter, ui-sans-serif, system-ui, sans-serif"
  });
  addText(group, node.position.x + 64, node.position.y + 42, component.id, {
    fill: "#64748b",
    "font-size": "10px",
    "font-family": "SFMono-Regular, ui-monospace, monospace"
  });

  if (detailLevel === "full") {
    addText(group, node.position.x + 64, node.position.y + 58, `${component.ports.length} ports / ${component.registers.length} registers`, {
      fill: "#475569",
      "font-size": "10px",
      "font-family": "Inter, ui-sans-serif, system-ui, sans-serif"
    });

    const portsToShow = component.ports.slice(0, 2);
    let portY = node.position.y + 72;
    for (const port of portsToShow) {
      addRoundRect(group, {
        x: String(node.position.x + 64),
        y: String(portY - 10),
        width: "140",
        height: "15",
        fill: "#f8fafc",
        stroke: "#e2e8f0",
        "stroke-width": "1"
      });
      addText(group, node.position.x + 70, portY, formatPortLabel(port), {
        fill: "#334155",
        "font-size": "9px",
        "font-family": "Inter, ui-sans-serif, system-ui, sans-serif"
      });
      portY += 16;
    }

    if (component.ports.length > portsToShow.length) {
      addText(group, node.position.x + 206, node.position.y + 86, `+${component.ports.length - portsToShow.length} more`, {
        fill: "#94a3b8",
        "font-size": "9px",
        "font-family": "Inter, ui-sans-serif, system-ui, sans-serif",
        "text-anchor": "end"
      });
    }
  }

  return group;
}

function buildSvg(
  nodes: ArchitectureFlowNode[],
  edges: ArchitectureFlowEdge[],
  isDark: boolean
): SVGSVGElement {
  const bounds = getGraphBounds(nodes, edges);
  if (!bounds) {
    throw new Error("Unable to determine export bounds.");
  }

  const detailLevel: "compact" | "full" = nodes.length <= 40 ? "full" : "compact";
  const padding = detailLevel === "full" ? 96 : 128;
  const width = bounds.maxX - bounds.minX + padding * 2;
  const height = bounds.maxY - bounds.minY + padding * 2;
  const viewX = bounds.minX - padding;
  const viewY = bounds.minY - padding;

  const svg = createElement("svg", {
    xmlns: SVG_NS,
    width: String(width),
    height: String(height),
    viewBox: `${viewX} ${viewY} ${width} ${height}`,
    "font-family": "Inter, ui-sans-serif, system-ui, sans-serif"
  }) as SVGSVGElement;

  const defs = createElement("defs");
  createArrowMarker(defs as SVGDefsElement, isDark);
  svg.appendChild(defs);

  addRect(svg, {
    x: String(viewX),
    y: String(viewY),
    width: String(width),
    height: String(height),
    fill: isDark ? "#020617" : "#faf8f5"
  });

  const edgeLayer = createElement("g", { class: "edges" }) as SVGGElement;
  for (const edge of edges) {
    const source = nodes.find((node) => node.id === edge.source);
    const target = nodes.find((node) => node.id === edge.target);
    if (!source || !target) continue;

    const isClusterEdge = edge.source.startsWith("hierarchy:") || edge.target.startsWith("hierarchy:");
    const style = getEdgeStyle(edge.data?.connectionType, isDark, isClusterEdge);
    edgeLayer.appendChild(createElement("path", {
      d: makeEdgePath(source, target),
      fill: "none",
      stroke: style.color,
      "stroke-width": String(style.width),
      "stroke-opacity": String(style.opacity),
      "stroke-dasharray": style.dash ?? "",
      "marker-end": "url(#export-arrow)"
    }));

    const connectionLabel = getEdgeLabel(edge);
    if (connectionLabel) {
      const sourceCenter = getNodeCenter(source);
      const targetCenter = getNodeCenter(target);
      const labelX = (sourceCenter.x + targetCenter.x) / 2;
      const labelY = (sourceCenter.y + targetCenter.y) / 2;
      const labelWidth = Math.max(36, connectionLabel.length * 7 + 10);
      edgeLayer.appendChild(createElement("rect", {
        x: String(labelX - labelWidth / 2),
        y: String(labelY - 10),
        width: String(labelWidth),
        height: "18",
        rx: "9",
        fill: isDark ? "#0f172a" : "#ffffff",
        stroke: isDark ? "#334155" : "#cbd5e1"
      }));
      addText(edgeLayer, labelX, labelY + 3, connectionLabel, {
        fill: isDark ? "#e2e8f0" : "#334155",
        "font-size": "9px",
        "text-anchor": "middle",
        "font-family": "Inter, ui-sans-serif, system-ui, sans-serif"
      });
    }
  }
  svg.appendChild(edgeLayer);

  const nodeLayer = createElement("g", { class: "nodes" }) as SVGGElement;
  for (const node of nodes) {
    nodeLayer.appendChild(makeNodeGroup(node, detailLevel));
  }
  svg.appendChild(nodeLayer);

  return svg;
}

function serializeSvg(svg: SVGSVGElement): string {
  return new XMLSerializer().serializeToString(svg);
}

async function svgToPng(svg: SVGSVGElement, isDark: boolean): Promise<string> {
  const serialized = serializeSvg(svg);
  const blob = new Blob([serialized], { type: "image/svg+xml;charset=utf-8" });
  const url = URL.createObjectURL(blob);

  try {
    const image = new Image();
    image.decoding = "async";
    image.src = url;
    await image.decode();

    const canvas = document.createElement("canvas");
    canvas.width = Math.ceil(svg.viewBox.baseVal.width);
    canvas.height = Math.ceil(svg.viewBox.baseVal.height);
    const ctx = canvas.getContext("2d");
    if (!ctx) {
      throw new Error("Canvas unavailable");
    }

    ctx.fillStyle = isDark ? "#020617" : "#faf8f5";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(image, 0, 0);
    return canvas.toDataURL("image/png");
  } finally {
    URL.revokeObjectURL(url);
  }
}

export async function exportGraph(format: ExportFormat, options: ExportOptions = {}): Promise<void> {
  const graphState = useGraphStore.getState();
  const theme = useSettingsStore.getState().theme;
  const isDark = theme === "dark";
  const scope = options.scope ?? (useSelectionStore.getState().selectedNodeId ? "selection" : "full");
  const { nodes, edges } = getExportSubset(graphState.nodes, graphState.edges, scope);

  if (nodes.length === 0) {
    throw new Error("There is nothing to export.");
  }

  const svg = buildSvg(nodes, edges, isDark);

  if (format === "svg") {
    const blob = new Blob([serializeSvg(svg)], { type: "image/svg+xml;charset=utf-8" });
    downloadBlob(blob, `architecture-${scope}.svg`);
    return;
  }

  const png = await svgToPng(svg, isDark);
  downloadHref(png, `architecture-${scope}.png`);
}
