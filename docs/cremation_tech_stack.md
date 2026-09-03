# Cremation Services Booking Platform — Technology Stack

## Executive Summary

This document outlines the complete technology stack for building a production-ready cremation services booking platform. The stack prioritizes **reliability, accessibility, performance, and maintainability** over bleeding-edge technologies.

**Project Scale:** Mid-sized SaaS platform serving funeral homes, families, and coordinating teams across multiple cities.

**Core Requirements:**
- Multi-step booking flow with form validation
- Real-time availability management (crematorium slots, schedules)
- Payment processing (Razorpay, Stripe)
- SMS/WhatsApp notifications
- 24/7 operational dashboard
- Mobile-responsive design
- WCAG 2.1 AA accessibility compliance
- 99.5% uptime commitment

---

## 1. Frontend Architecture

### 1.1 Core Framework

**Selected: Next.js 14+ with React 18**

```
Why Next.js:
✓ Built-in SSR for better SEO (critical for local cremation searches)
✓ API routes eliminate need for separate backend (initially)
✓ Static generation for informational pages (services, FAQ, blog)
✓ Incremental Static Regeneration (ISR) for pricing, locations
✓ Built-in image optimization (WebP, lazy loading, AVIF)
✓ Automatic code splitting and performance optimization
✓ Integrated middleware for auth, logging, rate limiting
✓ Vercel deployment with automatic scaling
✓ TypeScript support out of the box
✓ Proven in production for financial/medical services

Alternatives considered:
- React SPA + Express backend: More flexible but requires DevOps overhead
- Vue 3 + Nuxt: Great, but smaller ecosystem for service integrations
- Remix: Excellent but smaller community for this use case
```

**Version:** Next.js 14.x (app router, not pages router)

---

### 1.2 State Management

**Selected: React Context API + TanStack Query (React Query)**

```
Why this combination:
✓ Context: Global auth state, user preferences, UI theme
✓ React Query: Server state, caching, synchronization, background updates
✓ Avoids Redux boilerplate for a mid-sized app
✓ Built-in refetching, error handling, loading states
✓ Perfect for booking flows (complex async operations)
✓ Excellent DevTools for debugging
✓ Minimal bundle impact (~40KB gzipped)

Pattern:
├─ Context: Authentication, global theme
└─ React Query: Booking data, availability, user profile, payments
```

**Implementation:**

```typescript
// Auth Context
export const AuthContext = createContext<AuthContextType | null>(null);

// API Client with React Query
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5, // 5 minutes
      gcTime: 1000 * 60 * 10,   // 10 minutes (formerly cacheTime)
      retry: 1,
      retryDelay: attemptIndex => Math.min(1000 * 2 ** attemptIndex, 30000),
    },
  },
});

// Custom hook for bookings
export const useBooking = () => {
  return useQuery({
    queryKey: ['bookings', userId],
    queryFn: async () => fetchBookings(userId),
    staleTime: 1000 * 60 * 2,
  });
};
```

---

### 1.3 Styling Architecture

**Selected: Tailwind CSS + CSS Modules + CSS-in-JS (Emotion)**

```
Why this combination:
✓ Tailwind: Utility-first, rapid development, consistent design tokens
✓ CSS Modules: Component scoping, prevents naming conflicts
✓ Emotion: Dynamic styles (theme switching, dark mode, responsive)
✓ Fast development, small bundle, easy to maintain

Configuration:
├─ Tailwind config: Design tokens (colors, spacing, shadows from design system)
├─ CSS Modules: Form inputs, modal dialogs, complex components
└─ Emotion: Dynamic theming, conditional styling
```

**Configuration:**

```javascript
// tailwind.config.js
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#e8f2f4',
          100: '#d0e5eb',
          300: '#6ba8b3',
          500: '#3d7a85',
          700: '#2d5a63',
          900: '#1a3a3f',
        },
        secondary: {
          200: '#f0e8e0',
          500: '#d9b8a0',
          700: '#c7a48f',
        },
      },
      fontFamily: {
        display: ['Georgia', 'serif'],
        body: ['Inter', 'sans-serif'],
        mono: ['IBM Plex Mono', 'monospace'],
      },
      spacing: {
        xs: '4px',
        sm: '8px',
        md: '16px',
        lg: '24px',
        xl: '32px',
        '2xl': '48px',
        '3xl': '64px',
      },
    },
  },
  plugins: [],
};
```

---

### 1.4 UI Component Library

**Selected: Radix UI (Headless) + Shadcn/ui (Pre-built components)**

```
Why:
✓ Headless: No forced styling, full control
✓ Accessible by default (WCAG 2.1 AA)
✓ Keyboard navigation, focus management, ARIA
✓ Well-documented, stable API
✓ Works perfectly with Tailwind
✓ Used by enterprise applications (Vercel, Stripe, Notion)
✓ Radix + Tailwind = Fast component iteration

Components to implement:
├─ Dialog / Modal (Radix Dialog)
├─ Select (Radix Select)
├─ Popover (Radix Popover)
├─ Tabs (Radix Tabs)
├─ Accordion (Radix Accordion)
├─ Toggle (Radix Toggle)
└─ Toast notifications (Sonner library)
```

**Installation:**

```bash
# Radix UI primitives
npm install @radix-ui/react-dialog @radix-ui/react-select @radix-ui/react-popover

# Shadcn/ui (copy components into project, not npm)
npx shadcn-ui@latest init
npx shadcn-ui@latest add button input form dialog select
```

---

### 1.5 Form Handling & Validation

**Selected: React Hook Form + Zod**

```
Why:
✓ React Hook Form: Minimal re-renders, excellent performance
✓ Zod: Type-safe schema validation, works with TypeScript
✓ Small bundle (<10KB combined)
✓ Perfect for complex multi-step forms
✓ Built-in error handling, field-level validation
✓ Integrates seamlessly with Radix UI components

Pattern:
const { control, handleSubmit, formState: { errors } } = useForm({
  resolver: zodResolver(bookingSchema),
  mode: 'onBlur', // Validate on blur, not on every keystroke
});
```

**Example Schema:**

```typescript
import { z } from 'zod';

export const bookingSchema = z.object({
  urgency: z.enum(['emergency', 'today', 'later'], {
    errorMap: () => ({ message: 'Please select urgency level' }),
  }),
  phone: z.string()
    .regex(/^[0-9]{10}$/, 'Please enter a valid 10-digit phone number'),
  serviceType: z.array(z.string()).min(1, 'Select at least one service'),
  deceasedName: z.string().min(1, 'Name is required'),
  location: z.string().min(1, 'Location is required'),
  preferredDate: z.date().min(new Date(), 'Cannot book in the past'),
  additionalNotes: z.string().optional(),
});
```

