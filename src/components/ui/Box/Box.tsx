import { tv, type VariantProps } from 'tailwind-variants'
import React, { ComponentProps, forwardRef, useMemo } from 'react'
import { createPolymorphicComponent } from '@/utils'
import { BaseBox } from '../BaseBox'

export const variantsClass = tv(
  {
    base: 'border border-transparent',
    variants: {
      color: {
        primary: 'bg-bg-primary',
        secondary: 'bg-bg-secondary',
        teriary: 'bg-bg-tertiary',

        // 'status-success': 'var(--status-success)',
        // 'status-alert': 'var(--status-alert)',
        // 'status-warning': 'var(--status-warning)',
      },
      border: {},
      padding: {
        px: 'p-px',
        0: 'p-0',
        2: 'p-2',
        4: 'p-4',
        6: 'p-6',
        8: 'p-8',
        10: 'p-10',
        12: 'p-12',
      },
      rounded: {
        s: 'rounded',
        m: 'rounded-lg',
        l: 'rounded-xl',
        full: 'rounded-full',
        none: 'rounded-none',
      },
    },
    compoundVariants: [],
    defaultVariants: {
      rounded: 'm',
      padding: 4,
    },
  },
  { responsiveVariants: ['sm', 'md', 'lg'] },
)

type BoxVariants = VariantProps<typeof variantsClass> & ComponentProps<'div'>

export interface Props extends BoxVariants {
  children?: React.ReactNode
}

export const _Box = forwardRef<HTMLDivElement, Props & { as: any }>(
  ({ as, className, color, border, padding, rounded, ...props }, ref): JSX.Element => {
    const styles = useMemo(
      () => variantsClass({ color, border, padding, rounded, className }),
      [color, border, padding, rounded, className],
    )

    return <BaseBox as={as || 'div'} ref={ref} className={styles} {...props} />
  },
)

_Box.displayName = 'Box'

export const Box = createPolymorphicComponent<'div', Props>(_Box)
