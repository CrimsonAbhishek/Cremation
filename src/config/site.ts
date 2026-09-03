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
  /** Replace with actual company name */
  companyName: 'Cremation Services',

  /** Replace with actual tagline */
  tagline: 'Dignified care when your family needs it most',

  /** Replace with actual description */
  description:
    'Complete cremation and funeral assistance with compassionate, professional support available around the clock.',

  /** Contact details — all placeholders until real info is provided */
  contact: {
    phone: '+91-XXXX-XXXXXX',
    phoneDisplay: '+91 XXXX XXXXXX',
    email: 'contact@example.com',
    whatsapp: '', // WhatsApp number — leave empty to hide WhatsApp CTA
    address: '[Address to be provided]',
  },

  /** Operating hours */
  hours: {
    display: 'Available 24/7',
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

  /** SEO — do not fabricate business details */
  seo: {
    siteUrl: 'https://example.com',
    locale: 'en_IN',
    type: 'website' as const,
  },
} as const;

export type SiteConfig = typeof siteConfig;
