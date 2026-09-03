'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { contactFormSchema, type ContactFormValues } from '@/lib/validation/contact';
import { contactService } from '@/lib/services';
import { FormField, Input, Textarea } from '@/components/ui/FormFields';
import { Button } from '@/components/ui/Button';
import { AlertCircle, CheckCircle2 } from 'lucide-react';

export function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [responseMsg, setResponseMsg] = useState('');

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      urgency: 'emergency',
      name: '',
      phone: '',
      email: '',
      message: '',
    },
  });

  const onSubmit = async (data: ContactFormValues) => {
    setStatus('submitting');
    try {
      const res = await contactService.submitInquiry(data);
      if (res.success) {
        setStatus('success');
        setResponseMsg(res.message);
        reset();
      } else {
        setStatus('error');
        setResponseMsg('Unable to submit form. Please try again.');
      }
    } catch {
      setStatus('error');
      setResponseMsg('An unexpected error occurred. Please try calling directly.');
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6" noValidate>
      {status === 'success' && (
        <div className="p-4 bg-success-100 border border-success-600 rounded-sm text-neutral-900 flex gap-3 items-start" role="alert">
          <CheckCircle2 className="w-5 h-5 text-success-600 shrink-0 mt-0.5" aria-hidden="true" />
          <div>
            <p className="font-semibold text-sm">Message Received</p>
            <p className="text-sm mt-1">{responseMsg}</p>
          </div>
        </div>
      )}

      {status === 'error' && (
        <div className="p-4 bg-error-100 border border-error-600 rounded-sm text-neutral-900 flex gap-3 items-start" role="alert">
          <AlertCircle className="w-5 h-5 text-error-600 shrink-0 mt-0.5" aria-hidden="true" />
          <div>
            <p className="font-semibold text-sm">Submission Failed</p>
            <p className="text-sm mt-1">{responseMsg}</p>
          </div>
        </div>
      )}

      <fieldset className="border border-neutral-300 rounded-sm p-4">
        <legend className="text-sm font-semibold text-neutral-900 px-2 font-body">
          How soon do you need assistance? <span className="text-error-600">*</span>
        </legend>
        <div className="space-y-2 mt-2">
          <label className="flex items-center gap-3 text-sm text-neutral-900 cursor-pointer min-h-[36px]">
            <input
              type="radio"
              value="emergency"
              {...register('urgency')}
              className="w-4 h-4 text-primary-500 focus:ring-primary-500"
            />
            Emergency (Immediate assistance required)
          </label>
          <label className="flex items-center gap-3 text-sm text-neutral-900 cursor-pointer min-h-[36px]">
            <input
              type="radio"
              value="today"
              {...register('urgency')}
              className="w-4 h-4 text-primary-500 focus:ring-primary-500"
            />
            Today (Assistance needed within 24 hours)
          </label>
          <label className="flex items-center gap-3 text-sm text-neutral-900 cursor-pointer min-h-[36px]">
            <input
              type="radio"
              value="later"
              {...register('urgency')}
              className="w-4 h-4 text-primary-500 focus:ring-primary-500"
            />
            General inquiry / Planning ahead
          </label>
        </div>
        {errors.urgency && (
          <p className="mt-2 text-xs font-semibold text-error-600">{errors.urgency.message}</p>
        )}
      </fieldset>

      <FormField label="Full Name" htmlFor="name" required error={errors.name?.message}>
        <Input id="name" {...register('name')} placeholder="Enter your full name" error={!!errors.name} />
      </FormField>

      <FormField label="Phone Number" htmlFor="phone" required error={errors.phone?.message} helperText="10-digit mobile number">
        <Input id="phone" type="tel" {...register('phone')} placeholder="9876543210" error={!!errors.phone} />
      </FormField>

      <FormField label="Email Address (Optional)" htmlFor="email" error={errors.email?.message}>
        <Input id="email" type="email" {...register('email')} placeholder="yourname@example.com" error={!!errors.email} />
      </FormField>

      <FormField label="Message or Special Requests" htmlFor="message" error={errors.message?.message}>
        <Textarea id="message" {...register('message')} placeholder="Please describe any specific requirements or questions..." error={!!errors.message} />
      </FormField>

      <Button type="submit" size="lg" fullWidth isLoading={status === 'submitting'}>
        Send inquiry
      </Button>
    </form>
  );
}
