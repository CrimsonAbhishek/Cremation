import type { TechnologySection } from '@/types';

/**
 * Technology content
 *
 * This content uses the progressive disclosure pattern:
 * Simple → Detailed → Technical → Safety
 *
 * IMPORTANT: Sections marked isPlaceholder: true contain
 * placeholder text that MUST be replaced with verified
 * information from the client. Do not publish placeholder
 * content as if it were factual.
 */

export const technologySections: TechnologySection[] = [
  {
    id: 'tech-overview',
    level: 'simple',
    title: 'What our approach achieves',
    content:
      'Our services incorporate thoughtful processes designed to provide families with more time, options, and peace of mind during a difficult period. We combine established practices with careful, professional methods to ensure dignity at every stage.',
    isPlaceholder: false,
  },
  {
    id: 'tech-process',
    level: 'detailed',
    title: 'How the process works',
    content:
      '[This section requires detailed information from the service provider about their specific processes, methods, and approach. Content should explain the process in clear, accessible language that families can understand without technical expertise.]',
    isPlaceholder: true,
  },
  {
    id: 'tech-technical',
    level: 'technical',
    title: 'Technical details',
    content:
      '[This section requires verified technical information from the service provider. Content should include specific methodologies, equipment details, and any relevant technical specifications. Do not publish unverified technical claims.]',
    isPlaceholder: true,
  },
  {
    id: 'tech-safety',
    level: 'safety',
    title: 'Safety and standards',
    content:
      '[This section requires verified information about safety protocols, regulatory compliance, certifications, and industry standards. Content must be reviewed for accuracy before publication. Do not claim certifications or approvals that have not been verified.]',
    isPlaceholder: true,
  },
];

export const technologyIntro = {
  heading: 'Our approach',
  subheading:
    'Professional methods that give families the time and options they need.',
  description:
    'We are committed to providing the highest standard of care through well-established and carefully managed processes. Our approach prioritises dignity, reliability, and transparency at every stage.',
};
