import { clsx, type ClassValue } from 'clsx';

/**
 * Merge class names, filtering falsy values.
 * Lightweight alternative to clsx — no external dep needed.
 */
export function cn(...inputs: ClassValue[]): string {
  return clsx(inputs);
}

/**
 * Generate a booking reference number (client-side, for display only).
 * The real reference should come from the backend.
 */
export function generateBookingReference(): string {
  const timestamp = Date.now().toString(36).toUpperCase();
  const random = Math.random().toString(36).substring(2, 6).toUpperCase();
  return `REQ-${timestamp}-${random}`;
}

/**
 * Format a phone number string for tel: links
 */
export function formatPhoneLink(phone: string): string {
  return `tel:${phone.replace(/[\s-()]/g, '')}`;
}

/**
 * Format a WhatsApp link
 */
export function formatWhatsAppLink(phone: string, message?: string): string {
  const cleaned = phone.replace(/[\s-()]/g, '');
  const base = `https://wa.me/${cleaned}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}
