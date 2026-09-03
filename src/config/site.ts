/**
 * Site Configuration
 *
 * Single source of truth for all branding, contact information,
 * and feature flags. Change the company identity here and it
 * propagates across the entire application.
 *
 * When real company details are available, update this file only.
 */

export const siteConfig = {
  /** Company name */
  companyName: 'Cremation Services',

  /** Tagline */
  tagline: 'Funeral and cremation services, handled with care',

  /** Description */
  description:
    'We take care of every arrangement — transportation, cremation, rituals, and post-funeral support — so your family can focus on being together.',

  /** Contact details — placeholders until real info is provided */
  contact: {
    phone: '+91-XXXX-XXXXXX',
    phoneDisplay: '+91 XXXX XXXXXX',
    phoneDisplayWithHours: '+91 XXXX XXXXXX — 24/7',
    email: 'contact@example.com',
    whatsapp: '', // WhatsApp number — leave empty to hide WhatsApp CTA
    address: '[Address to be provided]',
  },

  /** Operating hours */
  hours: {
    display: 'Available any hour',
    isAlwaysAvailable: true,
  },

  /** Social media links — leave empty to hide */
  social: {
    facebook: '',
    instagram: '',
    twitter: '',
    linkedin: '',
  },

  /** Locations served — leave empty array to hide location references */
  locations: [] as string[],

  /** Feature flags */
  features: {
    /** Enable/disable the booking flow */
    bookingEnabled: true,
    /** Enable/disable the technology page */
    technologyPageEnabled: true,
    /** Show WhatsApp CTA buttons */
    whatsappEnabled: false,
    /** Show pricing information (requires real data) */
    pricingEnabled: false,
  },

  /** SEO */
  seo: {
    siteUrl: 'https://cremation-virid.vercel.app',
    locale: 'en_IN',
    type: 'website' as const,
  },
} as const;

export type SiteConfig = typeof siteConfig;
