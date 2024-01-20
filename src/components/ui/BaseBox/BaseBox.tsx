import { tv, type VariantProps } from 'tailwind-variants'
import React, { ComponentProps, forwardRef, useMemo } from 'react'
import { createPolymorphicComponent } from '@/utils'

export const variantsClass = tv(
  {
    base: '',
    variants: {},
    compoundVariants: [],
    defaultVariants: {},
  },
  // { responsiveVariants: ['sm', 'md', 'lg'] },
)

type BaseBoxVariants = VariantProps<typeof variantsClass> & ComponentProps<'div'>

export interface Props extends BaseBoxVariants {
  children?: React.ReactNode
}

export const _BaseBox = forwardRef<HTMLDivElement, Props & { as: any }>(({ className, as, ...props }, ref): JSX.Element => {
  const Element = as || 'div'
  const styles = useMemo(() => variantsClass({ ...{}, className }), [className])

  return <Element ref={ref} className={styles} {...props} />
})

_BaseBox.displayName = 'BaseBox'

export const BaseBox = createPolymorphicComponent<'div', Props>(_BaseBox)
