import Link from 'next/link';
import { Container } from './Container';
import { siteConfig } from '@/config/site';
import { Phone, Mail } from 'lucide-react';
import { formatPhoneLink } from '@/lib/utils';

const footerLinks = {
  services: [
    { href: '/services#traditional-cremation', label: 'Traditional Cremation' },
    { href: '/services#electric-cremation', label: 'Electric Cremation' },
    { href: '/services#funeral-arrangements', label: 'Funeral Arrangements' },
    { href: '/services#hearse-service', label: 'Transportation' },
    { href: '/services#freezer-box', label: 'Freezer Box' },
    { href: '/services#post-funeral', label: 'Post-Funeral Services' },
  ],
  company: [
    { href: '/about', label: 'About Us' },
    { href: '/how-it-works', label: 'How It Works' },
    { href: '/technology', label: 'Our Approach' },
    { href: '/faq', label: 'FAQ' },
    { href: '/contact', label: 'Contact' },
  ],
  legal: [
    { href: '/privacy', label: 'Privacy Policy' },
    { href: '/terms', label: 'Terms of Service' },
  ],
};

export function Footer() {
  return (
    <footer className="bg-neutral-100 border-t border-neutral-200" role="contentinfo">
      <Container>
        <div className="py-12 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Company info */}
            <div>
              <Link
                href="/"
                className="font-display text-lg font-semibold text-primary-900 hover:text-primary-700"
              >
                {siteConfig.companyName}
              </Link>
              <p className="mt-3 text-sm text-neutral-700 leading-relaxed">
                {siteConfig.description}
              </p>
              <div className="mt-4 space-y-2">
                {siteConfig.contact.phone && (
                  <a
                    href={formatPhoneLink(siteConfig.contact.phone)}
                    className="flex items-center gap-2 text-sm text-primary-500 hover:text-primary-700 transition-colors"
                  >
                    <Phone className="h-4 w-4" aria-hidden="true" />
                    {siteConfig.contact.phoneDisplay}
                  </a>
                )}
                {siteConfig.contact.email && (
                  <a
                    href={`mailto:${siteConfig.contact.email}`}
                    className="flex items-center gap-2 text-sm text-primary-500 hover:text-primary-700 transition-colors"
                  >
                    <Mail className="h-4 w-4" aria-hidden="true" />
                    {siteConfig.contact.email}
                  </a>
                )}
              </div>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-sm font-semibold font-body text-neutral-900 mb-4">
                Services
              </h3>
              <ul className="space-y-3">
                {footerLinks.services.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-neutral-700 hover:text-primary-500 transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="text-sm font-semibold font-body text-neutral-900 mb-4">
                Company
              </h3>
              <ul className="space-y-3">
                {footerLinks.company.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-neutral-700 hover:text-primary-500 transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact & Legal */}
            <div>
              <h3 className="text-sm font-semibold font-body text-neutral-900 mb-4">
                Information
              </h3>
              <ul className="space-y-3">
                {footerLinks.legal.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-neutral-700 hover:text-primary-500 transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-sm font-medium text-primary-700">
                {siteConfig.hours.display}
              </p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-neutral-200 py-6 text-center">
          <p className="text-xs text-neutral-600">
            &copy; {new Date().getFullYear()} {siteConfig.companyName}. All rights
            reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}