---

### 1.6 HTTP Client & API Integration

**Selected: Axios + TanStack Query**

```typescript
// API client configuration
import axios from 'axios';

export const apiClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor for auth token
apiClient.interceptors.request.use((config) => {
  const token = localStorage.getItem('authToken');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Response interceptor for error handling
apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      // Handle token refresh or redirect to login
      redirectToLogin();
    }
    return Promise.reject(error);
  }
);

// API functions
export const bookingAPI = {
  createBooking: (data: BookingData) =>
    apiClient.post('/bookings', data),
  
  getBooking: (id: string) =>
    apiClient.get(`/bookings/${id}`),
  
  updateBooking: (id: string, data: Partial<BookingData>) =>
    apiClient.patch(`/bookings/${id}`, data),
  
  getAvailability: (date: string, location: string) =>
    apiClient.get('/availability', { params: { date, location } }),
};

// Use with React Query
export const useCreateBooking = () => {
  return useMutation({
    mutationFn: (data: BookingData) => bookingAPI.createBooking(data),
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ['bookings'] });
      // Show success toast
    },
    onError: (error) => {
      // Show error toast
    },
  });
};
```

---

### 1.7 Authentication

**Selected: NextAuth.js v5 (Auth.js)**

```
Why:
✓ Built for Next.js, works seamlessly
✓ Multiple providers: Email/password, Google, SMS (Twilio)
✓ JWT tokens + session-based auth
✓ Automatic CSRF protection
✓ Secure by default
✓ Integrates with database seamlessly
✓ Type-safe with TypeScript

Configuration:
// auth.ts
import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { db } from "@/lib/db";
import bcrypt from "bcryptjs";

export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [
    Credentials({
      async authorize(credentials) {
        const user = await db.user.findUnique({
          where: { email: credentials.email as string },
        });

        if (!user) return null;

        const passwordMatch = await bcrypt.compare(
          credentials.password as string,
          user.password
        );

        return passwordMatch ? user : null;
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.role = user.role;
      }
      return token;
    },
    async session({ session, token }) {
      session.user.id = token.id;
      session.user.role = token.role;
      return session;
    },
  },
  pages: {
    signIn: '/auth/signin',
    error: '/auth/error',
  },
});
```

---

### 1.8 Testing (Frontend)

**Selected: Vitest + React Testing Library + Playwright**

```
Unit tests (Vitest + React Testing Library):
✓ Component logic, hooks, utilities
✓ Fast, parallel execution
✓ ESM-native

E2E tests (Playwright):
✓ Full booking flow
✓ Payment processing
✓ Cross-browser testing

Configuration:
// vitest.config.ts
import { getViteConfig } from 'astro/config';

export default getViteConfig({
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./vitest.setup.ts'],
    coverage: {
      reporter: ['text', 'json', 'html'],
      threshold: {
        lines: 80,
        functions: 80,
        branches: 75,
      },
    },
  },
});
```

**Test Example:**

```typescript
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BookingForm } from '@/components/BookingForm';

describe('BookingForm', () => {
  it('should submit form with valid data', async () => {
    const user = userEvent.setup();
    const onSubmit = vi.fn();

    render(<BookingForm onSubmit={onSubmit} />);

    await user.type(screen.getByLabelText(/phone number/i), '9876543210');
    await user.click(screen.getByRole('button', { name: /submit/i }));

    expect(onSubmit).toHaveBeenCalledWith(
      expect.objectContaining({ phone: '9876543210' })
    );
  });

  it('should show error for invalid phone', async () => {
    const user = userEvent.setup();

    render(<BookingForm onSubmit={vi.fn()} />);

    await user.type(screen.getByLabelText(/phone number/i), '12345');
    await user.click(screen.getByRole('button', { name: /submit/i }));

    expect(screen.getByText(/valid 10-digit/i)).toBeInTheDocument();
  });
});
```

---

## 2. Backend Architecture

### 2.1 Backend Framework

**Selected: Node.js + Express.js OR Next.js API Routes (Initially) → Migrate to Express later**

```
Two-phase approach:

Phase 1 (MVP, 0-3 months):
├─ Use Next.js API routes for rapid development
├─ Store everything in PostgreSQL
├─ Deploy on Vercel (automatic scaling)
└─ Suitable for: < 1000 bookings/day

Phase 2 (Scale, 3-12 months):
├─ Migrate to standalone Express.js backend
├─ Better for high-throughput, 24/7 operations
├─ Independent scaling from frontend
├─ Dedicated DevOps, monitoring, logging
└─ Suitable for: > 10000 bookings/day
```

**Phase 1: Next.js API Routes**

```typescript
// app/api/bookings/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/db';
import { auth } from '@/auth';
import { bookingSchema } from '@/lib/validation';

export async function POST(req: NextRequest) {
  try {
    const session = await auth();
    if (!session?.user?.id) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    const body = await req.json();
    const validatedData = bookingSchema.parse(body);

    const booking = await db.booking.create({
      data: {
        ...validatedData,
        userId: session.user.id,
        status: 'pending',
        createdAt: new Date(),
      },
    });

    // Trigger background job: SMS notification
    await queueJob('send-booking-confirmation', {
      bookingId: booking.id,
      phone: booking.phone,
    });

    return NextResponse.json(booking, { status: 201 });
  } catch (error) {
    console.error('Booking creation error:', error);
    return NextResponse.json(
      { error: 'Failed to create booking' },
      { status: 500 }
    );
  }
}

export async function GET(req: NextRequest) {
  const session = await auth();
  if (!session?.user?.id) {
    return NextResponse.json(
      { error: 'Unauthorized' },
      { status: 401 }
    );
  }

  const bookings = await db.booking.findMany({
    where: { userId: session.user.id },
    orderBy: { createdAt: 'desc' },
  });

  return NextResponse.json(bookings);
}
```

**Phase 2: Express.js Standalone**

