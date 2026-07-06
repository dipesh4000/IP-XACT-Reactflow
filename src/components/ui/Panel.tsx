import clsx from "clsx";
import type { PropsWithChildren } from "react";

interface PanelProps {
  className?: string;
}

export function Panel({ children, className }: PropsWithChildren<PanelProps>) {
  return (
    <section className={clsx("border border-white/10 bg-neutral-950/95 shadow-xl backdrop-blur-sm", className)}>
      {children}
    </section>
  );
}
