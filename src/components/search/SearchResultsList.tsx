import { useRef, useState, useEffect, useCallback } from "react";
import type { Component } from "../../types";

interface SearchResultsListProps {
  results: Component[];
  onSelect: (id: string) => void;
}

const ROW_HEIGHT = 52;
const MAX_HEIGHT = 288;
const OVERSCAN = 5;

export function SearchResultsList({ results, onSelect }: SearchResultsListProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollTop, setScrollTop] = useState(0);
  const [containerHeight, setContainerHeight] = useState(MAX_HEIGHT);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    const observer = new ResizeObserver((entries) => {
      for (const entry of entries) {
        setContainerHeight(entry.contentRect.height);
      }
    });
    observer.observe(container);
    return () => observer.disconnect();
  }, []);

  const handleScroll = useCallback(() => {
    const container = containerRef.current;
    if (container) {
      setScrollTop(container.scrollTop);
    }
  }, []);

  const totalHeight = results.length * ROW_HEIGHT;
  const startIndex = Math.max(0, Math.floor(scrollTop / ROW_HEIGHT) - OVERSCAN);
  const endIndex = Math.min(
    results.length,
    Math.ceil((scrollTop + containerHeight) / ROW_HEIGHT) + OVERSCAN
  );
  const visibleItems = results.slice(startIndex, endIndex);

  return (
    <div className="border-t border-white/10">
      <div
        ref={containerRef}
        className="overflow-y-auto"
        style={{ height: Math.min(totalHeight, MAX_HEIGHT) }}
        onScroll={handleScroll}
      >
        <div style={{ height: totalHeight, position: "relative" }}>
          {visibleItems.map((component, i) => {
            const actualIndex = startIndex + i;
            return (
              <button
                key={component.id}
                className="flex w-full items-center justify-between gap-3 px-3 text-left transition hover:bg-white/5"
                style={{
                  position: "absolute",
                  top: actualIndex * ROW_HEIGHT,
                  left: 0,
                  right: 0,
                  height: ROW_HEIGHT,
                }}
                onClick={() => onSelect(component.id)}
                type="button"
              >
                <span className="min-w-0">
                  <span className="block truncate text-sm font-medium text-slate-100">{component.name}</span>
                  <span className="block font-mono text-[11px] text-slate-500">{component.id}</span>
                </span>
                <span className="shrink-0 rounded bg-white/5 px-2 py-0.5 text-[10px] font-medium uppercase text-slate-400">{component.type}</span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
