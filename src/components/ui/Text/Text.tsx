import { tv, type VariantProps } from 'tailwind-variants'
import React, { ComponentProps, forwardRef, useMemo } from 'react'
import { createPolymorphicComponent } from '@/utils'

export const variantsClass = tv(
  {
    base: 'text-text-body',
    variants: {
      size: {
        bodyL: 'text-body-l',
        bodyM: 'text-body-m',
        labelL: 'text-label-l',
        labelM: 'text-label-m',
        noteL: 'text-note-l',
        noteM: 'text-note-m',
      },
      color: {
        base: '',
        white: 'text-white',
        black: 'text-sumi-900',
      },
      weight: {
        r: 'font-normal',
        m: 'font-medium',
        b: 'font-bold',
      },
      lineHeight: {
        s: 'leading-s',
        m: 'leading-m',
        l: 'leading-l',
      },
      letterSpacing: {
        s: 'tracking-s',
        m: 'tracking-m',
      },
    },
    compoundVariants: [],
    defaultVariants: {
      size: 'bodyL',
    },
  },
  { responsiveVariants: ['sm', 'md', 'lg'] },
)

type TextVariants = VariantProps<typeof variantsClass> & ComponentProps<'p'>

export interface TextProps extends TextVariants {
  children?: React.ReactNode
}

export const _Text = forwardRef<HTMLParagraphElement, TextProps & { as: any }>(
  ({ as, className, size, color, ...props }, ref): JSX.Element => {
    const Element = as || 'p'
    const styles = useMemo(() => variantsClass({ size, color, className }), [size, color, className])

    return <Element ref={ref} className={styles} {...props} />
  },
)

_Text.displayName = 'Text'

export const Text = createPolymorphicComponent<'p', TextProps>(_Text)
