'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  bookingStep1Schema,
  bookingStep2Schema,
  bookingStep3Schema,
  bookingStep4Schema,
  type BookingStep1Values,
  type BookingStep2Values,
  type BookingStep3Values,
  type BookingStep4Values,
  type FullBookingValues,
} from '@/lib/validation/booking';
import { bookingService } from '@/lib/services';
import { services as availableServices } from '@/content/services';
import { StepIndicator } from './StepIndicator';
import { FormField, Input, Textarea } from '@/components/ui/FormFields';
import { Button } from '@/components/ui/Button';
import type { BookingRequest } from '@/types';
import { CheckCircle2, AlertCircle, Phone, ArrowLeft, ArrowRight, ShieldAlert } from 'lucide-react';
import { siteConfig } from '@/config/site';
import { formatPhoneLink } from '@/lib/utils';

const STEP_LABELS = [
  'Contact',
  'Services',
  'Location',
  'Deceased Info',
  'Review',
];

const LOCAL_STORAGE_KEY = 'cremation_booking_draft';

export function BookingForm() {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionResult, setSubmissionResult] = useState<BookingRequest | null>(null);
  const [errorMsg, setErrorMsg] = useState('');

  // Combined form state with lazy initialization from localStorage
  const [formData, setFormData] = useState<Partial<FullBookingValues>>(() => {
    if (typeof window !== 'undefined') {
      try {
        const saved = localStorage.getItem(LOCAL_STORAGE_KEY);
        if (saved) return JSON.parse(saved);
      } catch {
        // Ignore storage errors
      }
    }
    return {
      urgency: 'emergency',
      contactName: '',
      contactPhone: '',
      contactEmail: '',
      contactRelation: '',
      services: [],
      locationOfDeceased: '',
      preferredLocation: '',
      preferredDate: '',
      preferredTime: '',
      deceasedName: '',
      deceasedAge: undefined,
      specialRequirements: '',
      additionalNotes: '',
    };
  });

  // Save draft on state changes
  const updateFormData = (newData: Partial<FullBookingValues>) => {
    setFormData((prev) => {
      const updated = { ...prev, ...newData };
      try {
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updated));
      } catch {
        // Ignore storage errors
      }
      return updated;
    });
  };

  // Step 1 Form
  const formStep1 = useForm<BookingStep1Values>({
    resolver: zodResolver(bookingStep1Schema),
    values: {
      urgency: formData.urgency || 'emergency',
      contactName: formData.contactName || '',
      contactPhone: formData.contactPhone || '',
      contactEmail: formData.contactEmail || '',
      contactRelation: formData.contactRelation || '',
    },
  });

  // Step 2 Form
  const formStep2 = useForm<BookingStep2Values>({
    resolver: zodResolver(bookingStep2Schema),
    values: {
      services: formData.services || [],
    },
  });

  // Step 3 Form
  const formStep3 = useForm<BookingStep3Values>({
    resolver: zodResolver(bookingStep3Schema),
    values: {
      locationOfDeceased: formData.locationOfDeceased || '',
      preferredLocation: formData.preferredLocation || '',
      preferredDate: formData.preferredDate || '',
      preferredTime: formData.preferredTime || '',
    },
  });

  // Step 4 Form
  const formStep4 = useForm<BookingStep4Values>({
    resolver: zodResolver(bookingStep4Schema),
    values: {
      deceasedName: formData.deceasedName || '',
      deceasedAge: formData.deceasedAge,
      specialRequirements: formData.specialRequirements || '',
    },
  });

  const handleNextStep1 = formStep1.handleSubmit((data) => {
    updateFormData(data);
    setStep(2);
  });

  const handleNextStep2 = formStep2.handleSubmit((data) => {
    updateFormData(data);
    setStep(3);
  });

  const handleNextStep3 = formStep3.handleSubmit((data) => {
    updateFormData(data);
    setStep(4);
  });

  const handleNextStep4 = formStep4.handleSubmit((data) => {
    updateFormData(data);
    setStep(5);
  });

  const handleFinalSubmit = async () => {
    setIsSubmitting(true);
    setErrorMsg('');
    try {
      const res = await bookingService.submitRequest(formData as FullBookingValues);
      setSubmissionResult(res);
      localStorage.removeItem(LOCAL_STORAGE_KEY);
    } catch {
      setErrorMsg('Failed to submit booking request. Please try calling directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  // ── CONFIRMATION SCREEN ───────────────────────────────────
  if (submissionResult) {
    return (
      <div className="bg-white p-6 md:p-8 border border-neutral-200 rounded-md max-w-2xl mx-auto shadow-sm">
        <div className="flex items-center gap-3 text-success-600 mb-4">
          <CheckCircle2 className="w-8 h-8 shrink-0" aria-hidden="true" />
          <h2 className="font-display text-2xl font-semibold text-neutral-900">
            Booking Request Submitted
          </h2>
        </div>

        <div className="p-4 bg-neutral-100 rounded-sm mb-6 font-mono text-sm">
          <span className="text-neutral-600 block text-xs font-sans uppercase tracking-wide mb-1">Request Reference Number</span>
          <span className="text-lg font-bold text-primary-900">{submissionResult.referenceNumber}</span>
        </div>

        <div className="p-4 bg-warning-100 border-l-4 border-warning-600 rounded-r-sm text-sm text-neutral-800 mb-6">
          <strong>Important Note:</strong> This is a booking <em>request</em>. A specific cremation slot or vehicle is NOT reserved until our team speaks with you directly by phone to confirm details and timing.
        </div>

        <div className="space-y-4 text-sm text-neutral-700 leading-relaxed mb-8">
          <h3 className="font-semibold text-base text-neutral-900 font-display">What Happens Next:</h3>
          <ol className="list-decimal pl-5 space-y-2">
            <li>Our team will call you at <strong>{submissionResult.data.contactPhone}</strong> shortly.</li>
            <li>We will confirm your location, required services, and preferred schedule.</li>
            <li>Once confirmed, dedicated coordinators will handle all arrangements.</li>
          </ol>
        </div>

        {siteConfig.contact.phone && (
          <div className="p-4 bg-primary-100 rounded-md text-center">
            <p className="text-sm text-primary-900 font-medium mb-2">Need immediate confirmation?</p>
            <a
              href={formatPhoneLink(siteConfig.contact.phone)}
              className="inline-flex items-center gap-2 px-4 py-2 bg-primary-500 text-white rounded-xs text-sm font-semibold hover:bg-primary-700 transition-colors"
            >
              <Phone className="w-4 h-4" />
              Call {siteConfig.contact.phoneDisplay}
            </a>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto bg-white p-6 md:p-8 border border-neutral-200 rounded-md shadow-sm">
      <StepIndicator currentStep={step} totalSteps={STEP_LABELS.length} steps={STEP_LABELS} />

      {errorMsg && (
        <div className="mb-6 p-4 bg-error-100 border border-error-600 rounded-sm text-error-600 flex items-center gap-3 text-sm font-semibold" role="alert">
          <AlertCircle className="w-5 h-5 shrink-0" aria-hidden="true" />
          {errorMsg}
        </div>
      )}

      {/* ── STEP 1: CONTACT & URGENCY ────────────────────────── */}
      {step === 1 && (
        <form onSubmit={handleNextStep1} className="space-y-6">
          <div className="border-b border-neutral-200 pb-4 mb-4">
            <h2 className="font-display text-xl font-semibold text-neutral-900">Step 1: Contact & Urgency</h2>
            <p className="text-xs text-neutral-600 mt-1">Provide your contact details so we can reach you immediately.</p>
          </div>

          <fieldset className="border border-neutral-300 rounded-sm p-4">
            <legend className="text-sm font-semibold text-neutral-900 px-2 font-body">
              How soon do you need assistance? <span className="text-error-600">*</span>
            </legend>
            <div className="space-y-2 mt-2">
              <label className="flex items-center gap-3 text-sm text-neutral-900 cursor-pointer min-h-[36px]">
                <input
                  type="radio"
                  value="emergency"
                  {...formStep1.register('urgency')}
                  className="w-4 h-4 text-primary-500"
                />
                Emergency (Immediate assistance within hours)
              </label>
              <label className="flex items-center gap-3 text-sm text-neutral-900 cursor-pointer min-h-[36px]">
                <input
                  type="radio"
                  value="today"
                  {...formStep1.register('urgency')}
                  className="w-4 h-4 text-primary-500"
                />
                Today (Within 24 hours)
              </label>
              <label className="flex items-center gap-3 text-sm text-neutral-900 cursor-pointer min-h-[36px]">
                <input
                  type="radio"
                  value="later"
                  {...formStep1.register('urgency')}
                  className="w-4 h-4 text-primary-500"
                />
                Schedule for later / Planning
              </label>
            </div>
            {formStep1.formState.errors.urgency && (
              <p className="mt-2 text-xs font-semibold text-error-600">{formStep1.formState.errors.urgency.message}</p>
            )}
          </fieldset>

          <FormField label="Your Full Name" htmlFor="contactName" required error={formStep1.formState.errors.contactName?.message}>
            <Input id="contactName" {...formStep1.register('contactName')} placeholder="Enter your full name" error={!!formStep1.formState.errors.contactName} />
          </FormField>

          <FormField label="Phone Number" htmlFor="contactPhone" required error={formStep1.formState.errors.contactPhone?.message} helperText="10-digit mobile number for immediate callback">
            <Input id="contactPhone" type="tel" {...formStep1.register('contactPhone')} placeholder="9876543210" error={!!formStep1.formState.errors.contactPhone} />
          </FormField>

          <FormField label="Your Relation to Deceased" htmlFor="contactRelation" required error={formStep1.formState.errors.contactRelation?.message}>
            <Input id="contactRelation" {...formStep1.register('contactRelation')} placeholder="e.g. Son, Daughter, Spouse, Relative" error={!!formStep1.formState.errors.contactRelation} />
          </FormField>

          <FormField label="Email Address (Optional)" htmlFor="contactEmail" error={formStep1.formState.errors.contactEmail?.message}>
            <Input id="contactEmail" type="email" {...formStep1.register('contactEmail')} placeholder="yourname@example.com" error={!!formStep1.formState.errors.contactEmail} />
          </FormField>

          <div className="flex justify-end pt-4">
            <Button type="submit" size="lg">
              Next: Select Services
              <ArrowRight className="w-4 h-4 ml-1" />
            </Button>
          </div>
        </form>
      )}

      {/* ── STEP 2: SERVICE SELECTION ────────────────────────── */}
      {step === 2 && (
        <form onSubmit={handleNextStep2} className="space-y-6">
          <div className="border-b border-neutral-200 pb-4 mb-4">
            <h2 className="font-display text-xl font-semibold text-neutral-900">Step 2: Service Selection</h2>
            <p className="text-xs text-neutral-600 mt-1">Select one or more services required.</p>
          </div>

          <fieldset>
            <legend className="sr-only">Services required</legend>
            <div className="space-y-3">
              {availableServices.map((srv) => (
                <label
                  key={srv.id}
                  className="flex items-start gap-3 p-4 border border-neutral-200 rounded-sm hover:bg-neutral-50 cursor-pointer transition-colors"
                >
                  <input
                    type="checkbox"
                    value={srv.id}
                    {...formStep2.register('services')}
                    className="w-5 h-5 text-primary-500 rounded border-neutral-300 mt-0.5"
                  />
                  <div>
                    <span className="font-semibold text-neutral-900 block text-base font-display">{srv.name}</span>
                    <span className="text-sm text-neutral-600 block mt-0.5">{srv.shortDescription}</span>
                  </div>
                </label>
              ))}
            </div>
            {formStep2.formState.errors.services && (
              <p className="mt-2 text-xs font-semibold text-error-600">{formStep2.formState.errors.services.message}</p>
            )}
          </fieldset>

          <div className="flex justify-between pt-4">
            <Button type="button" variant="ghost" onClick={() => setStep(1)}>
              <ArrowLeft className="w-4 h-4 mr-1" />
              Back
            </Button>
            <Button type="submit" size="lg">
              Next: Location & Timing
              <ArrowRight className="w-4 h-4 ml-1" />
            </Button>
          </div>
        </form>
      )}

      {/* ── STEP 3: LOCATION & TIMING ────────────────────────── */}
      {step === 3 && (
        <form onSubmit={handleNextStep3} className="space-y-6">
          <div className="border-b border-neutral-200 pb-4 mb-4">
            <h2 className="font-display text-xl font-semibold text-neutral-900">Step 3: Location & Timing</h2>
            <p className="text-xs text-neutral-600 mt-1">Specify where and when services are needed.</p>
          </div>

          <FormField label="Current Location of Deceased" htmlFor="locationOfDeceased" required error={formStep3.formState.errors.locationOfDeceased?.message} helperText="Home address, hospital name, or city location">
            <Input id="locationOfDeceased" {...formStep3.register('locationOfDeceased')} placeholder="e.g. City Hospital, Ward 4 OR Residential Address" error={!!formStep3.formState.errors.locationOfDeceased} />
          </FormField>

          <FormField label="Preferred Cremation Location / Facility (Optional)" htmlFor="preferredLocation">
            <Input id="preferredLocation" {...formStep3.register('preferredLocation')} placeholder="Specific cremation ground or facility if known" />
          </FormField>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <FormField label="Preferred Date (Optional)" htmlFor="preferredDate">
              <Input id="preferredDate" type="date" {...formStep3.register('preferredDate')} />
            </FormField>

            <FormField label="Preferred Time Slot (Optional)" htmlFor="preferredTime">
              <Input id="preferredTime" type="time" {...formStep3.register('preferredTime')} />
            </FormField>
          </div>

          <div className="flex justify-between pt-4">
            <Button type="button" variant="ghost" onClick={() => setStep(2)}>
              <ArrowLeft className="w-4 h-4 mr-1" />
              Back
            </Button>
            <Button type="submit" size="lg">
              Next: Deceased Information
              <ArrowRight className="w-4 h-4 ml-1" />
            </Button>
          </div>
        </form>
      )}

      {/* ── STEP 4: DECEASED INFORMATION ───────────────────── */}
      {step === 4 && (
        <form onSubmit={handleNextStep4} className="space-y-6">
          <div className="border-b border-neutral-200 pb-4 mb-4">
            <h2 className="font-display text-xl font-semibold text-neutral-900">Step 4: Deceased Information</h2>
            <p className="text-xs text-neutral-600 mt-1">Details to assist in smooth coordination.</p>
          </div>

          <FormField label="Deceased Full Name" htmlFor="deceasedName" required error={formStep4.formState.errors.deceasedName?.message}>
            <Input id="deceasedName" {...formStep4.register('deceasedName')} placeholder="Full name of the deceased" error={!!formStep4.formState.errors.deceasedName} />
          </FormField>

          <FormField label="Age of Deceased (Optional)" htmlFor="deceasedAge" error={formStep4.formState.errors.deceasedAge?.message}>
            <Input id="deceasedAge" type="number" {...formStep4.register('deceasedAge')} placeholder="Age in years" />
          </FormField>

          <FormField label="Special Requirements or Ritual Guidelines (Optional)" htmlFor="specialRequirements">
            <Textarea id="specialRequirements" {...formStep4.register('specialRequirements')} placeholder="Any specific religious observances, pujari preferences, or material requirements..." />
          </FormField>

          <div className="flex justify-between pt-4">
            <Button type="button" variant="ghost" onClick={() => setStep(3)}>
              <ArrowLeft className="w-4 h-4 mr-1" />
              Back
            </Button>
            <Button type="submit" size="lg">
              Review Request
              <ArrowRight className="w-4 h-4 ml-1" />
            </Button>
          </div>
        </form>
      )}

      {/* ── STEP 5: REVIEW & SUBMIT ──────────────────────────── */}
      {step === 5 && (
        <div className="space-y-6">
          <div className="border-b border-neutral-200 pb-4 mb-4">
            <h2 className="font-display text-xl font-semibold text-neutral-900">Step 5: Review Booking Request</h2>
            <p className="text-xs text-neutral-600 mt-1">Please review all information before submitting your request.</p>
          </div>

          <div className="bg-neutral-50 p-4 rounded-sm border border-neutral-200 space-y-4 text-sm">
            <div>
              <span className="font-semibold text-neutral-900 block text-xs uppercase tracking-wide">Contact Person</span>
              <p>{formData.contactName} ({formData.contactRelation}) — {formData.contactPhone}</p>
              {formData.contactEmail && <p className="text-neutral-600">{formData.contactEmail}</p>}
            </div>

            <div>
              <span className="font-semibold text-neutral-900 block text-xs uppercase tracking-wide">Urgency</span>
              <p className="capitalize">{formData.urgency}</p>
            </div>

            <div>
              <span className="font-semibold text-neutral-900 block text-xs uppercase tracking-wide">Selected Services</span>
              <ul className="list-disc pl-5 mt-1 text-neutral-800">
                {formData.services?.map((sId) => {
                  const s = availableServices.find((item) => item.id === sId);
                  return <li key={sId}>{s ? s.name : sId}</li>;
                })}
              </ul>
            </div>

            <div>
              <span className="font-semibold text-neutral-900 block text-xs uppercase tracking-wide">Location of Deceased</span>
              <p>{formData.locationOfDeceased}</p>
              {formData.preferredLocation && <p className="text-neutral-600">Preferred Facility: {formData.preferredLocation}</p>}
            </div>

            <div>
              <span className="font-semibold text-neutral-900 block text-xs uppercase tracking-wide">Deceased Details</span>
              <p>{formData.deceasedName} {formData.deceasedAge ? `(${formData.deceasedAge} yrs)` : ''}</p>
              {formData.specialRequirements && <p className="text-neutral-600 mt-1">Notes: {formData.specialRequirements}</p>}
            </div>
          </div>

          <div className="flex items-center gap-2 p-3 bg-neutral-100 rounded-sm text-xs text-neutral-700">
            <ShieldAlert className="w-4 h-4 text-primary-500 shrink-0" />
            <span>Submitting will send a request to our 24/7 coordination team. No payment is required at this stage.</span>
          </div>

          <div className="flex justify-between pt-4">
            <Button type="button" variant="ghost" onClick={() => setStep(4)} disabled={isSubmitting}>
              <ArrowLeft className="w-4 h-4 mr-1" />
              Edit Details
            </Button>
            <Button type="button" size="lg" onClick={handleFinalSubmit} isLoading={isSubmitting}>
              Submit Booking Request
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
