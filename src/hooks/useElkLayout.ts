import { useEffect, useRef } from "react";
import { LARGE_GRAPH_THRESHOLD } from "../lib/constants";
import { computeGridLayout } from "../lib/elk/gridLayout";
import { preprocessArchitecture } from "../lib/preprocess";
import { modelToFlow } from "../lib/transform/modelToFlow";
import { useArchitectureStore } from "../store/architectureStore";
import { useGraphStore } from "../store/graphStore";
import type { ArchitectureFlowNode } from "../types";
import type { PreprocessedArchitecture } from "../lib/preprocess";

function applyLayout(nodes: ArchitectureFlowNode[], layout: ArchitectureFlowNode[]): ArchitectureFlowNode[] {
  const layoutMap = new Map(layout.map((n) => [n.id, n.position]));

  return nodes.map((node) => {
    const pos = layoutMap.get(node.id);
    if (!pos) return node;

    return {
      ...node,
      position: pos
    };
  });
}

export function useElkLayout(): void {
  const model = useArchitectureStore((state) => state.model);
  const setNodes = useGraphStore((state) => state.setNodes);
  const setEdges = useGraphStore((state) => state.setEdges);
  const setLayoutLoading = useGraphStore((state) => state.setLayoutLoading);
  const expandedClusterIds = useGraphStore((state) => state.expandedClusterIds);
  const expansionPath = useGraphStore((state) => state.expansionPath);
  const preprocessedRef = useRef<PreprocessedArchitecture | null>(null);
  const initialLayoutDoneRef = useRef(false);

  useEffect(() => {
    if (!model) {
      return;
    }

    const isLargeGraph = model.components.length > LARGE_GRAPH_THRESHOLD;

    const runPreprocess = async () => {
      let preprocessed: PreprocessedArchitecture | undefined;

      if (isLargeGraph) {
        setLayoutLoading(true);
        try {
          const { preprocessArchitectureWasm } = await import("../lib/wasm/index");
          const worker = new Worker(new URL("../lib/preprocess/preprocessWorker.ts", import.meta.url), { type: "module" });
          const result = await new Promise<PreprocessedArchitecture>((resolve, reject) => {
            worker.onmessage = (event: MessageEvent<{ result?: PreprocessedArchitecture; error?: string }>) => {
              worker.terminate();
              if (event.data.result) resolve(event.data.result);
              else reject(new Error(event.data.error ?? "Preprocessing failed"));
            };
            worker.onerror = () => {
              worker.terminate();
              reject(new Error("Worker failed"));
            };
            worker.postMessage({ model });
          });
          preprocessed = result;
        } catch {
          // Fallback: no preprocessing
        }
      } else {
        try {
          preprocessed = await preprocessArchitecture(model);
        } catch {
          // Fallback: no preprocessing
        }
      }

      if (preprocessed) {
        preprocessedRef.current = preprocessed;
      }

      const { nodes, edges } = modelToFlow(model, expandedClusterIds, preprocessed);
      setNodes(nodes);
      setEdges(edges);

      const gridNodes = computeGridLayout(nodes, edges);
      setNodes(applyLayout(nodes, gridNodes));
      setLayoutLoading(false);
      initialLayoutDoneRef.current = true;
    };

    const timer = setTimeout(runPreprocess, 10);
    return () => clearTimeout(timer);
  }, [model, setEdges, setNodes, setLayoutLoading]);

  useEffect(() => {
    if (!model || !initialLayoutDoneRef.current) {
      return;
    }

    const { nodes, edges } = modelToFlow(model, expandedClusterIds, preprocessedRef.current ?? undefined);
    setNodes(nodes);
    setEdges(edges);

    const gridNodes = computeGridLayout(nodes, edges);
    setNodes(applyLayout(nodes, gridNodes));
  }, [expandedClusterIds, expansionPath, model, setNodes, setEdges]);
}
