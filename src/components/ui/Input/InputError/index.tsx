import React, { ComponentProps, ComponentPropsWithRef, forwardRef, useMemo } from 'react'
import { createPolymorphicComponent } from '@/utils'
import { tv, cnBase, type VariantProps, type ClassValue } from 'tailwind-variants'
import { BaseBox } from '../../BaseBox'

export const variantsClass = tv(
  {
    base: 'text-xs',
    variants: {
      variant: {
        alert: 'text-text-alert',
      },
      isError: {
        true: 'text-text-alert',
      },
      isDisabled: {
        true: '',
      },
    },
    compoundVariants: [
      {
        isError: true,
        isDisabled: true,
        className: '',
      },
    ],
    defaultVariants: {
      variant: 'alert',
    },
  },
  // { responsiveVariants: ['sm', 'md', 'lg'] },
)

type InputErrorVariants = VariantProps<typeof variantsClass> & ComponentPropsWithRef<'div'>
export type InputErrorBaseProps = {}

export interface InputErrorProps extends InputErrorVariants, InputErrorBaseProps {}

export const _InputError = forwardRef<HTMLDivElement, InputErrorProps & { as: any }>(
  ({ children, as, className, variant, isError, isDisabled, ...props }, ref): JSX.Element => {
    const styles = useMemo(
      () => variantsClass({ variant, isError, isDisabled, className }),
      [variant, isError, isDisabled, className],
    )

    return (
      <BaseBox as={as || 'div'} className={styles} {...props}>
        {children}
      </BaseBox>
    )
  },
)

_InputError.displayName = 'InputError'

export const InputError = createPolymorphicComponent<'div', InputErrorProps>(_InputError)
