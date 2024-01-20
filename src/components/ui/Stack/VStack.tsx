import { tv, type VariantProps } from 'tailwind-variants'
import React, { ComponentProps, forwardRef, useMemo } from 'react'
import { createPolymorphicComponent } from '@/utils'
import { stackSpaceVariants } from './Stack'

export const variantsClass = tv(
  {
    base: 'flex flex-col space-y-[--stack-space]',
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

export interface VstackProps extends StackVariants {
  //
}

const _Stack = forwardRef<HTMLDivElement, VstackProps & { as: any }>(({ className, as, ...props }, ref): JSX.Element => {
  const Element = as || 'div'
  const { space, ...rest } = props
  const styles = useMemo(() => variantsClass({ space, className }), [space, className])

  return <Element ref={ref} className={styles} {...rest} />
})

_Stack.displayName = 'VStack'

export const VStack = createPolymorphicComponent<'div', VstackProps>(_Stack)
