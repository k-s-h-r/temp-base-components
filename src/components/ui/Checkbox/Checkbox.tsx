import React, { ComponentProps, ComponentPropsWithRef, forwardRef, useId } from 'react'
import { createPolymorphicComponent } from '@/utils'
import { tv, cnBase, type VariantProps, type ClassValue } from 'tailwind-variants'
import { InlineInput, type InlineInputBaseProps } from '../InlineInput'
import { CheckboxInput } from './CheckboxInput'

export const variantsClass = tv(
  {
    base: '',
    variants: {
      variant: {
        alert: '',
      },
    },
    compoundVariants: [],
    defaultVariants: {},
  },
  // { responsiveVariants: ['sm', 'md', 'lg'] },
)

type CheckboxVariants = VariantProps<typeof variantsClass> & ComponentPropsWithRef<'input'>

export interface CheckboxProps extends CheckboxVariants, InlineInputBaseProps {}

export const _Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(({ ...props }, ref): JSX.Element => {
  const {
    // InlineInputBaseProps
    label,
    htmlFor,
    description,
    error,
    isError,
    classNames,
    isOutside,
    isDescriptionOutside,
    isErrorOutside,
    className,
    isPanel,

    // RadioProps
    id,
    disabled,
    variant,

    ...rest
  } = props

  const isVaridId = typeof id !== 'undefined' && id === htmlFor
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const uuid = isVaridId ? id : id ?? useId()
  return (
    <InlineInput
      {...{
        htmlFor: uuid,
        label,
        description,
        error,
        isError,
        classNames,
        isOutside,
        isDescriptionOutside,
        isErrorOutside,
        className,
        isPadding: true,
        isPanel,
      }}
    >
      <CheckboxInput ref={ref} {...{ id: uuid, disabled, isError, variant, isPanel }} {...rest} />
    </InlineInput>
  )
})

_Checkbox.displayName = 'Checkbox'

export const Checkbox = _Checkbox
