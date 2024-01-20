import { tv, type VariantProps } from 'tailwind-variants'
import React, { ComponentProps, forwardRef, useMemo } from 'react'
import { createPolymorphicComponent } from '@/utils'
import { stackSpaceVariants } from './Stack'
import { Slot } from '../Slot'

export const variantsClass = tv(
  {
    base: 'flex flex-row space-x-[--stack-space]',
    variants: {
      space: stackSpaceVariants,
    },
    compoundVariants: [],
    defaultVariants: {
      space: 'm',
    },
  },
  { responsiveVariants: ['sm', 'md', 'lg'] },
)

type StackVariants = VariantProps<typeof variantsClass> & ComponentProps<'div'>

export interface HstackProps extends StackVariants {
  //
  asChild?: boolean
}

const _Stack = forwardRef<HTMLDivElement, HstackProps & { as: any }>(({ className, as, asChild, ...props }, ref): JSX.Element => {
  const Element = asChild ? Slot : as || 'div'
  const { space, ...rest } = props
  const styles = useMemo(() => variantsClass({ space, className }), [space, className])

  return <Element ref={ref} className={styles} {...rest} />
})

_Stack.displayName = 'HStack'

export const HStack = createPolymorphicComponent<'div', HstackProps>(_Stack)
