import React, { ComponentProps, ComponentPropsWithRef, forwardRef, useMemo } from 'react'
import { createPolymorphicComponent } from '@/utils'
import { tv, type VariantProps, TVReturnType } from 'tailwind-variants'

export const variantsClass = tv(
  {
    base: [
      'inline-flex items-center justify-center border border-transparent text-button',
      'focus:outline focus:outline-2 focus:outline-bg-primary focus:ring-4 focus:ring-border-focused',
    ],
    variants: {
      variant: {
        primary: ['bg-button-normal text-text-onfill', 'hover:bg-button-hover', 'disabled:bg-button-disabled'],
        secondary: [
          'border-button-normal bg-transparent text-button-normal',
          'hover:border-button-hover hover:bg-button-whitehover hover:text-button-hover',
          'focus:border-button-hover focus:text-button-hover',
          'disabled:border-button-disabled disabled:text-button-disabled disabled:bg-transparent',
        ],
        teriary: [
          'bg-transparent text-button-normal underline underline-offset-4',
          'hover:text-button-hover',
          'focus:text-button-hover',
          'disabled:text-button-disabled disabled:bg-transparent',
        ],
      },
      size: {
        xs: '',
        s: '',
        m: '',
        l: '',
        none: '',
      },
      radius: {
        full: 'p-4 rounded-full',
        normal: '',
      },
      width: {
        full: 'w-full',
      },
    },
    compoundVariants: [
      {
        size: 'xs',
        radius: 'normal',
        class: ['px-2 py-1 rounded text-button-xs min-w-[72px]'],
      },
      {
        size: 's',
        radius: 'normal',
        class: ['px-3 py-1.5 rounded-md min-w-[80px]'],
      },
      {
        size: 'm',
        radius: 'normal',
        class: ['px-4 py-3 rounded-lg min-w-[96px]'],
      },
      {
        size: 'l',
        radius: 'normal',
        class: ['p-4 rounded-lg min-w-[136px]'],
      },
    ],
    defaultVariants: {
      size: 'm',
      variant: 'primary',
      radius: 'normal',
    },
  },
  {
    // responsiveVariants: ['sm', 'md', 'lg'],
    twMergeConfig: {
      classGroups: {
        // https://github.com/dcastil/tailwind-merge/issues/297
        'font-size': ['text-button', 'text-button-xs'],
      },
    },
  },
)

type ButtonVariants = VariantProps<typeof variantsClass> & Omit<ComponentPropsWithRef<'button'>, 'color'>

export interface ButtonProps extends ButtonVariants {
  // as?: 'button' | 'a' | 'span'
  type?: 'button' | 'submit' | 'reset' // storybook用
}

export const _Button = forwardRef<HTMLButtonElement, ButtonProps & { as?: any }>(
  ({ className, as, ...props }, ref): JSX.Element => {
    const Element = as || 'button'
    const type = Element === 'button' ? props.type || 'button' : undefined
    const { variant, size, width, radius, ...rest } = props
    const styles = useMemo(
      () => variantsClass({ variant, size, width, radius, className }),
      [variant, size, width, radius, className],
    )

    return <Element type={type} ref={ref} className={styles} {...rest} />
  },
)

_Button.displayName = 'Button'

export const Button = createPolymorphicComponent<'button', ButtonProps>(_Button)
