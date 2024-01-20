import { tv, type VariantProps } from 'tailwind-variants'
import React, { ComponentProps, forwardRef, useMemo } from 'react'
import { createPolymorphicComponent } from '@/utils'

type ColSpan = {
  [key in 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16]: string
}

const getColName = (type: string, num: number, breakpoint?: 'sm' | 'md' | 'lg') => {
  const prefix = breakpoint ? `${breakpoint}:` : ''
  return `${prefix}${type}-${num}`
}

const getColNameList = (type: string, num: number, breakpoint?: 'sm' | 'md' | 'lg') => {
  const obj: {
    [key: number]: string
  } = {}
  for (let index = 1; index <= num; index++) {
    obj[index] = getColName(type, index, breakpoint)
  }
  return obj as ColSpan
}

export const variantsClass = tv(
  {
    base: '',
    variants: {
      colSpan: getColNameList('col-span', 16),
      colStart: getColNameList('col-start', 16),
      colEnd: getColNameList('col-end', 16),
    },
    defaultVariants: {},
  },
  { responsiveVariants: ['sm', 'md', 'lg'] },
)

type GridVariants = VariantProps<typeof variantsClass> & ComponentProps<'div'>

interface Props extends GridVariants {
  className?: string
}

export const _Grid = forwardRef<HTMLDivElement, Props & { as: any }>(({ className, as, ...props }, ref): JSX.Element => {
  const Element = as || 'div'
  const { colSpan, colStart, colEnd, ...rest } = props
  const styles = useMemo(() => variantsClass({ colSpan, colStart, colEnd, className }), [colSpan, colStart, colEnd, className])

  return <Element ref={ref} className={styles} {...rest} />
})

_Grid.displayName = 'GridItem'

export const GridItem = createPolymorphicComponent<'div', Props>(_Grid)
