import type { Metadata } from 'next';
import { Container } from '@/components/layout/Container';
import { termsOfService } from '@/content/legal';

export const metadata: Metadata = {
  title: 'Terms of Service (Template)',
  description: 'Terms of Service template notice and structural terms.',
};

export default function TermsPage() {
  return (
    <section className="py-12 md:py-16 bg-white">
      <Container>
        <div className="max-w-3xl mx-auto">
          <h1 className="font-display text-3xl md:text-4xl font-semibold text-neutral-900 mb-6">
            {termsOfService.title}
          </h1>

          <div className="legal-template-notice">
            <strong>Legal Template Notice</strong>
            {termsOfService.templateNotice}
          </div>

          <p className="text-xs text-neutral-500 mb-8 font-mono">
            Last Updated: {termsOfService.lastUpdated}
          </p>

          <div className="space-y-8">
            {termsOfService.sections.map((sec, idx) => (
              <div key={idx} className="border-b border-neutral-200 pb-6 last:border-b-0">
                <h2 className="font-display text-xl font-semibold text-neutral-900 mb-3">
                  {sec.heading}
                </h2>
                <p className="text-base text-neutral-700 leading-relaxed">
                  {sec.content}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
