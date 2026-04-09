interface CloudDividerProps {
  variant?: 'cloud' | 'wave' | 'peak';
  color?: string;
  flip?: boolean;
  className?: string;
}

export default function CloudDivider({ variant = 'cloud', color = '#ffffff', flip = false, className = '' }: CloudDividerProps) {
  const transform = flip ? 'rotate(180deg)' : undefined;

  if (variant === 'wave') {
    return (
      <div className={`w-full overflow-hidden leading-[0] ${className}`} style={{ transform }}>
        <svg viewBox="0 0 1440 100" preserveAspectRatio="none" className="w-full h-[60px] md:h-[80px]">
          <path
            d="M0,40 C360,100 720,0 1080,60 C1260,80 1380,40 1440,40 L1440,100 L0,100 Z"
            fill={color}
          />
        </svg>
      </div>
    );
  }

  if (variant === 'peak') {
    return (
      <div className={`w-full overflow-hidden leading-[0] ${className}`} style={{ transform }}>
        <svg viewBox="0 0 1440 80" preserveAspectRatio="none" className="w-full h-[50px] md:h-[70px]">
          <path d="M0,80 L720,0 L1440,80 Z" fill={color} />
        </svg>
      </div>
    );
  }

  // Default: cloud
  return (
    <div className={`w-full overflow-hidden leading-[0] ${className}`} style={{ transform }}>
      <svg viewBox="0 0 1440 120" preserveAspectRatio="none" className="w-full h-[60px] md:h-[90px]">
        <path
          d="M0,60 C120,80 240,100 360,90 C480,80 540,40 720,50 C900,60 960,100 1080,90 C1200,80 1320,60 1440,70 L1440,120 L0,120 Z"
          fill={color}
        />
      </svg>
    </div>
  );
}
