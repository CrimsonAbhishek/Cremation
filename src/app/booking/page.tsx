import type { Metadata } from 'next';
import { Container } from '@/components/layout/Container';
import { BookingForm } from '@/components/booking/BookingForm';
import { siteConfig } from '@/config/site';

export const metadata: Metadata = {
  title: 'Request Assistance',
  description: `Request assistance for cremation or funeral arrangements with ${siteConfig.companyName}. Fast 24/7 coordination.`,
};

export default function BookingPage() {
  return (
    <>
      <section className="py-10 md:py-14 bg-neutral-50" aria-labelledby="booking-heading">
        <Container>
          <div className="max-w-2xl mx-auto text-center">
            <h1 id="booking-heading" className="font-display text-3xl md:text-4xl font-semibold text-neutral-900">
              Request assistance
            </h1>
            <p className="mt-3 text-base text-neutral-700 leading-relaxed">
              Fill in your details and we&apos;ll call you back immediately. Our team is available around the clock.
            </p>
          </div>
        </Container>
      </section>

      <section className="py-10 md:py-16 bg-white">
        <Container>
          <BookingForm />
        </Container>
      </section>
    </>
  );
}
