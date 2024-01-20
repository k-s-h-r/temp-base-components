import { tv, type VariantProps } from 'tailwind-variants'
import React, { ComponentProps, ComponentPropsWithRef, forwardRef, useMemo } from 'react'
import { createPolymorphicComponent } from '@/utils'
import { Link, linkClass, LinkProps } from '../../Link'

export interface BreadcrumbItemProps extends LinkProps {
  children?: React.ReactNode
}

export const _BreadcrumbItem = forwardRef<HTMLAnchorElement, BreadcrumbItemProps & { as?: any }>(
  ({ children, as, ...props }, ref): JSX.Element => {
    return (
      <Link as={as} ref={ref} {...props}>
        {children}
      </Link>
    )
  },
)

_BreadcrumbItem.displayName = 'BreadcrumbItem'

export const BreadcrumbItem = createPolymorphicComponent<'a', BreadcrumbItemProps>(_BreadcrumbItem)
