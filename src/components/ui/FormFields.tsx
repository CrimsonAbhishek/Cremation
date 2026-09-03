'use client';

import { forwardRef, type InputHTMLAttributes, type TextareaHTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

/* ── Input ──────────────────────────────────────────────────── */

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: boolean;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, error, ...props }, ref) => {
    return (
      <input
        ref={ref}
        className={cn(
          'w-full min-h-[40px] px-4 py-3 rounded-sm border bg-white font-body text-base text-neutral-900',
          'transition-colors duration-150',
          'placeholder:text-neutral-500',
          'hover:border-neutral-400',
          'focus:border-primary-500 focus:border-2 focus:bg-neutral-50 focus:outline-none',
          'disabled:bg-neutral-100 disabled:text-neutral-500 disabled:cursor-not-allowed disabled:opacity-60',
          error
            ? 'border-2 border-error-600'
            : 'border-neutral-300',
          className,
        )}
        {...props}
      />
    );
  },
);
Input.displayName = 'Input';

/* ── Textarea ───────────────────────────────────────────────── */

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  error?: boolean;
}

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, error, ...props }, ref) => {
    return (
      <textarea
        ref={ref}
        className={cn(
          'w-full min-h-[120px] max-h-[300px] px-4 py-3 rounded-sm border bg-white font-body text-base text-neutral-900 resize-y',
          'transition-colors duration-150',
          'placeholder:text-neutral-500',
          'hover:border-neutral-400',
          'focus:border-primary-500 focus:border-2 focus:bg-neutral-50 focus:outline-none',
          'disabled:bg-neutral-100 disabled:text-neutral-500 disabled:cursor-not-allowed disabled:opacity-60',
          error
            ? 'border-2 border-error-600'
            : 'border-neutral-300',
          className,
        )}
        {...props}
      />
    );
  },
);
Textarea.displayName = 'Textarea';

/* ── FormField (label + input + helper/error) ───────────────── */

interface FormFieldProps {
  label: string;
  htmlFor: string;
  required?: boolean;
  error?: string;
  helperText?: string;
  children: React.ReactNode;
  className?: string;
}

function FormField({
  label,
  htmlFor,
  required,
  error,
  helperText,
  children,
  className,
}: FormFieldProps) {
  return (
    <div className={cn('mb-6', className)}>
      <label
        htmlFor={htmlFor}
        className="block mb-2 text-sm font-semibold font-body text-neutral-900"
      >
        {label}
        {required && <span className="text-error-600 ml-0.5" aria-hidden="true">*</span>}
      </label>
      {children}
      {error && (
        <p
          className="mt-1 text-xs font-semibold text-error-600 flex items-center gap-1"
          role="alert"
          id={`${htmlFor}-error`}
        >
          <svg className="w-3.5 h-3.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
          </svg>
          {error}
        </p>
      )}
      {helperText && !error && (
        <p
          className="mt-1 text-xs text-neutral-600"
          id={`${htmlFor}-help`}
        >
          {helperText}
        </p>
      )}
    </div>
  );
}

export { Input, Textarea, FormField };
export type { InputProps, TextareaProps, FormFieldProps };
