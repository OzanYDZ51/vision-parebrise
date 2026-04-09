import Link from 'next/link';
import { breadcrumbSchema } from '@/lib/schema';
import { ChevronRight, Home } from 'lucide-react';

interface BreadcrumbItem {
  name: string;
  url: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
  const allItems = [{ name: 'Accueil', url: '/' }, ...items];

  return (
    <>
      <nav aria-label="Fil d'Ariane" className="mb-4">
        <ol className="flex items-center flex-wrap gap-1 text-sm">
          {allItems.map((item, i) => {
            const isLast = i === allItems.length - 1;
            return (
              <li key={item.url} className="flex items-center gap-1">
                {i > 0 && <ChevronRight className="w-3.5 h-3.5 text-text-muted" />}
                {isLast ? (
                  <span className="text-text font-medium">
                    {i === 0 && <Home className="w-3.5 h-3.5 inline mr-1" />}
                    {item.name}
                  </span>
                ) : (
                  <Link
                    href={item.url}
                    className="text-primary hover:underline inline-flex items-center gap-1"
                  >
                    {i === 0 && <Home className="w-3.5 h-3.5" />}
                    {item.name}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema(allItems)) }}
      />
    </>
  );
}
