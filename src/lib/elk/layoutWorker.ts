import ELK from "elkjs/lib/elk-api";
import type { ElkNode } from "elkjs";
import type { ELKLayoutHints } from "../preprocess/types";

const elk = new ELK({
  defaultLayoutOptions: {
    "elk.algorithm": "layered",
    "elk.direction": "RIGHT",
  },
});

self.onmessage = async (event: MessageEvent<{ graph: ElkNode; elkHints?: ELKLayoutHints }>) => {
  try {
    const startTime = performance.now();
    const layout = await elk.layout(event.data.graph);
    const duration = performance.now() - startTime;

    self.postMessage({ layout, duration });
  } catch (error) {
    self.postMessage({
      error: error instanceof Error ? error.message : "ELK layout failed"
    });
  }
};

export {};
