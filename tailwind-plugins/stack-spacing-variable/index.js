const plugin = require('tailwindcss/plugin')

module.exports = plugin(function ({ matchUtilities, addUtilities, e, theme, variants }) {
  matchUtilities(
    {
      'stack-space': (value) => {
        value = value === '0' ? '0px' : value

        return {
          ':where(& > :not([hidden]) ~ :not([hidden]))': {
            '--stack-space': `${value}`,
          },
        }
      },
      'only-stack-space': (value) => {
        value = value === '0' ? '0px' : value

        return {
          '&': {
            '--stack-space': `${value}`,
          },
        }
      },
    },
    { values: theme('space'), supportsNegativeValues: true }
  )
})
