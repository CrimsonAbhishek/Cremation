import type { Metadata } from 'next';
import { Container } from '@/components/layout/Container';
import { technologySections, technologyIntro } from '@/content/technology';
import { cn } from '@/lib/utils';
import { Lightbulb, Cog, FlaskConical, ShieldCheck } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Our Approach',
  description: 'Learn about our professional approach to cremation and funeral services.',
};

const levelIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  simple: Lightbulb,
  detailed: Cog,
  technical: FlaskConical,
  safety: ShieldCheck,
};

const levelLabels: Record<string, string> = {
  simple: 'Overview',
  detailed: 'Process details',
  technical: 'Technical information',
  safety: 'Safety and standards',
};

export default function TechnologyPage() {
  return (
    <>
      <section className="py-12 md:py-16 bg-neutral-50">
        <Container>
          <div className="max-w-2xl">
            <h1 className="font-display text-3xl md:text-4xl font-semibold text-neutral-900">
              {technologyIntro.heading}
            </h1>
            <p className="mt-4 text-lg text-neutral-700 leading-relaxed">
              {technologyIntro.subheading}
            </p>
            <p className="mt-4 text-base text-neutral-700 leading-relaxed">
              {technologyIntro.description}
            </p>
          </div>
        </Container>
      </section>

      <section className="py-12 md:py-16 bg-white" aria-label="Technology details">
        <Container>
          <div className="max-w-3xl mx-auto space-y-8">
            {technologySections.map((section) => {
              const Icon = levelIcons[section.level] || Lightbulb;
              return (
                <article
                  key={section.id}
                  className={cn(
                    'rounded-md p-6 md:p-8',
                    section.isPlaceholder
                      ? 'placeholder-content'
                      : 'bg-neutral-50 border border-neutral-200',
                  )}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="flex items-center justify-center w-9 h-9 rounded-full bg-primary-100 text-primary-500">
                      <Icon className="w-4.5 h-4.5" aria-hidden="true" />
                    </div>
                    <div>
                      <span className="block text-xs font-semibold text-primary-500 uppercase tracking-wide">
                        {levelLabels[section.level]}
                      </span>
                      <h2 className="font-display text-xl font-semibold text-neutral-900">
                        {section.title}
                      </h2>
                    </div>
                  </div>
                  <div className="text-base text-neutral-700 leading-relaxed whitespace-pre-line">
                    {section.content}
                  </div>
                </article>
              );
            })}
          </div>
        </Container>
      </section>
    </>
  );
}
