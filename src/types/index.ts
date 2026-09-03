/**
 * Data model interfaces
 *
 * These types define the shape of all content and data structures
 * used across the application. When a real backend is connected,
 * API responses should conform to these interfaces.
 */

export interface Service {
  id: string;
  name: string;
  slug: string;
  description: string;
  shortDescription: string;
  icon: string; // Lucide icon name
  features?: string[];
  isAvailable: boolean;
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export interface ProcessStep {
  step: number;
  title: string;
  description: string;
  icon: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  authorName: string;
  authorLocation?: string;
  rating: number;
  isVerified: boolean;
  date?: string;
}

export interface TechnologySection {
  id: string;
  level: 'simple' | 'detailed' | 'technical' | 'safety';
  title: string;
  content: string;
  isPlaceholder: boolean;
}

export interface ContactFormData {
  name: string;
  phone: string;
  email?: string;
  urgency: 'emergency' | 'today' | 'later';
  message?: string;
}

export interface BookingFormData {
  // Step 1 — Contact & Urgency
  urgency: 'emergency' | 'today' | 'later';
  contactName: string;
  contactPhone: string;
  contactEmail?: string;
  contactRelation: string;

  // Step 2 — Service Selection
  services: string[];

  // Step 3 — Location & Timing
  locationOfDeceased: string;
  preferredLocation?: string;
  preferredDate?: string;
  preferredTime?: string;

  // Step 4 — Deceased Information
  deceasedName: string;
  deceasedAge?: number;
  specialRequirements?: string;

  // Step 5 — Additional notes
  additionalNotes?: string;
}

export interface BookingRequest {
  data: BookingFormData;
  referenceNumber: string;
  status: 'submitted' | 'received' | 'processing';
  submittedAt: string;
}

export interface ValuePrinciple {
  id: string;
  title: string;
  description: string;
  icon: string;
}
