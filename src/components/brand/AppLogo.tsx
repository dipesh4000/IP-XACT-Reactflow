interface AppLogoProps {
  size?: number;
  className?: string;
}

export function AppLogo({ size = 32, className }: AppLogoProps) {
  return (
    <svg
      aria-hidden
      className={className}
      fill="none"
      height={size}
      viewBox="0 0 32 32"
      width={size}
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect fill="#141414" height="32" rx="8" width="32" />
      <rect height="30" rx="7" stroke="rgba(255,255,255,0.14)" strokeWidth="1" width="30" x="1" y="1" />
      <rect fill="#f5f5f5" height="8" rx="2" width="9" x="5" y="5" />
      <rect fill="#d4d4d4" fillOpacity="0.85" height="8" rx="2" width="9" x="18" y="5" />
      <rect fill="#e5e5e5" fillOpacity="0.9" height="8" rx="2" width="9" x="5" y="19" />
      <rect fill="#a3a3a3" fillOpacity="0.75" height="8" rx="2" width="9" x="18" y="19" />
      <path
        d="M14 9h4M9.5 13v6M22.5 13v6M14 23h4"
        stroke="rgba(255,255,255,0.38)"
        strokeLinecap="round"
        strokeWidth="1.25"
      />
      <circle cx="16" cy="16" fill="rgba(255,255,255,0.55)" r="1.75" />
      <path
        d="M14 9l2 2 2-2M14 23l2-2 2 2"
        stroke="rgba(255,255,255,0.22)"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1"
      />
    </svg>
  );
}

interface AppBrandProps {
  compact?: boolean;
  className?: string;
}

export function AppBrand({ compact = false, className }: AppBrandProps) {
  return (
    <div className={`flex min-w-0 items-center gap-2.5 ${className ?? ""}`}>
      <div className="shrink-0 overflow-hidden rounded-lg shadow-[0_0_0_1px_rgba(255,255,255,0.08)]">
        <AppLogo size={compact ? 28 : 32} />
      </div>
      <div className="min-w-0">
        <h1 className="text-sm font-semibold leading-tight tracking-tight text-slate-100">
          ip<span className="text-neutral-400">-</span>xact
        </h1>
        {!compact ? <p className="text-[10px] text-neutral-500">SoC block viewer</p> : null}
      </div>
    </div>
  );
}
