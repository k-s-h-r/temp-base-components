import React, { ComponentProps, ComponentPropsWithRef, forwardRef, useMemo } from 'react'
import { createPolymorphicComponent } from '@/utils'
import { tv, cnBase, type VariantProps, type ClassValue } from 'tailwind-variants'
import { BaseBox } from '../../BaseBox'

export const variantsClass = tv(
  {
    base: 'text-xs text-text-description',
    variants: {
      variant: {},
      isDisabled: {
        true: 'text-text-disabled',
      },
      isError: {
        true: '',
      },
    },
  },
  // { responsiveVariants: ['sm', 'md', 'lg'] },
)

type InputDescriptionVariants = VariantProps<typeof variantsClass> & ComponentPropsWithRef<'div'>
export type InputDescriptionBaseProps = {}

export interface InputDescriptionProps extends InputDescriptionVariants, InputDescriptionBaseProps {}

export const _InputDescription = forwardRef<HTMLDivElement, InputDescriptionProps & { as: any }>(
  ({ children, as, className, variant, isError, isDisabled, ...props }, ref): JSX.Element => {
    const styles = useMemo(() => variantsClass({ variant, isDisabled, className }), [variant, isDisabled, className])

    return (
      <BaseBox as={as || 'div'} ref={ref} className={styles} {...props}>
        {children}
      </BaseBox>
    )
  },
)

_InputDescription.displayName = 'InputDescription'

export const InputDescription = createPolymorphicComponent<'div', InputDescriptionProps>(_InputDescription)
