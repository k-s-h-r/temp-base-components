import React, { ComponentProps, ComponentPropsWithRef, forwardRef, useMemo } from 'react'
import { createPolymorphicComponent } from '@/utils'
import { tv, type VariantProps, TVReturnType } from 'tailwind-variants'
import { Link, linkClass } from '../Link'
import { BreadcrumbItem } from './BreadcrumbItem'

export const variantsClass = tv({
  slots: {
    rootClass: '',
    itemsClass: '',
    itemClass: 'inline',
    separatorClass: 'inline-block align-middle mx-1',
  },
  variants: {},
  compoundVariants: [],
  defaultVariants: {},
})

type BreadcrumbVariants = VariantProps<typeof variantsClass> & ComponentPropsWithRef<'div'>

type Items = {
  as?: React.ElementType
  label: string
  href?: string
  className?: string
  [key: string]: any
}[]

export interface BreadcrumbProps extends BreadcrumbVariants {
  separator: React.ReactNode
  ariaLabel?: string
  classNames?: {
    items?: string
    item?: string
    separator?: string
  }
  items?: Items
  itemAs?: React.ElementType
}

function getItems(
  items: Items,
  separator: React.ReactNode,
  itemClass: string,
  separatorClass: string,
  itemAs?: React.ElementType,
) {
  return items.map((item, index) => {
    const { as, label, href, className, ...rest } = item
    const isAs = as || itemAs
    const Element = as || itemAs || BreadcrumbItem
    const linkClassName = isAs ? linkClass({ className }) : ''
    return (
      <li className={itemClass} key={index}>
        {index === items.length - 1 && (
          <BreadcrumbItem className={className} aria-current="page" {...rest}>
            {label}
          </BreadcrumbItem>
        )}
        {index !== items.length - 1 && (
          <>
            <Element className={linkClassName} href={href} {...rest}>
              {label}
            </Element>
            <div className={separatorClass} aria-hidden={true} key={`separator-${index}`}>
              {separator}
            </div>
          </>
        )}
      </li>
    )
  })
}

function getNodeItems(children: React.ReactNode, separator: React.ReactNode, itemClass: string, separatorClass: string) {
  const _children = React.isValidElement(children) && children.type === React.Fragment ? children.props.children : children
  const items = React.Children.toArray(_children).reduce<React.ReactNode[]>((acc, child, index, array) => {
    const item = (
      <li className={itemClass} key={index}>
        {child}

        {index !== array.length - 1 && (
          <div className={separatorClass} aria-hidden={true} key={`separator-${index}`}>
            {separator}
          </div>
        )}
      </li>
    )

    acc.push(item)
    return acc
  }, [])
  return items
}

const _Breadcrumb = forwardRef<HTMLDivElement, BreadcrumbProps>(({ ...props }, ref): JSX.Element => {
  const { className, classNames, separator, children, items, itemAs, ...rest } = props
  const _separator = (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M6.71 11.96L6 11.25L9.27 7.98L6 4.71L6.71 4L10.69 7.98L6.71 11.96Z" fill="currentColor" />
    </svg>
  )

  const { rootClass, itemsClass, itemClass, separatorClass } = variantsClass()

  return (
    <nav aria-label={props.ariaLabel || 'パンくずリスト'} ref={ref} className={rootClass({ className })} {...rest}>
      <ol className={itemsClass({ className: classNames?.items })}>
        {items
          ? getItems(
              items,
              separator || _separator,
              itemClass({ className: classNames?.item }),
              separatorClass({ className: classNames?.separator }),
              itemAs,
            )
          : getNodeItems(
              children,
              separator || _separator,
              itemClass({ className: classNames?.item }),
              separatorClass({ className: classNames?.separator }),
            )}
      </ol>
    </nav>
  )
}) as any

_Breadcrumb.displayName = 'Breadcrumb'
_Breadcrumb.Item = BreadcrumbItem

export const Breadcrumb = createPolymorphicComponent<
  'div',
  BreadcrumbProps,
  {
    Item: typeof BreadcrumbItem
  }
>(_Breadcrumb)
