'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Phone, Calendar } from 'lucide-react';
import { COMPANY } from '@/lib/constants';

export default function StickyCta() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 lg:hidden bg-white/95 backdrop-blur-md border-t border-border px-4 py-3 flex items-center gap-3">
      <a
        href={COMPANY.phoneLink}
        className="flex-1 btn-vision btn-primary text-sm !min-h-[44px] !py-2"
      >
        <Phone className="w-4 h-4" /> Appeler
      </a>
      <Link
        href="/prendre-rdv"
        className="flex-1 btn-vision btn-accent text-sm !min-h-[44px] !py-2"
      >
        <Calendar className="w-4 h-4" /> RDV
      </Link>
    </div>
  );
}
