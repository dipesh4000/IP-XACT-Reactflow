import { nodeColorMap } from "../transform/colorMap";
import type { ArchitectureFlowNode } from "../../types";
import { getNodeSize, createElement, addText, addRoundRect, addRect, formatPortLabel } from "./svgHelpers";

function getColorTokens(type: string) {
  return nodeColorMap[type as keyof typeof nodeColorMap] ?? nodeColorMap.custom;
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

export { makeNodeGroup };
