'use client';

import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, Phone, Calendar, ChevronDown } from 'lucide-react';
import { COMPANY, NAV_ITEMS, SERVICES_SUBMENU, ZONES_SUBMENU } from '@/lib/constants';

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [zonesOpen, setZonesOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const closeMenu = useCallback(() => {
    setOpen(false);
    setServicesOpen(false);
    setZonesOpen(false);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') closeMenu(); };
    if (open) {
      document.addEventListener('keydown', onKey);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.removeEventListener('keydown', onKey); document.body.style.overflow = ''; };
  }, [open, closeMenu]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-border'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-5 md:px-8 flex items-center justify-between h-[72px]">
        {/* Logo */}
        <Link href="/" className="flex items-center shrink-0" onClick={closeMenu}>
          <Image
            src="/images/logo-vision.png"
            alt="Vision Pare-Brise"
            width={160}
            height={60}
            className={`h-[45px] w-auto object-contain transition-all ${scrolled ? '' : 'brightness-0 invert'}`}
            priority
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1" aria-label="Navigation principale">
          {NAV_ITEMS.map((item) => {
            const hasSubmenu = item.slug === 'services' || item.slug === 'zones';
            const submenu = item.slug === 'services' ? SERVICES_SUBMENU : item.slug === 'zones' ? ZONES_SUBMENU : null;

            return (
              <div key={item.slug} className="relative group">
                <Link
                  href={item.href}
                  className={`px-4 py-2 rounded-full text-sm font-semibold transition-colors inline-flex items-center gap-1 ${
                    scrolled ? 'text-text hover:text-primary hover:bg-primary-light' : 'text-white/90 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {item.label}
                  {hasSubmenu && <ChevronDown className="w-3.5 h-3.5" />}
                </Link>
                {hasSubmenu && submenu && (
                  <div className="invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-all duration-200 absolute top-full left-0 pt-2 min-w-[240px]">
                    <div className="bg-white rounded-2xl shadow-xl border border-border p-2">
                      {submenu.map((sub) => (
                        <Link
                          key={sub.href}
                          href={sub.href}
                          className="block px-4 py-2.5 text-sm text-text hover:text-primary hover:bg-primary-light rounded-xl transition-colors"
                        >
                          {sub.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center gap-3">
          <a href={COMPANY.phoneLink} className={`btn-vision btn-outline-white text-sm !min-h-[42px] !py-2 !px-5 ${scrolled ? '!border-border !text-text hover:!text-primary hover:!border-primary' : ''}`}>
            <Phone className="w-4 h-4" /> {COMPANY.phone}
          </a>
          <Link href="/prendre-rdv" className="btn-vision btn-accent text-sm !min-h-[42px] !py-2 !px-5">
            <Calendar className="w-4 h-4" /> Prendre RDV
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className={`lg:hidden p-2 rounded-xl transition-colors ${scrolled ? 'text-text' : 'text-white'}`}
          aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'}
          aria-expanded={open}
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="lg:hidden fixed inset-0 top-[72px] bg-sky-gradient z-40 animate-slide-in overflow-y-auto">
          <nav className="max-w-[1200px] mx-auto px-5 py-8 flex flex-col gap-2" aria-label="Navigation mobile">
            {NAV_ITEMS.map((item) => {
              const isServices = item.slug === 'services';
              const isZones = item.slug === 'zones';
              const hasSubmenu = isServices || isZones;
              const submenu = isServices ? SERVICES_SUBMENU : isZones ? ZONES_SUBMENU : null;
              const isOpen = isServices ? servicesOpen : zonesOpen;
              const toggle = isServices ? () => setServicesOpen(!servicesOpen) : () => setZonesOpen(!zonesOpen);

              return (
                <div key={item.slug}>
                  {hasSubmenu ? (
                    <button
                      onClick={toggle}
                      className="w-full flex items-center justify-between px-4 py-3 text-white font-semibold text-lg rounded-2xl hover:bg-white/10 transition-colors"
                    >
                      {item.label}
                      <ChevronDown className={`w-5 h-5 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                    </button>
                  ) : (
                    <Link
                      href={item.href}
                      onClick={closeMenu}
                      className="block px-4 py-3 text-white font-semibold text-lg rounded-2xl hover:bg-white/10 transition-colors"
                    >
                      {item.label}
                    </Link>
                  )}
                  {hasSubmenu && isOpen && submenu && (
                    <div className="ml-4 mt-1 flex flex-col gap-1">
                      {submenu.map((sub) => (
                        <Link
                          key={sub.href}
                          href={sub.href}
                          onClick={closeMenu}
                          className="block px-4 py-2.5 text-white/80 text-sm rounded-xl hover:bg-white/10 transition-colors"
                        >
                          {sub.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}

            <div className="mt-6 flex flex-col gap-3">
              <a href={COMPANY.phoneLink} className="btn-vision btn-white text-base">
                <Phone className="w-5 h-5" /> {COMPANY.phone}
              </a>
              <Link href="/prendre-rdv" onClick={closeMenu} className="btn-vision btn-accent text-base">
                <Calendar className="w-5 h-5" /> Prendre rendez-vous
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
