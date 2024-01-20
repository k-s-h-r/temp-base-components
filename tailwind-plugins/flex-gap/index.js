const plugin = require('tailwindcss/plugin')

const CONFIG_KEY = 'flex-gap'

module.exports = plugin(
  function ({ addUtilities, e, theme, variants }) {
    const classes = {}
    const sizes = theme(CONFIG_KEY)

    for (const modifier in sizes) {
      const size = sizes[modifier]
      classes[`.${e(`flex-gap-${modifier}`)}`] = {
        '--flex-gap': `calc(${size}/2)`,
      }
    }
    addUtilities(classes, variants(CONFIG_KEY))
  },
  {
    theme: {
      [CONFIG_KEY]: (theme) => ({
        auto: 'auto',
        ...theme('spacing'),
      }),
    },
    variants: {
      [CONFIG_KEY]: ['responsive'],
    },
  }
)
