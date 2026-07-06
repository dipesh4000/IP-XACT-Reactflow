import type { ArchitectureFlowEdge, ArchitectureFlowNode } from "../../types";
import { NODE_WIDTH, NODE_HEIGHT, CLUSTER_WIDTH, CLUSTER_HEIGHT, BUS_CHANNEL_HEIGHT, BUS_PILLAR_WIDTH, BUS_COMPACT_WIDTH, BUS_COMPACT_HEIGHT } from "../constants";

const SVG_NS = "http://www.w3.org/2000/svg";

export interface Bounds {
  minX: number;
  minY: number;
  maxX: number;
  maxY: number;
}

export interface Size {
  width: number;
  height: number;
}

export interface Point {
  x: number;
  y: number;
}

export function getNodeSize(node: ArchitectureFlowNode): Size {
  if (node.data.kind === "busChannel") {
    if (node.data.display === "compact") {
      return { width: BUS_COMPACT_WIDTH, height: BUS_COMPACT_HEIGHT };
    }
    return {
      width: BUS_PILLAR_WIDTH,
      height: node.data.channelHeight ?? BUS_CHANNEL_HEIGHT,
    };
  }
  if (node.data.kind === "cluster") {
    return { width: CLUSTER_WIDTH, height: CLUSTER_HEIGHT };
  }
  return { width: NODE_WIDTH, height: NODE_HEIGHT };
}

export function getNodeBounds(node: ArchitectureFlowNode): Bounds {
  const { width, height } = getNodeSize(node);
  return {
    minX: node.position.x,
    minY: node.position.y,
    maxX: node.position.x + width,
    maxY: node.position.y + height
  };
}

export function getNodeCenter(node: ArchitectureFlowNode): Point {
  const { width, height } = getNodeSize(node);
  return {
    x: node.position.x + width / 2,
    y: node.position.y + height / 2
  };
}

export function unionBounds(bounds: Bounds[]): Bounds | null {
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

export function getNodeHandlePoint(node: ArchitectureFlowNode, side: "left" | "right"): Point {
  const { width, height } = getNodeSize(node);
  return {
    x: side === "right" ? node.position.x + width : node.position.x,
    y: node.position.y + height / 2,
  };
}

export function getGraphBounds(nodes: ArchitectureFlowNode[], edges: ArchitectureFlowEdge[]): Bounds | null {
  const bounds: Bounds[] = nodes.map(getNodeBounds);

  const nodeMap = new Map(nodes.map((n) => [n.id, n]));

  for (const edge of edges) {
    const source = nodeMap.get(edge.source);
    const target = nodeMap.get(edge.target);
    if (!source || !target) continue;

    const sp = getNodeHandlePoint(source, "right");
    const tp = getNodeHandlePoint(target, "left");
    bounds.push({
      minX: Math.min(sp.x, tp.x) - 40,
      minY: Math.min(sp.y, tp.y) - 40,
      maxX: Math.max(sp.x, tp.x) + 40,
      maxY: Math.max(sp.y, tp.y) + 40
    });
  }

  return unionBounds(bounds);
}

export function createElement<K extends keyof SVGElementTagNameMap>(
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

export function addText(parent: SVGGElement | SVGSVGElement, x: number, y: number, text: string, attrs: Record<string, string> = {}): SVGTextElement {
  const element = createElement("text", { x: String(x), y: String(y), ...attrs }, text);
  parent.appendChild(element);
  return element;
}

export function addRect(parent: SVGGElement | SVGSVGElement, attrs: Record<string, string>): SVGRectElement {
  const element = createElement("rect", attrs);
  parent.appendChild(element);
  return element;
}

export function addRoundRect(parent: SVGGElement | SVGSVGElement, attrs: Record<string, string>): SVGRectElement {
  return addRect(parent, { rx: "10", ry: "10", ...attrs });
}

export function addLinearGradient(
  defs: SVGDefsElement,
  id: string,
  from: string,
  to: string,
  direction: "horizontal" | "vertical" = "vertical"
): void {
  const gradient = createElement("linearGradient", {
    id,
    x1: "0%",
    y1: direction === "vertical" ? "0%" : "0%",
    x2: direction === "horizontal" ? "100%" : "0%",
    y2: direction === "vertical" ? "100%" : "0%",
  });
  gradient.appendChild(createElement("stop", { offset: "0%", "stop-color": from }));
  gradient.appendChild(createElement("stop", { offset: "100%", "stop-color": to }));
  defs.appendChild(gradient);
}

export function addExportFilters(defs: SVGDefsElement): void {
  const filter = createElement("filter", {
    id: "export-node-shadow",
    x: "-20%",
    y: "-20%",
    width: "140%",
    height: "140%",
  });
  filter.appendChild(createElement("feDropShadow", {
    dx: "0",
    dy: "4",
    stdDeviation: "6",
    "flood-color": "#000000",
    "flood-opacity": "0.45",
  }));
  defs.appendChild(filter);
}

export function addExportBackgroundPattern(defs: SVGDefsElement): void {
  const pattern = createElement("pattern", {
    id: "export-dot-grid",
    width: "24",
    height: "24",
    patternUnits: "userSpaceOnUse",
  });
  pattern.appendChild(createElement("circle", {
    cx: "1",
    cy: "1",
    r: "1",
    fill: "rgba(148, 163, 184, 0.12)",
  }));
  defs.appendChild(pattern);

  addLinearGradient(defs, "export-bg-gradient", "#0a0a0a", "#111111", "vertical");
}
