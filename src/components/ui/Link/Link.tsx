import { tv, type VariantProps } from 'tailwind-variants'
import React, { ComponentProps, forwardRef, useMemo } from 'react'
import { createPolymorphicComponent } from '@/utils'
import { MdOpenInNew } from 'react-icons/md'

export const variantsClass = tv(
  {
    base: [
      'focus:outline focus:outline-2 focus:outline-offset-0 focus:outline-bg-primary focus:ring-4 focus:ring-border-focused',
    ],
    variants: {
      isLine: {
        true: [],
        false: [],
      },
      isDisabled: {
        true: ['opacity-disabled cursor-default pointer-events-none text-text-body'],
        false: [],
      },
      isLink: {
        true: ['text-text-link rounded'],
        false: ['text-text-body'],
      },
      isUtility: {
        true: ['text-text-body'],
        false: [],
      },
    },
    compoundVariants: [
      {
        isLink: true,
        isUtility: false,
        isDisabled: false,
        class: ['hover:text-text-hover'],
      },
      {
        isLink: true,
        isUtility: true,
        isDisabled: false,
        class: ['hover:bg-text-hover-bg', 'hover:text-text-body'],
      },
      {
        isLink: true,
        isLine: true,
        isDisabled: false,
        class: ['underline underline-offset-3'],
      },
    ],
    defaultVariants: {
      isLink: true,
      isLine: true,
      isDisabled: false,
    },
  },
  // { responsiveVariants: ['sm', 'md', 'lg'] },
)

type LinkVariants = VariantProps<typeof variantsClass> & ComponentProps<'a'>

export interface LinkProps extends LinkVariants {
  children?: React.ReactNode
  isExternal?: boolean
}

export const _Link = forwardRef<HTMLAnchorElement, LinkProps & { as: any }>(
  ({ children, as, className, isExternal, isDisabled, isUtility, isLine, ...props }, ref): JSX.Element => {
    const Element = as || 'a'
    const target = isExternal ? '_blank' : props.target
    const rel = isExternal ? 'noopener noreferrer' : props.rel
    const externalText = '新規ウィンドウで開きます'
    const data = isDisabled ? { 'data-disabled': true } : {}
    const isLink = typeof props.isLink !== 'undefined' ? props.isLink : typeof props.href !== 'undefined'
    const styles = useMemo(
      () => variantsClass({ isLink, isLine, isUtility, isDisabled, className }),
      [isLink, isLine, isUtility, isDisabled, className],
    )

    return (
      <Element ref={ref} className={styles} {...{ target, rel, ...data, ...props }}>
        {children}
        {isExternal && <MdOpenInNew className="ml-1 inline-block" aria-label={externalText} />}
      </Element>
    )
  },
)

_Link.displayName = 'Link'

export const Link = createPolymorphicComponent<'a', LinkProps>(_Link)
