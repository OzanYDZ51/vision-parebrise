'use client';

import Image from 'next/image';

interface EyeMascotProps {
  size?: number;
  variant?: 'normal' | 'happy' | 'sad' | 'wink';
  className?: string;
  animate?: boolean;
}

const EYE_ASPECT = 203 / 375;

export default function EyeMascot({ size = 60, variant = 'normal', className = '', animate = true }: EyeMascotProps) {
  const transform =
    variant === 'sad' ? 'scaleY(-1)' :
    variant === 'happy' ? 'scaleY(0.85)' :
    undefined;

  return (
    <div
      className={`inline-block ${animate ? 'animate-eye-blink' : ''} ${className}`}
      style={{ width: size, height: size * EYE_ASPECT, transform }}
      aria-hidden="true"
    >
      <Image
        src="/images/yeux.png"
        alt=""
        width={375}
        height={203}
        className="w-full h-full object-contain"
        priority={size >= 60}
      />
    </div>
  );
}
