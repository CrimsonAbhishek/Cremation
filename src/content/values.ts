import type { ValuePrinciple } from '@/types';

/**
 * "What families value" — not testimonials.
 *
 * These are principles that represent the service's values,
 * not attributed quotes from specific individuals.
 * When verified testimonials are available, use the
 * TestimonialCard component with real, attributed content.
 */

export const valuePrinciples: ValuePrinciple[] = [
  {
    id: 'value-availability',
    title: 'Always available',
    description:
      'Families need support at any hour. A reliable service is one that answers the phone at 2 AM with the same compassion as at 2 PM.',
    icon: 'Clock',
  },
  {
    id: 'value-guidance',
    title: 'Clear guidance',
    description:
      'During a difficult time, families need someone who explains each step clearly, answers every question, and removes uncertainty from the process.',
    icon: 'Compass',
  },
  {
    id: 'value-dignity',
    title: 'Dignity in every detail',
    description:
      'Every aspect of the process — from transportation to the final rites — should be handled with the same care and respect a family would give.',
    icon: 'Heart',
  },
  {
    id: 'value-transparency',
    title: 'Honest and transparent',
    description:
      'No hidden costs, no unexpected changes, no pressure. Families deserve straightforward communication about services, process, and pricing.',
    icon: 'Eye',
  },
];