```typescript
// src/routes/bookings.ts
import express from 'express';
import { authMiddleware } from '../middleware/auth';
import { validateRequest } from '../middleware/validation';
import { BookingController } from '../controllers/BookingController';

const router = express.Router();

router.post(
  '/',
  authMiddleware,
  validateRequest(bookingSchema),
  BookingController.create
);

router.get('/', authMiddleware, BookingController.list);
router.get('/:id', authMiddleware, BookingController.getById);
router.patch('/:id', authMiddleware, BookingController.update);
router.delete('/:id', authMiddleware, BookingController.delete);

export default router;
```

---

### 2.2 Database

**Selected: PostgreSQL 15+**

```
Why:
✓ ACID compliance for financial transactions
✓ Excellent for complex queries (availability, reporting)
✓ JSON support for flexible data structures
✓ Full-text search (for blog, FAQs)
✓ Proven in production for high-volume applications
✓ Great ecosystem (Prisma, Knex, TypeORM)
✓ Easy backups, replication, disaster recovery

Schema Overview (see Section 2.3)
```

**Hosting Options:**

```
Option 1: Managed PostgreSQL (Recommended)
├─ Supabase (PostgreSQL + Auth + Real-time)
├─ AWS RDS
├─ Render
├─ DigitalOcean Managed Database
└─ Pros: Automatic backups, scaling, monitoring

Option 2: Self-hosted
├─ Docker container on VPS
└─ Pros: Cost savings, full control
└─ Cons: Manual backups, monitoring, scaling
```

---

### 2.3 Database Schema

**Core Tables:**

```sql
-- Users
CREATE TABLE users (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email VARCHAR(255) UNIQUE NOT NULL,
  password_hash VARCHAR(255),
  phone VARCHAR(20) UNIQUE NOT NULL,
  full_name VARCHAR(255),
  role ENUM('customer', 'operator', 'admin') DEFAULT 'customer',
  is_verified BOOLEAN DEFAULT false,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  INDEX idx_email (email),
  INDEX idx_phone (phone)
);

-- Bookings (Main entity)
CREATE TABLE bookings (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  booking_reference VARCHAR(20) UNIQUE NOT NULL, -- CR-2024-00142
  status ENUM('pending', 'confirmed', 'completed', 'cancelled') DEFAULT 'pending',
  urgency ENUM('emergency', 'today', 'later') NOT NULL,
  
  -- Deceased Information
  deceased_name VARCHAR(255) NOT NULL,
  deceased_age INTEGER,
  deceased_relation VARCHAR(100),
  
  -- Location & Timing
  location_deceased VARCHAR(500) NOT NULL, -- Current location (home/hospital)
  cremation_location_id UUID REFERENCES cremation_locations(id),
  preferred_date DATE,
  preferred_time TIME,
  
  -- Services Selected
  services JSONB NOT NULL, -- ["cremation", "hearse", "freezer_box"]
  
  -- Pricing
  estimated_cost DECIMAL(10, 2),
  final_cost DECIMAL(10, 2),
  currency VARCHAR(3) DEFAULT 'INR',
  
  -- Payment
  payment_status ENUM('pending', 'completed', 'failed', 'refunded') DEFAULT 'pending',
  payment_method VARCHAR(50), -- razorpay, stripe, upi, cod
  payment_id VARCHAR(100),
  
  -- Coordinator Assignment
  assigned_coordinator_id UUID REFERENCES users(id),
  
  -- Additional
  notes TEXT,
  attachments JSONB, -- URLs to uploaded documents
  
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  completed_at TIMESTAMP,
  
  INDEX idx_user_id (user_id),
  INDEX idx_status (status),
  INDEX idx_preferred_date (preferred_date)
);

-- Cremation Locations (Service centers)
CREATE TABLE cremation_locations (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name VARCHAR(255) NOT NULL,
  city VARCHAR(100) NOT NULL,
  address TEXT NOT NULL,
  phone VARCHAR(20),
  latitude DECIMAL(10, 8),
  longitude DECIMAL(11, 8),
  is_active BOOLEAN DEFAULT true,
  
  -- Capacity
  max_daily_slots INTEGER DEFAULT 10,
  operating_hours_start TIME DEFAULT '06:00',
  operating_hours_end TIME DEFAULT '20:00',
  
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  
  INDEX idx_city (city),
  INDEX idx_active (is_active)
);

-- Availability / Slots
CREATE TABLE availability_slots (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  location_id UUID REFERENCES cremation_locations(id) ON DELETE CASCADE,
  slot_date DATE NOT NULL,
  slot_time TIME NOT NULL,
  is_available BOOLEAN DEFAULT true,
  
  -- Booking Link
  booking_id UUID REFERENCES bookings(id) ON DELETE SET NULL,
  
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  
  INDEX idx_location_date (location_id, slot_date),
  UNIQUE (location_id, slot_date, slot_time)
);

-- Services (Service offerings)
CREATE TABLE services (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name VARCHAR(255) NOT NULL, -- "Traditional Cremation", "Hearse Service"
  slug VARCHAR(100) UNIQUE NOT NULL,
  description TEXT,
  base_price DECIMAL(10, 2),
  icon_url VARCHAR(500),
  is_active BOOLEAN DEFAULT true,
  
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  
  INDEX idx_active (is_active)
);

-- Payment Records
CREATE TABLE payments (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  booking_id UUID REFERENCES bookings(id) ON DELETE CASCADE,
  amount DECIMAL(10, 2) NOT NULL,
  currency VARCHAR(3) DEFAULT 'INR',
  status ENUM('pending', 'completed', 'failed', 'refunded') DEFAULT 'pending',
  
  -- Payment Gateway Details
  gateway VARCHAR(50), -- razorpay, stripe, upi
  gateway_transaction_id VARCHAR(100),
  gateway_response JSONB,
  
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  
  INDEX idx_booking_id (booking_id),
  INDEX idx_status (status)
);

-- SMS/Notification History
CREATE TABLE notifications (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES users(id),
  booking_id UUID REFERENCES bookings(id),
  type ENUM('sms', 'whatsapp', 'email', 'push') DEFAULT 'sms',
  message TEXT NOT NULL,
  status ENUM('queued', 'sent', 'failed') DEFAULT 'queued',
  
  -- Delivery Info
  recipient VARCHAR(255),
  error_message TEXT,
  
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  sent_at TIMESTAMP,
  
  INDEX idx_booking_id (booking_id),
  INDEX idx_type (type)
);

-- Activity Log (Audit trail)
CREATE TABLE activity_logs (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES users(id),
  booking_id UUID REFERENCES bookings(id),
  action VARCHAR(255), -- "booking_created", "payment_processed"
  details JSONB,
  
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  
  INDEX idx_booking_id (booking_id)
);
```

