import { MapPin } from 'lucide-react';

interface MapEmbedProps {
  /** Latitude du centre / marqueur */
  lat: number;
  /** Longitude du centre / marqueur */
  lon: number;
  /** Libellé du lieu (titre a11y + lien) */
  label: string;
  /** Demi-amplitude en degrés de latitude (≈ niveau de zoom). 0.01 ≈ rue, 0.045 ≈ commune */
  delta?: number;
  className?: string;
}

/**
 * Carte OpenStreetMap embarquée — alternative gratuite à Google Maps, sans clé API.
 * Iframe officiel openstreetmap.org/export/embed.html, chargé en lazy.
 */
export default function MapEmbed({ lat, lon, label, delta = 0.012, className }: MapEmbedProps) {
  const latD = delta;
  // La largeur d'un degré de longitude se réduit avec la latitude : on élargit le bbox
  // horizontalement pour garder une carte lisible et bien cadrée.
  const lonD = delta * 1.6;
  const bbox = [lon - lonD, lat - latD, lon + lonD, lat + latD].map((n) => n.toFixed(5)).join(',');
  const src = `https://www.openstreetmap.org/export/embed.html?bbox=${encodeURIComponent(bbox)}&layer=mapnik&marker=${lat.toFixed(5)}%2C${lon.toFixed(5)}`;
  const fullUrl = `https://www.openstreetmap.org/?mlat=${lat.toFixed(5)}&mlon=${lon.toFixed(5)}#map=15/${lat.toFixed(4)}/${lon.toFixed(4)}`;

  return (
    <div className={className}>
      <div className="rounded-[20px] overflow-hidden border border-primary/15 shadow-sm">
        <iframe
          title={`Carte OpenStreetMap — ${label}`}
          src={src}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full h-[300px] md:h-[340px] border-0 block"
        />
      </div>
      <a
        href={fullUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline"
      >
        <MapPin className="w-4 h-4" /> Voir {label} sur la carte
      </a>
    </div>
  );
}
