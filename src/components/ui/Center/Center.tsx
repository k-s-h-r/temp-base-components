import { tv, type VariantProps } from 'tailwind-variants'

export const variantsClass = tv(
  {
    base: 'flex items-center justify-center',
    variants: {
      // base
      isInline: {
        true: 'inline-flex',
      },
      // custom
      isImage: {
        true: 'mx-auto max-w-[50rem]',
      },
    },
    compoundVariants: [],
    defaultVariants: {},
  },
  { responsiveVariants: ['sm', 'md', 'lg'] },
)
