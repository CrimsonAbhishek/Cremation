import type { Service } from '@/types';

export const services: Service[] = [
  {
    id: 'traditional-cremation',
    name: 'Traditional Cremation',
    slug: 'traditional-cremation',
    description:
      'Respectful cremation following established traditions and sacred rituals. Our experienced team coordinates the entire process with dignity, ensuring every rite is observed with care and reverence.',
    shortDescription:
      'Traditional cremation with full ritual observance and compassionate coordination.',
    icon: 'Flame',
    features: [
      'Complete ritual coordination',
      'Experienced pujari arrangements',
      'Family guidance throughout',
      'All necessary materials provided',
    ],
    isAvailable: true,
  },
  {
    id: 'electric-cremation',
    name: 'Electric Cremation',
    slug: 'electric-cremation',
    description:
      'Modern electric cremation conducted with the same respect and attention to tradition. A cleaner process that many families prefer, with full support for ritual observances.',
    shortDescription:
      'Modern electric cremation with full ritual support and professional coordination.',
    icon: 'Zap',
    features: [
      'Clean, modern facilities',
      'Ritual support available',
      'Environmentally considerate',
      'Professional coordination',
    ],
    isAvailable: true,
  },
  {
    id: 'funeral-arrangements',
    name: 'Funeral Arrangements',
    slug: 'funeral-arrangements',
    description:
      'Comprehensive funeral arrangement services including venue coordination, material procurement, and ritual planning. We handle every detail so your family can focus on what matters.',
    shortDescription:
      'End-to-end funeral arrangement including venue, materials, and ritual planning.',
    icon: 'Heart',
    features: [
      'Venue coordination',
      'Material procurement',
      'Ritual planning',
      'Guest coordination support',
    ],
    isAvailable: true,
  },
  {
    id: 'hearse-service',
    name: 'Hearse and Transportation',
    slug: 'hearse-service',
    description:
      'Reliable, respectful transportation services including hearse, ambulance, and family vehicle arrangements. Available around the clock with prompt response times.',
    shortDescription:
      'Reliable transportation including hearse and ambulance services, available 24/7.',
    icon: 'Truck',
    features: [
      'Hearse service',
      'Ambulance available',
      'Prompt response',
      'Available 24/7',
    ],
    isAvailable: true,
  },
  {
    id: 'freezer-box',
    name: 'Freezer Box Service',
    slug: 'freezer-box',
    description:
      'Temporary preservation with freezer box service when additional time is needed for family to arrive or arrangements to be completed. Professional handling with dignity.',
    shortDescription:
      'Temporary preservation service for when additional time is needed for arrangements.',
    icon: 'Snowflake',
    features: [
      'Immediate availability',
      'Professional handling',
      'Flexible duration',
      'Home or facility placement',
    ],
    isAvailable: true,
  },
  {
    id: 'post-funeral',
    name: 'Post-Funeral Services',
    slug: 'post-funeral',
    description:
      'Support for post-funeral rituals and ceremonies including asthi visarjan, prayer arrangements, and other traditional observances. Guidance through every step of the process.',
    shortDescription:
      'Support for post-funeral rituals including asthi visarjan and prayer arrangements.',
    icon: 'Leaf',
    features: [
      'Asthi visarjan coordination',
      'Prayer arrangements',
      'Traditional observances',
      'Family guidance',
    ],
    isAvailable: true,
  },
];
