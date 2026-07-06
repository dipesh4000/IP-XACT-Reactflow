import { nodeColorMap } from "../transform/colorMap";
import type { ArchitectureFlowNode } from "../../types";
import { createElement, addText, addRect, addRoundRect } from "./svgHelpers";

const SIDEBAR_WIDTH = 360;
const SIDEBAR_PADDING = 20;

function getPortDirectionColor(direction: string): { dot: string; bg: string; text: string } {
  if (direction === "in") return { dot: "#34d399", bg: "rgba(16,185,129,0.1)", text: "#059669" };
  if (direction === "out") return { dot: "#fbbf24", bg: "rgba(245,158,11,0.1)", text: "#d97706" };
  return { dot: "#94a3b8", bg: "rgba(100,116,139,0.1)", text: "#475569" };
}

function buildSidebarPanel(
  node: ArchitectureFlowNode,
  sidebarX: number,
  sidebarY: number,
  panelHeight: number
): SVGGElement {
  const group = createElement("g", { class: "sidebar-panel" }) as SVGGElement;

  addRect(group, {
    x: String(sidebarX),
    y: String(sidebarY),
    width: String(SIDEBAR_WIDTH),
    height: String(panelHeight),
    fill: "#0b1018",
    stroke: "rgba(255,255,255,0.1)",
    "stroke-width": "1"
  });

  if (node.data.kind === "busChannel") {
    const comp = node.data.component;
    const colors = nodeColorMap[comp.type] ?? nodeColorMap.custom;
    const cx = sidebarX + SIDEBAR_WIDTH / 2;
    const cy = sidebarY + panelHeight / 2;
    addText(group, cx, cy, `Bus Channel: ${comp.name}`, {
      fill: "#e2e8f0",
      "font-size": "16px",
      "font-weight": "600",
      "font-family": "Inter, ui-sans-serif, system-ui, sans-serif",
      "text-anchor": "middle"
    });
    return group;
  }

  const component = node.data.kind === "cluster" ? null : node.data.component;
  const cluster = node.data.kind === "cluster" ? node.data.cluster : null;
  const name = component?.name ?? cluster?.name ?? "";
  const type = component?.type ?? cluster?.type ?? "custom";
  const id = component?.id ?? cluster?.id ?? "";
  const colors = nodeColorMap[type] ?? nodeColorMap.custom;

  let y = sidebarY + SIDEBAR_PADDING;

  addRect(group, {
    x: String(sidebarX),
    y: String(y),
    width: String(SIDEBAR_WIDTH),
    height: "4",
    fill: colors.base
  });
  y += 16;

  const iconSize = 40;
  addRoundRect(group, {
    x: String(sidebarX + SIDEBAR_PADDING),
    y: String(y),
    width: String(iconSize),
    height: String(iconSize),
    fill: `${colors.base}20`,
    stroke: `${colors.border}40`,
    "stroke-width": "1"
  });
  addText(group, sidebarX + SIDEBAR_PADDING + iconSize / 2, y + iconSize / 2 + 1, type.slice(0, 2).toUpperCase(), {
    fill: colors.border,
    "font-size": "12px",
    "font-weight": "700",
    "font-family": "Inter, ui-sans-serif, system-ui, sans-serif",
    "text-anchor": "middle"
  });

  const textX = sidebarX + SIDEBAR_PADDING + iconSize + 12;
  addRoundRect(group, {
    x: String(textX),
    y: String(y + 2),
    width: String(type.length * 7 + 16),
    height: "20",
    fill: `${colors.border}1a`,
    stroke: `${colors.border}40`,
    "stroke-width": "1"
  });
  addText(group, textX + 8, y + 15, type, {
    fill: colors.border,
    "font-size": "10px",
    "font-weight": "600",
    "font-family": "Inter, ui-sans-serif, system-ui, sans-serif",
    "text-transform": "uppercase"
  });

  addText(group, textX, y + 38, name, {
    fill: "#f8fafc",
    "font-size": "16px",
    "font-weight": "600",
    "font-family": "Inter, ui-sans-serif, system-ui, sans-serif"
  });
  addText(group, textX, y + 56, id, {
    fill: "#64748b",
    "font-size": "11px",
    "font-family": "SFMono-Regular, ui-monospace, monospace"
  });
  y += 80;

  addRect(group, {
    x: String(sidebarX),
    y: String(y),
    width: String(SIDEBAR_WIDTH),
    height: "1",
    fill: "rgba(255,255,255,0.1)"
  });
  y += 4;

  if (component) {
    const ports = component.ports.length;
    const registers = component.registers.length;

    const statsY = y;
    const statWidth = SIDEBAR_WIDTH / 3;
    for (let i = 0; i < 3; i++) {
      const sx = sidebarX + SIDEBAR_PADDING + i * statWidth;
      const label = i === 0 ? "Ports" : i === 1 ? "Registers" : "Connections";
      const value = i === 0 ? ports : i === 1 ? registers : ports + registers;
      addText(group, sx + statWidth / 2, statsY + 4, String(value), {
        fill: "#e2e8f0",
        "font-size": "18px",
        "font-weight": "600",
        "font-family": "Inter, ui-sans-serif, system-ui, sans-serif",
        "text-anchor": "middle"
      });
      addText(group, sx + statWidth / 2, statsY + 20, label.toUpperCase(), {
        fill: "#64748b",
        "font-size": "10px",
        "font-weight": "500",
        "font-family": "Inter, ui-sans-serif, system-ui, sans-serif",
        "text-anchor": "middle"
      });
    }
    y += 40;

    addRect(group, {
      x: String(sidebarX),
      y: String(y),
      width: String(SIDEBAR_WIDTH),
      height: "1",
      fill: "rgba(255,255,255,0.1)"
    });
    y += 12;

    addText(group, sidebarX + SIDEBAR_PADDING, y + 4, "PORTS", {
      fill: "#64748b",
      "font-size": "11px",
      "font-weight": "600",
      "font-family": "Inter, ui-sans-serif, system-ui, sans-serif",
      "letter-spacing": "0.05em"
    });
    y += 16;

    for (const port of component.ports) {
      const dirColors = getPortDirectionColor(port.direction);
      addRoundRect(group, {
        x: String(sidebarX + SIDEBAR_PADDING),
        y: String(y),
        width: String(SIDEBAR_WIDTH - SIDEBAR_PADDING * 2),
        height: "28",
        fill: "rgba(255,255,255,0.03)",
        stroke: "rgba(255,255,255,0.05)",
        "stroke-width": "1"
      });

      addRect(group, {
        x: String(sidebarX + SIDEBAR_PADDING + 12),
        y: String(y + 10),
        width: "6",
        height: "6",
        fill: dirColors.dot
      });
      addText(group, sidebarX + SIDEBAR_PADDING + 24, y + 18, port.name, {
        fill: "#e2e8f0",
        "font-size": "13px",
        "font-weight": "500",
        "font-family": "Inter, ui-sans-serif, system-ui, sans-serif"
      });

      addRoundRect(group, {
        x: String(sidebarX + SIDEBAR_WIDTH - SIDEBAR_PADDING - 50),
        y: String(y + 6),
        width: String(port.direction.length * 6 + 12),
        height: "16",
        fill: dirColors.bg
      });
      addText(group, sidebarX + SIDEBAR_WIDTH - SIDEBAR_PADDING - 50 + 6, y + 17, port.direction.toUpperCase(), {
        fill: dirColors.text,
        "font-size": "10px",
        "font-weight": "500",
        "font-family": "Inter, ui-sans-serif, system-ui, sans-serif"
      });

      if (port.width) {
        addText(group, sidebarX + SIDEBAR_WIDTH - SIDEBAR_PADDING - 16, y + 18, `${port.width}b`, {
          fill: "#64748b",
          "font-size": "11px",
          "font-family": "SFMono-Regular, ui-monospace, monospace",
          "text-anchor": "end"
        });
      }
      y += 32;
    }
    y += 8;

    if (component.registers.length > 0) {
      addRect(group, {
        x: String(sidebarX),
        y: String(y),
        width: String(SIDEBAR_WIDTH),
        height: "1",
        fill: "rgba(255,255,255,0.1)"
      });
      y += 12;

      addText(group, sidebarX + SIDEBAR_PADDING, y + 4, "REGISTERS", {
        fill: "#64748b",
        "font-size": "11px",
        "font-weight": "600",
        "font-family": "Inter, ui-sans-serif, system-ui, sans-serif",
        "letter-spacing": "0.05em"
      });
      y += 16;

      for (const reg of component.registers) {
        addRoundRect(group, {
          x: String(sidebarX + SIDEBAR_PADDING),
          y: String(y),
          width: String(SIDEBAR_WIDTH - SIDEBAR_PADDING * 2),
          height: "28",
          fill: "rgba(255,255,255,0.03)",
          stroke: "rgba(255,255,255,0.05)",
          "stroke-width": "1"
        });
        addText(group, sidebarX + SIDEBAR_PADDING + 12, y + 18, reg.name, {
          fill: "#e2e8f0",
          "font-size": "13px",
          "font-weight": "500",
          "font-family": "Inter, ui-sans-serif, system-ui, sans-serif"
        });
        if (reg.address) {
          addRoundRect(group, {
            x: String(sidebarX + SIDEBAR_WIDTH - SIDEBAR_PADDING - 70),
            y: String(y + 6),
            width: String(reg.address.length * 7 + 12),
            height: "16",
            fill: "rgba(255,255,255,0.05)"
          });
          addText(group, sidebarX + SIDEBAR_WIDTH - SIDEBAR_PADDING - 70 + 6, y + 17, reg.address, {
            fill: "#94a3b8",
            "font-size": "10px",
            "font-family": "SFMono-Regular, ui-monospace, monospace"
          });
        }
        y += 32;
      }
    }
  } else if (cluster) {
    addText(group, sidebarX + SIDEBAR_PADDING, y + 4, "CLUSTER", {
      fill: "#64748b",
      "font-size": "11px",
      "font-weight": "600",
      "font-family": "Inter, ui-sans-serif, system-ui, sans-serif",
      "letter-spacing": "0.05em"
    });
    y += 16;

    addText(group, sidebarX + SIDEBAR_PADDING, y + 4, `${cluster.componentCount} components`, {
      fill: "#e2e8f0",
      "font-size": "13px",
      "font-weight": "500",
      "font-family": "Inter, ui-sans-serif, system-ui, sans-serif"
    });
    y += 20;

    if (cluster.typeBreakdown) {
      for (const [t, count] of Object.entries(cluster.typeBreakdown)) {
        const tColors = nodeColorMap[t as keyof typeof nodeColorMap] ?? nodeColorMap.custom;
        addRoundRect(group, {
          x: String(sidebarX + SIDEBAR_PADDING),
          y: String(y),
          width: String(SIDEBAR_WIDTH - SIDEBAR_PADDING * 2),
          height: "28",
          fill: "rgba(255,255,255,0.03)",
          stroke: "rgba(255,255,255,0.05)",
          "stroke-width": "1"
        });
        addRect(group, {
          x: String(sidebarX + SIDEBAR_PADDING + 12),
          y: String(y + 10),
          width: "6",
          height: "6",
          fill: tColors.base
        });
        addText(group, sidebarX + SIDEBAR_PADDING + 24, y + 18, t, {
          fill: "#e2e8f0",
          "font-size": "13px",
          "font-weight": "500",
          "font-family": "Inter, ui-sans-serif, system-ui, sans-serif"
        });
        addText(group, sidebarX + SIDEBAR_WIDTH - SIDEBAR_PADDING - 12, y + 18, `×${count}`, {
          fill: "#94a3b8",
          "font-size": "13px",
          "font-weight": "600",
          "font-family": "Inter, ui-sans-serif, system-ui, sans-serif",
          "text-anchor": "end"
        });
        y += 32;
      }
    }
  }

  return group;
}

export { buildSidebarPanel, SIDEBAR_WIDTH };
