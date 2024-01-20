import React, { ComponentProps, ComponentPropsWithRef, forwardRef, useMemo } from 'react'
import { createPolymorphicComponent } from '@/utils'
import { tv, cnBase, type VariantProps, type ClassValue } from 'tailwind-variants'

export const variantsClass = tv(
  {
    base: '',
    slots: {
      wrapperClass: 'relative inline-flex',
      labelWrapperClass: 'ml-4 mr-0',
      labelClass: [
        'block',
        'before:absolute before:left-0 before:top-0 before:z-0 before:block before:h-full before:w-full before:content-[""]',
      ],
      labelInnerClass: 'relative',
    },
    variants: {
      variant: {
        alert: {
          labelClass: 'text-text-alert',
        },
      },
      isDisabled: {
        true: {
          labelClass: 'text-text-disabled',
        },
      },
      isLabelHidden: {
        true: {
          labelClass: 'sr-only',
        },
      },
      labelPositionX: {
        left: {
          labelWrapperClass: '-order-1 ml-0 mr-4',
        },
        right: {
          labelWrapperClass: '',
        },
      },
      labelPositionY: {
        top: { wrapperClass: 'items-start' },
        center: { wrapperClass: 'items-center' },
        bottom: { wrapperClass: 'items-end' },
      },
      isPadding: {
        true: {
          wrapperClass: 'p-2',
        },
      },
      isPanel: {
        true: {
          wrapperClass: 'p-4 rounded-md flex',
        },
      },
    },
    compoundVariants: [],
    defaultVariants: {
      labelPositionX: 'right',
      labelPositionY: 'top',
    },
  },
  { responsiveVariants: ['sm', 'md', 'lg'] },
)

type InlineInputVariants = Omit<VariantProps<typeof variantsClass>, 'isPanel'> & ComponentPropsWithRef<'div'>
export type InlineInputBaseProps = {
  label: React.ReactNode
  htmlFor?: string
  children?: React.ReactNode
  description?: React.ReactNode
  error?: React.ReactNode
  isError?: boolean
  isOutside?: boolean
  isDescriptionOutside?: boolean
  isErrorOutside?: boolean
  isPanel?: boolean
  classNames?: {
    wrapper?: string
    label?: string
    labelWrapper?: string
    labelInner?: string
  }
}

export interface InlineInputProps extends InlineInputVariants, InlineInputBaseProps {}

export const _InlineInput = forwardRef<HTMLDivElement, InlineInputProps>(
  (
    {
      children,
      label,
      htmlFor,
      description,
      error,
      isError,
      className,
      classNames,
      isOutside,
      isDescriptionOutside,
      isErrorOutside,
      isPanel,

      // variants
      variant,
      isDisabled,
      isLabelHidden,
      labelPositionX,
      labelPositionY,
      isPadding,

      // other
      ...props
    },
    ref,
  ): JSX.Element => {
    const { wrapperClass, labelClass, labelWrapperClass, labelInnerClass } = variantsClass({
      variant: isError ? 'alert' : variant,
      isDisabled,
      labelPositionX,
      labelPositionY,
      isPadding,
      isPanel,
    })

    return (
      <div className={className}>
        <div
          className={wrapperClass({ className: classNames?.wrapper })}
          data-disabled={isDisabled || undefined}
          data-error={isError || undefined}
          ref={ref}
          {...props}>
          {children}

          <div className={labelWrapperClass({ className: classNames?.labelWrapper })}>
            <label className={labelClass({ className: classNames?.label })} htmlFor={htmlFor}>
              <span className={labelInnerClass({ className: classNames?.labelInner })}>{label}</span>
            </label>

            {
              <>
                {!isOutside && !isDescriptionOutside && description}
                {isError && !isOutside && !isErrorOutside && error}
              </>
            }
          </div>
        </div>

        {
          <>
            {(isOutside || isDescriptionOutside) && description}
            {isError && (isOutside || isErrorOutside) && error}
          </>
        }
      </div>
    )
  },
)

_InlineInput.displayName = 'InlineInput'

export const InlineInput = _InlineInput
