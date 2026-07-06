import { useState } from "react";
import sampleArchitecture from "../../data/sample-architecture.json";
import { AppLogo } from "../brand/AppLogo";
import { Panel } from "../ui/Panel";

const sampleText = JSON.stringify(sampleArchitecture, null, 2);

interface ModelImportPanelProps {
  onLoad: (text: string) => void;
  onLoadFile: (file: File) => Promise<void>;
  error?: string | null;
}

export function ModelImportPanel({ onLoad, onLoadFile, error: externalError }: ModelImportPanelProps) {
  const [text, setText] = useState("");
  const [localError, setLocalError] = useState<string | null>(null);
  const [isParsing, setIsParsing] = useState(false);

  const error = externalError ?? localError;

  const runWithLoading = async (task: () => Promise<void> | void) => {
    setIsParsing(true);
    try {
      await task();
      setLocalError(null);
    } catch (parseError) {
      setLocalError(parseError instanceof Error ? parseError.message : "Unable to load architecture.");
    } finally {
      setIsParsing(false);
    }
  };

  const handleLoadText = () => {
    void runWithLoading(() => onLoad(text));
  };

  const handleFileChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    event.target.value = "";
    if (!file) return;

    await runWithLoading(async () => {
      if (file.name.toLowerCase().endsWith(".json")) {
        const contents = await file.text();
        setText(contents);
        onLoad(contents);
      } else {
        await onLoadFile(file);
      }
    });
  };

  return (
    <div className="pointer-events-none absolute inset-0 z-20 grid place-items-center bg-neutral-950/85 p-6 backdrop-blur-sm">
      <Panel className="pointer-events-auto w-full max-w-3xl overflow-hidden rounded-xl shadow-2xl">
        <div className="border-b border-white/10 p-6">
          <div className="flex items-center gap-3">
            <AppLogo size={40} />
            <div>
              <h2 className="text-xl font-semibold text-slate-50">Import architecture</h2>
              <p className="mt-1 text-sm text-slate-400">
                Upload Excel or IP-XACT XML (converted via API), paste JSON, or load the sample SoC.
              </p>
            </div>
          </div>
        </div>

        <div className="grid gap-4 p-6">
          <div className="flex flex-wrap items-center gap-3">
            <label className="inline-flex cursor-pointer items-center rounded-lg border border-white/15 bg-white/10 px-4 py-2.5 text-sm font-semibold text-slate-100 transition hover:bg-white/15">
              {isParsing ? "Processing..." : "Choose file"}
              <input
                accept=".json,.xlsx,.xls,.xml,application/json,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet,application/vnd.ms-excel,application/xml,text/xml"
                className="sr-only"
                onChange={handleFileChange}
                type="file"
              />
            </label>
            <button
              className="rounded-lg border border-white/10 bg-white/5 px-4 py-2.5 text-sm font-semibold text-slate-200 transition hover:bg-white/10"
              onClick={() => {
                void runWithLoading(() => {
                  setText(sampleText);
                  onLoad(sampleText);
                });
              }}
              type="button"
            >
              Load sample SoC
            </button>
            <a
              className="rounded-lg border border-white/10 bg-white/5 px-4 py-2.5 text-sm font-semibold text-slate-300 transition hover:bg-white/10 hover:text-slate-100"
              href="/docs.html"
              rel="noopener noreferrer"
              target="_blank"
            >
              View docs
            </a>
            <a
              className="rounded-lg border border-white/10 bg-white/5 px-4 py-2.5 text-sm font-semibold text-slate-300 transition hover:bg-white/10 hover:text-slate-100"
              href="/format.html"
              rel="noopener noreferrer"
              target="_blank"
            >
              View format
            </a>
          </div>

          <p className="text-xs text-slate-500">
            Excel (.xlsx) and XML (.xml) files are sent to the circuit API and converted to JSON automatically.
            JSON can also be pasted below.
          </p>

          <textarea
            className="h-64 resize-none rounded-lg border border-white/10 bg-neutral-950 p-4 font-mono text-xs leading-5 text-slate-200 outline-none transition placeholder:text-neutral-600 focus:border-white/25"
            onChange={(event) => setText(event.target.value)}
            placeholder='{"components": {...}, "connections": [...]}'
            spellCheck={false}
            value={text}
          />

          {error ? (
            <div className="rounded-lg border border-red-800 bg-red-950 px-4 py-3 text-sm text-red-300">{error}</div>
          ) : null}

          <div className="flex justify-end">
            <button
              className="rounded-lg bg-neutral-200 px-5 py-2.5 text-sm font-bold text-neutral-950 shadow-sm transition hover:bg-white disabled:cursor-not-allowed disabled:opacity-40"
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
