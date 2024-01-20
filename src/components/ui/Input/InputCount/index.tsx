import React, { ComponentProps, ComponentPropsWithRef, forwardRef, useMemo } from 'react'
import { createPolymorphicComponent } from '@/utils'
import { tv, cnBase, type VariantProps, type ClassValue } from 'tailwind-variants'
import { BaseBox } from '../../BaseBox'

export const variantsClass = tv(
  {
    base: 'text-xs text-text-description',
    variants: {
      variant: {
        alert: 'text-text-alert',
      },
      isError: {
        true: 'text-text-alert',
      },
      isDisabled: {
        true: '',
      },
    },
    compoundVariants: [
      {
        isError: true,
        isDisabled: true,
        className: '',
      },
    ],
    defaultVariants: {},
  },
  // { responsiveVariants: ['sm', 'md', 'lg'] },
)

type InputCountVariants = VariantProps<typeof variantsClass> & ComponentPropsWithRef<'p'>

export interface InputCountProps extends InputCountVariants {
  limit: number
  count?: number
}

export const _InputCount = forwardRef<HTMLParagraphElement, InputCountProps & { as: any }>(
  ({ as, className, variant, isError, isDisabled, limit, count, ...props }, ref): JSX.Element => {
    const styles = useMemo(
      () => variantsClass({ variant, isError, isDisabled, className }),
      [variant, isError, isDisabled, className],
    )

    return (
      <BaseBox as={as || 'p'} className={styles} {...props}>
        {count || 0}/{limit}
      </BaseBox>
    )
  },
)

_InputCount.displayName = 'InputCount'

export const InputCount = createPolymorphicComponent<'p', InputCountProps>(_InputCount)
