interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  variant?: 'full' | 'icon';
}

export default function Logo({ size = 'md', variant = 'full' }: LogoProps) {
  const sizes = { sm: 28, md: 36, lg: 48 };
  const textSizes = { sm: 'text-lg', md: 'text-xl', lg: 'text-2xl' };
  const s = sizes[size];

  return (
    <div className="flex items-center gap-2.5 select-none">
      <div className="relative flex-shrink-0" style={{ width: s, height: s }}>
        <svg width={s} height={s} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="cortex-grad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#147BFF" />
              <stop offset="60%" stopColor="#1A6FE8" />
              <stop offset="100%" stopColor="#0B1F4D" />
            </linearGradient>
            <linearGradient id="cortex-accent" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#FF8A00" />
              <stop offset="100%" stopColor="#FF6A00" />
            </linearGradient>
            <filter id="glow">
              <feGaussianBlur stdDeviation="1.5" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>
          {/* Hexagon background */}
          <polygon
            points="24,2 44,13 44,35 24,46 4,35 4,13"
            fill="url(#cortex-grad)"
            opacity="0.15"
          />
          <polygon
            points="24,2 44,13 44,35 24,46 4,35 4,13"
            fill="none"
            stroke="url(#cortex-grad)"
            strokeWidth="1.5"
            opacity="0.6"
          />
          {/* Neural network nodes */}
          <circle cx="24" cy="10" r="2.5" fill="#147BFF" filter="url(#glow)" />
          <circle cx="38" cy="18" r="2.5" fill="#147BFF" filter="url(#glow)" />
          <circle cx="38" cy="30" r="2.5" fill="#147BFF" filter="url(#glow)" />
          <circle cx="24" cy="38" r="2.5" fill="#147BFF" filter="url(#glow)" />
          <circle cx="10" cy="30" r="2.5" fill="#147BFF" filter="url(#glow)" />
          <circle cx="10" cy="18" r="2.5" fill="#147BFF" filter="url(#glow)" />
          <circle cx="24" cy="24" r="3.5" fill="url(#cortex-accent)" filter="url(#glow)" />
          {/* Connections */}
          <line x1="24" y1="10" x2="38" y2="18" stroke="#147BFF" strokeWidth="0.8" opacity="0.5" />
          <line x1="38" y1="18" x2="38" y2="30" stroke="#147BFF" strokeWidth="0.8" opacity="0.5" />
          <line x1="38" y1="30" x2="24" y2="38" stroke="#147BFF" strokeWidth="0.8" opacity="0.5" />
          <line x1="24" y1="38" x2="10" y2="30" stroke="#147BFF" strokeWidth="0.8" opacity="0.5" />
          <line x1="10" y1="30" x2="10" y2="18" stroke="#147BFF" strokeWidth="0.8" opacity="0.5" />
          <line x1="10" y1="18" x2="24" y2="10" stroke="#147BFF" strokeWidth="0.8" opacity="0.5" />
          {/* Center connections */}
          <line x1="24" y1="24" x2="24" y2="10" stroke="#FF8A00" strokeWidth="0.8" opacity="0.6" />
          <line x1="24" y1="24" x2="38" y2="18" stroke="#FF8A00" strokeWidth="0.8" opacity="0.6" />
          <line x1="24" y1="24" x2="38" y2="30" stroke="#FF8A00" strokeWidth="0.8" opacity="0.6" />
          <line x1="24" y1="24" x2="24" y2="38" stroke="#FF8A00" strokeWidth="0.8" opacity="0.6" />
          <line x1="24" y1="24" x2="10" y2="30" stroke="#FF8A00" strokeWidth="0.8" opacity="0.6" />
          <line x1="24" y1="24" x2="10" y2="18" stroke="#FF8A00" strokeWidth="0.8" opacity="0.6" />
        </svg>
      </div>
      {variant === 'full' && (
        <div className="flex flex-col leading-none">
          <span className={`font-bold tracking-wider text-white ${textSizes[size]}`} style={{ fontFamily: 'Inter, sans-serif', letterSpacing: '0.05em' }}>
            CORTEX
          </span>
          <span className={`font-light tracking-widest text-brand-primary ${size === 'lg' ? 'text-sm' : 'text-xs'}`} style={{ letterSpacing: '0.2em' }}>
            AI
          </span>
        </div>
      )}
    </div>
  );
}
