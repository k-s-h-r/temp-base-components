import React, { ComponentProps, ComponentPropsWithRef, forwardRef, useMemo } from 'react'
import { createPolymorphicComponent } from '@/utils'
import { tv, type VariantProps, TVReturnType } from 'tailwind-variants'
// import { Box, createPolymorphicComponent } from "@mantine/core";

export const variantsClass = tv(
  {
    base: [
      'appearance-none rounded-lg border border-border-field bg-bg-primary p-4 text-text-body',
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
      },
    },
    compoundVariants: [],
    defaultVariants: {
      rounded: 'm',
    },
  },
  { responsiveVariants: ['sm', 'md', 'lg'] },
)

type TextareaVariants = VariantProps<typeof variantsClass> & ComponentPropsWithRef<'textarea'>

export interface TextareaProps extends TextareaVariants {
  isError?: boolean
  isRequired?: boolean
}

export const _Textarea = forwardRef<HTMLTextAreaElement, TextareaProps & { as: any }>(
  ({ className, as, variant, rounded, maxW, isError, isRequired, ...props }, ref): JSX.Element => {
    const Element = as || 'textarea'
    const styles = useMemo(
      () => variantsClass({ variant: isError ? 'alert' : variant, rounded, maxW, className }),
      [isError, variant, rounded, maxW, className],
    )

    return (
      <Element
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

_Textarea.displayName = 'Textarea'

export const Textarea = createPolymorphicComponent<'textarea', TextareaProps>(_Textarea)
