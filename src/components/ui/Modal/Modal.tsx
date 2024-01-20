import { tv, type VariantProps } from 'tailwind-variants'
import React, { ComponentProps, forwardRef, ComponentPropsWithRef } from 'react'
import { createPolymorphicComponent } from '@/utils'
import * as Dialog from '@radix-ui/react-dialog'

export const variantsClass = tv(
  {
    slots: {
      overlay: 'fixed inset-0 bg-black/70 data-[state=open]:animate-overlayShow',
      wrapper: [
        // 'data-[state=open]:animate-contentShow',
        'fixed inset-0 overflow-y-auto',
        'focus:outline-none',
      ],
      inner: ['flex min-h-full items-center justify-center p-6 text-center sm:py-10'],
      content: ['w-full max-w-[34.5rem] rounded-xl bg-bg-primary p-4 text-left align-middle sm:px-14 sm:py-10'],
    },
    variants: {},
    compoundVariants: [],
    defaultVariants: {},
  },
  // { responsiveVariants: ['sm', 'md', 'lg'] },
)

// type ModalVariants = VariantProps<typeof variantsClass> &
//   React.ForwardRefExoticComponent<Dialog.DialogContentProps & React.RefAttributes<HTMLDivElement>>

// 仮
type ModalVariants = VariantProps<typeof variantsClass> & Dialog.DialogContentProps & ComponentPropsWithRef<'div'>

interface Props extends ModalVariants {
  children?: React.ReactNode
}

export const ModalContent = forwardRef<HTMLDivElement, Props>(({ children, className, ...props }, ref): JSX.Element => {
  const { overlay, wrapper, inner, content } = variantsClass()
  return (
    <Dialog.Portal>
      <Dialog.Overlay className={overlay()}>
        <div className={wrapper({ className })}>
          <div className={inner()}>
            <Dialog.Content className={content()} {...props} ref={ref}>
              {children}
            </Dialog.Content>
          </div>
        </div>
      </Dialog.Overlay>
    </Dialog.Portal>
  )
})
ModalContent.displayName = 'ModalContent'

export const Modal = Dialog.Root
export const ModalTrigger = Dialog.Trigger
export const ModalTitle = Dialog.Title
export const ModalDescription = Dialog.Description
export const ModalClose = Dialog.Close
