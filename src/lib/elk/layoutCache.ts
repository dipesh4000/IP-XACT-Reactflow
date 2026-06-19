import type { ElkNode } from "elkjs";
import type { ArchitectureModel } from "../../types";

const layoutCache = new Map<string, ElkNode>();

function hashString(str: string): string {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = ((hash << 5) - hash + char) | 0;
  }
  return hash.toString(36);
}

export function getLayoutCacheKey(model: ArchitectureModel, expansionPath?: string[]): string {
  const componentCount = model.components.length;
  const connectionCount = model.connections.length;
  const pathKey = expansionPath?.length ? expansionPath.join(",") : "";
  const pathHash = pathKey ? hashString(pathKey) : "none";
  return `${componentCount}::${connectionCount}::${pathHash}`;
}

export function getCachedLayout(key: string): ElkNode | undefined {
  return layoutCache.get(key);
}

export function setCachedLayout(key: string, graph: ElkNode): void {
  layoutCache.set(key, graph);
}
