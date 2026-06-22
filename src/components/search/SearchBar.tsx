import { useEffect, useRef, useState } from "react";
import { useFitViewOnSelect } from "../../hooks/useFitViewOnSelect";
import { useSearch } from "../../hooks/useSearch";
import { useSelectionStore } from "../../store/selectionStore";
import { useSettingsStore } from "../../store/settingsStore";
import { Panel } from "../ui/Panel";
import { SearchResultsList } from "./SearchResultsList";

export function SearchBar() {
  const [value, setValue] = useState("");
  const setSearchQuery = useSelectionStore((state) => state.setSearchQuery);
  const results = useSearch();
  const focusNode = useFitViewOnSelect();
  const inputRef = useRef<HTMLInputElement>(null);
  const theme = useSettingsStore((state) => state.theme);
  const isDark = theme === "dark";

  useEffect(() => {
    const timeout = window.setTimeout(() => setSearchQuery(value), 150);
    return () => window.clearTimeout(timeout);
  }, [setSearchQuery, value]);

  useEffect(() => {
    const trimmed = value.trim();
    if (!trimmed) {
      useSelectionStore.setState({ highlightedNodeIds: new Set<string>(), highlightedEdgeIds: new Set<string>() });
      return;
    }
    const ids = new Set(results.map((r) => r.id));
    useSelectionStore.setState({ highlightedNodeIds: ids, highlightedEdgeIds: new Set<string>() });
  }, [results, value]);

  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "/" && !e.ctrlKey && !e.metaKey && document.activeElement !== inputRef.current) {
        e.preventDefault();
        inputRef.current?.focus();
      }
      if ((e.ctrlKey || e.metaKey) && e.key === "k") {
        e.preventDefault();
        inputRef.current?.focus();
      }
      if (e.key === "Escape" && document.activeElement === inputRef.current) {
        setValue("");
        setSearchQuery("");
        inputRef.current?.blur();
      }
    }
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [setSearchQuery]);

  function handleSelect(id: string) {
    focusNode(id);
    setValue("");
    setSearchQuery("");
  }

  return (
    <Panel className="w-[280px] overflow-hidden rounded-lg">
      <div className="flex items-center gap-2 px-3 py-2.5">
        <svg className={`h-4 w-4 shrink-0 ${isDark ? "text-slate-500" : "text-slate-400"}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
        <input
          ref={inputRef}
          className={`w-full border-0 bg-transparent text-sm outline-none ${
            isDark
              ? "text-slate-100 placeholder:text-slate-600"
              : "text-slate-800 placeholder:text-slate-400"
          }`}
          onChange={(event) => setValue(event.target.value)}
          placeholder="Search components... (/)"
          value={value}
        />
        {value.trim() ? (
          <button
            className={`shrink-0 ${isDark ? "text-slate-500 hover:text-slate-300" : "text-slate-400 hover:text-slate-600"}`}
            onClick={() => { setValue(""); setSearchQuery(""); }}
            type="button"
          >
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        ) : null}
      </div>
      {value.trim() ? <SearchResultsList results={results} onSelect={handleSelect} /> : null}
    </Panel>
  );
}
