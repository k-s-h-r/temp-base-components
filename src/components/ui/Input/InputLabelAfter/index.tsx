import React, { ComponentProps, ComponentPropsWithRef, forwardRef, useMemo } from 'react'
import { createPolymorphicComponent } from '@/utils'
import { tv, cnBase, type VariantProps, type ClassValue } from 'tailwind-variants'

export const variantsClass = tv(
  {
    base: 'ml-2 text-xs text-text-description',
    variants: {
      variant: {},
      isRequired: {
        true: 'text-text-alert',
      },
      isDisabled: {
        true: 'text-text-disabled',
      },
    },
  },
  // { responsiveVariants: ['sm', 'md', 'lg'] },
)

type InputLabelAfterVariants = VariantProps<typeof variantsClass> & ComponentPropsWithRef<'span'>

export interface InputLabelAfterProps extends InputLabelAfterVariants {}

export const _InputLabelAfter = forwardRef<HTMLSpanElement, InputLabelAfterProps & { as: any }>(
  ({ children, as, className, variant, isRequired, isDisabled, ...props }, ref): JSX.Element => {
    const Element = as || 'span'
    const styles = useMemo(
      () => variantsClass({ variant, isRequired, isDisabled, className }),
      [variant, isRequired, isDisabled, className],
    )

    return (
      <Element ref={ref} className={styles} {...props}>
        {children}
      </Element>
    )
  },
)

_InputLabelAfter.displayName = 'InputLabelAfter'

export const InputLabelAfter = createPolymorphicComponent<'span', InputLabelAfterProps>(_InputLabelAfter)
