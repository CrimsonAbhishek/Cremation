import type { ValuePrinciple } from '@/types';

/**
 * "How we work" — principles guiding our service to families.
 */

export const valuePrinciples: ValuePrinciple[] = [
  {
    id: 'value-availability',
    title: 'Available any hour',
    description:
      'We answer at 2 AM. Someone who knows what they’re doing picks up, understands your situation, and begins coordinating immediately.',
    icon: 'Clock',
  },
  {
    id: 'value-guidance',
    title: 'No guesswork',
    description:
      'We tell you what happens next, what it costs, and what you need to do — clearly, at every step.',
    icon: 'Compass',
  },
  {
    id: 'value-dignity',
    title: 'Respectful throughout',
    description:
      'Every person involved in your family’s arrangements is experienced, professional, and understands the weight of what they’re doing.',
    icon: 'Heart',
  },
  {
    id: 'value-transparency',
    title: 'No hidden costs',
    description:
      'We give you a clear picture of what services will cost before anything is confirmed. Nothing is added without your knowledge.',
    icon: 'Eye',
  },
];
