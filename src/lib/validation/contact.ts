import { z } from 'zod';

export const contactFormSchema = z.object({
  name: z.string().min(1, 'Name is required').max(100),
  phone: z
    .string()
    .min(1, 'Phone number is required')
    .regex(/^[0-9]{10}$/, 'Please enter a valid 10-digit phone number'),
  email: z.string().email('Please enter a valid email').optional().or(z.literal('')),
  urgency: z.enum(['emergency', 'today', 'later'], {
    errorMap: () => ({ message: 'Please select how soon you need assistance' }),
  }),
  message: z.string().max(1000).optional().or(z.literal('')),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;
