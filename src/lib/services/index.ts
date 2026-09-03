/**
 * Service interfaces — Integration boundaries
 *
 * These define the contract for backend integrations.
 * Current implementations are mock/development-only.
 * When a real backend is connected, replace the implementations
 * without changing these interfaces.
 */

import type { BookingFormData, BookingRequest, ContactFormData } from '@/types';
import { generateBookingReference } from '@/lib/utils';

// ── Booking Service ──────────────────────────────────────────

export interface BookingServiceInterface {
  submitRequest(data: BookingFormData): Promise<BookingRequest>;
}

/**
 * Mock booking service — development only.
 * Validates and returns a mock response.
 * Does NOT reserve any real slots or services.
 */
export const bookingService: BookingServiceInterface = {
  async submitRequest(data: BookingFormData): Promise<BookingRequest> {
    // Simulate network delay
    await new Promise((resolve) => setTimeout(resolve, 1500));

    return {
      data,
      referenceNumber: generateBookingReference(),
      status: 'submitted',
      submittedAt: new Date().toISOString(),
    };
  },
};

// ── Contact Service ──────────────────────────────────────────

export interface ContactServiceInterface {
  submitInquiry(data: ContactFormData): Promise<{ success: boolean; message: string }>;
}

/**
 * Mock contact service — development only.
 * Accepts and validates the form data.
 * Does NOT send any real messages.
 */
export const contactService: ContactServiceInterface = {
  async submitInquiry(data: ContactFormData): Promise<{ success: boolean; message: string }> {
    // Simulate network delay
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // In development, log the data
    if (process.env.NODE_ENV === 'development') {
      console.log('[DEV] Contact form submission:', data);
    }

    return {
      success: true,
      message:
        'Your inquiry has been received. This is a development environment — no actual message has been sent.',
    };
  },
};

// ── Future Integration Interfaces ────────────────────────────
// These are not implemented yet. They define the contracts
// that future backend services should conform to.

export interface PaymentServiceInterface {
  createOrder(bookingId: string, amount: number): Promise<{ orderId: string }>;
  verifyPayment(paymentId: string, orderId: string, signature: string): Promise<boolean>;
}

export interface NotificationServiceInterface {
  sendSMS(phone: string, message: string): Promise<{ success: boolean }>;
  sendWhatsApp(phone: string, message: string): Promise<{ success: boolean }>;
  sendEmail(to: string, subject: string, body: string): Promise<{ success: boolean }>;
}

export interface AuthServiceInterface {
  signIn(credentials: { email: string; password: string }): Promise<{ token: string }>;
  signOut(): Promise<void>;
  getCurrentUser(): Promise<{ id: string; email: string; role: string } | null>;
}
