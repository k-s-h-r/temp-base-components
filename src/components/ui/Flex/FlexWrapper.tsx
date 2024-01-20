import { tv, type VariantProps } from 'tailwind-variants'
import React, { ComponentProps, forwardRef, useMemo } from 'react'
import { createPolymorphicComponent } from '@/utils'

export const variantsClass = tv(
  {
    base: 'flow-root',
    variants: {},
    compoundVariants: [],
    defaultVariants: {},
  },
  { responsiveVariants: ['sm', 'md', 'lg'] },
)

type FlexVariants = VariantProps<typeof variantsClass> & ComponentProps<'div'>

interface Props extends FlexVariants {
  className?: string
}

export const _Flex = forwardRef<HTMLDivElement, Props & { as: any }>(({ className, as, ...props }, ref): JSX.Element => {
  const Element = as || 'div'
  const { ...rest } = props
  const styles = useMemo(() => variantsClass({ className }), [className])

  return <Element ref={ref} className={styles} {...rest} />
})

_Flex.displayName = 'FlexWrapper'

export const FlexWrapper = createPolymorphicComponent<'div', Props>(_Flex)
