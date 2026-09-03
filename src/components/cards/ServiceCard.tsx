import Link from 'next/link';
import type { Service } from '@/types';
import { Button } from '@/components/ui/Button';
import { DynamicIcon } from '@/components/ui/DynamicIcon';
import { Check } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ServiceCardProps {
  service: Service;
  showBookCTA?: boolean;
  className?: string;
}

export function ServiceCard({ service, showBookCTA = true, className }: ServiceCardProps) {
  return (
    <article
      id={service.slug}
      className={cn(
        'bg-white border border-neutral-200 rounded-md p-6 transition-all duration-150',
        'hover:shadow-md hover:-translate-y-0.5',
        className,
      )}
    >
      <div className="flex items-center gap-3 mb-4">
        <div className="flex items-center justify-center w-10 h-10 rounded-md bg-primary-100 text-primary-500">
          <DynamicIcon name={service.icon} className="w-5 h-5" aria-hidden="true" />
        </div>
        <h3 className="font-display text-xl font-semibold text-neutral-900">
          {service.name}
        </h3>
      </div>

      <p className="text-base text-neutral-700 leading-relaxed mb-4">
        {service.shortDescription}
      </p>

      {service.features && (
        <ul className="mb-6 space-y-1.5">
          {service.features.map((feature) => (
            <li key={feature} className="flex items-start gap-2 text-sm text-neutral-700">
              <Check className="w-4 h-4 text-success-600 mt-0.5 shrink-0" aria-hidden="true" />
              {feature}
            </li>
          ))}
        </ul>
      )}

      <div className="flex flex-wrap gap-3 mt-auto">
        <Link href={`/services#${service.slug}`}>
          <Button variant="secondary" size="sm">
            Learn more
          </Button>
        </Link>
        {showBookCTA && (
          <Link href="/booking">
            <Button variant="primary" size="sm">
              Request service
            </Button>
          </Link>
        )}
      </div>
    </article>
  );
}
