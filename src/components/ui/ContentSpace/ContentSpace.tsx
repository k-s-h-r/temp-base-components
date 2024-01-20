import { tv, type VariantProps } from 'tailwind-variants'
import React, { ComponentProps, forwardRef, useMemo } from 'react'
import { createPolymorphicComponent } from '@/utils'

export const variantsClass = tv({
  base: 'content-space',
  variants: {},
  compoundVariants: [],
  defaultVariants: {},
})

type ContentSpaceVariants = VariantProps<typeof variantsClass> & ComponentProps<'div'>

export interface Props extends ContentSpaceVariants {
  children?: React.ReactNode
}

export const _ContentSpace = forwardRef<HTMLDivElement, Props & { as: any }>(({ as, className, ...props }, ref): JSX.Element => {
  const Element = as || 'div'
  const styles = useMemo(() => variantsClass({ className }), [className])

  return <Element ref={ref} className={styles} {...props} />
})

_ContentSpace.displayName = 'ContentSpace'

export const ContentSpace = createPolymorphicComponent<'div', Props>(_ContentSpace)
