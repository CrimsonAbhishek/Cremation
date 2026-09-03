import type { Metadata } from 'next';
import Link from 'next/link';
import { Container } from '@/components/layout/Container';
import { Button } from '@/components/ui/Button';
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '@/components/ui/Accordion';
import { faqs } from '@/content/faq';
import { siteConfig } from '@/config/site';
import { formatPhoneLink } from '@/lib/utils';
import { Phone } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Common Questions',
  description: 'Find answers to common questions about cremation processes, documentation, transport, timing, and ritual arrangements.',
};

export default function FAQPage() {
  return (
    <>
      <section className="py-12 md:py-16 bg-neutral-50" aria-labelledby="faq-page-heading">
        <Container>
          <div className="max-w-2xl">
            <h1 id="faq-page-heading" className="font-display text-3xl md:text-4xl font-semibold text-neutral-900">
              Common questions
            </h1>
            <p className="mt-4 text-lg text-neutral-700 leading-relaxed">
              If you have a question that isn&apos;t answered here, call us directly — we&apos;re available 24/7.
            </p>
          </div>
        </Container>
      </section>

      <section className="py-12 md:py-20 bg-white">
        <Container>
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq) => (
                <AccordionItem key={faq.id} value={faq.id}>
                  <AccordionTrigger>{faq.question}</AccordionTrigger>
                  <AccordionContent>{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>

            <div className="mt-16 text-center bg-neutral-50 p-8 rounded-md border border-neutral-200">
              <h2 className="font-display text-xl font-semibold text-neutral-900 mb-2">
                Have a question not answered here?
              </h2>
              <p className="text-neutral-700 mb-6">
                Our team is available 24/7 to answer your questions and assist with arrangements.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                {siteConfig.contact.phone && (
                  <a href={formatPhoneLink(siteConfig.contact.phone)}>
                    <Button size="md">
                      <Phone className="w-4 h-4 mr-2 inline" />
                      Call {siteConfig.contact.phoneDisplay}
                    </Button>
                  </a>
                )}
                <Link href="/contact">
                  <Button variant="secondary" size="md">Send a message</Button>
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