**Indexes Strategy:**

```sql
-- Performance optimization
CREATE INDEX idx_bookings_user_date 
ON bookings(user_id, created_at DESC);

CREATE INDEX idx_bookings_status_date 
ON bookings(status, created_at DESC);

-- Full-text search for blog/resources
CREATE INDEX idx_blog_search 
ON blog_posts USING GIN(to_tsvector('english', content));
```

---

### 2.4 ORM & Database Client

**Selected: Prisma ORM**

```
Why:
✓ Type-safe database queries
✓ Auto-generated client from schema
✓ Excellent migration system
✓ Great developer experience
✓ Supports PostgreSQL, MySQL, SQLite
✓ Built-in relationship handling

Schema Definition:
// prisma/schema.prisma

generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

model User {
  id    String     @id @default(cuid())
  email String     @unique
  phone String     @unique
  name  String?
  role  UserRole   @default(CUSTOMER)
  
  bookings Booking[]
  
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
  
  @@index([email])
  @@index([phone])
}

model Booking {
  id String @id @default(cuid())
  
  user      User   @relation(fields: [userId], references: [id])
  userId    String
  
  status           BookingStatus @default(PENDING)
  bookingReference String        @unique
  
  deceasedName    String
  deceasedAge     Int?
  location        String
  services        String[] // ["cremation", "hearse"]
  
  preferredDate   DateTime?
  preferredTime   String?
  
  estimatedCost   Decimal @db.Decimal(10, 2)
  finalCost       Decimal? @db.Decimal(10, 2)
  
  paymentStatus   PaymentStatus @default(PENDING)
  paymentId       String?
  
  notes    String?
  
  createdAt    DateTime  @default(now())
  updatedAt    DateTime  @updatedAt
  completedAt  DateTime?
  
  @@index([userId])
  @@index([status])
  @@index([preferredDate])
}

enum UserRole {
  CUSTOMER
  OPERATOR
  ADMIN
}

enum BookingStatus {
  PENDING
  CONFIRMED
  COMPLETED
  CANCELLED
}

enum PaymentStatus {
  PENDING
  COMPLETED
  FAILED
  REFUNDED
}
```

---

### 2.5 Background Jobs & Queues

**Selected: Bull Queue (Redis-backed) OR Temporal**

```
Why Bull Queue:
✓ Redis-backed for reliability
✓ Built-in retry logic
✓ Rate limiting
✓ Priority queues
✓ Simple API
✓ Works perfectly with Node.js

Common Jobs:
├─ send-booking-confirmation (SMS/WhatsApp)
├─ send-payment-reminder
├─ send-completion-report
├─ update-availability (sync with crematoriums)
├─ generate-invoice
└─ send-post-funeral-follow-up

Implementation:
// lib/queue.ts
import Queue from 'bull';
import redis from './redis';

const bookingQueue = new Queue('bookings', {
  redis: {
    host: process.env.REDIS_HOST,
    port: process.env.REDIS_PORT,
  },
});

// Process jobs
bookingQueue.process('send-confirmation', async (job) => {
  const { bookingId, phone } = job.data;
  
  const booking = await db.booking.findUnique({
    where: { id: bookingId },
  });
  
  // Send SMS via Twilio
  await sendSMS(phone, `Your booking: ${booking.bookingReference}`);
  
  return { success: true };
});

// Add job to queue
export async function scheduleBookingConfirmation(bookingId: string, phone: string) {
  await bookingQueue.add(
    'send-confirmation',
    { bookingId, phone },
    {
      delay: 1000, // Send after 1 second
      attempts: 3,
      backoff: {
        type: 'exponential',
        delay: 2000,
      },
    }
  );
}
```

**Alternative: Temporal (for complex workflows)**

```typescript
// For advanced scenarios: payment retries, availability reconciliation
// Temporal is enterprise-grade but heavier

import * as workflow from '@temporalio/workflow';

export async function bookingWorkflow(
  bookingId: string
) {
  // 1. Confirm slot reservation
  await workflow.executeActivity(reserveSlot, { bookingId });
  
  // 2. Process payment (with retries)
  const payment = await workflow.executeActivity(processPayment, { bookingId });
  
  // 3. Send confirmation SMS
  await workflow.executeActivity(sendConfirmationSMS, { bookingId });
  
  // 4. Assign coordinator
  await workflow.executeActivity(assignCoordinator, { bookingId });
  
  return { success: true };
}
```

---

### 2.6 Caching Strategy

**Selected: Redis**

```
Use cases:
├─ Session storage (Auth tokens)
├─ Availability slots (frequently accessed)
├─ Rate limiting (API protection)
├─ Real-time availability updates
└─ Queue management (Bull)

Configuration:
// lib/redis.ts
import Redis from 'ioredis';

export const redis = new Redis({
  host: process.env.REDIS_HOST || 'localhost',
  port: process.env.REDIS_PORT || 6379,
  password: process.env.REDIS_PASSWORD,
  retryStrategy: (times) => Math.min(times * 50, 2000),
});

// Cache helper
export async function cacheGet<T>(
  key: string,
  fetchFn: () => Promise<T>,
  ttl: number = 300 // 5 minutes default
): Promise<T> {
  const cached = await redis.get(key);
  if (cached) return JSON.parse(cached);
  
  const data = await fetchFn();
  await redis.setex(key, ttl, JSON.stringify(data));
  return data;
}

// Usage
const availability = await cacheGet(
  `availability:${locationId}:${date}`,
  () => fetchAvailability(locationId, date),
  600 // Cache for 10 minutes
);
```

**Hosting:**

```
Option 1: Upstash (Redis-as-a-Service)
├─ Serverless, zero-ops
├─ Great for Vercel deployments
├─ REST API + WebSocket support

Option 2: Redis Cloud
├─ AWS / GCP / Azure integration
├─ Enterprise features

Option 3: Self-hosted
├─ Docker on VPS
├─ Full control, cost savings
```

---

## 3. Integrations & Third-Party Services

### 3.1 Payment Processing

**Selected: Razorpay (Primary) + Stripe (Fallback)**

