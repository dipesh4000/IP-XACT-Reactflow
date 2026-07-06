import { useEffect, useRef, useState, type ChangeEvent } from "react";
import sampleArchitecture from "../../data/sample-architecture.json";
import { parseArchitectureModel } from "../../lib/validateArchitectureModel";
import { useArchitectureStore } from "../../store/architectureStore";
import { useGraphStore } from "../../store/graphStore";
import { useSelectionStore } from "../../store/selectionStore";
import { useSettingsStore } from "../../store/settingsStore";
import type { ArchitectureModel } from "../../types";
import { Panel } from "../ui/Panel";

const sampleText = JSON.stringify(sampleArchitecture, null, 2);

export function ModelImportPanel() {
  const loadModel = useArchitectureStore((state) => state.loadModel);
  const setNodes = useGraphStore((state) => state.setNodes);
  const setEdges = useGraphStore((state) => state.setEdges);
  const setLayoutLoading = useGraphStore((state) => state.setLayoutLoading);
  const selectNode = useSelectionStore((state) => state.selectNode);
  const setSearchQuery = useSelectionStore((state) => state.setSearchQuery);
  const theme = useSettingsStore((state) => state.theme);
  const isDark = theme === "dark";
  const [text, setText] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [isParsing, setIsParsing] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    function handleOpenFile() {
      fileInputRef.current?.click();
    }

    window.addEventListener("ipxact:open-file", handleOpenFile);
    return () => window.removeEventListener("ipxact:open-file", handleOpenFile);
  }, []);

  const loadParsedModel = (model: ArchitectureModel) => {
    selectNode(null);
    setSearchQuery("");
    setNodes([]);
    setEdges([]);
    setLayoutLoading(true);
    loadModel(model);
    setError(null);
  };

  const handleLoadText = () => {
    setIsParsing(true);
    setTimeout(() => {
      try {
        loadParsedModel(parseArchitectureModel(text));
      } catch (parseError) {
        setError(parseError instanceof Error ? parseError.message : "Unable to parse architecture JSON.");
        setLayoutLoading(false);
      } finally {
        setIsParsing(false);
      }
    }, 50);
  };

  const handleFileChange = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) {
      return;
    }

    setIsParsing(true);
    try {
      const contents = await file.text();
      setText(contents);
      loadParsedModel(parseArchitectureModel(contents));
    } catch (fileError) {
      setError(fileError instanceof Error ? fileError.message : "Unable to read architecture JSON file.");
      setLayoutLoading(false);
    } finally {
      setIsParsing(false);
    }
  };

  return (
    <div className={`pointer-events-none absolute inset-0 z-20 grid place-items-center p-6 backdrop-blur-sm ${isDark ? "bg-shell-950/80" : "bg-slate-200/80"}`}>
      <Panel className="pointer-events-auto w-full max-w-3xl overflow-hidden rounded-xl shadow-2xl">
        <div className={`border-b p-6 ${isDark ? "border-white/10" : "border-slate-200"}`}>
          <h2 className={`text-xl font-semibold ${isDark ? "text-slate-50" : "text-slate-900"}`}>Load architecture JSON</h2>
          <p className={`mt-2 text-sm ${isDark ? "text-slate-400" : "text-slate-600"}`}>
            Choose a JSON file or paste an architecture model to render the graph.
          </p>
        </div>

        <div className="grid gap-4 p-6">
          <div className="flex flex-wrap items-center gap-3">
            <label className={`inline-flex cursor-pointer items-center rounded-lg border px-4 py-2.5 text-sm font-semibold transition ${
              isDark
                ? "border-cyan-300/30 bg-cyan-300/10 text-cyan-100 hover:bg-cyan-300/15"
                : "border-cyan-600 bg-cyan-600 text-white hover:bg-cyan-700 shadow-sm"
            }`}>
              {isParsing ? "Reading file..." : "Choose JSON file"}
              <input ref={fileInputRef} accept="application/json,.json" className="sr-only" onChange={handleFileChange} type="file" />
            </label>
            <button
              className={`rounded-lg border px-4 py-2.5 text-sm font-semibold transition ${
                isDark
                  ? "border-white/10 bg-white/5 text-slate-200 hover:bg-white/10"
                  : "border-slate-300 bg-white text-slate-700 hover:bg-slate-50 shadow-sm"
              }`}
              onClick={() => {
                setIsParsing(true);
                setTimeout(() => {
                  setText(sampleText);
                  loadParsedModel(parseArchitectureModel(sampleText));
                  setIsParsing(false);
                }, 50);
              }}
              type="button"
            >
              Load sample SoC
            </button>
          </div>

          <textarea
            className={`h-72 resize-none rounded-lg border p-4 font-mono text-xs leading-5 outline-none transition ${
              isDark
                ? "border-white/10 bg-shell-950 text-slate-200 placeholder:text-slate-600 focus:border-cyan-300/40"
                : "border-slate-300 bg-white text-slate-800 placeholder:text-slate-400 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20"
            }`}
            onChange={(event) => setText(event.target.value)}
            placeholder='{"components": [...], "connections": [...]}'
            spellCheck={false}
            value={text}
          />

          {error ? <div className="rounded-lg border border-red-300 bg-red-50 px-4 py-3 text-sm text-red-700">{error}</div> : null}

          <div className="flex justify-end">
            <button
              className="rounded-lg bg-cyan-600 px-5 py-2.5 text-sm font-bold text-white transition hover:bg-cyan-700 disabled:cursor-not-allowed disabled:opacity-40 shadow-sm"
              disabled={!text.trim() || isParsing}
              onClick={handleLoadText}
              type="button"
            >
              {isParsing ? "Processing..." : "Render graph"}
            </button>
          </div>
        </div>
      </Panel>
    </div>
  );
}
