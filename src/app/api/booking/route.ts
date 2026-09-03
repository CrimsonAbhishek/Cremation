import { NextRequest, NextResponse } from 'next/server';
import { fullBookingSchema } from '@/lib/validation/booking';
import { generateBookingReference } from '@/lib/utils';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const validated = fullBookingSchema.parse(body);
    const referenceNumber = generateBookingReference();

    // Development mock response
    return NextResponse.json(
      {
        success: true,
        referenceNumber,
        status: 'submitted',
        submittedAt: new Date().toISOString(),
        message: 'Booking request received. A team member will call to confirm slot availability.',
        data: validated,
      },
      { status: 201 }
    );
  } catch (err: unknown) {
    return NextResponse.json(
      {
        success: false,
        error: 'Invalid booking data',
        details: err instanceof Error ? err.message : String(err),
      },
      { status: 400 }
    );
  }
}
