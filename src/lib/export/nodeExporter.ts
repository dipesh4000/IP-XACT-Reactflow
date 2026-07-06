import { TYPE_ICON } from "../constants";
import { nodeColorMap } from "../transform/colorMap";
import type { ArchitectureFlowNode } from "../../types";
import { getNodeSize, createElement, addText, addRoundRect, addRect } from "./svgHelpers";
import { NODE_HEIGHT } from "../constants";

function getColorTokens(type: string) {
  return nodeColorMap[type as keyof typeof nodeColorMap] ?? nodeColorMap.custom;
}

function gradientId(type: string): string {
  return `grad-${type.replace(/[^a-z0-9]/gi, "-")}`;
}

function registerGradients(defs: SVGDefsElement, nodes: ArchitectureFlowNode[]): void {
  const types = new Set<string>();
  for (const node of nodes) {
    if (node.data.kind === "component") {
      types.add(node.data.component.type);
    } else if (node.data.kind === "busChannel") {
      types.add(node.data.component.type);
    } else if (node.data.kind === "cluster" && node.data.cluster.type) {
      types.add(node.data.cluster.type);
    }
  }

  for (const type of types) {
    const colors = getColorTokens(type);
    const id = gradientId(type);
    const gradient = createElement("linearGradient", {
      id,
      x1: "0%",
      y1: "0%",
      x2: "0%",
      y2: "100%",
    });
    gradient.appendChild(createElement("stop", { offset: "0%", "stop-color": colors.base }));
    gradient.appendChild(createElement("stop", { offset: "100%", "stop-color": colors.border }));
    defs.appendChild(gradient);

    const gradientH = createElement("linearGradient", {
      id: `${id}-h`,
      x1: "0%",
      y1: "0%",
      x2: "100%",
      y2: "0%",
    });
    gradientH.appendChild(createElement("stop", { offset: "0%", "stop-color": colors.base }));
    gradientH.appendChild(createElement("stop", { offset: "100%", "stop-color": colors.border }));
    defs.appendChild(gradientH);
  }
}

export function registerNodeExportDefs(defs: SVGDefsElement, nodes: ArchitectureFlowNode[]): void {
  registerGradients(defs, nodes);
}

function makeNodeGroup(node: ArchitectureFlowNode): SVGGElement {
  const group = createElement("g", {
    class: `node node-${node.data.kind}`,
    filter: "url(#export-node-shadow)",
  });
  const baseSize = getNodeSize(node);
  const width = baseSize.width;
  const x = node.position.x;
  const y = node.position.y;

  if (node.data.kind === "busChannel") {
    const height = baseSize.height;
    const colors = getColorTokens(node.data.component.type);
    const grad = gradientId(node.data.component.type);
    const isCompact = node.data.display === "compact";

    if (isCompact) {
      addRoundRect(group, {
        x: String(x),
        y: String(y),
        width: String(width),
        height: String(height),
        rx: "8",
        fill: `url(#${grad}-h)`,
        stroke: colors.border,
        "stroke-width": "2",
      });
      addRoundRect(group, {
        x: String(x + 10),
        y: String(y + 7),
        width: "38",
        height: String(height - 14),
        rx: "4",
        fill: "rgba(255,255,255,0.18)",
        stroke: "rgba(255,255,255,0.22)",
        "stroke-width": "1",
      });
      addText(group, x + 22, y + height / 2 + 4, "BUS", {
        fill: "#ffffff",
        "font-size": "10px",
        "font-weight": "800",
        "font-family": "Inter, ui-sans-serif, system-ui, sans-serif",
      });
      addText(group, x + 58, y + height / 2 + 5, node.data.component.name, {
        fill: "#ffffff",
        "font-size": "14px",
        "font-weight": "600",
        "font-family": "Inter, ui-sans-serif, system-ui, sans-serif",
      });
      return group;
    }

    addRoundRect(group, {
      x: String(x),
      y: String(y),
      width: String(width),
      height: String(height),
      rx: "6",
      fill: `url(#${grad})`,
      stroke: colors.border,
      "stroke-width": "2",
    });
    addText(group, x + width / 2, y + height / 2, node.data.component.name, {
      fill: "#ffffff",
      "font-size": "12px",
      "font-weight": "700",
      "text-anchor": "middle",
      "font-family": "Inter, ui-sans-serif, system-ui, sans-serif",
      transform: `rotate(-90 ${x + width / 2} ${y + height / 2})`,
    });
    return group;
  }

  if (node.data.kind === "cluster") {
    const height = baseSize.height;
    const cluster = node.data.cluster;
    const colors = getColorTokens(cluster.type);

    addRoundRect(group, {
      x: String(x),
      y: String(y),
      width: String(width),
      height: String(height),
      fill: `url(#${gradientId(cluster.type)})`,
      stroke: colors.border,
      "stroke-width": "2",
    });
    addRoundRect(group, {
      x: String(x + 8),
      y: String(y + 8),
      width: String(width - 16),
      height: String(height - 16),
      rx: "8",
      fill: "rgba(255,255,255,0.1)",
      stroke: "rgba(255,255,255,0.14)",
      "stroke-width": "1",
    });
    addText(group, x + 18, y + 30, cluster.name, {
      fill: "#ffffff",
      "font-size": "17px",
      "font-weight": "700",
      "font-family": "Inter, ui-sans-serif, system-ui, sans-serif",
    });
    addText(group, x + 18, y + 52, `${cluster.componentCount} blocks`, {
      fill: "rgba(255,255,255,0.75)",
      "font-size": "13px",
      "font-family": "Inter, ui-sans-serif, system-ui, sans-serif",
    });
    return group;
  }

  const component = node.data.component;
  const colors = getColorTokens(component.type);
  const height = NODE_HEIGHT;
  const grad = gradientId(component.type);

  addRoundRect(group, {
    x: String(x),
    y: String(y),
    width: String(width),
    height: String(height),
    rx: "12",
    fill: `url(#${grad})`,
    stroke: colors.border,
    "stroke-width": "2",
  });

  addRoundRect(group, {
    x: String(x + 8),
    y: String(y + 8),
    width: String(width - 16),
    height: String(height - 16),
    rx: "8",
    fill: "rgba(255,255,255,0.1)",
    stroke: "rgba(255,255,255,0.14)",
    "stroke-width": "1",
  });

  addRoundRect(group, {
    x: String(x + 18),
    y: String(y + 18),
    width: "48",
    height: "48",
    rx: "8",
    fill: "rgba(255,255,255,0.2)",
    stroke: "rgba(255,255,255,0.35)",
    "stroke-width": "1",
  });
  addText(group, x + 42, y + 46, TYPE_ICON[component.type] ?? component.type.slice(0, 3).toUpperCase(), {
    fill: colors.text,
    "font-size": "12px",
    "font-weight": "800",
    "font-family": "Inter, ui-sans-serif, system-ui, sans-serif",
    "text-anchor": "middle",
  });

  addText(group, x + 78, y + 34, component.name, {
    fill: "#ffffff",
    "font-size": "16px",
    "font-weight": "600",
    "font-family": "Inter, ui-sans-serif, system-ui, sans-serif",
  });
  addText(group, x + 78, y + 54, component.type, {
    fill: "rgba(255,255,255,0.82)",
    "font-size": "12px",
    "font-weight": "500",
    "text-anchor": "start",
    "font-family": "Inter, ui-sans-serif, system-ui, sans-serif",
  });

  return group;
}

export { makeNodeGroup };
