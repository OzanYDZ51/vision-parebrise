import Link from 'next/link';
import { Home } from 'lucide-react';
import FloatingClouds from '@/components/FloatingClouds';
import EyeMascot from '@/components/EyeMascot';

export default function NotFound() {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center bg-sky-gradient overflow-hidden">
      <FloatingClouds count={5} />
      <div className="relative z-10 text-center px-5">
        <EyeMascot size={240} variant="sad" className="mx-auto mb-6" animate={false} />
        <h1 className="text-6xl md:text-8xl font-display font-extrabold text-white mb-4">404</h1>
        <p className="text-2xl md:text-3xl font-display font-bold text-white/80 mb-2">
          Cette page s&apos;est envolée !
        </p>
        <p className="text-white/50 mb-8 max-w-md mx-auto">
          La page que vous cherchez n&apos;existe pas ou a été déplacée.
        </p>
        <Link href="/" className="btn-vision btn-white">
          <Home className="w-5 h-5" /> Retour à l&apos;accueil
        </Link>
      </div>
    </section>
  );
}
