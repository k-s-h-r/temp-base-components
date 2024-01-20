import { tv, type VariantProps } from 'tailwind-variants'
import React, { ComponentProps, forwardRef, useMemo } from 'react'
import { createPolymorphicComponent } from '@/utils'

export const variantsClass = tv(
  {
    slots: {
      baseClass: 'list-item',
      iconClass: '',
      wrapperClass: '',
    },
    variants: {
      listStyleType: {
        decimal: {
          baseClass: 'list-decimal',
        },
        disc: { baseClass: 'list-disc' },
        none: { baseClass: 'list-none' },
        custom: {
          baseClass: 'grid grid-cols-[auto_1fr]',
          iconClass: ['min-w-[var(--indent,0px)]'],
          wrapperClass: '',
        },
      },
    },
    compoundVariants: [],
    defaultVariants: {},
  },
  // { responsiveVariants: ['sm', 'md', 'lg'] },
)

type ListItemVariants = VariantProps<typeof variantsClass> & ComponentProps<'li'>

interface Props extends ListItemVariants {
  icon?: string | React.ReactNode
  indent?: number
}

export const _ListItem = forwardRef<HTMLLIElement, Props & { as: any }>(
  ({ className, children, icon, indent, as, style, listStyleType, ...props }, ref): JSX.Element => {
    const Element = as || 'li'
    const indentStyle = typeof indent !== 'undefined' ? { '--indent': `${indent * 1}em` } : undefined

    const isIcon = icon != null
    if (isIcon) {
      listStyleType = 'custom'
    }

    const { baseClass, iconClass, wrapperClass } = variantsClass({ listStyleType })

    return (
      <Element ref={ref} className={baseClass({ className })} {...props}>
        {listStyleType === 'custom' && (
          <div className={iconClass()} style={{ ...style, ...indentStyle }}>
            {icon}
          </div>
        )}
        <div className={wrapperClass()}>{children}</div>
      </Element>
    )
  },
)

_ListItem.displayName = 'ListItem'

export const ListItem = createPolymorphicComponent<'li', Props>(_ListItem)
