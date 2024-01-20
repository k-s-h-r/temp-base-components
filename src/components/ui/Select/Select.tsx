import React, { ComponentProps, ComponentPropsWithRef, forwardRef, useMemo } from 'react'
import { createPolymorphicComponent } from '@/utils'
import { tv, type VariantProps, TVReturnType } from 'tailwind-variants'

export const variantsClass = tv(
  {
    base: [
      'relative z-10',
      'appearance-none rounded-lg border border-border-field bg-bg-primary p-4 pr-14 text-text-body',
      'disabled:border-border-disabled disabled:bg-bg-secondary disabled:text-text-disabled',
      'focus:outline focus:outline-2 focus:outline-bg-primary focus:ring-4 focus:ring-border-focused',
      'placeholder:text-text-placeholder',
      'bg-[size:1.3em] bg-[position:right_1rem_center] bg-no-repeat [&:not([size],[multiple])]:bg-[image:var(--select-arrow)]',
    ],
    variants: {
      variant: {
        alert: ['border-2 border-border-alert', 'focus:border-border-alert'],
      },
      rounded: {
        s: 'rounded',
        m: '',
        l: 'rounded-xl',
        full: 'rounded-full',
      },
      maxW: {
        s: 'w-full max-w-[10rem]',
        m: 'w-full max-w-[15rem]',
        l: 'w-full max-w-[20rem]',
      },
    },
    compoundVariants: [],
    defaultVariants: {
      rounded: 'm',
    },
  },
  { responsiveVariants: ['sm', 'md', 'lg'] },
)

type SelectVariants = VariantProps<typeof variantsClass> & ComponentPropsWithRef<'select'>

export interface SelectProps extends SelectVariants {
  isError?: boolean
  isRequired?: boolean
}

export const _Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ className, variant, rounded, isError, isRequired, maxW, ...props }, ref): JSX.Element => {
    const styles = useMemo(
      () => variantsClass({ variant: isError ? 'alert' : variant, rounded, maxW, className }),
      [isError, variant, rounded, maxW, className],
    )

    return (
      <select
        ref={ref}
        // aria-invalid={isError || undefined}
        data-error={isError || undefined}
        required={isRequired}
        className={styles}
        {...props}
      />
    )
  },
)

_Select.displayName = 'Select'

export const Select = _Select
