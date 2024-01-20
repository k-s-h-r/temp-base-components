const svgToDataUri = require('mini-svg-data-uri')
const plugin = require('tailwindcss/plugin')
const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')
const [baseFontSize, { lineHeight: baseLineHeight }] = defaultTheme.fontSize.base
const { spacing, borderWidth, borderRadius } = defaultTheme

function hex2rgb(hex) {
  if (hex.slice(0, 1) == '#') hex = hex.slice(1)
  if (hex.length == 3)
    hex = hex.slice(0, 1) + hex.slice(0, 1) + hex.slice(1, 2) + hex.slice(1, 2) + hex.slice(2, 3) + hex.slice(2, 3)

  return [hex.slice(0, 2), hex.slice(2, 4), hex.slice(4, 6)]
    .map((str) => {
      return parseInt(str, 16)
    })
    .join(' ')
}

module.exports = plugin(function ({ addBase, theme }) {
  addBase({
    ':root': {
      '--colors-white': theme('colors.white'),
      '--colors-white-rgb': hex2rgb(theme('colors.white')),

      '--colors-forest': theme('colors.forest.600'),
      '--colors-forest-rgb': hex2rgb(theme('colors.forest.600')),
      '--colors-forest-50': theme('colors.forest.50'),
      '--colors-forest-50-rgb': hex2rgb(theme('colors.forest.50')),
      '--colors-forest-100': theme('colors.forest.100'),
      '--colors-forest-100-rgb': hex2rgb(theme('colors.forest.100')),
      '--colors-forest-200': theme('colors.forest.200'),
      '--colors-forest-200-rgb': hex2rgb(theme('colors.forest.200')),
      '--colors-forest-300': theme('colors.forest.300'),
      '--colors-forest-300-rgb': hex2rgb(theme('colors.forest.300')),
      '--colors-forest-400': theme('colors.forest.400'),
      '--colors-forest-400-rgb': hex2rgb(theme('colors.forest.400')),
      '--colors-forest-500': theme('colors.forest.500'),
      '--colors-forest-500-rgb': hex2rgb(theme('colors.forest.500')),
      '--colors-forest-600': theme('colors.forest.600'),
      '--colors-forest-600-rgb': hex2rgb(theme('colors.forest.600')),
      '--colors-forest-700': theme('colors.forest.700'),
      '--colors-forest-700-rgb': hex2rgb(theme('colors.forest.700')),
      '--colors-forest-800': theme('colors.forest.800'),
      '--colors-forest-800-rgb': hex2rgb(theme('colors.forest.800')),
      '--colors-forest-900': theme('colors.forest.900'),
      '--colors-forest-900-rgb': hex2rgb(theme('colors.forest.900')),

      '--colors-sea': theme('colors.sea.600'),
      '--colors-sea-rgb': hex2rgb(theme('colors.sea.600')),
      '--colors-sea-50': theme('colors.sea.50'),
      '--colors-sea-50-rgb': hex2rgb(theme('colors.sea.50')),
      '--colors-sea-100': theme('colors.sea.100'),
      '--colors-sea-100-rgb': hex2rgb(theme('colors.sea.100')),
      '--colors-sea-200': theme('colors.sea.200'),
      '--colors-sea-200-rgb': hex2rgb(theme('colors.sea.200')),
      '--colors-sea-300': theme('colors.sea.300'),
      '--colors-sea-300-rgb': hex2rgb(theme('colors.sea.300')),
      '--colors-sea-400': theme('colors.sea.400'),
      '--colors-sea-400-rgb': hex2rgb(theme('colors.sea.400')),
      '--colors-sea-500': theme('colors.sea.500'),
      '--colors-sea-500-rgb': hex2rgb(theme('colors.sea.500')),
      '--colors-sea-600': theme('colors.sea.600'),
      '--colors-sea-600-rgb': hex2rgb(theme('colors.sea.600')),
      '--colors-sea-700': theme('colors.sea.700'),
      '--colors-sea-700-rgb': hex2rgb(theme('colors.sea.700')),
      '--colors-sea-800': theme('colors.sea.800'),
      '--colors-sea-800-rgb': hex2rgb(theme('colors.sea.800')),
      '--colors-sea-900': theme('colors.sea.900'),
      '--colors-sea-900-rgb': hex2rgb(theme('colors.sea.900')),
      '--colors-sea-300-darken': theme('colors.sea.darken.300'),
      '--colors-sea-300-darken-rgb': hex2rgb(theme('colors.sea.darken.300')),
      '--colors-sea-600-darken': theme('colors.sea.darken.600'),
      '--colors-sea-600-darken-rgb': hex2rgb(theme('colors.sea.darken.600')),

      '--colors-sumi': theme('colors.sumi.900'),
      '--colors-sumi-rgb': hex2rgb(theme('colors.sumi.900')),
      '--colors-sumi-50': theme('colors.sumi.50'),
      '--colors-sumi-50-rgb': hex2rgb(theme('colors.sumi.50')),
      '--colors-sumi-100': theme('colors.sumi.100'),
      '--colors-sumi-100-rgb': hex2rgb(theme('colors.sumi.100')),
      '--colors-sumi-200': theme('colors.sumi.200'),
      '--colors-sumi-200-rgb': hex2rgb(theme('colors.sumi.200')),
      '--colors-sumi-300': theme('colors.sumi.300'),
      '--colors-sumi-300-rgb': hex2rgb(theme('colors.sumi.300')),
      '--colors-sumi-400': theme('colors.sumi.400'),
      '--colors-sumi-400-rgb': hex2rgb(theme('colors.sumi.400')),
      '--colors-sumi-500': theme('colors.sumi.500'),
      '--colors-sumi-500-rgb': hex2rgb(theme('colors.sumi.500')),
      '--colors-sumi-600': theme('colors.sumi.600'),
      '--colors-sumi-600-rgb': hex2rgb(theme('colors.sumi.600')),
      '--colors-sumi-700': theme('colors.sumi.700'),
      '--colors-sumi-700-rgb': hex2rgb(theme('colors.sumi.700')),
      '--colors-sumi-800': theme('colors.sumi.800'),
      '--colors-sumi-800-rgb': hex2rgb(theme('colors.sumi.800')),
      '--colors-sumi-900': theme('colors.sumi.900'),
      '--colors-sumi-900-rgb': hex2rgb(theme('colors.sumi.900')),

      '--colors-sun': theme('colors.sun.800'),
      '--colors-sun-rgb': hex2rgb(theme('colors.sun.800')),
      '--colors-sun-50': theme('colors.sun.50'),
      '--colors-sun-50-rgb': hex2rgb(theme('colors.sun.50')),
      '--colors-sun-100': theme('colors.sun.100'),
      '--colors-sun-100-rgb': hex2rgb(theme('colors.sun.100')),
      '--colors-sun-200': theme('colors.sun.200'),
      '--colors-sun-200-rgb': hex2rgb(theme('colors.sun.200')),
      '--colors-sun-300': theme('colors.sun.300'),
      '--colors-sun-300-rgb': hex2rgb(theme('colors.sun.300')),
      '--colors-sun-400': theme('colors.sun.400'),
      '--colors-sun-400-rgb': hex2rgb(theme('colors.sun.400')),
      '--colors-sun-500': theme('colors.sun.500'),
      '--colors-sun-500-rgb': hex2rgb(theme('colors.sun.500')),
      '--colors-sun-600': theme('colors.sun.600'),
      '--colors-sun-600-rgb': hex2rgb(theme('colors.sun.600')),
      '--colors-sun-700': theme('colors.sun.700'),
      '--colors-sun-700-rgb': hex2rgb(theme('colors.sun.700')),
      '--colors-sun-800': theme('colors.sun.800'),
      '--colors-sun-800-rgb': hex2rgb(theme('colors.sun.800')),
      '--colors-sun-900': theme('colors.sun.900'),
      '--colors-sun-900-rgb': hex2rgb(theme('colors.sun.900')),

      '--colors-wood': theme('colors.wood.800'),
      '--colors-wood-rgb': hex2rgb(theme('colors.wood.800')),
      '--colors-wood-50': theme('colors.wood.50'),
      '--colors-wood-50-rgb': hex2rgb(theme('colors.wood.50')),
      '--colors-wood-100': theme('colors.wood.100'),
      '--colors-wood-100-rgb': hex2rgb(theme('colors.wood.100')),
      '--colors-wood-200': theme('colors.wood.200'),
      '--colors-wood-200-rgb': hex2rgb(theme('colors.wood.200')),
      '--colors-wood-300': theme('colors.wood.300'),
      '--colors-wood-300-rgb': hex2rgb(theme('colors.wood.300')),
      '--colors-wood-400': theme('colors.wood.400'),
      '--colors-wood-400-rgb': hex2rgb(theme('colors.wood.400')),
      '--colors-wood-500': theme('colors.wood.500'),
      '--colors-wood-500-rgb': hex2rgb(theme('colors.wood.500')),
      '--colors-wood-600': theme('colors.wood.600'),
      '--colors-wood-600-rgb': hex2rgb(theme('colors.wood.600')),
      '--colors-wood-700': theme('colors.wood.700'),
      '--colors-wood-700-rgb': hex2rgb(theme('colors.wood.700')),
      '--colors-wood-800': theme('colors.wood.800'),
      '--colors-wood-800-rgb': hex2rgb(theme('colors.wood.800')),
      '--colors-wood-900': theme('colors.wood.900'),
      '--colors-wood-900-rgb': hex2rgb(theme('colors.wood.900')),
    },

    select: {
      '--select-arrow': `url("${svgToDataUri(
        `<svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill="${theme(
          'colors.sumi.900'
        )}" d="M10 13.05 4.35 7.375l1.05-1.05 4.6 4.6 4.6-4.6 1.05 1.05L10 13.05Z"/></svg>`
      )}")`,
    },
    'select:disabled': {
      '--select-arrow': `url("${svgToDataUri(
        `<svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill="${theme(
          'colors.sumi.500'
        )}" d="M10 13.05 4.35 7.375l1.05-1.05 4.6 4.6 4.6-4.6 1.05 1.05L10 13.05Z"/></svg>`
      )}")`,
    },
    '[data-theme="dark"] select': {
      '--select-arrow': `url("${svgToDataUri(
        `<svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill="${theme(
          'colors.white'
        )}" d="M10 13.05 4.35 7.375l1.05-1.05 4.6 4.6 4.6-4.6 1.05 1.05L10 13.05Z"/></svg>`
      )}")`,
    },
  })
})
