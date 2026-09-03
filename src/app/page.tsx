import Link from 'next/link';
import { Container } from '@/components/layout/Container';
import { Button } from '@/components/ui/Button';
import { ServiceCard } from '@/components/cards/ServiceCard';
import { DynamicIcon } from '@/components/ui/DynamicIcon';
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '@/components/ui/Accordion';
import { siteConfig } from '@/config/site';
import { services } from '@/content/services';
import { processSteps } from '@/content/process';
import { faqs } from '@/content/faq';
import { valuePrinciples } from '@/content/values';
import { formatPhoneLink } from '@/lib/utils';
import { Phone, Clock, UserCheck, ShieldCheck, ArrowRight } from 'lucide-react';

export default function HomePage() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────── */}
      <section className="bg-white py-16 md:py-20 lg:py-24" aria-label="Introduction">
        <Container>
          <div className="max-w-3xl">
            <h1 className="font-display text-3xl md:text-4xl lg:text-[48px] font-semibold text-neutral-900 leading-tight tracking-tight">
              Funeral and cremation services, handled with care
            </h1>
            <p className="mt-6 text-lg md:text-xl text-neutral-700 leading-relaxed max-w-2xl">
              We take care of every arrangement — transportation, cremation, rituals, and post-funeral support — so your family can focus on being together.
            </p>

            {/* Trust row */}
            <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm text-neutral-600">
              <span className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-primary-500" aria-hidden="true" />
                Available any hour
              </span>
              <span className="flex items-center gap-1.5">
                <UserCheck className="w-4 h-4 text-primary-500" aria-hidden="true" />
                One point of contact
              </span>
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-primary-500" aria-hidden="true" />
                Transparent process
              </span>
            </div>

            {/* CTAs */}
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <Link href="/booking">
                <Button size="lg">
                  Request assistance now
                </Button>
              </Link>
              <Link href="/services">
                <Button variant="secondary" size="lg">
                  See all services
                </Button>
              </Link>
            </div>

            {/* Phone CTA */}
            {siteConfig.contact.phone && (
              <p className="mt-4 text-sm text-neutral-600">
                Or call us directly:{' '}
                <a
                  href={formatPhoneLink(siteConfig.contact.phone)}
                  className="text-primary-500 font-medium hover:text-primary-700 transition-colors"
                >
                  {siteConfig.contact.phoneDisplayWithHours}
                </a>
              </p>
            )}
          </div>
        </Container>
      </section>

      {/* ── Trust strip ──────────────────────────────────── */}
      <section className="bg-primary-100 py-6 border-y border-primary-200" aria-label="Why choose us">
        <Container>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 text-center">
            {[
              { icon: Clock, text: 'Available any hour' },
              { icon: Phone, text: 'Response within minutes' },
              { icon: ShieldCheck, text: 'No hidden costs' },
              { icon: UserCheck, text: 'Dedicated coordinator' },
            ].map(({ icon: Icon, text }) => (
              <div key={text} className="flex flex-col items-center gap-2 py-2">
                <Icon className="w-5 h-5 text-primary-700" aria-hidden="true" />
                <span className="text-sm font-medium text-primary-900">{text}</span>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ── Services ─────────────────────────────────────── */}
      <section className="py-16 md:py-20 bg-white" aria-labelledby="services-heading">
        <Container>
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 id="services-heading" className="font-display text-2xl md:text-3xl font-semibold text-neutral-900">
              What we can arrange for your family
            </h2>
            <p className="mt-4 text-base text-neutral-700 leading-relaxed">
              Every service your family may need, from transportation to post-funeral rituals. We handle the logistics — you focus on your loved one.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </Container>
      </section>

      {/* ── How it works ─────────────────────────────────── */}
      <section className="py-16 md:py-20 bg-neutral-50" aria-labelledby="process-heading">
        <Container>
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 id="process-heading" className="font-display text-2xl md:text-3xl font-semibold text-neutral-900">
              What happens when you reach out
            </h2>
            <p className="mt-4 text-base text-neutral-700 leading-relaxed">
              A clear, step-by-step guidance process so you know exactly what to expect.
            </p>
          </div>
          <div className="max-w-3xl mx-auto">
            <ol className="relative space-y-0">
              {processSteps.map((step, index) => (
                <li key={step.step} className="relative flex gap-6 pb-10 last:pb-0">
                  {/* Connecting line */}
                  {index < processSteps.length - 1 && (
                    <div className="absolute left-5 top-12 w-px h-[calc(100%-32px)] bg-primary-200" aria-hidden="true" />
                  )}
                  {/* Step number / icon */}
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary-500 text-white shrink-0 z-10">
                    <DynamicIcon name={step.icon} className="w-5 h-5" aria-hidden="true" />
                  </div>
                  <div className="pt-1">
                    <h3 className="font-display text-lg font-semibold text-neutral-900">
                      {step.title}
                    </h3>
                    <p className="mt-1 text-base text-neutral-700 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </Container>
      </section>

      {/* ── How we work ───────────────────────────────────── */}
      <section className="py-16 md:py-20 bg-white" aria-labelledby="values-heading">
        <Container>
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 id="values-heading" className="font-display text-2xl md:text-3xl font-semibold text-neutral-900">
              How we work
            </h2>
            <p className="mt-4 text-base text-neutral-700 leading-relaxed">
              The principles that guide every interaction with every family we serve.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {valuePrinciples.map((principle) => (
              <div
                key={principle.id}
                className="bg-secondary-200 rounded-md p-6"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="flex items-center justify-center w-9 h-9 rounded-full bg-secondary-700/20 text-secondary-700">
                    <DynamicIcon name={principle.icon} className="w-4.5 h-4.5" aria-hidden="true" />
                  </div>
                  <h3 className="font-display text-lg font-semibold text-neutral-900">
                    {principle.title}
                  </h3>
                </div>
                <p className="text-base text-neutral-700 leading-relaxed">
                  {principle.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ── FAQ preview ──────────────────────────────────── */}
      <section className="py-16 md:py-20 bg-neutral-50" aria-labelledby="faq-heading">
        <Container>
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-10">
              <h2 id="faq-heading" className="font-display text-2xl md:text-3xl font-semibold text-neutral-900">
                Common questions
              </h2>
            </div>
            <Accordion type="single" collapsible defaultValue={faqs[0].id}>
              {faqs.slice(0, 3).map((faq) => (
                <AccordionItem key={faq.id} value={faq.id}>
                  <AccordionTrigger>{faq.question}</AccordionTrigger>
                  <AccordionContent>{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
            <div className="text-center mt-8">
              <Link href="/faq">
                <Button variant="secondary" size="md">
                  View all questions
                  <ArrowRight className="w-4 h-4 ml-1" aria-hidden="true" />
                </Button>
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* ── Final CTA ────────────────────────────────────── */}
      <section className="py-16 md:py-20 bg-primary-900 text-white" aria-labelledby="cta-heading">
        <Container>
          <div className="text-center max-w-2xl mx-auto">
            <h2 id="cta-heading" className="font-display text-2xl md:text-3xl font-semibold text-white">
              We&apos;re here. Call us any time.
            </h2>
            <p className="mt-4 text-base text-primary-300 leading-relaxed">
              If you need help now, call directly — someone will answer. If you&apos;re planning ahead or have questions, fill in the form and we&apos;ll be in touch promptly.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
              {siteConfig.contact.phone && (
                <a href={formatPhoneLink(siteConfig.contact.phone)}>
                  <Button
                    size="lg"
                    className="w-full sm:w-auto bg-white text-primary-900 hover:bg-neutral-100 hover:text-primary-900"
                  >
                    <Phone className="w-4 h-4 mr-2 inline" />
                    Call {siteConfig.contact.phoneDisplay}
                  </Button>
                </a>
              )}
              <Link href="/contact">
                <Button
                  variant="ghost"
                  size="lg"
                  className="w-full sm:w-auto text-white border-primary-300 hover:bg-primary-700 hover:text-white"
                >
                  Send a message
                </Button>
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
