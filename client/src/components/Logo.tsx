interface LogoProps {
  size?: number;
  showWordmark?: boolean;
  className?: string;
}

export function Logo({ size = 40, showWordmark = true, className = '' }: LogoProps) {
  const uid = 'britech-logo-grad';
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="Britech"
      >
        <defs>
          <linearGradient id={uid} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#00D4FF" />
            <stop offset="100%" stopColor="#0A84FF" />
          </linearGradient>
        </defs>
        {/* B estilizado em formato block com corte diagonal */}
        <path
          d="M10 6 H34 C44 6 50 12 50 21 C50 26 47 30 43 32 C48 33.5 52 38 52 44 C52 53 45 58 35 58 H10 Z"
          fill={`url(#${uid})`}
        />
        {/* Recorte triangular interno (referência ao logo) */}
        <path
          d="M22 18 L40 18 L22 36 Z"
          fill="#0B1220"
        />
        <path
          d="M22 38 L38 38 L22 54 Z"
          fill="#0B1220"
          opacity="0.85"
        />
      </svg>
      {showWordmark && (
        <div className="flex flex-col leading-none">
          <span className="font-extrabold text-xl text-white tracking-tight">Britech</span>
          <span className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground mt-1">
            Tecnologia que <span className="text-[color:var(--brand-cyan)]">ilumina</span> soluções
          </span>
        </div>
      )}
    </div>
  );
}