```
Why Razorpay:
✓ #1 payment gateway in India
✓ Supports all major methods (UPI, Cards, Wallet, NetBanking)
✓ Excellent documentation for India-specific flows
✓ Lower fees than Stripe for India
✓ Local support
✓ Webhooks for payment confirmation
✓ Test environment

Setup:
// lib/razorpay.ts
import Razorpay from 'razorpay';

export const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
});

// Create order
export async function createPaymentOrder(
  bookingId: string,
  amount: number
) {
  const order = await razorpay.orders.create({
    amount: amount * 100, // Convert to paise
    currency: 'INR',
    receipt: bookingId,
    notes: {
      bookingId,
      type: 'cremation_service',
    },
  });
  
  return order;
}

// Verify payment
export async function verifyPayment(
  paymentId: string,
  orderId: string,
  signature: string
) {
  const crypto = require('crypto');
  const generatedSignature = crypto
    .createHmac('sha256', process.env.RAZORPAY_KEY_SECRET!)
    .update(`${orderId}|${paymentId}`)
    .digest('hex');
  
  return generatedSignature === signature;
}
```

**Frontend Integration:**

```typescript
// components/CheckoutButton.tsx
'use client';

import { loadScript } from '@/lib/razorpay-script';

export function CheckoutButton({ bookingId, amount }) {
  const handlePayment = async () => {
    const script = await loadScript(
      'https://checkout.razorpay.com/v1/checkout.js'
    );

    if (!script) {
      alert('Failed to load payment gateway');
      return;
    }

    // Create order from API
    const order = await fetch('/api/payments/create-order', {
      method: 'POST',
      body: JSON.stringify({ bookingId, amount }),
    }).then((r) => r.json());

    const options = {
      key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
      amount: amount * 100,
      currency: 'INR',
      name: 'Cremation Services',
      order_id: order.id,
      handler: async (response) => {
        // Verify payment on backend
        const verified = await fetch('/api/payments/verify', {
          method: 'POST',
          body: JSON.stringify({
            paymentId: response.razorpay_payment_id,
            orderId: response.razorpay_order_id,
            signature: response.razorpay_signature,
            bookingId,
          }),
        }).then((r) => r.json());

        if (verified.success) {
          // Mark booking as paid
          updateBooking(bookingId, { paymentStatus: 'completed' });
        }
      },
      prefill: {
        name: user.fullName,
        email: user.email,
        contact: user.phone,
      },
    };

    const rzp = new (window as any).Razorpay(options);
    rzp.open();
  };

  return (
    <button
      onClick={handlePayment}
      className="btn btn-primary"
    >
      Proceed to Payment
    </button>
  );
}
```

---

### 3.2 SMS & Messaging

**Selected: Twilio (SMS + WhatsApp)**

```
Why:
✓ Reliable SMS delivery (99%+ uptime)
✓ WhatsApp integration for modern communication
✓ Webhook callbacks for delivery confirmation
✓ Excellent documentation
✓ Supports both transactional & marketing SMS
✓ Cost-effective for India

Setup:
// lib/twilio.ts
import twilio from 'twilio';

export const twilioClient = twilio(
  process.env.TWILIO_ACCOUNT_SID,
  process.env.TWILIO_AUTH_TOKEN
);

export async function sendSMS(to: string, message: string) {
  try {
    const result = await twilioClient.messages.create({
      body: message,
      from: process.env.TWILIO_PHONE_NUMBER,
      to: `+91${to}`, // Format Indian numbers
    });
    return { success: true, sid: result.sid };
  } catch (error) {
    console.error('SMS send error:', error);
    return { success: false, error };
  }
}

export async function sendWhatsApp(to: string, message: string) {
  try {
    const result = await twilioClient.messages.create({
      body: message,
      from: `whatsapp:${process.env.TWILIO_WHATSAPP_NUMBER}`,
      to: `whatsapp:+91${to}`,
    });
    return { success: true, sid: result.sid };
  } catch (error) {
    console.error('WhatsApp send error:', error);
    return { success: false, error };
  }
}

// Webhook handler
export async function handleTwilioWebhook(req: Request) {
  const { MessageSid, MessageStatus } = await req.json();
  
  // Update notification status in database
  await db.notification.update({
    where: { gatewayTransactionId: MessageSid },
    data: { status: messageStatus.toUpperCase() },
  });
}
```

**Alternative: AWS SNS (for SMS only, lower cost)**

```typescript
import AWS from 'aws-sdk';

const sns = new AWS.SNS({
  region: process.env.AWS_REGION,
});

export async function sendSMSViaSNS(phone: string, message: string) {
  return sns.publish({
    Message: message,
    PhoneNumber: `+91${phone}`,
  }).promise();
}
```

---

### 3.3 Email Service

**Selected: SendGrid OR Resend**

```
Resend (Modern, Simple):
// lib/email.ts
import { Resend } from 'resend';

export const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendBookingConfirmationEmail(
  to: string,
  bookingData: BookingData
) {
  return resend.emails.send({
    from: 'noreply@cremationservices.com',
    to,
    subject: `Booking Confirmed: ${bookingData.bookingReference}`,
    html: `
      <h1>Your Booking is Confirmed</h1>
      <p>Reference: ${bookingData.bookingReference}</p>
      <p>Date: ${formatDate(bookingData.preferredDate)}</p>
      <a href="${process.env.NEXT_PUBLIC_APP_URL}/bookings/${bookingData.id}">
        View Booking Details
      </a>
    `,
  });
}

SendGrid (Enterprise):
// Similar pattern, different API
import sgMail from '@sendgrid/mail';

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

await sgMail.send({
  to,
  from: 'noreply@cremationservices.com',
  subject: '...',
  html: '...',
});
```

---

### 3.4 Maps & Location Services

**Selected: Google Maps API**

```
Features needed:
├─ Cremation location display
├─ Distance calculation
├─ Directions for families
└─ Map search/autocomplete

// lib/google-maps.ts
import { Client } from '@googlemaps/js-core';

const mapsClient = new Client({
  key: process.env.GOOGLE_MAPS_API_KEY,
});

// Frontend: Show map of cremation locations
// Use Google Maps Embed or JavaScript API

<div id="map" style={{ height: '400px', width: '100%' }} />

<script>
  const map = new google.maps.Map(
    document.getElementById('map'),
    {
      center: { lat: 26.8467, lng: 75.8233 }, // Jaipur center
      zoom: 12,
    }
  );

  // Add markers for cremation locations
  locations.forEach((location) => {
    new google.maps.Marker({
      position: { lat: location.latitude, lng: location.longitude },
      map,
      title: location.name,
    });
  });
</script>
```

---

### 3.5 Analytics & Monitoring

**Selected: Vercel Analytics + Sentry + PostHog**

