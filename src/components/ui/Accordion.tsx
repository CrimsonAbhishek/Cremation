'use client';

import * as AccordionPrimitive from '@radix-ui/react-accordion';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

const Accordion = AccordionPrimitive.Root;

function AccordionItem({
  className,
  ...props
}: AccordionPrimitive.AccordionItemProps) {
  return (
    <AccordionPrimitive.Item
      className={cn('border-b border-neutral-200', className)}
      {...props}
    />
  );
}

function AccordionTrigger({
  className,
  children,
  ...props
}: AccordionPrimitive.AccordionTriggerProps) {
  return (
    <AccordionPrimitive.Header asChild>
      <h3>
        <AccordionPrimitive.Trigger
          className={cn(
            'flex w-full items-center justify-between py-4 text-left text-lg font-semibold font-display text-neutral-900 cursor-pointer',
            'hover:text-primary-700 transition-colors',
            'focus-visible:outline-2 focus-visible:outline-primary-500 focus-visible:outline-offset-2',
            'data-[state=open]:text-primary-700',
            '[&[data-state=open]>svg]:rotate-180',
            className,
          )}
          {...props}
        >
          {children}
          <ChevronDown
            className="h-5 w-5 text-primary-500 shrink-0 transition-transform duration-200"
            aria-hidden="true"
          />
        </AccordionPrimitive.Trigger>
      </h3>
    </AccordionPrimitive.Header>
  );
}

function AccordionContent({
  className,
  children,
  ...props
}: AccordionPrimitive.AccordionContentProps) {
  return (
    <AccordionPrimitive.Content
      className={cn(
        'overflow-hidden text-base text-neutral-700 leading-relaxed',
        'data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down',
        className,
      )}
      {...props}
    >
      <div className="pb-4">{children}</div>
    </AccordionPrimitive.Content>
  );
}

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
