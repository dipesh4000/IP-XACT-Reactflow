import type { Component } from "../../types";
import type { LayoutLayer } from "../preprocess/types";

function isBridgeBus(name: string): boolean {
  const lower = name.toLowerCase();
  return lower.includes("bridge") || lower.includes("apb");
}

/**
 * Spreads multiple buses across interconnect columns instead of stacking pillars.
 * Highest-degree fabric → layer 1; additional fabrics → layer 3.
 */
export function assignBusLayers(
  buses: Component[],
  degree: Map<string, number>
): Map<string, LayoutLayer> {
  const layers = new Map<string, LayoutLayer>();

  const bridges = buses.filter((bus) => isBridgeBus(bus.name));
  const fabrics = buses.filter((bus) => !isBridgeBus(bus.name));

  fabrics.sort((a, b) => (degree.get(b.id) ?? 0) - (degree.get(a.id) ?? 0));

  if (fabrics[0]) {
    layers.set(fabrics[0].id, 1);
  }
  for (let i = 1; i < fabrics.length; i++) {
    const bus = fabrics[i];
    if (bus) {
      layers.set(bus.id, 3);
    }
  }
  for (const bus of bridges) {
    layers.set(bus.id, 3);
  }

  return layers;
}
