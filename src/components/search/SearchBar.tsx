import { forwardRef, useEffect, useImperativeHandle, useRef, useState } from "react";
import { useFitViewOnSelect } from "../../hooks/useFitViewOnSelect";
import { useSearch } from "../../hooks/useSearch";
import { useSelectionStore } from "../../store/selectionStore";
import { SearchResultsList } from "./SearchResultsList";

export interface SearchBarHandle {
  focus: () => void;
}

interface SearchBarProps {
  className?: string;
}

export const SearchBar = forwardRef<SearchBarHandle, SearchBarProps>(function SearchBar({ className }, ref) {
  const [value, setValue] = useState("");
  const setSearchQuery = useSelectionStore((state) => state.setSearchQuery);
  const setSearchMatches = useSelectionStore((state) => state.setSearchMatches);
  const results = useSearch();
  const focusNode = useFitViewOnSelect();
  const inputRef = useRef<HTMLInputElement>(null);
  const [expanded, setExpanded] = useState(false);

  useImperativeHandle(ref, () => ({
    focus: () => {
      setExpanded(true);
      inputRef.current?.focus();
    },
  }));

  useEffect(() => {
    const timeout = window.setTimeout(() => setSearchQuery(value), 150);
    return () => window.clearTimeout(timeout);
  }, [setSearchQuery, value]);

  useEffect(() => {
    const trimmed = value.trim();
    if (!trimmed) {
      setSearchMatches(new Set());
      return;
    }
    setSearchMatches(new Set(results.map((r) => r.id)));
  }, [results, setSearchMatches, value]);

  function handleSelect(id: string) {
    focusNode(id);
    setValue("");
    setSearchQuery("");
    setExpanded(false);
    inputRef.current?.blur();
  }

  return (
    <div className={className}>
      <div className="flex items-center gap-2 rounded-lg border border-white/10 bg-neutral-900/80 px-3 py-2">
        <svg className="h-4 w-4 shrink-0 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
        <input
          ref={inputRef}
          className="w-full min-w-0 border-0 bg-transparent text-sm text-slate-100 outline-none placeholder:text-slate-500"
          onBlur={() => {
            if (!value.trim()) setExpanded(false);
          }}
          onChange={(event) => setValue(event.target.value)}
          onFocus={() => setExpanded(true)}
          placeholder="Find component… (Ctrl+F)"
          value={value}
        />
        <kbd className="hidden shrink-0 rounded border border-white/10 bg-white/5 px-1.5 py-0.5 text-[10px] font-medium text-slate-500 sm:inline">
          Ctrl+F
        </kbd>
        {value.trim() ? (
          <button
            className="shrink-0 text-slate-500 hover:text-slate-300"
            onClick={() => {
              setValue("");
              setSearchQuery("");
            }}
            type="button"
          >
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        ) : null}
      </div>
      {expanded && value.trim() ? (
        <div className="absolute left-0 right-0 top-full z-50 mt-1 overflow-hidden rounded-lg border border-white/10 bg-neutral-950 shadow-xl">
          <SearchResultsList results={results} onSelect={handleSelect} />
        </div>
      ) : null}
    </div>
  );
});
