import Link from 'next/link';
import type { Service } from '@/types';
import { Button } from '@/components/ui/Button';
import { DynamicIcon } from '@/components/ui/DynamicIcon';
import { ArrowUpRight, Check } from 'lucide-react';
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
        'group flex h-full flex-col border-t border-neutral-300 pt-5 transition-colors duration-200',
        'hover:border-primary-500',
        className,
      )}
    >
      <div className="flex items-start justify-between gap-5">
        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary-50 text-primary-700">
          <DynamicIcon name={service.icon} className="h-4 w-4" aria-hidden="true" />
        </div>
        <span className="font-mono text-[10px] tracking-[0.12em] text-neutral-500" aria-hidden="true">
          SERVICE
        </span>
      </div>

      <h3 className="mt-6 font-display text-[24px] font-semibold leading-tight text-neutral-900">
        {service.name}
      </h3>

      <p className="mt-3 text-[15px] leading-7 text-neutral-700">
        {service.shortDescription}
      </p>

      {service.features && (
        <ul className="mt-5 space-y-2">
          {service.features.map((feature) => (
            <li key={feature} className="flex items-start gap-2 text-[13px] leading-5 text-neutral-600">
              <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-primary-500" aria-hidden="true" />
              {feature}
            </li>
          ))}
        </ul>
      )}

      <div className="mt-auto flex flex-wrap items-center gap-4 pt-7">
        <Link href={`/services#${service.slug}`}>
          <Button variant="secondary" size="sm">
            Learn more
            <ArrowUpRight className="ml-1 h-3.5 w-3.5" aria-hidden="true" />
          </Button>
        </Link>
        {showBookCTA && (
          <Link href="/booking" className="text-sm font-semibold text-primary-900 hover:text-primary-500">
            Request service
          </Link>
        )}
      </div>
    </article>
  );
}
