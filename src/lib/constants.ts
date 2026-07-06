import type { ComponentType } from "../types";

export const NODE_WIDTH = 280;
export const NODE_HEIGHT = 104;
export const NODE_X_SPACING = 400;
export const NODE_Y_SPACING = 208;

export const CLUSTER_WIDTH = 320;
export const CLUSTER_HEIGHT = 140;

export const BUS_CHANNEL_WIDTH = 32;
export const BUS_CHANNEL_HEIGHT = 720;
export const BUS_PILLAR_WIDTH = 36;
export const BUS_COMPACT_WIDTH = 280;
export const BUS_COMPACT_HEIGHT = 52;
export const BUS_COMPACT_GAP = 16;

export const EXPAND_THRESHOLD = 12;
export const MIN_COLUMNS = 3;
export const MAX_COLUMNS = 32;
export const MAX_LAYER_COLUMNS = 6;

export const LAYER_X: Record<number, number> = {
  0: 0,
  1: 400,
  2: 800,
  3: 1200,
  4: 1600,
  5: 2000,
  6: 2400,
};

export const TYPE_ICON: Record<ComponentType, string> = {
  cpu: "CPU",
  bus: "BUS",
  memory: "MEM",
  peripheral: "I/O",
  interface: "PAD",
  clockReset: "CLK",
  custom: "IP",
  dma: "DMA",
  interruptController: "INT",
  debug: "DBG",
};

export const TYPE_LABEL: Record<ComponentType, string> = {
  cpu: "CPU",
  bus: "Bus",
  memory: "Memory",
  peripheral: "Peripheral",
  interface: "Interface",
  clockReset: "Clock/Reset",
  custom: "Custom",
  dma: "DMA",
  interruptController: "Interrupt Controller",
  debug: "Debug",
};

export const TYPE_GROUP_ORDER: ComponentType[] = [
  "cpu",
  "bus",
  "memory",
  "peripheral",
  "interface",
  "clockReset",
  "custom",
  "dma",
  "interruptController",
  "debug",
];

export const RECOMMENDED_MAX_COMPONENTS = 150;
export const CANVAS_THRESHOLD = 2000;
