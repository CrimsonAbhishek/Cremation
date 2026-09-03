import type { Metadata } from 'next';
import { Container } from '@/components/layout/Container';
import { privacyPolicy } from '@/content/legal';

export const metadata: Metadata = {
  title: 'Privacy Policy (Template)',
  description: 'Privacy Policy template notice and data handling structure.',
};

export default function PrivacyPage() {
  return (
    <section className="py-12 md:py-16 bg-white">
      <Container>
        <div className="max-w-3xl mx-auto">
          <h1 className="font-display text-3xl md:text-4xl font-semibold text-neutral-900 mb-6">
            {privacyPolicy.title}
          </h1>

          <div className="legal-template-notice">
            <strong>Legal Template Notice</strong>
            {privacyPolicy.templateNotice}
          </div>

          <p className="text-xs text-neutral-500 mb-8 font-mono">
            Last Updated: {privacyPolicy.lastUpdated}
          </p>

          <div className="space-y-8">
            {privacyPolicy.sections.map((sec, idx) => (
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
