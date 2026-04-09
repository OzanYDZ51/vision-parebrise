import Link from 'next/link';
import type { LucideIcon } from 'lucide-react';
import { ArrowRight } from 'lucide-react';

interface ServiceBentoCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  href: string;
  size?: 'large' | 'medium';
}

export default function ServiceBentoCard({ icon: Icon, title, description, href, size = 'medium' }: ServiceBentoCardProps) {
  return (
    <Link
      href={href}
      className={`card-cloud group block p-6 md:p-8 ${size === 'large' ? 'md:col-span-2 md:row-span-2' : ''}`}
    >
      <div className={`w-12 h-12 rounded-2xl bg-primary-light flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition-colors ${size === 'large' ? 'w-14 h-14' : ''}`}>
        <Icon className={`${size === 'large' ? 'w-7 h-7' : 'w-6 h-6'} text-primary group-hover:text-white transition-colors`} />
      </div>
      <h3 className={`font-display font-bold text-text leading-tight mb-2 ${size === 'large' ? 'text-2xl' : 'text-lg'}`}>
        {title}
      </h3>
      <p className={`text-text-muted leading-relaxed mb-4 ${size === 'large' ? 'text-base' : 'text-sm'}`}>
        {description}
      </p>
      <span className="inline-flex items-center gap-1.5 text-primary text-sm font-semibold group-hover:gap-3 transition-all">
        En savoir plus <ArrowRight className="w-4 h-4" />
      </span>
    </Link>
  );
}
