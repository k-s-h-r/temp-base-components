import { tv, type VariantProps } from 'tailwind-variants'
import React, { ComponentProps, ComponentPropsWithRef, forwardRef, useMemo } from 'react'
import { createPolymorphicComponent } from '@/utils'
import { Button } from '../../Button'

export const variantsClass = tv({
  base: 'h-12 w-12 border-border-divider p-1 shrink-0 font-normal',
  variants: {},
  compoundVariants: [],
  defaultVariants: {},
})

type PaginationItemVariants = VariantProps<typeof variantsClass> & Omit<ComponentPropsWithRef<'button'>, 'color'>

export interface PaginationItemProps extends PaginationItemVariants {
  children?: React.ReactNode
}

export const _PaginationItem = forwardRef<HTMLButtonElement, PaginationItemProps & { as?: any }>(
  ({ children, className, as, ...props }, ref): JSX.Element => {
    const styles = useMemo(() => variantsClass({ className }), [className])

    return (
      <Button as={as} rounded="full" variant="secondary" ref={ref} className={styles} {...props}>
        {children}
      </Button>
    )
  },
)

_PaginationItem.displayName = 'PaginationItem'

export const PaginationItem = createPolymorphicComponent<'button', PaginationItemProps>(_PaginationItem)
