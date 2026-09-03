/**
 * Site Configuration
 *
 * Single source of truth for branding, contact information,
 * and feature flags. Real client details should be entered here
 * before launch; empty contact values intentionally hide CTAs.
 */

export const siteConfig = {
  companyName: 'Cremation Services',
  tagline: 'Funeral and cremation services, handled with care',
  description:
    'We take care of every arrangement — transportation, cremation, rituals, and post-funeral support — so your family can focus on being together.',

  // Do not publish placeholder phone numbers, emails, or addresses.
  contact: {
    phone: '',
    phoneDisplay: '',
    phoneDisplayWithHours: '',
    email: '',
    whatsapp: '',
    address: '',
  },

  hours: {
    display: 'Available any hour',
    isAlwaysAvailable: true,
  },

  social: {
    facebook: '',
    instagram: '',
    twitter: '',
    linkedin: '',
  },

  locations: [] as string[],

  features: {
    bookingEnabled: true,
    technologyPageEnabled: true,
    whatsappEnabled: false,
    pricingEnabled: false,
  },

  seo: {
    siteUrl: 'https://cremation-virid.vercel.app',
    locale: 'en_IN',
    type: 'website' as const,
  },
} as const;

export type SiteConfig = typeof siteConfig;
