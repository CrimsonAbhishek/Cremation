import type { Metadata } from 'next';
import { Container } from '@/components/layout/Container';
import { ContactForm } from '@/components/forms/ContactForm';
import { siteConfig } from '@/config/site';
import { formatPhoneLink } from '@/lib/utils';
import { Phone, Mail, Clock, MapPin } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Contact Us',
  description: `Contact ${siteConfig.companyName} for immediate assistance or general inquiries. Available around the clock.`,
};

export default function ContactPage() {
  return (
    <>
      <section className="py-12 md:py-16 bg-neutral-50" aria-labelledby="contact-heading">
        <Container>
          <div className="max-w-2xl">
            <h1 id="contact-heading" className="font-display text-3xl md:text-4xl font-semibold text-neutral-900">
              Contact us
            </h1>
            <p className="mt-4 text-lg text-neutral-700 leading-relaxed">
              We are available around the clock. If you require immediate assistance, please call us directly.
            </p>
          </div>
        </Container>
      </section>

      <section className="py-12 md:py-20 bg-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-5 space-y-8">
              <div className="bg-neutral-50 p-6 rounded-md border border-neutral-200">
                <h2 className="font-display text-xl font-semibold text-neutral-900 mb-6">
                  Direct Contact Information
                </h2>

                <div className="space-y-6">
                  {siteConfig.contact.phone && (
                    <div className="flex items-start gap-4">
                      <div className="p-2.5 bg-primary-100 rounded-sm text-primary-500 shrink-0">
                        <Phone className="w-5 h-5" aria-hidden="true" />
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-neutral-600 uppercase tracking-wide">Phone (24/7)</p>
                        <a
                          href={formatPhoneLink(siteConfig.contact.phone)}
                          className="text-base font-semibold text-primary-500 hover:text-primary-700 transition-colors"
                        >
                          {siteConfig.contact.phoneDisplay}
                        </a>
                      </div>
                    </div>
                  )}

                  {siteConfig.contact.email && (
                    <div className="flex items-start gap-4">
                      <div className="p-2.5 bg-primary-100 rounded-sm text-primary-500 shrink-0">
                        <Mail className="w-5 h-5" aria-hidden="true" />
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-neutral-600 uppercase tracking-wide">Email</p>
                        <a
                          href={`mailto:${siteConfig.contact.email}`}
                          className="text-base text-neutral-900 hover:text-primary-500 transition-colors"
                        >
                          {siteConfig.contact.email}
                        </a>
                      </div>
                    </div>
                  )}

                  <div className="flex items-start gap-4">
                    <div className="p-2.5 bg-primary-100 rounded-sm text-primary-500 shrink-0">
                      <Clock className="w-5 h-5" aria-hidden="true" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-neutral-600 uppercase tracking-wide">Hours</p>
                      <p className="text-base text-neutral-900">{siteConfig.hours.display}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-2.5 bg-primary-100 rounded-sm text-primary-500 shrink-0">
                      <MapPin className="w-5 h-5" aria-hidden="true" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-neutral-600 uppercase tracking-wide">Office Address</p>
                      <p className="text-base text-neutral-700">{siteConfig.contact.address}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-primary-900 text-white p-6 rounded-md">
                <h3 className="font-display text-lg font-semibold mb-2">Emergency Assistance</h3>
                <p className="text-sm text-primary-100 leading-relaxed mb-4">
                  If you need immediate coordination for human remains transportation or cremation, calling our 24/7 helpline is the fastest way to receive assistance.
                </p>
                {siteConfig.contact.phone && (
                  <a
                    href={formatPhoneLink(siteConfig.contact.phone)}
                    className="inline-flex items-center gap-2 font-semibold text-white bg-primary-500 hover:bg-primary-700 px-4 py-2.5 rounded-xs transition-colors"
                  >
                    <Phone className="w-4 h-4" />
                    Call {siteConfig.contact.phoneDisplay}
                  </a>
                )}
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="bg-neutral-50 p-6 md:p-8 rounded-md border border-neutral-200">
                <h2 className="font-display text-2xl font-semibold text-neutral-900 mb-2">
                  Send an Inquiry
                </h2>
                <p className="text-sm text-neutral-700 mb-6">
                  Fill out the form below and our team will get in touch with you promptly.
                </p>
                <ContactForm />
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
