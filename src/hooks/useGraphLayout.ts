import { useEffect, useRef } from "react";
import { preprocessArchitecture } from "../lib/preprocess";
import { modelToFlow } from "../lib/transform/modelToFlow";
import { useArchitectureStore } from "../store/architectureStore";
import { useGraphStore } from "../store/graphStore";
import type { PreprocessedArchitecture } from "../lib/preprocess";

/** Builds the graph using the fixed layered SoC layout from modelToFlow. */
export function useGraphLayout(): void {
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

    const runPreprocess = async () => {
      setLayoutLoading(true);

      let preprocessed: PreprocessedArchitecture | undefined;
      try {
        preprocessed = await preprocessArchitecture(model);
        preprocessedRef.current = preprocessed;
      } catch {
        preprocessedRef.current = null;
      }

      const { nodes, edges } = modelToFlow(model, expandedClusterIds, preprocessed);
      setNodes(nodes);
      setEdges(edges);
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
  }, [expandedClusterIds, expansionPath, model, setNodes, setEdges]);
}
