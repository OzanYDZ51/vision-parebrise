import { CalendarCheck, FileCheck, Wrench, CircleCheckBig } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const steps = [
  { icon: CalendarCheck, title: 'Prenez RDV', desc: 'Par téléphone ou via notre formulaire en ligne.' },
  { icon: FileCheck, title: 'On gère l\'assurance', desc: 'Nous nous occupons de tout le dossier administratif.' },
  { icon: Wrench, title: 'Intervention', desc: 'Notre technicien vient chez vous, en 1h c\'est réglé.' },
  { icon: CircleCheckBig, title: 'C\'est fait !', desc: 'Calibrage ADAS, contrôle qualité et restitution.' },
];

export default function ProcessTimeline() {
  return (
    <section className="py-20 bg-bg-alt" aria-labelledby="process-title">
      <div className="max-w-[1200px] mx-auto px-5 md:px-8">
        <ScrollReveal animation="fade-up">
          <div className="text-center mb-14">
            <span className="section-label">Comment ça marche</span>
            <h2 id="process-title" className="text-3xl md:text-4xl font-display font-extrabold text-text">
              Simple comme <span className="text-primary">1, 2, 3, 4</span>
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-4 relative">
          {/* Connecting line (desktop) */}
          <div className="hidden md:block absolute top-[52px] left-[12.5%] right-[12.5%] h-[2px] bg-border" />

          {steps.map((step, i) => (
            <ScrollReveal key={i} animation="fade-up" delay={i * 150}>
              <div className="flex flex-col items-center text-center relative">
                {/* Step circle */}
                <div className="w-[72px] h-[72px] rounded-full bg-white border-2 border-primary flex items-center justify-center mb-5 relative z-10 shadow-lg">
                  <step.icon className="w-7 h-7 text-primary" />
                </div>
                {/* Step number */}
                <span className="absolute top-0 right-[calc(50%-52px)] w-6 h-6 rounded-full bg-accent text-white text-xs font-bold flex items-center justify-center z-20">
                  {i + 1}
                </span>
                <h3 className="font-display font-bold text-lg text-text mb-2">{step.title}</h3>
                <p className="text-sm text-text-muted leading-relaxed max-w-[220px]">{step.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
