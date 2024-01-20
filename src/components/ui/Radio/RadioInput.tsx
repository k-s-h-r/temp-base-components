import React, { ComponentProps, ComponentPropsWithRef, forwardRef, useMemo } from 'react'
import { createPolymorphicComponent } from '@/utils'
import { tv, type VariantProps } from 'tailwind-variants'

export const variantsClass = tv(
  {
    base: '',
    slots: {
      wrapper: 'h-6 w-6 shrink-0 p-0.5',
      inner: 'h-full w-full grid',
      border: '',
      input: [
        'row-span-full col-span-full h-full w-full relative',
        'peer/checkbox block appearance-none rounded-full border-2 border-icon-label bg-transparent',
        'checked:border-icon-active checked:bg-icon-active',
      ],
      svg: [
        'row-span-full col-span-full h-full w-full relative',
        'pointer-events-none text-icon-label opacity-0',
        'peer-checked/checkbox:text-white peer-checked/checkbox:opacity-100',
      ],
    },
    variants: {
      variant: {
        alert: {
          input: ['border-icon-alert', 'checked:border-icon-alert checked:bg-icon-alert'],
          svg: '',
        },
      },
      isDisabled: {
        true: {
          input: ['border-icon-disabled', 'checked:border-icon-disabled checked:bg-icon-disabled'],
          svg: '',
        },
      },
      isPanel: {
        true: {
          border: [
            'absolute left-0 top-0 z-0 block h-full w-full rounded-md content-[""] pointer-events-none border border-border-field',
            'peer-checked/checkbox:border-2 peer-checked/checkbox:border-border-selected',
            'peer-focus/checkbox:outline peer-focus/checkbox:outline-2 peer-focus/checkbox:outline-offset-0 peer-focus/checkbox:outline-bg-primary peer-focus/checkbox:ring-4 peer-focus/checkbox:ring-border-focused',
          ],
          input: 'focus:outline-none',
        },
        false: {
          input: [
            'focus:outline focus:outline-2 focus:outline-offset-0 focus:outline-bg-primary focus:ring-4 focus:ring-border-focused',
          ],
        },
      },
    },
    compoundVariants: [],
    defaultVariants: {},
  },
  // { responsiveVariants: ['sm', 'md', 'lg'] },
)

type RadioInputVariants = VariantProps<typeof variantsClass> & ComponentPropsWithRef<'input'>

export interface RadioInputProps extends RadioInputVariants {
  isError?: boolean
  isRequired?: boolean
  isPanel?: boolean
}

export const _RadioInput = forwardRef<HTMLInputElement, RadioInputProps>(
  ({ className, variant, disabled, id, isError, isRequired, isPanel = false, ...props }, ref): JSX.Element => {
    const { wrapper, inner, input, svg, border } = useMemo(
      () =>
        variantsClass({
          variant: isError ? 'alert' : variant,
          isDisabled: disabled,
          isPanel,
        }),
      [isError, variant, disabled, isPanel],
    )

    return (
      <div className={wrapper()}>
        <div className={inner()}>
          <input
            type="radio"
            ref={ref}
            required={isRequired}
            data-error={isError || undefined}
            className={input()}
            disabled={disabled}
            id={id}
            {...props}
          />
          <svg aria-hidden className={svg()} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
            <circle fill="currentColor" cx="10" cy="10" r="4.25" />
          </svg>
          {isPanel && <span className={border()}></span>}
        </div>
      </div>
    )
  },
)

_RadioInput.displayName = 'RadioInput'

export const RadioInput = _RadioInput
