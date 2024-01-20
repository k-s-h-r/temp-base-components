import { tv, type VariantProps } from 'tailwind-variants'
import React, { ComponentProps, forwardRef, useMemo } from 'react'
import { createPolymorphicComponent } from '@/utils'

export const headingSizeVariant = {
  '2xl': 'text-[3.563rem]',
  xl: 'text-[2.813rem] leading-snug',
  l: 'text-[2rem] font-medium md:text-[2.25rem] md:font-normal',
  m: 'text-[1.75rem] font-medium md:text-[2rem] md:font-normal',
  s: 'text-[1.5rem] font-medium md:text-[1.75rem] md:font-normal',
  xs: 'text-[1.25rem] font-medium md:text-[1.5rem] md:font-normal',
  '2xs': 'text-[1rem] font-medium leading-relaxed md:text-[1.25rem] md:font-normal md:leading-normal',
  '3xs': 'text-xs font-medium leading-relaxed md:text-sm md:font-normal md:leading-normal',
}

export const variantsClass = tv(
  {
    base: 'leading-normal tracking-wider text-text-body',
    variants: {
      size: headingSizeVariant,
      color: {
        base: '',
        white: 'text-white',
        black: 'text-sumi-900',
      },
    },
    compoundVariants: [],
    defaultVariants: {},
  },
  // { responsiveVariants: ['sm', 'md', 'lg'] }
)

type HeadingVariants = VariantProps<typeof variantsClass> & ComponentProps<'p'>

export interface HeadingProps extends HeadingVariants {
  children?: React.ReactNode
}

export const _Heading = forwardRef<HTMLHeadingElement, HeadingProps & { as: any }>(
  ({ as, className, size, color, ...props }, ref): JSX.Element => {
    const Element = as || 'p'
    const styles = useMemo(() => variantsClass({ size, color, className }), [size, color, className])

    return <Element ref={ref} className={styles} {...props} />
  },
)

_Heading.displayName = 'Heading'

export const Heading = createPolymorphicComponent<'p', HeadingProps>(_Heading)