```
Vercel Analytics:
✓ Built-in for Vercel deployments
✓ Core Web Vitals, performance metrics
✓ No code needed

Sentry (Error Tracking):
// lib/sentry.ts
import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: process.env.SENTRY_DSN,
  environment: process.env.NODE_ENV,
  tracesSampleRate: 1.0,
});

// Automatic error capture in API routes & components

PostHog (Product Analytics):
// Track user behavior, booking flows, conversion
import { PostHog } from 'posthog-js';

export const posthog = new PostHog(
  process.env.NEXT_PUBLIC_POSTHOG_KEY,
  {
    api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST,
  }
);

// Track events
posthog.capture('booking_started', {
  urgency: 'emergency',
  services: ['cremation', 'hearse'],
});
```

---

### 3.6 CRM Integration (Optional, Phase 2)

**Selected: Zoho CRM or HubSpot**

```
For tracking customer journey:
├─ Lead capture (inquiry forms)
├─ Booking lifecycle
├─ Customer communication history
├─ Automated workflows

Integration:
// lib/crm.ts
import axios from 'axios';

export async function syncBookingToCRM(booking: Booking) {
  const contactExists = await checkContactInCRM(booking.phone);
  
  if (contactExists) {
    // Update existing contact
    await updateCRMContact(booking.phone, {
      last_booking_date: booking.createdAt,
      total_bookings: booking.userBookings.length,
    });
  } else {
    // Create new contact
    await createCRMContact({
      phone: booking.phone,
      name: booking.deceasedName,
      email: booking.userEmail,
      source: 'website',
    });
  }
  
  // Create deal/activity
  await createCRMDeal({
    contact_phone: booking.phone,
    deal_value: booking.estimatedCost,
    status: 'pending',
  });
}
```

---

## 4. DevOps & Infrastructure

### 4.1 Hosting & Deployment

**Phase 1: Vercel (Frontend) + Supabase/Render (Backend)**

```
Why:
✓ Vercel: Next.js optimized, automatic deployments, global CDN
✓ Supabase: PostgreSQL + Auth + Real-time, zero-ops
✓ Perfect for MVP

Deployment flow:
GitHub → Vercel Preview (auto on PR)
         → Vercel Production (auto on main merge)
         → Auto scaling, global distribution
         → CDN caching
```

**Phase 2: Self-hosted Infrastructure**

```
Architecture:
┌─────────────────────────────────────────────────────────┐
│ CloudFlare (Global DNS + DDoS Protection)               │
├─────────────────────────────────────────────────────────┤
│ Load Balancer (Nginx, AWS ALB, or DigitalOcean LB)      │
├─────────────────────────────────────────────────────────┤
│ Frontend (Next.js, 2-4 replicas)                        │
│ - Auto-scaling based on CPU/Memory                      │
│ - Health checks every 10 seconds                        │
├─────────────────────────────────────────────────────────┤
│ Backend (Express, 3-5 replicas)                         │
│ - Auto-scaling based on request queue                   │
│ - Graceful shutdown on restart                          │
├─────────────────────────────────────────────────────────┤
│ PostgreSQL (Primary + Standby Replica)                  │
│ - Automated backups every 6 hours                       │
│ - Point-in-time recovery                               │
├─────────────────────────────────────────────────────────┤
│ Redis (Cache + Queue Management)                        │
│ - Single instance with AOF persistence                  │
│ - Daily snapshots                                       │
├─────────────────────────────────────────────────────────┤
│ Monitoring & Logging (Datadog, New Relic, or ELK)      │
│ - App performance monitoring                            │
│ - Error tracking (Sentry)                              │
│ - Uptime monitoring (UptimeRobot)                       │
└─────────────────────────────────────────────────────────┘

Infrastructure as Code:
// terraform/main.tf or docker-compose.yml

version: '3.9'

services:
  frontend:
    image: cremation-frontend:latest
    ports:
      - "3000:3000"
    environment:
      - NEXT_PUBLIC_API_URL=http://backend:5000
    depends_on:
      - backend

  backend:
    image: cremation-backend:latest
    ports:
      - "5000:5000"
    environment:
      - DATABASE_URL=postgresql://user:pass@db:5432/cremation
      - REDIS_URL=redis://redis:6379
    depends_on:
      - db
      - redis

  db:
    image: postgres:15-alpine
    volumes:
      - postgres_data:/var/lib/postgresql/data
    environment:
      - POSTGRES_DB=cremation
      - POSTGRES_USER=cremation_user
      - POSTGRES_PASSWORD=${DB_PASSWORD}

  redis:
    image: redis:7-alpine
    volumes:
      - redis_data:/data

volumes:
  postgres_data:
  redis_data:
```

---

### 4.2 Continuous Integration / Deployment

**Selected: GitHub Actions**

```yaml
# .github/workflows/deploy.yml
name: Deploy

on:
  push:
    branches:
      - main
  pull_request:
    branches:
      - main

jobs:
  test:
    runs-on: ubuntu-latest
    
    services:
      postgres:
        image: postgres:15
        env:
          POSTGRES_PASSWORD: postgres
        options: >-
          --health-cmd pg_isready
          --health-interval 10s
          --health-timeout 5s
          --health-retries 5
    
    steps:
      - uses: actions/checkout@v3
      
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '20'
          cache: 'npm'
      
      - name: Install dependencies
        run: npm ci
      
      - name: Run linter
        run: npm run lint
      
      - name: Run type check
        run: npm run type-check
      
      - name: Run tests
        run: npm run test:ci
        env:
          DATABASE_URL: postgresql://postgres:postgres@localhost:5432/test_db
      
      - name: Upload coverage
        uses: codecov/codecov-action@v3

  build:
    needs: test
    runs-on: ubuntu-latest
    if: github.event_name == 'push' && github.ref == 'refs/heads/main'
    
    steps:
      - uses: actions/checkout@v3
      
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '20'
          cache: 'npm'
      
      - name: Install dependencies
        run: npm ci
      
      - name: Build
        run: npm run build
      
      - name: Deploy to Vercel
        uses: vercel/action@v4
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.VERCEL_ORG_ID }}
          vercel-project-id: ${{ secrets.VERCEL_PROJECT_ID }}
          production: true
```

---

### 4.3 Environment Configuration

**Selected: Environment Variables + Secrets Manager**

