import type { Component } from "../../types";
import type { LayoutLayer } from "../preprocess/types";

/**
 * Assigns each component to a fixed horizontal column (0–6).
 * This is the source of truth for the SoC block-diagram structure.
 */
export function inferLayoutLayer(component: Component): LayoutLayer {
  const name = component.name.toLowerCase();

  if (component.type === "cpu") {
    return 0;
  }

  if (component.type === "bus") {
    if (name.includes("bridge") || name.includes("apb")) {
      return 3;
    }
    return 1;
  }

  if (component.type === "memory" || component.type === "dma") {
    return 2;
  }

  if (component.type === "peripheral") {
    return 4;
  }

  if (component.type === "interruptController") {
    return 5;
  }

  if (component.type === "interface" || component.type === "clockReset" || component.type === "debug") {
    return 6;
  }

  return 3;
}

export function getComponentLayer(component: Component, preprocessedLayer?: LayoutLayer): LayoutLayer {
  return preprocessedLayer ?? inferLayoutLayer(component);
}
