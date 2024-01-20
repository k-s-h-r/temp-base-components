import { tv, type VariantProps } from 'tailwind-variants'
import React, { ComponentProps, forwardRef, useMemo } from 'react'
import { createPolymorphicComponent } from '@/utils'
import { GridItem } from './GridItem'

export const variantsClass = tv(
  {
    base: '',
    variants: {
      gridType: {
        1: 'grid-cols-1',
        2: 'grid-cols-2',
        3: 'grid-cols-3',
        4: 'grid-cols-4',
        5: 'grid-cols-5',
        6: 'grid-cols-6',
        7: 'grid-cols-7',
        8: 'grid-cols-8',
        9: 'grid-cols-9',
        10: 'grid-cols-10',
        11: 'grid-cols-11',
        12: 'grid-cols-12',
        15: 'grid-cols-15',
        16: 'grid-cols-16',
        max_1fr: 'grid-cols-[max-content_1fr]',
        '1fr_max': 'grid-cols-[1fr_max-content]',
        auto_1fr: 'grid-cols-[auto_1fr]',
        '1fr_auto': 'grid-cols-[1fr_auto]',
      },
      gap: {
        px: 'gap-px',
        0: 'gap-0',
        2: 'gap-2',
        4: 'gap-4',
        6: 'gap-6',
        8: 'gap-8',
        10: 'gap-10',
        12: 'gap-12',
        base: 'gap-8',
        xs: 'gap-xs',
        s: 'gap-s',
        m: 'gap-m',
        l: 'gap-l',
        xl: 'gap-xl',
        '2xl': 'gap-2xl',
        '3xl': 'gap-3xl',
      },
      gridDisplay: {
        block: 'grid',
        inline: 'inline-grid',
      },
    },
    compoundVariants: [],
    defaultVariants: {
      gridType: 12,
      gap: 0,
      gridDisplay: 'block',
    },
  },
  { responsiveVariants: ['sm', 'md', 'lg'] },
)

type GridVariants = VariantProps<typeof variantsClass> & ComponentProps<'div'>

interface Props extends GridVariants {
  className?: string
}

export const _Grid = forwardRef<HTMLDivElement, Props & { as: any }>(({ className, as, ...props }, ref): JSX.Element => {
  const Element = as || 'div'
  const { gridType, gap, gridDisplay, ...rest } = props
  const styles = useMemo(() => variantsClass({ gridType, gap, gridDisplay, className }), [gridType, gap, gridDisplay, className])

  return <Element ref={ref} className={styles} {...rest} />
}) as any

_Grid.displayName = 'Grid'
_Grid.Item = GridItem

export const Grid = createPolymorphicComponent<
  'div',
  Props,
  {
    Item: typeof GridItem
  }
>(_Grid)
