import { Gift, BadgeEuro, Home, ShieldCheck, Award } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const usps = [
  { icon: Gift, label: '250€ offerts*', color: 'text-accent' },
  { icon: BadgeEuro, label: '0€ reste à charge', color: 'text-primary' },
  { icon: Home, label: 'Pose à domicile', color: 'text-primary' },
  { icon: ShieldCheck, label: 'Franchise offerte', color: 'text-primary' },
  { icon: Award, label: '+3 ans d\'expérience', color: 'text-primary' },
];

export default function USPBar() {
  return (
    <section className="relative -mt-8 z-20 px-5 md:px-8">
      <div className="max-w-[1200px] mx-auto">
        <ScrollReveal animation="fade-up" delay={200}>
          <div className="flex flex-wrap justify-center gap-3">
            {usps.map((usp, i) => (
              <div
                key={i}
                className="flex items-center gap-2.5 px-5 py-3 bg-white rounded-full shadow-lg border border-border hover:border-primary hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <usp.icon className={`w-5 h-5 ${usp.color} shrink-0`} />
                <span className="text-sm font-bold text-text whitespace-nowrap">{usp.label}</span>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
