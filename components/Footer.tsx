import Link from 'next/link';
import Image from 'next/image';
import { COMPANY, SERVICES_SUBMENU, ZONES_SUBMENU } from '@/lib/constants';
import { Phone, Mail, MapPin, Clock, Instagram, Facebook } from 'lucide-react';
import CloudDivider from './CloudDivider';

export default function Footer() {
  return (
    <footer className="relative">
      <CloudDivider variant="cloud" color="#0C1B1D" />
      <div className="bg-dark text-white">
        <div className="max-w-[1200px] mx-auto px-5 md:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {/* Brand */}
            <div>
              <div className="mb-4">
                <Image
                  src="/images/logo-vision.png"
                  alt="Vision Pare-Brise"
                  width={150}
                  height={56}
                  className="h-[45px] w-auto object-contain brightness-0 invert"
                />
              </div>
              <p className="text-text-light text-sm leading-relaxed mb-4">
                {COMPANY.slogan}. Spécialiste du remplacement et de la réparation de pare-brise au Mans et dans toute la Sarthe.
              </p>
              <div className="flex items-center gap-3">
                <a
                  href={COMPANY.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a
                  href={COMPANY.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Services */}
            <div>
              <h3 className="font-display font-bold text-base mb-4">Services</h3>
              <ul className="flex flex-col gap-2">
                {SERVICES_SUBMENU.map((s) => (
                  <li key={s.href}>
                    <Link href={s.href} className="text-text-light text-sm hover:text-primary transition-colors">
                      {s.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Zones */}
            <div>
              <h3 className="font-display font-bold text-base mb-4">Zones d&apos;intervention</h3>
              <ul className="flex flex-col gap-2">
                {ZONES_SUBMENU.map((z) => (
                  <li key={z.href}>
                    <Link href={z.href} className="text-text-light text-sm hover:text-primary transition-colors">
                      {z.label}
                    </Link>
                  </li>
                ))}
              </ul>
              <h3 className="font-display font-bold text-base mt-6 mb-4">Menu</h3>
              <ul className="flex flex-col gap-2">
                <li><Link href="/faq" className="text-text-light text-sm hover:text-primary transition-colors">FAQ</Link></li>
                <li><Link href="/prendre-rdv" className="text-text-light text-sm hover:text-primary transition-colors">Prendre rendez-vous</Link></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="font-display font-bold text-base mb-4">Contact</h3>
              <ul className="flex flex-col gap-3">
                <li className="flex items-start gap-3 text-sm text-text-light">
                  <MapPin className="w-4 h-4 mt-0.5 text-primary shrink-0" />
                  <span>{COMPANY.address}, {COMPANY.city}</span>
                </li>
                <li>
                  <a href={COMPANY.phoneLink} className="flex items-center gap-3 text-sm text-text-light hover:text-primary transition-colors">
                    <Phone className="w-4 h-4 text-primary shrink-0" />
                    {COMPANY.phone}
                  </a>
                </li>
                <li>
                  <a href={`mailto:${COMPANY.email}`} className="flex items-center gap-3 text-sm text-text-light hover:text-primary transition-colors">
                    <Mail className="w-4 h-4 text-primary shrink-0" />
                    {COMPANY.email}
                  </a>
                </li>
                <li className="flex items-center gap-3 text-sm text-text-light">
                  <Clock className="w-4 h-4 text-primary shrink-0" />
                  7j/7, 9h — 17h
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom */}
          <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-text-light text-xs">
              &copy; {new Date().getFullYear()} {COMPANY.name}. Tous droits réservés.
            </p>
            <div className="flex items-center gap-4 text-xs text-text-light">
              <Link href="/mentions-legales" className="hover:text-primary transition-colors">Mentions légales</Link>
              <Link href="/politique-confidentialite" className="hover:text-primary transition-colors">Politique de confidentialité</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
