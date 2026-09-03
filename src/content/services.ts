import type { Service } from '@/types';

export const services: Service[] = [
  {
    id: 'traditional-cremation',
    name: 'Traditional Cremation',
    slug: 'traditional-cremation',
    description:
      'Cremation following traditional Hindu rites, from the preparation of the body to the final rites at the cremation ground. Our team coordinates every step, including the pujari, samagri, and ritual observance.',
    shortDescription:
      'Cremation following traditional Hindu rites, with full coordination for pujari, samagri, and sacred observances.',
    icon: 'Flame',
    features: [
      'Full ritual coordination, start to finish',
      'Pujari arranged and confirmed',
      'A coordinator present throughout',
      'All samagri and materials included',
    ],
    isAvailable: true,
  },
  {
    id: 'electric-cremation',
    name: 'Electric Cremation',
    slug: 'electric-cremation',
    description:
      'Electric cremation takes place at a crematorium equipped with an electric furnace. The process is faster than traditional wood cremation and produces less smoke. Many families choose this option for environmental reasons or when the cremation ground is not close. Ritual support — pujari, prayers, antim sanskar — is available exactly as with traditional cremation. We handle the booking, slot coordination, and all logistics.',
    shortDescription:
      'Cremation at an electric crematorium — a cleaner process with the same ritual support and care as traditional cremation.',
    icon: 'Zap',
    features: [
      'Modern, well-maintained crematorium',
      'Full ritual support if required',
      'Lower environmental impact than traditional pyres',
      'Booking and slot coordination handled',
    ],
    isAvailable: true,
  },
  {
    id: 'funeral-arrangements',
    name: 'Funeral Arrangements',
    slug: 'funeral-arrangements',
    description:
      'Full funeral arrangements, from the prayer gathering to the cremation. We coordinate the venue, decorations, antim sanskar materials, pandit, and family needs — so nothing falls on you to organise.',
    shortDescription:
      'Full funeral arrangements including venue, decorations, antim sanskar materials, and pandit coordination.',
    icon: 'Heart',
    features: [
      'Prayer venue arranged',
      'Antim sanskar samagri sourced',
      'Pandit arranged for rituals',
      'Guidance on family logistics',
    ],
    isAvailable: true,
  },
  {
    id: 'hearse-service',
    name: 'Hearse and Transportation',
    slug: 'hearse-service',
    description:
      'Respectful transportation of the deceased from home, hospital, or mortuary to the cremation ground or prayer venue. Hearse and ambulance both available, responding within the hour.',
    shortDescription:
      'Respectful transportation from home, hospital, or mortuary to the cremation ground or venue. Available at any hour.',
    icon: 'Truck',
    features: [
      'Hearse available immediately',
      'Ambulance for hospital transfers',
      'Response within the hour',
      'Available at any hour',
    ],
    isAvailable: true,
  },
  {
    id: 'freezer-box',
    name: 'Body Preservation (Freezer Box)',
    slug: 'freezer-box',
    description:
      'When family is travelling from another city or additional time is needed before the cremation, we provide a freezer box at home or at a facility. Available immediately, with professional and respectful handling.',
    shortDescription:
      'Temporary preservation at home or at a facility when additional time is needed for family to arrive.',
    icon: 'Snowflake',
    features: [
      'Available within hours',
      'Respectful, professional handling',
      'For as long as your family needs',
      'At home or at a facility',
    ],
    isAvailable: true,
  },
  {
    id: 'post-funeral',
    name: 'Post-Funeral Services',
    slug: 'post-funeral',
    description:
      'Support for the rituals and ceremonies that follow cremation. We assist with asthi visarjan (immersion of the ashes at a sacred river), chautha, terahvi, shraddh, and prayer meetings — coordinating pandits and logistics so your family can observe each rite fully.',
    shortDescription:
      'Support for post-cremation rituals including asthi visarjan, chautha, terahvi, and prayer meetings.',
    icon: 'Leaf',
    features: [
      'Asthi visarjan at Haridwar, Prayagraj, or Varanasi',
      'Chautha and terahvi coordination',
      'Pandit for shraddh and shanti path',
      'A coordinator for each ceremony',
    ],
    isAvailable: true,
  },
];
