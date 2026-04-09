import Image from 'next/image';
import ScrollReveal from './ScrollReveal';

const insurances = [
  'allianz.svg', 'april.svg', 'axa.svg', 'banque-postale.svg', 'cnp.svg',
  'covea.svg', 'credit-agricole.svg', 'credit-mutuel.svg', 'direct-assurance.svg',
  'eurofil.svg', 'gan.svg', 'gmf.svg', 'groupama.svg', 'maaf.svg',
  'macif.svg', 'maif.svg', 'matmut.svg', 'mma.svg', 'societe-generale.svg',
  'swisslife.svg', 'abeille.webp', 'generali.webp', 'pacifica.webp', 'thelem.webp',
];

function LogoRow({ direction }: { direction: 'left' | 'right' }) {
  const logos = [...insurances, ...insurances, ...insurances];
  return (
    <div className="flex overflow-hidden">
      <div className={direction === 'left' ? 'animate-marquee-left' : 'animate-marquee-right'}>
        <div className="flex items-center gap-12 px-6">
          {logos.map((logo, i) => (
            <div key={`${logo}-${i}`} className="shrink-0 w-[80px] h-[40px] relative grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-300">
              <Image
                src={`/images/assurances/${logo}`}
                alt={logo.replace('.svg', '').replace('.webp', '').replace('-', ' ')}
                fill
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function InsuranceMarquee() {
  return (
    <section className="py-12 overflow-hidden" aria-label="Assurances partenaires">
      <ScrollReveal animation="fade-in">
        <div className="text-center mb-6">
          <p className="text-sm text-text-muted font-semibold uppercase tracking-wide">
            Toutes assurances acceptées — Tiers payant intégral
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <LogoRow direction="left" />
          <LogoRow direction="right" />
        </div>
      </ScrollReveal>
    </section>
  );
}