```bash
# .env.local (development)
NEXT_PUBLIC_API_URL=http://localhost:5000
DATABASE_URL=postgresql://user:password@localhost:5432/cremation
REDIS_URL=redis://localhost:6379
JWT_SECRET=dev-secret-key-change-in-production

# .env.production (managed by Vercel/CI)
NEXT_PUBLIC_API_URL=https://api.cremationservices.com
DATABASE_URL=[SECURE - from AWS Secrets Manager]
REDIS_URL=[SECURE - from AWS Secrets Manager]
JWT_SECRET=[SECURE - from AWS Secrets Manager]
RAZORPAY_KEY_ID=[SECURE]
RAZORPAY_KEY_SECRET=[SECURE]
TWILIO_ACCOUNT_SID=[SECURE]
TWILIO_AUTH_TOKEN=[SECURE]
```

---

### 4.4 Monitoring & Alerting

**Selected: Datadog OR New Relic**

```
Key metrics to track:
├─ Uptime (target: 99.5%)
├─ Response time (p95 < 500ms)
├─ Error rate (< 0.5%)
├─ Database query time (p95 < 100ms)
├─ Redis cache hit ratio (> 80%)
├─ Payment processing success rate (> 99.5%)
├─ Booking form completion rate
└─ Mobile vs Desktop conversion

Alert thresholds:
├─ Error rate > 1% → Page oncall
├─ Response time p95 > 1000ms → Page oncall
├─ Database CPU > 80% → Slack notification
├─ Redis memory > 90% → Slack notification
├─ Payment gateway down → Page oncall (critical)
```

---

### 4.5 Security

**Selected: OWASP Best Practices + Next.js Security**

```
Implemented:
✓ HTTPS/TLS everywhere
✓ CSRF protection (tokens in forms)
✓ Rate limiting on API endpoints
✓ Input validation & sanitization (Zod)
✓ SQL injection prevention (Prisma)
✓ XSS protection (React escaping + CSP headers)
✓ Secure session management (HTTPOnly cookies)
✓ Password hashing (bcrypt)
✓ API authentication (JWT + refresh tokens)
✓ Database encryption at rest
✓ Regular security audits (npm audit, Snyk)

// Security headers middleware
// middleware.ts
export function middleware(request: NextRequest) {
  const response = NextResponse.next();

  // Security headers
  response.headers.set(
    'Content-Security-Policy',
    "default-src 'self'; script-src 'self' 'unsafe-inline' https://checkout.razorpay.com; style-src 'self' 'unsafe-inline'"
  );
  response.headers.set('X-Content-Type-Options', 'nosniff');
  response.headers.set('X-Frame-Options', 'DENY');
  response.headers.set('X-XSS-Protection', '1; mode=block');
  response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');

  return response;
}
```

---

## 5. Tech Stack Summary Table

| Layer | Component | Technology | Rationale |
|-------|-----------|------------|-----------|
| **Frontend** | Framework | Next.js 14 | SSR, performance, SEO |
| | UI Components | Radix UI + Shadcn | Accessible, headless |
| | Styling | Tailwind + CSS Modules | Utility-first, scoped styles |
| | State | Context + React Query | Minimal bundle, powerful |
| | Forms | React Hook Form + Zod | Performance, type-safe validation |
| | HTTP | Axios | Interceptors, error handling |
| **Backend** | Runtime | Node.js 20 LTS | Ecosystem, performance |
| | Framework | Next.js API Routes (→ Express) | Fast MVP, then scale |
| | Database | PostgreSQL 15 | ACID, complex queries, reliability |
| | ORM | Prisma | Type-safe, migrations, DX |
| | Caching | Redis | Session, slots, rate limiting |
| | Queue | Bull | Background jobs, reliability |
| | Auth | NextAuth.js v5 | Secure, JWT + sessions |
| **Integrations** | Payments | Razorpay + Stripe | India-first, redundancy |
| | SMS | Twilio | WhatsApp + SMS reliability |
| | Email | Resend OR SendGrid | Transactional, reliable |
| | Maps | Google Maps API | Location services |
| | Analytics | Vercel + PostHog + Sentry | Performance, behavior, errors |
| **DevOps** | Hosting | Vercel (Phase 1) → Self-hosted (Phase 2) | Speed vs. control |
| | Database | Supabase (Phase 1) → AWS RDS (Phase 2) | Zero-ops vs. control |
| | CI/CD | GitHub Actions | Free, integrated with GitHub |
| | Monitoring | Datadog OR New Relic | Uptime, performance, alerts |
| | Secrets | GitHub Secrets (Vercel) → AWS Secrets Manager | Secure management |
| **Testing** | Unit | Vitest + React Testing Library | Speed, DX |
| | E2E | Playwright | Cross-browser, real scenarios |
| | Load | k6 OR Artillery | Performance testing |

---

## 6. Development Workflow

### 6.1 Local Setup

```bash
# Clone repository
git clone https://github.com/yourorg/cremation-services.git
cd cremation-services

# Install dependencies
npm install

# Copy environment template
cp .env.example .env.local

# Start PostgreSQL (Docker)
docker run --name cremation-db \
  -e POSTGRES_PASSWORD=postgres \
  -p 5432:5432 \
  -v postgres_data:/var/lib/postgresql/data \
  postgres:15-alpine

# Start Redis (Docker)
docker run --name cremation-redis \
  -p 6379:6379 \
  redis:7-alpine

# Setup database
npx prisma migrate dev

# Seed test data
npm run seed

# Start dev server
npm run dev
# Open http://localhost:3000

# In another terminal, start API route monitoring
npm run dev:api-logs
```

---

### 6.2 Git Workflow

```
Main branches:
├─ main (production)
│   ├─ Trigger: Merge PR with approval
│   └─ Deployment: Auto to Vercel production
│
├─ staging
│   ├─ Trigger: Merge from develop
│   └─ Deployment: Auto to staging environment
│
└─ develop (integration)
    ├─ Trigger: Merge PR from feature branches
    └─ Base branch for feature work

Feature branch naming:
├─ feature/booking-form (new feature)
├─ fix/payment-validation (bug fix)
├─ refactor/form-component (refactoring)
├─ docs/api-endpoints (documentation)
└─ chore/deps-update (dependencies)

Commit conventions (Conventional Commits):
feat: add multi-step booking form
fix: prevent double-click on submit button
refactor: extract validation logic
docs: update API documentation
chore: update dependencies
test: add booking flow tests

PR checklist:
✓ Tests pass locally
✓ No console errors
✓ Mobile responsive tested
✓ Accessibility checked (axe browser extension)
✓ Database migrations run cleanly
✓ API tests pass
✓ Linked to relevant issue(s)
```

