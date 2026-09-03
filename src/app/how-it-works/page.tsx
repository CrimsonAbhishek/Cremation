import type { Metadata } from 'next';
import Link from 'next/link';
import { Container } from '@/components/layout/Container';
import { Button } from '@/components/ui/Button';
import { DynamicIcon } from '@/components/ui/DynamicIcon';
import { processSteps } from '@/content/process';
import { siteConfig } from '@/config/site';

export const metadata: Metadata = {
  title: 'How It Works',
  description: 'Understand the step-by-step process of arranging cremation and funeral services with clear, dignified coordination.',
};

export default function HowItWorksPage() {
  return (
    <>
      <section className="py-12 md:py-16 bg-neutral-50" aria-labelledby="how-it-works-heading">
        <Container>
          <div className="max-w-2xl">
            <h1 id="how-it-works-heading" className="font-display text-3xl md:text-4xl font-semibold text-neutral-900">
              How the process works
            </h1>
            <p className="mt-4 text-lg text-neutral-700 leading-relaxed">
              We guide you through each step of the process with clarity and empathy, ensuring your family has full support from the very first contact.
            </p>
          </div>
        </Container>
      </section>

      <section className="py-12 md:py-20 bg-white">
        <Container>
          <div className="max-w-3xl mx-auto">
            <div className="space-y-12">
              {processSteps.map((step) => (
                <div key={step.step} className="flex gap-6 items-start">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary-100 text-primary-700 font-semibold text-lg shrink-0">
                    {step.step}
                  </div>
                  <div className="pt-1">
                    <div className="flex items-center gap-3 mb-2">
                      <DynamicIcon name={step.icon} className="w-5 h-5 text-primary-500" aria-hidden="true" />
                      <h2 className="font-display text-2xl font-semibold text-neutral-900">
                        {step.title}
                      </h2>
                    </div>
                    <p className="text-base text-neutral-700 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-16 bg-primary-100 p-8 rounded-md border border-primary-200 text-center">
              <h3 className="font-display text-xl font-semibold text-primary-900 mb-2">
                Need guidance for your specific situation?
              </h3>
              <p className="text-neutral-700 mb-6 max-w-xl mx-auto">
                Our support team is available {siteConfig.hours.display.toLowerCase()} to answer your questions and assist with immediate or upcoming arrangements.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Link href="/booking">
                  <Button size="lg">Get immediate assistance</Button>
                </Link>
                <Link href="/contact">
                  <Button variant="secondary" size="lg">Contact us</Button>
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
