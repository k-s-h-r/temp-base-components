import { tv, type VariantProps } from 'tailwind-variants'
import React, { ComponentPropsWithRef, forwardRef, useMemo } from 'react'
import { createPolymorphicComponent } from '@/utils'
import { Input, InputLabelAfterProps } from '../'

export const variantsClass = tv(
  {
    base: 'inline-block font-medium leading-normal',
    variants: {
      size: {
        l: 'text-sm',
        m: 'text-xs',
      },
      isHidden: {
        true: 'sr-only',
      },
      isRequired: {
        true: '',
      },
      isError: {
        true: '',
      },
      isDisabled: {
        true: 'text-text-disabled',
      },
    },
    compoundVariants: [],
    defaultVariants: {
      size: 'l',
    },
  },
  // { responsiveVariants: ['sm', 'md', 'lg'] },
)

type LabelVariants = VariantProps<typeof variantsClass> & ComponentPropsWithRef<'label'>

export interface InputLabelProps extends LabelVariants {
  children?: React.ReactNode
  labelAfterText?: React.ReactNode
  labelAfterTextProps?: InputLabelAfterProps
  ariaLabelledbyId?: string
  isFieldset?: boolean
}

export const _Label = forwardRef<HTMLParagraphElement, InputLabelProps & { as: any }>(
  (
    {
      children,
      as,
      id,
      ariaLabelledbyId,
      className,
      size,
      isRequired,
      isDisabled,
      labelAfterText,
      isError,
      isHidden,
      labelAfterTextProps,
      isFieldset,
      ...props
    },
    ref,
  ): JSX.Element => {
    const Element = isFieldset ? 'label' : as || 'label'
    const setId = ariaLabelledbyId ? ariaLabelledbyId : id
    const styles = useMemo(
      () => variantsClass({ size, isRequired, isError, isHidden, isDisabled, className }),
      [size, isRequired, isError, isHidden, isDisabled, className],
    )

    return (
      <Element ref={ref} className={styles} {...props} id={setId} data-error={isError || undefined}>
        {children}
        {labelAfterText && (
          <Input.LabelAfter {...{ isRequired }} {...labelAfterTextProps}>
            {labelAfterText}
          </Input.LabelAfter>
        )}
      </Element>
    )
  },
)

_Label.displayName = 'InputLabel'

export const InputLabel = createPolymorphicComponent<'label', InputLabelProps>(_Label)