---

## 7. Cost Estimation

### One-Time Costs

| Service | Cost | Purpose |
|---------|------|---------|
| Domain | $15/year | cremationservices.com |
| SSL Certificate | Free | Vercel/Let's Encrypt |
| **Total** | **$15** | |

### Monthly Costs (Steady State)

| Service | Cost | Notes |
|---------|------|-------|
| **Frontend** | | |
| Vercel Pro | $20 | 0.5M function invocations, auto-scaling |
| **Backend** | | |
| Render/Railway | $50-100 | Express.js hosting, auto-scaling |
| **Database** | | |
| Supabase/AWS RDS | $50-100 | PostgreSQL, 100GB storage, backups |
| **Cache** | | |
| Upstash Redis | $20 | Serverless Redis, 100GB/month |
| **Payments** | | |
| Razorpay | 2% + ₹3 | Per transaction (variable) |
| Stripe | 2.9% + 30¢ | Per transaction (variable) |
| **Messaging** | | |
| Twilio SMS | $0.01-0.04 | Per SMS (variable) |
| Twilio WhatsApp | $0.003-0.08 | Per message (variable) |
| **Email** | | |
| Resend | Free | 100 emails/day free, then $0.20/1K |
| **Monitoring** | | |
| Sentry | Free | Basic error tracking (10K events/month free) |
| Datadog | $15 | APM, logs, dashboards |
| **Domain & SSL** | | |
| Namecheap | $8 | Renewal + SSL (optional) |
| **Backup & Storage** | | |
| AWS S3 | $5-10 | Document storage, database backups |
| **Total (Fixed)** | **$168-253** | Without payment/SMS volume |
| **Total (Variable, ~1000 bookings)** | **+$500-800** | Payment fees, SMS notifications |
| **TOTAL MONTHLY** | **~$670-1000** | Small/medium scale |

### Scaling Costs (10,000+ bookings/month)

```
Expected monthly costs at scale:
├─ Payment processing: ₹10,000-15,000 (2-3%)
├─ SMS/WhatsApp: ₹20,000-30,000 (20-30K messages)
├─ Infrastructure: $300-500
├─ Monitoring & tools: $100-200
├─ Staff (ops, customer support): $5000-10000
└─ Total: ~₹50,000-75,000/month (~$600-900)

Price per booking: ₹300-400 (infrastructure + ops)
```

---

## 8. Migration Strategy (Vercel → Self-hosted)

**Timeline: Months 3-6, when traffic justifies**

### Phase 1: Parallel Run (Week 1-2)

```
1. Set up self-hosted infrastructure (Docker, K8s)
2. Deploy duplicate of current application
3. Database replication: Supabase → RDS (one-way sync)
4. Route 5% traffic to self-hosted (canary deployment)
5. Monitor error rates, latency, resource usage
6. Keep Vercel as fallback
```

### Phase 2: Gradual Cutover (Week 3-4)

```
1. Increase self-hosted traffic to 25%
2. Run load tests (k6)
3. Verify all integrations (Razorpay, Twilio, etc.)
4. Monitor database performance
5. Route 50% traffic to self-hosted
```

### Phase 3: Full Migration (Week 5-6)

```
1. Migrate 90% traffic to self-hosted
2. Keep 10% on Vercel for failover
3. Update DNS TTL to 60 seconds (fast failover)
4. Disable Vercel deployments after verification
5. Extend TTL to 3600 seconds (normal)
```

---

## 9. Technology Decisions & Trade-offs

| Decision | Chosen | Alternative | Trade-off |
|----------|--------|-------------|-----------|
| Frontend | Next.js | React SPA | SSR benefits vs. complexity |
| State | Context + React Query | Redux | Less boilerplate vs. more power |
| Styling | Tailwind | CSS-in-JS only | Utility-first vs. component-focused |
| Forms | React Hook Form | Formik | Performance vs. ecosystem |
| Auth | NextAuth.js | Firebase Auth | Open-source vs. managed |
| Database | PostgreSQL | MySQL | ACID+JSON vs. simplicity |
| ORM | Prisma | SQLAlchemy | Type-safe vs. maturity |
| Backend (Phase 1) | Next.js API Routes | Express | Fast MVP vs. separation of concerns |
| Hosting (Phase 1) | Vercel | AWS | Zero-ops vs. cost control |
| Cache | Redis | Memcached | More features vs. simplicity |
| Payments | Razorpay | Stripe | India-first vs. global |
| Messaging | Twilio | AWS SNS | Reliability vs. cost |
| Queue | Bull | Temporal | Simplicity vs. advanced workflows |

---

## 10. Recommended Reading & Resources

### Next.js & React
- Next.js documentation: https://nextjs.org/docs
- React documentation: https://react.dev
- Vercel deployment guide: https://vercel.com/docs

### Database & Backend
- Prisma documentation: https://www.prisma.io/docs
- PostgreSQL documentation: https://www.postgresql.org/docs
- Redis documentation: https://redis.io/docs

### Integrations
- Razorpay API: https://razorpay.com/docs/api/
- Twilio API: https://www.twilio.com/docs
- Google Maps: https://developers.google.com/maps

### DevOps
- Docker documentation: https://docs.docker.com
- GitHub Actions: https://docs.github.com/en/actions
- Terraform: https://www.terraform.io/docs

### Testing
- Vitest: https://vitest.dev
- Playwright: https://playwright.dev
- Testing Library: https://testing-library.com

---

## 11. Next Steps & Checklist

Before implementation:

- [ ] Confirm design tokens (colors, typography) with client
- [ ] Finalize feature requirements (booking flow, features)
- [ ] Decide on payment methods (Razorpay, Stripe, both?)
- [ ] Plan SMS/WhatsApp messaging templates
- [ ] Set up GitHub organization and repositories
- [ ] Configure staging and production environments
- [ ] Create database backup strategy
- [ ] Plan data migration (if migrating from existing system)
- [ ] Set up monitoring and alerting
- [ ] Plan security audit and compliance review
- [ ] Establish SLA targets (uptime, response time)
- [ ] Create deployment runbook and rollback procedures

---

**Last Updated:** 2024  
**Tech Stack Version:** 1.0  
**Recommended for:** Cremation services platform, mid-scale, India-focused

For questions or updates, refer to individual service documentation or contact DevOps team.
