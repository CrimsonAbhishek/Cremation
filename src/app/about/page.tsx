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
              About {siteConfig.companyName}
            </h1>
            <p className="mt-4 text-lg text-neutral-700 leading-relaxed">
              Dignified care, professional coordination, and unwavering compassion during life&apos;s most sensitive moments.
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
                We believe that every family deserves clear guidance, complete transparency, and respectful service when saying goodbye to a loved one. Our goal is to alleviate the logistical burdens of funeral and cremation planning so families can focus on remembrance and healing.
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
                    Dignity & Respect
                  </h3>
                  <p className="text-sm text-neutral-700 leading-relaxed">
                    Treating every individual and family with reverence and deep cultural understanding.
                  </p>
                </div>
                <div className="p-6 bg-neutral-50 rounded-md border border-neutral-200">
                  <Shield className="w-6 h-6 text-primary-500 mb-3" aria-hidden="true" />
                  <h3 className="font-display text-lg font-semibold text-neutral-900 mb-2">
                    Transparency
                  </h3>
                  <p className="text-sm text-neutral-700 leading-relaxed">
                    Clear information regarding procedures, timings, and expectations without surprise costs.
                  </p>
                </div>
                <div className="p-6 bg-neutral-50 rounded-md border border-neutral-200">
                  <Clock className="w-6 h-6 text-primary-500 mb-3" aria-hidden="true" />
                  <h3 className="font-display text-lg font-semibold text-neutral-900 mb-2">
                    24/7 Availability
                  </h3>
                  <p className="text-sm text-neutral-700 leading-relaxed">
                    Uninterrupted operational support whenever immediate assistance is needed.
                  </p>
                </div>
                <div className="p-6 bg-neutral-50 rounded-md border border-neutral-200">
                  <Compass className="w-6 h-6 text-primary-500 mb-3" aria-hidden="true" />
                  <h3 className="font-display text-lg font-semibold text-neutral-900 mb-2">
                    Comprehensive Support
                  </h3>
                  <p className="text-sm text-neutral-700 leading-relaxed">
                    End-to-end management from initial transport to post-funeral rituals.
                  </p>
                </div>
              </div>
            </div>

            <div className="placeholder-content">
              <h2 className="font-display text-xl font-semibold text-neutral-900 mb-2">
                Team & Location Information
              </h2>
              <p className="text-neutral-700 text-sm">
                [Detailed organization history, leadership bios, and operational center details to be provided by client.]
              </p>
            </div>

            <div className="pt-6 text-center">
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
