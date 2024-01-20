import { tv, type VariantProps } from 'tailwind-variants'
import React, { ComponentProps, forwardRef, useMemo } from 'react'
import { createPolymorphicComponent } from '@/utils'

export const stackSpaceVariants = {
  px: 'stack-space-px',
  0: 'stack-space-0',
  1: 'stack-space-1',
  2: 'stack-space-2',
  4: 'stack-space-4',
  6: 'stack-space-6',
  8: 'stack-space-8',
  10: 'stack-space-10',
  12: 'stack-space-12',
  14: 'stack-space-14',
  16: 'stack-space-16',
  xs: 'stack-space-xs',
  s: 'stack-space-s',
  m: 'stack-space-m',
  l: 'stack-space-l',
  xl: 'stack-space-xl',
  '2xl': 'stack-space-2xl',
  '3xl': 'stack-space-3xl',
}
export const stackDirectionVariants = {
  vertical: 'space-y-[--stack-space]',
  horizontal: 'space-x-[--stack-space]',
}

export const variantsClass = tv(
  {
    base: '',
    variants: {
      space: stackSpaceVariants,
      direction: stackDirectionVariants,
      isFlex: {
        true: '',
        false: '',
      },
    },
    compoundVariants: [
      {
        isFlex: true,
        direction: 'vertical',
        class: 'flex flex-col',
      },
      {
        isFlex: true,
        direction: 'horizontal',
        class: 'flex flex-row',
      },
    ],
    defaultVariants: {
      direction: 'vertical',
      isFlex: true,
      space: 'm',
    },
  },
  { responsiveVariants: ['sm', 'md', 'lg'] },
)

type StackVariants = VariantProps<typeof variantsClass> & ComponentProps<'div'>

export interface StackProps extends StackVariants {
  //
}

const _Stack = forwardRef<HTMLDivElement, StackProps & { as: any }>(({ className, as, ...props }, ref): JSX.Element => {
  const Element = as || 'div'

  const { direction, space, isFlex, ...rest } = props
  const styles = useMemo(() => variantsClass({ direction, space, isFlex, className }), [direction, space, isFlex, className])

  return <Element ref={ref} className={styles} {...rest} />
})

_Stack.displayName = 'Stack'

export const Stack = createPolymorphicComponent<'div', StackProps>(_Stack)
