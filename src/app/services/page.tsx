import type { Metadata } from 'next';
import { Container } from '@/components/layout/Container';
import { ServiceCard } from '@/components/cards/ServiceCard';
import { services } from '@/content/services';
import { siteConfig } from '@/config/site';

export const metadata: Metadata = {
  title: 'Services We Provide',
  description: `Every service your family may need, from transportation to post-funeral rituals. Handled by ${siteConfig.companyName}.`,
};

export default function ServicesPage() {
  return (
    <>
      <section className="py-12 md:py-16 bg-neutral-50" aria-labelledby="services-page-heading">
        <Container>
          <div className="max-w-2xl">
            <h1
              id="services-page-heading"
              className="font-display text-3xl md:text-4xl font-semibold text-neutral-900"
            >
              Services we provide
            </h1>
            <p className="mt-4 text-lg text-neutral-700 leading-relaxed">
              Every service your family may need, from transportation to post-funeral rituals. We handle the logistics — you focus on your loved one.
            </p>
          </div>
        </Container>
      </section>

      <section className="py-12 md:py-16 bg-white">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </Container>
      </section>

      {/* Detailed service descriptions — expanded section */}
      <section className="py-12 md:py-16 bg-neutral-50">
        <Container>
          <div className="max-w-3xl mx-auto space-y-12">
            {services.map((service) => (
              <article
                key={service.id}
                id={service.slug}
                className="scroll-mt-24 bg-white p-6 md:p-8 rounded-md border border-neutral-200"
              >
                <h2 className="font-display text-2xl font-semibold text-neutral-900 mb-4">
                  {service.name}
                </h2>
                <p className="text-base text-neutral-700 leading-relaxed mb-6">
                  {service.description}
                </p>
                {service.features && (
                  <div>
                    <h3 className="text-xs font-semibold text-neutral-600 uppercase tracking-wide mb-3">
                      What is included:
                    </h3>
                    <ul className="space-y-2">
                      {service.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-start gap-2 text-base text-neutral-700"
                        >
                          <span className="text-success-600 mt-1" aria-hidden="true">✓</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </article>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
