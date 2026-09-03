import { z } from 'zod';

export const bookingStep1Schema = z.object({
  urgency: z.enum(['emergency', 'today', 'later'], {
    errorMap: () => ({ message: 'Please select how soon you need help' }),
  }),
  contactName: z.string().min(1, 'Your name is required').max(100),
  contactPhone: z
    .string()
    .min(1, 'This field is required.')
    .regex(/^[0-9]{10}$/, 'Please enter a valid 10-digit mobile number.'),
  contactEmail: z.string().email('Please enter a valid email address').optional().or(z.literal('')),
  contactRelation: z.string().min(1, 'Please specify your relation to the deceased'),
});

export const bookingStep2Schema = z.object({
  services: z.array(z.string()).min(1, 'Please select at least one service'),
});

export const bookingStep3Schema = z.object({
  locationOfDeceased: z.string().min(1, 'This field is required.'),
  preferredLocation: z.string().optional().or(z.literal('')),
  preferredDate: z.string().optional().or(z.literal('')),
  preferredTime: z.string().optional().or(z.literal('')),
});

export const bookingStep4Schema = z.object({
  deceasedName: z.string().min(1, 'This field is required.'),
  deceasedAge: z.coerce.number().positive().optional().or(z.literal(0)).transform(v => v || undefined),
  specialRequirements: z.string().max(500).optional().or(z.literal('')),
});

export const fullBookingSchema = bookingStep1Schema
  .merge(bookingStep2Schema)
  .merge(bookingStep3Schema)
  .merge(bookingStep4Schema)
  .extend({
    additionalNotes: z.string().max(1000).optional().or(z.literal('')),
  });

export type BookingStep1Values = z.infer<typeof bookingStep1Schema>;
export type BookingStep2Values = z.infer<typeof bookingStep2Schema>;
export type BookingStep3Values = z.infer<typeof bookingStep3Schema>;
export type BookingStep4Values = z.infer<typeof bookingStep4Schema>;
export type FullBookingValues = z.infer<typeof fullBookingSchema>;
