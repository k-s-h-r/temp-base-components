import React, { ComponentProps, ComponentPropsWithRef, forwardRef, useMemo } from 'react'
import { createPolymorphicComponent } from '@/utils'
import { tv, type VariantProps, TVReturnType } from 'tailwind-variants'

export const variantsClass = tv(
  {
    base: [
      'w-full appearance-none rounded-lg border border-border-field bg-bg-primary p-4 text-text-body',
      'disabled:border-border-disabled disabled:bg-bg-secondary disabled:text-text-disabled',
      'focus:outline focus:outline-2 focus:outline-bg-primary focus:ring-4 focus:ring-border-focused',
      'placeholder:text-text-placeholder',
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
        s: 'max-w-[10rem]',
        m: 'max-w-[15rem]',
        l: 'max-w-[20rem]',
        tel: '',
      },
    },
    compoundVariants: [],
    defaultVariants: {
      rounded: 'm',
    },
  },
  { responsiveVariants: ['sm', 'md', 'lg'] },
)

type TextInputVariants = VariantProps<typeof variantsClass> & ComponentPropsWithRef<'input'>

export interface TextInputProps extends TextInputVariants {
  isError?: boolean
  isRequired?: boolean
}

export const _TextInput = forwardRef<HTMLInputElement, TextInputProps>(
  ({ className, type, variant, rounded, maxW, isError, isRequired, ...props }, ref): JSX.Element => {
    const _type = type || 'text'
    const styles = useMemo(
      () => variantsClass({ variant: isError ? 'alert' : variant, rounded, maxW, className }),
      [isError, variant, rounded, maxW, className],
    )

    return (
      <input
        type={_type}
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

_TextInput.displayName = 'TextInput'

export const TextInput = _TextInput
