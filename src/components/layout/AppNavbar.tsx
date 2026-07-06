import { useState, type Ref } from "react";
import { AppBrand } from "../brand/AppLogo";
import type { SearchBarHandle } from "../search/SearchBar";
import { SearchBar } from "../search/SearchBar";
import { ShortcutsDialog } from "../ui/ShortcutsDialog";

const navButtonClass =
  "inline-flex items-center gap-1.5 rounded-md border border-white/10 bg-white/5 px-2.5 py-1.5 text-xs font-medium text-slate-300 transition hover:bg-white/10 hover:text-slate-100";

const navLinkClass =
  "inline-flex items-center gap-1.5 rounded-md border border-white/10 bg-white/5 px-2.5 py-1.5 text-xs font-medium text-slate-400 transition hover:bg-white/10 hover:text-slate-200";

interface AppNavbarProps {
  hasModel: boolean;
  componentCount: number;
  connectionCount: number;
  selectedCount: number;
  isExporting: boolean;
  searchRef: Ref<SearchBarHandle>;
  onOpenFile: () => void;
  onFitView: () => void;
  onExport: () => void;
  onExportSelection: () => void;
}

export function AppNavbar({
  hasModel,
  componentCount,
  connectionCount,
  selectedCount,
  isExporting,
  searchRef,
  onOpenFile,
  onFitView,
  onExport,
  onExportSelection,
}: AppNavbarProps) {
  const [shortcutsOpen, setShortcutsOpen] = useState(false);

  return (
    <>
      <header className="z-20 flex h-14 shrink-0 items-center gap-3 border-b border-white/10 bg-neutral-950/95 px-4 backdrop-blur-md">
        <div className="flex min-w-0 items-center gap-2">
          <AppBrand className="pr-2" />
          <div className="hidden h-6 w-px bg-white/10 sm:block" />

          <button className={`${navButtonClass} hidden sm:inline-flex`} onClick={onOpenFile} title="Open new (Ctrl+O)" type="button">
            <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
            </svg>
            Open new
          </button>
        </div>

        {hasModel ? (
          <div className="relative mx-auto w-full max-w-md flex-1">
            <SearchBar ref={searchRef} className="relative w-full" />
          </div>
        ) : (
          <div className="flex-1" />
        )}

        <div className="flex shrink-0 items-center gap-2">
          {hasModel ? (
            <p className="hidden text-xs text-neutral-500 lg:block">
              {componentCount} cmp · {connectionCount} conn
              {selectedCount > 1 ? ` · ${selectedCount} sel` : ""}
            </p>
          ) : null}

          {hasModel ? (
            <button className={navButtonClass} onClick={onFitView} title="Fit view (F)" type="button">
              <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
              </svg>
              <span className="hidden sm:inline">Fit</span>
              <kbd className="rounded border border-white/10 bg-black/30 px-1 py-0.5 text-[9px] text-neutral-500">F</kbd>
            </button>
          ) : null}

          {hasModel ? (
            <>
              <button
                className={navButtonClass}
                disabled={isExporting}
                onClick={onExport}
                title="Export SVG (Ctrl+E)"
                type="button"
              >
                <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                <span className="hidden sm:inline">{isExporting ? "Exporting…" : "Export"}</span>
              </button>
              {selectedCount > 0 ? (
                <button
                  className="inline-flex items-center gap-1.5 rounded-md border border-white/15 bg-white/10 px-2.5 py-1.5 text-xs font-medium text-slate-200 transition hover:bg-white/15"
                  disabled={isExporting}
                  onClick={onExportSelection}
                  type="button"
                >
                  Sel ({selectedCount})
                </button>
              ) : null}
            </>
          ) : null}

          <div className="hidden h-6 w-px bg-white/10 md:block" />

          <button className={navButtonClass} onClick={() => setShortcutsOpen(true)} title="Keyboard shortcuts" type="button">
            <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            Shortcuts
          </button>

          <a className={navLinkClass} href="/docs.html" rel="noopener noreferrer" target="_blank" title="Documentation (opens in new tab)">
            Docs
            <svg className="h-3 w-3 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 3h7m0 0v7m0-7L10 14" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5h6M5 5v14h14v-6" />
            </svg>
          </a>
        </div>
      </header>

      <ShortcutsDialog onClose={() => setShortcutsOpen(false)} open={shortcutsOpen} />
    </>
  );
}
