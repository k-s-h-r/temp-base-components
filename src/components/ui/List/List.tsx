import { tv, type VariantProps } from 'tailwind-variants'
import React, { ComponentProps, forwardRef, useMemo } from 'react'
import { createPolymorphicComponent } from '@/utils'
import { stackSpaceVariants } from '../Stack/Stack'
import { ListItem } from './ListItem'

export const variantsClass = tv(
  {
    base: 'ml-[var(--indent)] [--indent:1.5em]',
    variants: {
      space: stackSpaceVariants,
      listStyleType: {
        decimal: 'list-decimal',
        disc: 'list-disc',
        none: 'list-none ml-0',
        custom: 'list-none ml-0',
      },
    },
    compoundVariants: [],
    defaultVariants: {
      space: 0,
      listStyleType: 'disc',
    },
  },
  // { responsiveVariants: ['sm', 'md', 'lg'] },
)

export type ListVariants = VariantProps<typeof variantsClass> & ComponentProps<'ul'>

interface Props extends ListVariants {
  indent?: number
  icon?: string | React.ReactNode
  children?: React.ReactNode
}

function removeDuplicateKeys(a: { [key: string]: any }, b: { [key: string]: any }) {
  const result = { ...b }
  for (let key in a) {
    if (result.hasOwnProperty(key)) {
      delete result[key]
    }
  }
  return result
}
// childrenの特定要素にpropsを追加
function setChildrenProps(children: React.ReactNode, addProps?: { [key: string]: any }): React.ReactNode {
  return React.Children.map(children, (c) => {
    if (React.isValidElement(c)) {
      if (c.type === React.Fragment) {
        return setChildrenProps(c.props.children, addProps)
      }
      // const resultProps = removeDuplicateKeys(c.props, addProps)
      // c.type.displayName
      return React.cloneElement(c, { ...addProps, ...c.props })
    }
    return c
  })
}

export const _List = forwardRef<HTMLUListElement, Props & { as: any }>(
  ({ children, className, as, indent, style, icon, ...props }, ref): JSX.Element => {
    const Element = as || 'ul'
    const indentStyle = typeof indent !== 'undefined' ? { '--indent': `${indent * 1}em` } : undefined
    const { space, ..._rest } = props
    let { listStyleType, ...rest } = _rest

    const isIcon = icon != null
    if (isIcon) {
      listStyleType = 'custom'
    }

    const childrenWithProps = setChildrenProps(children, isIcon ? { icon } : undefined)
    const styles = useMemo(() => variantsClass({ space, listStyleType, className }), [space, listStyleType, className])

    return (
      <Element ref={ref} className={styles} {...rest} style={{ ...style, ...indentStyle }}>
        {childrenWithProps}
      </Element>
    )
  },
) as any

_List.displayName = 'List'
_List.Item = ListItem

export const List = createPolymorphicComponent<
  'ul',
  Props,
  {
    Item: typeof ListItem
  }
>(_List)
