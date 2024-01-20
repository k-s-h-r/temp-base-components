import { tv, type VariantProps } from 'tailwind-variants'
import React, { ComponentProps, forwardRef, useMemo } from 'react'
import { createPolymorphicComponent } from '@/utils'

export const variantsClass = tv(
  {
    // max-w-5xl: 64rem
    base: 'w-full',
    variants: {
      maxW: {
        base: 'max-w-[69rem]',
        full: 'max-w-full',
      },
      marginX: {
        auto: 'mx-auto',
      },
      paddingX: {
        base: 'px-4 md:px-10',
        0: 'px-0',
        4: 'px-4',
        6: 'px-6',
        8: 'px-8',
        10: 'px-10',
      },
      position: {},
    },
    compoundVariants: [],
    defaultVariants: {},
  },
  { responsiveVariants: ['sm', 'md', 'lg'] },
)
const variantGroup = {
  full: {
    maxW: 'full',
  },
  normal: {
    maxW: 'base',
    marginX: 'auto',
    paddingX: {
      initial: 4,
      md: 10,
    },
  },
}

type ContainerVariantsGroup = VariantProps<typeof variantsClass> & {
  className?: string
  variant?: keyof typeof variantGroup
}
export const containerClass = ({ className, variant = 'normal', ...props }: ContainerVariantsGroup) => {
  // propsからundefinedを除外
  const _props = Object.fromEntries(Object.entries(props).filter(([, v]) => v !== undefined))
  const variantGroupClass = (variantGroup[variant] as VariantProps<typeof variantsClass>) || {}
  return variantsClass({ ...variantGroupClass, ..._props, className })
}

type ContainerVariants = ContainerVariantsGroup & ComponentProps<'div'>

interface Props extends ContainerVariants {}

const _Container = forwardRef<HTMLDivElement, Props & { as: any }>(
  ({ className, as, variant, maxW, marginX, paddingX, position, ...props }, ref): JSX.Element => {
    const Element = as || 'div'
    const classString = containerClass({ variant, maxW, marginX, paddingX, position, className })

    return <Element ref={ref} className={classString} {...props} />
  },
)

_Container.displayName = 'Container'

export const Container = createPolymorphicComponent<'div', Props>(_Container)
