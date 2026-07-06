import type { PropsWithChildren } from "react";

interface InspectorSectionProps {
  title: string;
}

export function InspectorSection({ title, children }: PropsWithChildren<InspectorSectionProps>) {
  return (
    <section className="border-t border-white/10 pt-4">
      <h3 className="mb-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-500">
        <span className="inline-block h-1 w-1 rounded-full bg-neutral-400"></span>
        {title}
      </h3>
      {children}
    </section>
  );
}
