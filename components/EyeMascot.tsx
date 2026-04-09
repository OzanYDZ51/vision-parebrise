'use client';

interface EyeMascotProps {
  size?: number;
  variant?: 'normal' | 'happy' | 'sad' | 'wink';
  className?: string;
  animate?: boolean;
}

export default function EyeMascot({ size = 60, variant = 'normal', className = '', animate = true }: EyeMascotProps) {
  const eyeHeight = variant === 'happy' ? 0.5 : variant === 'sad' ? 0.85 : 0.7;
  const pupilY = variant === 'sad' ? 18 : 15;
  const browAngle = variant === 'sad' ? 10 : variant === 'happy' ? -5 : 0;

  return (
    <svg
      width={size}
      height={size * 0.55}
      viewBox="0 0 100 55"
      className={`${animate ? 'animate-eye-blink' : ''} ${className}`}
      aria-hidden="true"
    >
      {/* Left eye */}
      <g>
        {variant === 'sad' && (
          <line x1="10" y1="5" x2="30" y2="2" stroke="#0C1B1D" strokeWidth="3" strokeLinecap="round"
            transform={`rotate(${browAngle}, 20, 3)`} />
        )}
        <ellipse cx="22" cy="25" rx="18" ry={18 * eyeHeight} fill="white" stroke="#0C1B1D" strokeWidth="3" />
        <circle cx="22" cy={pupilY + (variant === 'happy' ? 5 : 0)} r="7" fill="#0C1B1D" />
        <circle cx="19" cy={pupilY - 2 + (variant === 'happy' ? 5 : 0)} r="2.5" fill="white" />
        {variant === 'wink' && (
          <line x1="5" y1="25" x2="39" y2="25" stroke="#0C1B1D" strokeWidth="3" strokeLinecap="round" />
        )}
      </g>

      {/* Right eye */}
      <g transform="translate(38, 0)">
        {variant === 'sad' && (
          <line x1="10" y1="2" x2="30" y2="5" stroke="#0C1B1D" strokeWidth="3" strokeLinecap="round"
            transform={`rotate(-${browAngle}, 20, 3)`} />
        )}
        <ellipse cx="22" cy="25" rx="18" ry={18 * eyeHeight} fill="white" stroke="#0C1B1D" strokeWidth="3" />
        <circle cx="22" cy={pupilY + (variant === 'happy' ? 5 : 0)} r="7" fill="#0C1B1D" />
        <circle cx="19" cy={pupilY - 2 + (variant === 'happy' ? 5 : 0)} r="2.5" fill="white" />
      </g>
    </svg>
  );
}
