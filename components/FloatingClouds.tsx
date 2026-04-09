'use client';

interface FloatingCloudsProps {
  count?: number;
  className?: string;
}

export default function FloatingClouds({ count = 5, className = '' }: FloatingCloudsProps) {
  const clouds = [
    { width: 180, top: '10%', left: '-5%', opacity: 0.15, speed: 'animate-cloud-drift-slow', delay: '0s' },
    { width: 120, top: '25%', right: '5%', opacity: 0.1, speed: 'animate-cloud-drift', delay: '-5s' },
    { width: 200, top: '50%', left: '10%', opacity: 0.08, speed: 'animate-cloud-drift-slow', delay: '-10s' },
    { width: 140, top: '70%', right: '15%', opacity: 0.12, speed: 'animate-cloud-drift-fast', delay: '-3s' },
    { width: 160, top: '85%', left: '30%', opacity: 0.06, speed: 'animate-cloud-drift', delay: '-8s' },
    { width: 100, top: '15%', left: '50%', opacity: 0.1, speed: 'animate-cloud-drift-fast', delay: '-12s' },
    { width: 220, top: '40%', right: '-3%', opacity: 0.07, speed: 'animate-cloud-drift-slow', delay: '-15s' },
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
            animationDelay: cloud.delay,
          }}
        >
          <svg
            width={cloud.width}
            height={cloud.width * 0.5}
            viewBox="0 0 200 100"
            fill="white"
            opacity={cloud.opacity}
          >
            <ellipse cx="70" cy="70" rx="50" ry="30" />
            <ellipse cx="100" cy="55" rx="55" ry="35" />
            <ellipse cx="140" cy="65" rx="45" ry="28" />
            <ellipse cx="110" cy="70" rx="60" ry="30" />
          </svg>
        </div>
      ))}
    </div>
  );
}
