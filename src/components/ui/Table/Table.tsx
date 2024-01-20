import { tv, type VariantProps } from 'tailwind-variants'
import React, { ComponentProps, forwardRef, useMemo } from 'react'
import { createPolymorphicComponent } from '@/utils'

export const variantsClass = tv(
  {
    base: [
      'border-collapse border border-border-divider',
      'table-cell:border table-cell:border-border-divider',
      'table-cell:px-2 table-cell:py-4',
      'table-cell:text-left',
      'table-th:bg-bg-tertiary',
      'table-td:bg-bg-primary',
    ],
    variants: {
      layout: {
        auto: 'table-auto',
        fixed: 'table-fixed',
      },
    },
    compoundVariants: [],
    defaultVariants: {
      layout: 'auto',
    },
  },
  { responsiveVariants: ['sm', 'md', 'lg'] },
)

type TableVariants = VariantProps<typeof variantsClass> & ComponentProps<'table'>

export interface TableProps extends TableVariants {
  children?: React.ReactNode
}

export const _Table = forwardRef<HTMLTableElement, TableProps & { as: any }>(
  ({ className, layout, ...props }, ref): JSX.Element => {
    const styles = useMemo(() => variantsClass({ layout, className }), [layout, className])

    return <table ref={ref} className={styles} {...props} />
  },
)

_Table.displayName = 'Table'

export const Table = createPolymorphicComponent<'table', TableProps>(_Table)
