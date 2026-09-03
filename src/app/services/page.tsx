import type { Metadata } from 'next';
import { Container } from '@/components/layout/Container';
import { ServiceCard } from '@/components/cards/ServiceCard';
import { services } from '@/content/services';
import { siteConfig } from '@/config/site';

export const metadata: Metadata = {
  title: 'Services',
  description: `Complete cremation and funeral services provided by ${siteConfig.companyName}. Traditional cremation, electric cremation, transportation, freezer box, funeral arrangements, and post-funeral support.`,
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
              Our services
            </h1>
            <p className="mt-4 text-lg text-neutral-700 leading-relaxed">
              We provide comprehensive support for every aspect of funeral and
              cremation services. Each service is carried out with professionalism,
              care, and respect for your family&apos;s traditions.
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

      {/* Detailed service descriptions */}
      <section className="py-12 md:py-16 bg-neutral-50">
        <Container>
          <div className="max-w-3xl mx-auto space-y-12">
            {services.map((service) => (
              <article
                key={service.id}
                id={service.slug}
                className="scroll-mt-24"
              >
                <h2 className="font-display text-2xl font-semibold text-neutral-900 mb-4">
                  {service.name}
                </h2>
                <p className="text-base text-neutral-700 leading-relaxed mb-4">
                  {service.description}
                </p>
                {service.features && (
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
                )}
                <hr className="mt-8 border-neutral-200" />
              </article>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
