import clsx from "clsx";
import type { CSSProperties, ReactNode } from "react";
import type { NodeColorTokens } from "../../../lib/transform/colorMap";

interface NodeShellProps {
  width: number | string;
  colors: NodeColorTokens;
  isSelected: boolean;
  isDimmed: boolean;
  children: ReactNode;
  className?: string;
}

export function NodeShell({
  width,
  colors,
  isSelected,
  isDimmed,
  children,
  className,
}: NodeShellProps) {
  return (
    <div
      className={clsx(
        "architecture-node group relative overflow-hidden rounded-xl border-2 shadow-node transition-[box-shadow,transform,filter] duration-200",
        !isDimmed && "hover:-translate-y-0.5 hover:shadow-glow",
        isSelected && "z-10 ring-2 ring-white ring-offset-2 ring-offset-neutral-950",
        isDimmed && "brightness-[0.42] saturate-[0.7]",
        className
      )}
      style={
        {
          width,
          background: `linear-gradient(145deg, ${colors.base} 0%, ${colors.border} 100%)`,
          borderColor: isSelected ? "#ffffff" : colors.border,
          boxShadow: isSelected ? `0 0 28px ${colors.glow}, 0 0 0 1px rgba(255,255,255,0.2)` : undefined,
          "--node-glow": colors.glow,
        } as CSSProperties
      }
    >
      {isDimmed ? (
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 z-[1] rounded-[10px] bg-neutral-950/75 transition-opacity duration-200"
        />
      ) : null}
      <div className="relative z-[2]">{children}</div>
    </div>
  );
}

export function NodeDimOverlay({ dimmed }: { dimmed: boolean }) {
  if (!dimmed) return null;

  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 z-[1] rounded-[inherit] bg-neutral-950/75 transition-opacity duration-200"
    />
  );
}
