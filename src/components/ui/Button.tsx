'use client';

import { forwardRef, type ButtonHTMLAttributes } from 'react';
import { Loader2 } from 'lucide-react';
import { cn } from '@/lib/utils';

type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'success' | 'warning';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  isLoading?: boolean;
  fullWidth?: boolean;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    'bg-primary-500 text-white hover:bg-primary-700 active:bg-primary-900 active:scale-[0.98] disabled:bg-neutral-200 disabled:text-neutral-500',
  secondary:
    'bg-primary-100 text-primary-500 border border-primary-300 hover:bg-primary-200 hover:text-primary-700 active:scale-[0.98] disabled:bg-neutral-100 disabled:text-neutral-500 disabled:border-neutral-300',
  ghost:
    'bg-transparent text-neutral-700 border border-neutral-300 hover:bg-neutral-50 hover:border-neutral-400 active:scale-[0.98] disabled:text-neutral-500',
  success:
    'bg-success-600 text-white hover:brightness-110 active:scale-[0.98] disabled:bg-neutral-200 disabled:text-neutral-500',
  warning:
    'bg-warning-600 text-white hover:brightness-110 active:scale-[0.98] disabled:bg-neutral-200 disabled:text-neutral-500',
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: 'px-4 py-2 text-sm min-h-[32px]',
  md: 'px-6 py-2.5 text-base min-h-[40px]',
  lg: 'px-8 py-3.5 text-base min-h-[48px]',
};

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = 'primary',
      size = 'md',
      isLoading = false,
      fullWidth = false,
      className,
      children,
      disabled,
      ...props
    },
    ref,
  ) => {
    return (
      <button
        ref={ref}
        className={cn(
          'inline-flex items-center justify-center gap-2 font-body font-semibold rounded-xs transition-all cursor-pointer',
          'focus-visible:outline-2 focus-visible:outline-primary-500 focus-visible:outline-offset-2',
          'disabled:cursor-not-allowed disabled:opacity-60',
          variantStyles[variant],
          sizeStyles[size],
          fullWidth && 'w-full',
          className,
        )}
        disabled={disabled || isLoading}
        aria-busy={isLoading}
        {...props}
      >
        {isLoading && <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />}
        {isLoading ? 'Loading…' : children}
      </button>
    );
  },
);

Button.displayName = 'Button';
export { Button };
export type { ButtonProps };
