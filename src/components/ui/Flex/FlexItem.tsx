import { tv, type VariantProps } from 'tailwind-variants'
import React, { ComponentProps, forwardRef, useMemo } from 'react'
import { createPolymorphicComponent } from '@/utils'

export const variantsClass = tv(
  {
    base: 'p-[--flex-gap]',
    variants: {
      span: {
        1: 'w-1/12',
        2: 'w-2/12',
        3: 'w-3/12',
        4: 'w-4/12',
        5: 'w-5/12',
        6: 'w-6/12',
        7: 'w-7/12',
        8: 'w-8/12',
        9: 'w-9/12',
        10: 'w-10/12',
        11: 'w-11/12',
        12: 'w-full',
        auto: 'w-auto',
      },
    },
    compoundVariants: [],
    defaultVariants: {},
  },
  { responsiveVariants: ['sm', 'md', 'lg'] },
)

type FlexVariants = VariantProps<typeof variantsClass> & ComponentProps<'div'>

interface Props extends FlexVariants {
  className?: string
  wrapperClassName?: string
  as?: any
  innerAs?: any
}

export const _Flex = forwardRef<HTMLDivElement, Props>(
  ({ children, className, wrapperClassName, as, innerAs, ...props }, ref): JSX.Element => {
    const Element = as || 'div'
    const InnerElement = innerAs || 'div'
    const { span, ...rest } = props
    const styles = useMemo(() => variantsClass({ span, className: wrapperClassName }), [span, wrapperClassName])

    return (
      <Element ref={ref} className={styles}>
        <InnerElement {...rest} className={className}>
          {children}
        </InnerElement>
      </Element>
    )
  },
)

_Flex.displayName = 'FlexItem'

export const FlexItem = createPolymorphicComponent<'div', Props>(_Flex)
