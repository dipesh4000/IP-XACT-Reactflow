import { useCallback } from "react";
import { convertCircuitFile, isConvertibleCircuitFile } from "../lib/api/circuitApi";
import { parseArchitectureModel } from "../lib/validateArchitectureModel";
import { useArchitectureStore } from "../store/architectureStore";
import { useGraphStore } from "../store/graphStore";
import { useSelectionStore } from "../store/selectionStore";
import type { ArchitectureModel } from "../types";

export function useLoadArchitecture(): {
  loadFromText: (text: string) => ArchitectureModel;
  loadFromFile: (file: File) => Promise<ArchitectureModel>;
  resetAndLoad: (text: string) => ArchitectureModel;
} {
  const loadModel = useArchitectureStore((state) => state.loadModel);
  const setNodes = useGraphStore((state) => state.setNodes);
  const setEdges = useGraphStore((state) => state.setEdges);
  const setLayoutLoading = useGraphStore((state) => state.setLayoutLoading);
  const resetExpansion = useGraphStore((state) => state.resetExpansion);
  const selectNode = useSelectionStore((state) => state.selectNode);
  const setSearchQuery = useSelectionStore((state) => state.setSearchQuery);

  const resetAndLoad = useCallback(
    (text: string) => {
      const model = parseArchitectureModel(text);
      selectNode(null);
      setSearchQuery("");
      setNodes([]);
      setEdges([]);
      resetExpansion();
      setLayoutLoading(true);
      loadModel(model);
      return model;
    },
    [loadModel, resetExpansion, selectNode, setEdges, setLayoutLoading, setNodes, setSearchQuery]
  );

  const loadFromText = useCallback(
    (text: string) => resetAndLoad(text),
    [resetAndLoad]
  );

  const loadFromFile = useCallback(
    async (file: File) => {
      const text = isConvertibleCircuitFile(file) ? await convertCircuitFile(file) : await file.text();
      return resetAndLoad(text);
    },
    [resetAndLoad]
  );

  return { loadFromText, loadFromFile, resetAndLoad };
}
