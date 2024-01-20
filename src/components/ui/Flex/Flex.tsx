import { tv, type VariantProps } from 'tailwind-variants'
import React, { ComponentProps, forwardRef, useMemo } from 'react'
import { createPolymorphicComponent } from '@/utils'
import { FlexItem } from './FlexItem'
import { FlexWrapper } from './FlexWrapper'

export const variantsClass = tv(
  {
    base: '-m-[--flex-gap] flex-wrap',
    variants: {
      gap: {
        px: 'flex-gap-px',
        0: 'flex-gap-0',
        2: 'flex-gap-2',
        4: 'flex-gap-4',
        6: 'flex-gap-6',
        8: 'flex-gap-8',
        10: 'flex-gap-10',
        12: 'flex-gap-12',
        base: 'flex-gap-8',
        xs: 'flex-gap-xs', // 4px
        s: 'flex-gap-s', // 8px
        m: 'flex-gap-m', // 16px
        l: 'flex-gap-l', // 24px
        xl: 'flex-gap-xl', // 40px
        '2xl': 'flex-gap-2xl', // 64px
        '3xl': 'flex-gap-3xl', // 104px
      },
      flexDisplay: {
        block: 'flex',
        inline: 'inline-flex',
      },
    },
    compoundVariants: [],
    defaultVariants: {
      gap: 0,
      flexDisplay: 'block',
    },
  },
  { responsiveVariants: ['sm', 'md', 'lg'] },
)

type FlexVariants = VariantProps<typeof variantsClass> & ComponentProps<'div'>

interface Props extends FlexVariants {
  className?: string
}

export const _Flex = forwardRef<HTMLDivElement, Props & { as: any }>(({ className, as, ...props }, ref): JSX.Element => {
  const Element = as || 'div'
  const { gap, flexDisplay, ...rest } = props
  const styles = useMemo(() => variantsClass({ gap, flexDisplay, className }), [gap, flexDisplay, className])

  return <Element ref={ref} className={styles} {...rest} />
}) as any

_Flex.displayName = 'Flex'
_Flex.Item = FlexItem
_Flex.Wrapper = FlexWrapper

export const Flex = createPolymorphicComponent<
  'div',
  Props,
  {
    Item: typeof FlexItem
    Wrapper: typeof FlexWrapper
  }
>(_Flex)
