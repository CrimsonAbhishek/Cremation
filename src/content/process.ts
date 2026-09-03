import type { ProcessStep } from '@/types';

export const processSteps: ProcessStep[] = [
  {
    step: 1,
    title: 'Contact Us',
    description:
      'Reach out by phone or through our website. Our team is available around the clock and will respond promptly to understand your needs.',
    icon: 'Phone',
  },
  {
    step: 2,
    title: 'We Coordinate Arrangements',
    description:
      'A dedicated team member is assigned to your family. We discuss your requirements, traditions, and preferences in detail.',
    icon: 'Users',
  },
  {
    step: 3,
    title: 'Select Services',
    description:
      'Choose the services your family needs — from transportation to cremation to post-funeral support. We provide clear information to guide your decisions.',
    icon: 'ClipboardList',
  },
  {
    step: 4,
    title: 'We Handle the Process',
    description:
      'Our experienced team manages all logistics with professionalism and care. You are kept informed at every step.',
    icon: 'ShieldCheck',
  },
  {
    step: 5,
    title: 'Confirmation and Support',
    description:
      'You receive confirmation of completed services and continued support for any post-funeral requirements your family may have.',
    icon: 'CheckCircle',
  },
];
