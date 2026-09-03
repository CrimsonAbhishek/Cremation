import type { ProcessStep } from '@/types';

export const processSteps: ProcessStep[] = [
  {
    step: 1,
    title: 'You contact us',
    description:
      'Call or fill in the form. We respond immediately — any hour, day or night.',
    icon: 'Phone',
  },
  {
    step: 2,
    title: 'We call you back',
    description:
      'A coordinator calls you within minutes to understand exactly what your family needs.',
    icon: 'Users',
  },
  {
    step: 3,
    title: "We confirm what's needed",
    description:
      'Your coordinator confirms the services, timing, and location — and gives you a clear picture of what will happen and what it will cost.',
    icon: 'ClipboardList',
  },
  {
    step: 4,
    title: 'We handle everything',
    description:
      'Transportation, crematorium booking, ritual coordination, materials — all handled by our team. You are told what’s happening at every step.',
    icon: 'ShieldCheck',
  },
  {
    step: 5,
    title: 'Continued support',
    description:
      'After cremation, we remain available for asthi visarjan, prayer arrangements, and any other post-funeral needs.',
    icon: 'CheckCircle',
  },
];
