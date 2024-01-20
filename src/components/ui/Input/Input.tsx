import React, { ComponentProps, ComponentPropsWithRef, forwardRef, useId } from 'react'
import { createPolymorphicComponent } from '@/utils'
import { tv, cnBase, type VariantProps, type ClassValue } from 'tailwind-variants'
import { BaseBox } from '../BaseBox'
import { Stack } from '../Stack'
import { InputError } from './InputError'
import { InputCount } from './InputCount'
import { InputDescription } from './InputDescription'
import { InputLabel } from './InputLabel'
import { InputLabelAfter } from './InputLabelAfter'

export const variantsClass = tv(
  {
    base: '',
    slots: {
      baseClass: '',
      wrapperClass: '',
    },
    variants: {
      variant: {},
      isDisabled: {
        true: {},
      },
      isRequired: {
        true: {},
      },
      isError: {
        true: {},
      },
      isFieldset: {
        true: {},
      },
    },
    compoundVariants: [],
    defaultVariants: {},
  },
  // { responsiveVariants: ['sm', 'md', 'lg'] },
)

type InputVariants = VariantProps<typeof variantsClass> & ComponentPropsWithRef<'div'>

export interface InputProps extends InputVariants {
  children?: React.ReactNode
  classNames?: {
    wrapper?: string
  }
  ariaLabelledbyId?: string
  isRadioGroup?: boolean
}

// childrenの特定要素にpropsを追加
function setChildrenProps(children: React.ReactNode, targetName: string, addProps?: { [key: string]: any }): React.ReactNode {
  return React.Children.map(children, (c) => {
    if (React.isValidElement(c)) {
      if (c.type === React.Fragment) {
        return setChildrenProps(c.props.children, targetName, addProps)
      }

      if (
        // @ts-ignore
        c.type?.displayName === targetName ||
        c.props?.as?.displayName === targetName
      ) {
        return React.cloneElement(c, { ...addProps, ...c.props })
      }
      if (c.props && c.props.children) {
        // 子要素を再帰的に探査する
        const updatedChildren = setChildrenProps(c.props.children, targetName, addProps)
        // 更新された子要素を追加する
        return React.cloneElement(c, {}, updatedChildren)
      }
    }
    return c
  })
}

export const _Input = forwardRef<HTMLDivElement, InputProps & { as: any }>(
  (
    {
      as,
      children,
      className,
      classNames,
      ariaLabelledbyId,
      isRadioGroup,

      // variants
      variant,
      isError,
      isDisabled,
      isRequired,
      isFieldset,

      // other
      ...props
    },
    ref,
  ): JSX.Element => {
    const { baseClass, wrapperClass } = variantsClass({
      variant,
      isDisabled,
      isRequired,
    })
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const setAriaLabelledbyId = isFieldset ? ariaLabelledbyId || useId() : undefined

    // fieldset, legendのdisplay:contents対応がchromeで無効になっているのでrole="group"で代用

    let childrenWithProps = children
    // InputLabelに渡す
    // htmlFor(id), isFieldset, aria-labelledbyのid, isDisabled, isError, isRequired
    childrenWithProps = setChildrenProps(childrenWithProps, 'InputLabel', {
      isFieldset,
      ariaLabelledbyId: setAriaLabelledbyId,
      isDisabled,
      isError,
      isRequired,
    })
    // InputDescriptionに渡す
    childrenWithProps = setChildrenProps(childrenWithProps, 'InputDescription', {
      isDisabled,
      isError,
    })
    // InputErrorに渡す
    childrenWithProps = setChildrenProps(childrenWithProps, 'InputError', {
      isDisabled,
      isError,
    })
    // InputCountに渡す
    childrenWithProps = setChildrenProps(childrenWithProps, 'InputCount', {
      isDisabled,
      isError,
    })

    return (
      <BaseBox as={as || 'div'} className={baseClass({ className })} ref={ref} {...props}>
        <Stack
          space="s"
          className={wrapperClass({ className: classNames?.wrapper })}
          data-disabled={isDisabled || undefined}
          data-error={isError || undefined}
          role={isRadioGroup ? 'radiogroup' : isFieldset ? 'group' : undefined}
          // aria-invalid={(isRadioGroup && isError) || undefined}
          aria-labelledby={isFieldset ? setAriaLabelledbyId : undefined}>
          {childrenWithProps}
        </Stack>
      </BaseBox>
    )
  },
) as any

_Input.displayName = 'Input'
_Input.Error = InputError
_Input.Description = InputDescription
_Input.Label = InputLabel
_Input.LabelAfter = InputLabelAfter
_Input.Count = InputCount

export const Input = createPolymorphicComponent<
  'div',
  InputProps,
  {
    Error: typeof InputError
    Description: typeof InputDescription
    Label: typeof InputLabel
    LabelAfter: typeof InputLabelAfter
    Count: typeof InputCount
  }
>(_Input)
