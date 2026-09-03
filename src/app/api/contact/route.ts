import { NextRequest, NextResponse } from 'next/server';
import { contactFormSchema } from '@/lib/validation/contact';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const validated = contactFormSchema.parse(body);

    // Development mock response
    return NextResponse.json(
      {
        success: true,
        message: 'Inquiry received. This is a mock API response in development environment.',
        data: validated,
      },
      { status: 200 }
    );
  } catch (err: unknown) {
    return NextResponse.json(
      {
        success: false,
        error: 'Invalid form submission',
        details: err instanceof Error ? err.message : String(err),
      },
      { status: 400 }
    );
  }
}
