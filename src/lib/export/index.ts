import { useGraphStore } from "../../store/graphStore";
import { useSelectionStore } from "../../store/selectionStore";
import { useSettingsStore } from "../../store/settingsStore";
import type { ArchitectureFlowEdge, ArchitectureFlowNode } from "../../types";
import { getGraphBounds, getNodeHandlePoint, createElement, addText, addRect } from "./svgHelpers";
import { getExportEdgeStyle, makeSmoothStepPath, getEdgeLabel } from "./edgeExport";
import { makeNodeGroup } from "./nodeExporter";
import { buildSidebarPanel, SIDEBAR_WIDTH } from "./sidebarExporter";

const SVG_NS = "http://www.w3.org/2000/svg";

type ExportFormat = "png" | "svg";
type ExportScope = "auto" | "selection" | "full";

interface ExportOptions {
  scope?: ExportScope;
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

  const connectedEdgeIds = new Set<string>();
  const neighborIds = new Set<string>();

  for (const edge of edges) {
    if (selectedNodeIds.has(edge.source) || selectedNodeIds.has(edge.target)) {
      connectedEdgeIds.add(edge.id);
      if (selectedNodeIds.has(edge.source)) neighborIds.add(edge.target);
      if (selectedNodeIds.has(edge.target)) neighborIds.add(edge.source);
    }
  }

  const includedIds = new Set([...selectedNodeIds, ...neighborIds]);
  const subsetNodes = nodes.filter((node) => includedIds.has(node.id));
  const subsetEdges = edges.filter((edge) => connectedEdgeIds.has(edge.id));

  if (subsetNodes.length === 0) {
    return { nodes, edges };
  }

  return { nodes: subsetNodes, edges: subsetEdges };
}

function getSelectedNode(nodes: ArchitectureFlowNode[]): ArchitectureFlowNode | null {
  const selectedNodeIds = useSelectionStore.getState().selectedNodeIds;
  if (selectedNodeIds.size === 0) return null;
  const primaryId = useSelectionStore.getState().selectedNodeId;
  if (primaryId) {
    const found = nodes.find((n) => n.id === primaryId);
    if (found) return found;
  }
  const firstId = [...selectedNodeIds][0];
  return nodes.find((n) => n.id === firstId) ?? null;
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

function buildSvg(
  nodes: ArchitectureFlowNode[],
  edges: ArchitectureFlowEdge[],
  isDark: boolean,
  showSidebar: boolean
): SVGSVGElement {
  const bounds = getGraphBounds(nodes, edges);
  if (!bounds) {
    throw new Error("Unable to determine export bounds.");
  }

  const detailLevel: "compact" | "full" = nodes.length <= 40 ? "full" : "compact";
  const padding = detailLevel === "full" ? 96 : 128;
  const graphWidth = bounds.maxX - bounds.minX + padding * 2;
  const height = bounds.maxY - bounds.minY + padding * 2;
  const viewX = bounds.minX - padding;
  const viewY = bounds.minY - padding;

  const sidebarGap = showSidebar ? 24 : 0;
  const totalWidth = graphWidth + sidebarGap + (showSidebar ? SIDEBAR_WIDTH : 0);

  const nodeMap = new Map(nodes.map((n) => [n.id, n]));

  const svg = createElement("svg", {
    xmlns: SVG_NS,
    width: String(totalWidth),
    height: String(height),
    viewBox: `${viewX} ${viewY} ${totalWidth} ${height}`,
    "font-family": "Inter, ui-sans-serif, system-ui, sans-serif"
  }) as SVGSVGElement;

  const defs = createElement("defs");
  createArrowMarker(defs as SVGDefsElement, isDark);
  svg.appendChild(defs);

  addRect(svg, {
    x: String(viewX),
    y: String(viewY),
    width: String(graphWidth),
    height: String(height),
    fill: isDark ? "#020617" : "#faf8f5"
  });

  const edgeLayer = createElement("g", { class: "edges" }) as SVGGElement;
  for (const edge of edges) {
    const source = nodeMap.get(edge.source);
    const target = nodeMap.get(edge.target);
    if (!source || !target) continue;

    const isClusterEdge = edge.source.startsWith("hierarchy:") || edge.target.startsWith("hierarchy:");
    const style = getExportEdgeStyle(edge.data?.connectionType, isDark, isClusterEdge);

    const sp = getNodeHandlePoint(source, "right");
    const tp = getNodeHandlePoint(target, "left");
    const { path, labelX, labelY } = makeSmoothStepPath(sp.x, sp.y, tp.x, tp.y);

    edgeLayer.appendChild(createElement("path", {
      d: path,
      fill: "none",
      stroke: style.color,
      "stroke-width": String(style.width),
      "stroke-opacity": String(style.opacity),
      "stroke-dasharray": style.dash ?? "",
      "marker-end": "url(#export-arrow)"
    }));

    const connectionLabel = getEdgeLabel(edge);
    if (connectionLabel) {
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

  if (showSidebar) {
    const selectedNode = getSelectedNode(nodes);
    if (selectedNode) {
      const sidebarX = viewX + graphWidth + sidebarGap;
      const sidebarY = viewY;
      svg.appendChild(buildSidebarPanel(selectedNode, isDark, sidebarX, sidebarY, height));
    }
  }

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

export async function exportGraph(format: ExportFormat, options: ExportOptions = {}): Promise<void> {
  const graphState = useGraphStore.getState();
  const theme = useSettingsStore.getState().theme;
  const isDark = theme === "dark";
  const scope = options.scope ?? (useSelectionStore.getState().selectedNodeId ? "selection" : "full");
  const { nodes, edges } = getExportSubset(graphState.nodes, graphState.edges, scope);

  if (nodes.length === 0) {
    throw new Error("There is nothing to export.");
  }

  const showSidebar = scope === "selection";
  const svg = buildSvg(nodes, edges, isDark, showSidebar);

  if (format === "svg") {
    const blob = new Blob([serializeSvg(svg)], { type: "image/svg+xml;charset=utf-8" });
    downloadBlob(blob, `architecture-${scope}.svg`);
    return;
  }

  const png = await svgToPng(svg, isDark);
  downloadHref(png, `architecture-${scope}.png`);
}
