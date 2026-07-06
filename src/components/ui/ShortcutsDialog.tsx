interface ShortcutsDialogProps {
  open: boolean;
  onClose: () => void;
}

const SHORTCUTS = [
  { keys: ["Ctrl", "O"], action: "Open file" },
  { keys: ["Ctrl", "F"], action: "Find component" },
  { keys: ["F"], action: "Fit view" },
  { keys: ["Ctrl", "E"], action: "Export SVG" },
  { keys: ["Ctrl", "Shift", "E"], action: "Export selection" },
  { keys: ["Ctrl", "+"], action: "Zoom in" },
  { keys: ["Ctrl", "-"], action: "Zoom out" },
  { keys: ["Esc"], action: "Clear search / close" },
];

function Key({ children }: { children: string }) {
  return (
    <kbd className="rounded border border-white/10 bg-white/5 px-1.5 py-0.5 font-mono text-[10px] text-slate-300">
      {children}
    </kbd>
  );
}

export function ShortcutsDialog({ open, onClose }: ShortcutsDialogProps) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4" role="dialog" aria-modal="true" aria-labelledby="shortcuts-title">
      <button
        aria-label="Close shortcuts"
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
        type="button"
      />
      <div className="relative w-full max-w-md rounded-xl border border-white/10 bg-neutral-950 shadow-2xl">
        <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
          <h2 className="text-sm font-semibold text-slate-100" id="shortcuts-title">
            Keyboard shortcuts
          </h2>
          <button
            className="rounded-md p-1 text-slate-500 transition hover:bg-white/10 hover:text-slate-200"
            onClick={onClose}
            type="button"
          >
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <ul className="divide-y divide-white/5 px-5 py-2">
          {SHORTCUTS.map((item) => (
            <li key={item.action} className="flex items-center justify-between gap-4 py-2.5">
              <span className="text-sm text-slate-400">{item.action}</span>
              <span className="flex shrink-0 items-center gap-1">
                {item.keys.map((key, index) => (
                  <span key={`${item.action}-${key}`} className="flex items-center gap-1">
                    {index > 0 ? <span className="text-[10px] text-slate-600">+</span> : null}
                    <Key>{key}</Key>
                  </span>
                ))}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
