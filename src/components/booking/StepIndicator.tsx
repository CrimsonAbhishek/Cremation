'use client';

import { Check } from 'lucide-react';
import { cn } from '@/lib/utils';

interface StepIndicatorProps {
  currentStep: number;
  totalSteps: number;
  steps: string[];
}

export function StepIndicator({ currentStep, steps }: StepIndicatorProps) {
  return (
    <div className="w-full mb-8">
      {/* Mobile step label */}
      <div className="flex justify-between items-center mb-3 sm:hidden text-sm font-semibold text-neutral-900 font-body">
        <span>Step {currentStep} of {steps.length}</span>
        <span className="text-primary-700">{steps[currentStep - 1]}</span>
      </div>

      {/* Mobile progress bar */}
      <div className="w-full bg-neutral-200 h-2 rounded-full overflow-hidden sm:hidden" role="progressbar" aria-valuenow={currentStep} aria-valuemin={1} aria-valuemax={steps.length}>
        <div
          className="bg-primary-500 h-full transition-all duration-300"
          style={{ width: `${(currentStep / steps.length) * 100}%` }}
        />
      </div>

      {/* Desktop step indicator */}
      <nav aria-label="Booking steps" className="hidden sm:block">
        <ol className="flex items-center justify-between w-full">
          {steps.map((label, idx) => {
            const stepNum = idx + 1;
            const isCompleted = stepNum < currentStep;
            const isCurrent = stepNum === currentStep;

            return (
              <li key={label} className="flex-1 flex items-center relative">
                <div className="flex flex-col items-center flex-1">
                  <div
                    className={cn(
                      'w-9 h-9 rounded-full flex items-center justify-center font-semibold text-sm transition-colors z-10',
                      isCompleted && 'bg-success-600 text-white',
                      isCurrent && 'bg-primary-500 text-white ring-4 ring-primary-100',
                      !isCompleted && !isCurrent && 'bg-neutral-200 text-neutral-600',
                    )}
                  >
                    {isCompleted ? <Check className="w-5 h-5" aria-hidden="true" /> : stepNum}
                  </div>
                  <span
                    className={cn(
                      'mt-2 text-xs font-semibold font-body text-center max-w-[90px]',
                      isCurrent && 'text-primary-700 font-bold',
                      isCompleted && 'text-neutral-900',
                      !isCompleted && !isCurrent && 'text-neutral-500',
                    )}
                  >
                    {label}
                  </span>
                </div>

                {/* Connecting bar */}
                {idx < steps.length - 1 && (
                  <div
                    className={cn(
                      'absolute top-4 left-[50%] right-[-50%] h-[2px] -z-0',
                      stepNum < currentStep ? 'bg-success-600' : 'bg-neutral-200',
                    )}
                    aria-hidden="true"
                  />
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </div>
  );
}
