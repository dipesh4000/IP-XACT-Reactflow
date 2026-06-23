import { memo } from "react";
import { TYPE_ICON } from "../../../lib/constants";
import type { ComponentType } from "../../../types";

interface NodeHeaderProps {
  name: string;
  type: ComponentType;
  color: string;
  expanded: boolean;
  depth?: number;
  isExpandable?: boolean;
  isExpanded?: boolean;
  onExpand?: () => void;
}

export const NodeHeader = memo(function NodeHeader({ name, type, color, expanded, depth = 0, isExpandable, isExpanded, onExpand }: NodeHeaderProps) {
  return (
    <div className="flex min-w-0 items-center gap-3">
      {depth > 0 && (
        <div className="flex shrink-0 items-center gap-0.5">
          {Array.from({ length: depth }, (_, i) => (
            <div key={i} className="h-3 w-0.5 rounded-full bg-white/40" />
          ))}
        </div>
      )}
      <div
        className="grid h-10 w-10 shrink-0 place-items-center rounded-lg border text-[10px] font-black"
        style={{ borderColor: `${color}60`, color, backgroundColor: `${color}20` }}
      >
        {TYPE_ICON[type]}
      </div>
      <div className="min-w-0 flex-1">
        <div className="truncate text-sm font-semibold text-white">{name}</div>
        {expanded ? <div className="mt-0.5 text-[11px] uppercase text-white/50">Component</div> : null}
      </div>
      {isExpandable && (
        <button
          className="shrink-0 rounded-lg p-1.5 transition text-white/60 hover:bg-white/10 hover:text-white"
          onClick={(e) => {
            e.stopPropagation();
            onExpand?.();
          }}
        >
          <svg
            className={`h-4 w-4 transition-transform ${isExpanded ? "rotate-90" : ""}`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      )}
    </div>
  );
});
