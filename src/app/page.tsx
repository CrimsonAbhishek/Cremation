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
import { ArrowRight, Clock, Phone, ShieldCheck, UserCheck } from 'lucide-react';

export default function HomePage() {
  return (
    <>
      <section className="editorial-hero" aria-label="Introduction">
        <Container>
          <div className="editorial-hero__grid">
            <div className="editorial-hero__copy">
              <p className="eyebrow">Funeral &amp; cremation care</p>
              <h1>Arrangements handled with care, when your family needs it most.</h1>
              <p className="editorial-hero__lede">
                Transportation, cremation, rituals, and post-funeral support — brought together in one clear process, so your family has fewer things to carry.
              </p>

              <div className="editorial-hero__actions">
                <Link href="/booking">
                  <Button size="lg">Request assistance</Button>
                </Link>
                <Link href="/services" className="editorial-text-link">
                  Explore services <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </div>

              {siteConfig.contact.phone && (
                <p className="editorial-hero__phone">
                  <Phone className="h-4 w-4" aria-hidden="true" />
                  Or call {siteConfig.contact.phoneDisplayWithHours}
                </p>
              )}
            </div>

            <div className="editorial-hero__aside" aria-label="What families can expect">
              <div className="editorial-rule" />
              <p className="eyebrow">A simpler first step</p>
              <p className="editorial-hero__aside-copy">
                Tell us what has happened, where you are, and what your family needs. We&apos;ll help you understand the next steps.
              </p>
              <div className="editorial-hero__facts">
                <span><Clock className="h-4 w-4" aria-hidden="true" /> Available any hour</span>
                <span><UserCheck className="h-4 w-4" aria-hidden="true" /> One point of contact</span>
                <span><ShieldCheck className="h-4 w-4" aria-hidden="true" /> Clear next steps</span>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="editorial-intro" aria-labelledby="services-heading">
        <Container>
          <div className="editorial-section-heading">
            <div>
              <p className="eyebrow">What we can arrange</p>
              <h2 id="services-heading">The practical details, taken care of.</h2>
            </div>
            <p>
              From the first call through the cremation and the rituals that follow, choose only the services your family needs.
            </p>
          </div>

          <div className="editorial-services-grid">
            {services.map((service, index) => (
              <div key={service.id} className="editorial-service-wrap">
                <span className="editorial-index">0{index + 1}</span>
                <ServiceCard service={service} />
              </div>
            ))}
          </div>

          <div className="editorial-section-link">
            <Link href="/services" className="editorial-text-link">
              See all services <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </Container>
      </section>

      <section className="editorial-process" aria-labelledby="process-heading">
        <Container>
          <div className="editorial-process__grid">
            <div className="editorial-process__intro">
              <p className="eyebrow">What happens next</p>
              <h2 id="process-heading">A clear process in a difficult moment.</h2>
              <p>
                You do not need to know every detail before you contact us. Start with what you know; we can work through the rest together.
              </p>
              <Link href="/how-it-works" className="editorial-text-link">
                See how it works <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>

            <ol className="editorial-timeline">
              {processSteps.map((step) => (
                <li key={step.step}>
                  <span className="editorial-timeline__number">0{step.step}</span>
                  <div>
                    <h3>{step.title}</h3>
                    <p>{step.description}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </Container>
      </section>

      <section className="editorial-values" aria-labelledby="values-heading">
        <Container>
          <div className="editorial-section-heading editorial-section-heading--compact">
            <div>
              <p className="eyebrow">How we work</p>
              <h2 id="values-heading">Quietly dependable. Clear when it matters.</h2>
            </div>
          </div>

          <div className="editorial-values-grid">
            {valuePrinciples.map((principle) => (
              <article key={principle.id}>
                <DynamicIcon name={principle.icon} className="h-5 w-5 text-primary-500" aria-hidden="true" />
                <h3>{principle.title}</h3>
                <p>{principle.description}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="editorial-faq" aria-labelledby="faq-heading">
        <Container>
          <div className="editorial-faq__grid">
            <div>
              <p className="eyebrow">Common questions</p>
              <h2 id="faq-heading">You can ask us anything about the process.</h2>
              <p>
                If you cannot find what you need here, contact us directly and we&apos;ll help you work through the arrangements.
              </p>
              <Link href="/faq" className="editorial-text-link">
                Read all questions <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
            <Accordion type="single" collapsible defaultValue={faqs[0]?.id}>
              {faqs.slice(0, 4).map((faq) => (
                <AccordionItem key={faq.id} value={faq.id}>
                  <AccordionTrigger>{faq.question}</AccordionTrigger>
                  <AccordionContent>{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </Container>
      </section>

      <section className="editorial-closing" aria-labelledby="cta-heading">
        <Container>
          <div className="editorial-closing__inner">
            <p className="eyebrow">When you are ready</p>
            <h2 id="cta-heading">Start with a conversation.</h2>
            <p>
              Request assistance online, or call directly if you need to speak with someone.
            </p>
            <div className="editorial-hero__actions">
              <Link href="/booking"><Button size="lg">Request assistance</Button></Link>
              <Link href="/contact" className="editorial-text-link editorial-text-link--light">
                Contact us <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
