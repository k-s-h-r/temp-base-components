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
        'peer/checkbox block appearance-none rounded border-2 border-icon-label bg-transparent',
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

type CheckboxInputVariants = VariantProps<typeof variantsClass> & ComponentPropsWithRef<'input'>

export interface CheckboxInputProps extends CheckboxInputVariants {
  isError?: boolean
  isRequired?: boolean
  isPanel?: boolean
}

export const _CheckboxInput = forwardRef<HTMLInputElement, CheckboxInputProps>(
  ({ className, variant, disabled, id, isError, isRequired, isPanel = false, ...props }, ref): JSX.Element => {
    const { wrapper, inner, input, svg, border } = variantsClass({
      variant: isError ? 'alert' : variant,
      isDisabled: disabled,
      isPanel,
    })

    return (
      <div className={wrapper()}>
        <div className={inner()}>
          <input
            type="checkbox"
            ref={ref}
            // aria-invalid={isError || undefined}
            data-error={isError || undefined}
            required={isRequired}
            className={input()}
            disabled={disabled}
            id={id}
            {...props}
          />
          <svg aria-hidden className={svg()} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
            <path fill="currentColor" d="M8.588 14.647 16.5 6.735 15.265 5.5l-6.677 6.677-3.353-3.353L4 10.059l4.588 4.588Z" />
          </svg>
          {isPanel && <span className={border()}></span>}
        </div>
      </div>
    )
  },
)

_CheckboxInput.displayName = 'CheckboxInput'

export const CheckboxInput = _CheckboxInput
