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

export const metadata: Metadata = {
  title: 'Frequently Asked Questions',
  description: 'Find answers to common questions about cremation processes, documentation, transport, timing, and ritual arrangements.',
};

export default function FAQPage() {
  return (
    <>
      <section className="py-12 md:py-16 bg-neutral-50" aria-labelledby="faq-page-heading">
        <Container>
          <div className="max-w-2xl">
            <h1 id="faq-page-heading" className="font-display text-3xl md:text-4xl font-semibold text-neutral-900">
              Frequently asked questions
            </h1>
            <p className="mt-4 text-lg text-neutral-700 leading-relaxed">
              Find clear answers to common questions regarding our services, procedures, required documents, and arrangements.
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
                Our support team is available 24/7 to provide personal assistance.
              </p>
              <Link href="/contact">
                <Button size="md">Contact our team</Button>
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
