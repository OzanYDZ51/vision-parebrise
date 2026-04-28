'use client';

import Image from 'next/image';

interface FloatingCloudsProps {
  count?: number;
  className?: string;
  variant?: 'white' | 'blue';
}

const CLOUD_ASPECT = 224 / 375;

export default function FloatingClouds({ count = 5, className = '', variant = 'white' }: FloatingCloudsProps) {
  const src = variant === 'blue' ? '/images/nuage-bleu.png' : '/images/nuage-blanc.png';

  const clouds = [
    { width: 220, top: '8%', left: '-4%', opacity: 0.55, speed: 'animate-cloud-drift-slow', delay: '0s' },
    { width: 150, top: '22%', right: '6%', opacity: 0.45, speed: 'animate-cloud-drift', delay: '-5s' },
    { width: 260, top: '48%', left: '8%', opacity: 0.35, speed: 'animate-cloud-drift-slow', delay: '-10s' },
    { width: 170, top: '68%', right: '12%', opacity: 0.5, speed: 'animate-cloud-drift-fast', delay: '-3s' },
    { width: 200, top: '84%', left: '28%', opacity: 0.3, speed: 'animate-cloud-drift', delay: '-8s' },
    { width: 130, top: '14%', left: '52%', opacity: 0.4, speed: 'animate-cloud-drift-fast', delay: '-12s' },
    { width: 280, top: '38%', right: '-4%', opacity: 0.28, speed: 'animate-cloud-drift-slow', delay: '-15s' },
  ];

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`} aria-hidden="true">
      {clouds.slice(0, count).map((cloud, i) => (
        <div
          key={i}
          className={`absolute ${cloud.speed}`}
          style={{
            top: cloud.top,
            left: cloud.left,
            right: cloud.right,
            width: cloud.width,
            height: cloud.width * CLOUD_ASPECT,
            opacity: cloud.opacity,
            animationDelay: cloud.delay,
          }}
        >
          <Image
            src={src}
            alt=""
            width={375}
            height={224}
            className="w-full h-full object-contain"
          />
        </div>
      ))}
    </div>
  );
}
