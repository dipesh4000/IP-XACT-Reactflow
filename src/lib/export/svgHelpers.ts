import type { ArchitectureFlowEdge, ArchitectureFlowNode } from "../../types";
import { NODE_HEIGHT, CLUSTER_HEIGHT } from "../constants";

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

function computeExportHeight(node: ArchitectureFlowNode): number {
  if (node.data.kind === "busChannel") return 720;
  if (node.data.kind === "cluster") return CLUSTER_HEIGHT;
  const c = node.data.component;
  const headerHeight = 60;
  const statsHeight = 20;
  const portsHeight = c.ports.length * 20 + 16;
  const registersHeight = c.registers.length > 0 ? c.registers.length * 20 + 16 : 0;
  return Math.max(NODE_HEIGHT, headerHeight + statsHeight + portsHeight + registersHeight + 16);
}

export function getNodeSize(node: ArchitectureFlowNode): Size {
  if (node.data.kind === "busChannel") {
    return { width: 32, height: 720 };
  }
  if (node.data.kind === "cluster") {
    return { width: 280, height: CLUSTER_HEIGHT };
  }
  return { width: 220, height: computeExportHeight(node) };
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

export function formatPortLabel(port: { name: string; direction: string; width?: number }): string {
  return `${port.name} (${port.direction}${port.width ? ` ${port.width}b` : ""})`;
}
