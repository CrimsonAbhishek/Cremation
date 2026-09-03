import type { Metadata } from 'next';
import Link from 'next/link';
import { Container } from '@/components/layout/Container';
import { Button } from '@/components/ui/Button';
import { siteConfig } from '@/config/site';
import { Shield, Heart, Clock, Compass } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About Us',
  description: `Learn about ${siteConfig.companyName}, our mission, values, and commitment to providing dignified cremation and funeral support.`,
};

export default function AboutPage() {
  return (
    <>
      <section className="py-12 md:py-16 bg-neutral-50" aria-labelledby="about-heading">
        <Container>
          <div className="max-w-2xl">
            <h1 id="about-heading" className="font-display text-3xl md:text-4xl font-semibold text-neutral-900">
              About us
            </h1>
            <p className="mt-4 text-lg text-neutral-700 leading-relaxed">
              We exist to take the logistics of loss off a family&apos;s shoulders.
            </p>
          </div>
        </Container>
      </section>

      <section className="py-12 md:py-16 bg-white">
        <Container>
          <div className="max-w-3xl mx-auto space-y-12">
            <div>
              <h2 className="font-display text-2xl font-semibold text-neutral-900 mb-4">
                Our Mission
              </h2>
              <p className="text-base text-neutral-700 leading-relaxed mb-4">
                Arranging a funeral while grieving is one of the hardest things a family can face. Phone calls to crematoriums, coordination with pandits, finding a hearse in the middle of the night — these are things no one should have to figure out alone.
              </p>
              <p className="text-base text-neutral-700 leading-relaxed">
                We built this service so families don&apos;t have to. We handle everything — transportation, crematorium booking, rituals, preservation, and post-funeral ceremonies — clearly, honestly, and without adding to the family&apos;s burden.
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl font-semibold text-neutral-900 mb-6">
                Our Core Principles
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-6 bg-neutral-50 rounded-md border border-neutral-200">
                  <Heart className="w-6 h-6 text-primary-500 mb-3" aria-hidden="true" />
                  <h3 className="font-display text-lg font-semibold text-neutral-900 mb-2">
                    Respect in everything
                  </h3>
                  <p className="text-sm text-neutral-700 leading-relaxed">
                    Every person we work with is treated with care — from how we talk to a family on the phone to how we handle each step of the process.
                  </p>
                </div>
                <div className="p-6 bg-neutral-50 rounded-md border border-neutral-200">
                  <Shield className="w-6 h-6 text-primary-500 mb-3" aria-hidden="true" />
                  <h3 className="font-display text-lg font-semibold text-neutral-900 mb-2">
                    No surprises
                  </h3>
                  <p className="text-sm text-neutral-700 leading-relaxed">
                    You&apos;ll know what something costs before we do it. You&apos;ll know what step we&apos;re on. Nothing is done without your knowledge.
                  </p>
                </div>
                <div className="p-6 bg-neutral-50 rounded-md border border-neutral-200">
                  <Clock className="w-6 h-6 text-primary-500 mb-3" aria-hidden="true" />
                  <h3 className="font-display text-lg font-semibold text-neutral-900 mb-2">
                    Always available
                  </h3>
                  <p className="text-sm text-neutral-700 leading-relaxed">
                    Day or night, a real person answers. We don&apos;t have business hours for this kind of work.
                  </p>
                </div>
                <div className="p-6 bg-neutral-50 rounded-md border border-neutral-200">
                  <Compass className="w-6 h-6 text-primary-500 mb-3" aria-hidden="true" />
                  <h3 className="font-display text-lg font-semibold text-neutral-900 mb-2">
                    Everything, handled
                  </h3>
                  <p className="text-sm text-neutral-700 leading-relaxed">
                    One team manages every part of the process — from the hearse to the asthi visarjan. You don&apos;t coordinate between multiple services.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-neutral-50 p-6 rounded-md border border-neutral-200">
              <h2 className="font-display text-xl font-semibold text-neutral-900 mb-3">
                Our Team & Organization
              </h2>
              <p className="text-neutral-700 text-base leading-relaxed">
                We&apos;re a team of coordinators, logistics specialists, and ritual guides based in [City]. We&apos;ve assisted families across [X cities] since [Year]. Our coordinators are available around the clock and are trained to handle every aspect of funeral and cremation logistics with care and professionalism. For more information about our team, reach out directly.
              </p>
            </div>

            <div className="pt-4 text-center">
              <Link href="/contact">
                <Button size="lg">Reach out to our team</Button>
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
