const { withTV } = require('tailwind-variants/transformer')
const plugin = require('tailwindcss/plugin')

/** @type {import('tailwindcss').Config} */
module.exports = withTV({
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/stories/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    // darkMode: 'media',
    darkMode: 'class',
    screens: {
      sm: '521px',
      // => @media (min-width: 640px) { ... }
      md: '961px',
      // => @media (min-width: 1024px) { ... }
      lg: '1280px',
      // => @media (min-width: 1280px) { ... }
    },
    extend: {
      colors: {
        forest: {
          DEFAULT: '#259d63',
          50: '#e6f5ec',
          100: '#c2e5d1',
          200: '#9bd4b5',
          300: '#71c598',
          400: '#51b883',
          500: '#2cac6e',
          600: '#259d63',
          700: '#1d8b56',
          800: '#197a4b',
          900: '#115a36',
          1000: '#0C472A',
          1100: '#08351F',
          1200: '#032213',
        },
        sea: {
          DEFAULT: '#0024ce',
          50: '#e8f1fe',
          100: '#c5d7fb',
          200: '#9db7f9',
          300: '#7096f8',
          400: '#4979f5',
          500: '#0946f1',
          600: '#003ee5',
          700: '#0031d8',
          800: '#0024ce',
          900: '#0000be',
          1000: '#000071',
          1100: '#000060',
          1200: '#00004F',
          darken: {
            300: '#3f72f6',
            600: '#0030b2',
          },
        },
        sumi: {
          DEFAULT: '#1a1a1c',
          50: '#f8f8fb',
          100: '#f1f1f4',
          200: '#e8e8eb',
          300: '#d8d8db',
          400: '#b4b4b7',
          500: '#949497',
          600: '#757578',
          700: '#626264',
          800: '#414143',
          900: '#1a1a1c',
          1000: '#111111',
          1100: '#080808',
          1200: '#000000',
        },
        sun: {
          DEFAULT: '#ec0000',
          50: '#ffe7e6',
          100: '#ffc8b8',
          200: '#ffa28b',
          300: '#ff7b5c',
          400: '#ff5838',
          500: '#ff4b36',
          600: '#ff220d',
          700: '#fa1606',
          800: '#ec0000',
          900: '#d50000',
          1000: '#AF0000',
          1100: '#890101',
          1200: '#640101',
        },
        wood: {
          DEFAULT: '#c16800',
          50: '#f8f1e0',
          100: '#efdbb1',
          200: '#e5c47f',
          300: '#dcac4d',
          400: '#d69c2b',
          500: '#d18d0f',
          600: '#cd820a',
          700: '#c87504',
          800: '#c16800',
          900: '#b65200',
          1000: '#9C4600',
          1100: '#833B00',
          1200: '#662E00',
        },

        text: {
          body: 'var(--text-body)',
          description: 'var(--text-description)',
          placeholder: 'var(--text-placeholder)',
          onfill: 'var(--text-onfill)',
          link: 'var(--text-link)',
          hover: 'var(--text-hover)',
          'hover-bg': 'var(--text-hover-bg)',
          active: 'var(--text-active)',
          visited: 'var(--text-visited)',
          alert: 'var(--text-alert)',
          disabled: 'var(--text-disabled)',
        },

        icon: {
          label: 'var(--icon-label)',
          active: 'var(--icon-active)',
          alert: 'var(--icon-alert)',
          disabled: 'var(--icon-disabled)',
        },

        button: {
          normal: 'var(--button-normal)',
          hover: 'var(--button-hover)',
          whitehover: 'var(--button-white-hover)',
          active: 'var(--button-active)',
          disabled: 'var(--button-disabled)',
        },

        bg: {
          primary: 'var(--bg-primary)',
          secondary: 'var(--bg-secondary)',
          tertiary: 'var(--bg-tertiary)',
        },

        border: {
          field: 'var(--border-field)',
          divider: 'var(--border-divider)',
          focused: 'var(--border-focused)',
          selected: 'var(--border-selected)',
          alert: 'var(--border-alert)',
          disabled: 'var(--border-disabled)',
        },

        status: {
          success: 'var(--status-success)',
          alert: 'var(--status-alert)',
          warning: 'var(--status-warning)',
        },

        chart: {
          primary: 'var(--chart-primary)',
          secondary: 'var(--chart-secondary)',
        },
      },
      textUnderlineOffset: {
        3: '3px',
      },
      fontFamily: {
        noto: ['Noto Sans JP', { fontFeatureSettings: '"pwid" on' }],
      },
      lineHeight: {
        s: '1.4',
        m: '1.5',
        l: '1.7',
      },
      letterSpacing: {
        s: '0.02em',
        m: '0.04em',
      },
      fontSize: {
        'body-l': [
          '1rem',
          {
            lineHeight: '1.7',
            letterSpacing: '0.04em',
            fontWeight: '400',
          },
        ],
        'body-m': [
          '0.875rem',
          {
            lineHeight: '1.7',
            letterSpacing: '0.04em',
            fontWeight: '400',
          },
        ],
        'label-l': [
          '0.875rem',
          {
            lineHeight: '1.4',
            letterSpacing: '0.04em',
            fontWeight: '500',
          },
        ],
        'label-m': [
          '0.75rem',
          {
            lineHeight: '1.4',
            letterSpacing: '0.04em',
            fontWeight: '500',
          },
        ],
        'note-l': [
          '0.75rem',
          {
            lineHeight: '1.7',
            letterSpacing: '0.02em',
            fontWeight: '400',
          },
        ],
        'note-m': [
          '0.625rem',
          {
            lineHeight: '1.7',
            letterSpacing: '0.02em',
            fontWeight: '400',
          },
        ],
        button: [
          '1rem',
          {
            lineHeight: '1.5',
            letterSpacing: '0.04em',
            fontWeight: '700',
          },
        ],
        'button-xs': [
          '0.825rem',
          {
            lineHeight: '1.5',
            letterSpacing: '0.04em',
            fontWeight: '700',
          },
        ],
      },
      gridTemplateColumns: {
        auto: 'repeat(auto-fit, minmax(0, 1fr))',
        15: 'repeat(15, minmax(0, 1fr))',
        16: 'repeat(16, minmax(0, 1fr))',
      },
      gridColumn: {
        'span-13': 'span 13 / span 13',
        'span-14': 'span 14 / span 14',
        'span-15': 'span 15 / span 15',
        'span-16': 'span 16 / span 16',
      },
      // RadixUI animation
      keyframes: {
        overlayShow: {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
        contentShow: {
          from: { opacity: 0, transform: 'translate(-50%, -48%) scale(0.96)' },
          to: { opacity: 1, transform: 'translate(-50%, -50%) scale(1)' },
        },
      },
      animation: {
        overlayShow: 'overlayShow 300ms cubic-bezier(0.16, 1, 0.3, 1)',
        contentShow: 'contentShow 300ms cubic-bezier(0.16, 1, 0.3, 1)',
      },
      opacity: {
        disabled: `var(--opacity-disabled)`,
      },
      spacing: {
        26: '6.5rem', // 104px
        xs: 'var(--spacing-xs)', // 4px
        s: 'var(--spacing-s)', // 8px
        m: 'var(--spacing-m)', // 16px
        l: 'var(--spacing-l)', // 24px
        xl: 'var(--spacing-xl)', // 40px
        '2xl': 'var(--spacing-2xl)', // 64px
        '3xl': 'var(--spacing-3xl)', // 104px
      },
    },
  },
  safelist: [
    {
      pattern: /col-span-(1|2|3|4|5|6|7|8|9|10|11|12|13|14|15|16)/,
      variants: ['sm', 'md', 'lg'],
    },
    {
      pattern: /col-start-(1|2|3|4|5|6|7|8|9|10|11|12|13|14|15|16)/,
      variants: ['sm', 'md', 'lg'],
    },
    {
      pattern: /col-end-(1|2|3|4|5|6|7|8|9|10|11|12|13|14|15|16)/,
      variants: ['sm', 'md', 'lg'],
    },
    {
      pattern: /w-(1|2|3|4|5|6|7|8|9|10|11|12)\/(1|2|3|4|5|6|7|8|9|10|11|12)/,
      variants: ['sm', 'md', 'lg'],
    },
    {
      pattern: /w-full/,
      variants: ['sm', 'md', 'lg'],
    },
    {
      pattern: /stack-space-(px|0|1|2|3|4|5|6|7|8|9|10|11|12|14|16|xs|s|m|l|xl|2xl)/,
      variants: ['sm', 'md', 'lg'],
    },
    {
      pattern: /only-stack-space-(px|0|1|2|3|4|5|6|7|8|9|10|11|12|14|16|xs|s|m|l|xl|2xl)/,
      variants: ['sm', 'md', 'lg'],
    },
  ],
  plugins: [
    require('./tailwind-plugins/base'),
    require('./tailwind-plugins/stack-spacing-variable'),
    require('./tailwind-plugins/flex-gap'),
    plugin(function ({ addVariant }) {
      addVariant('hocus', ['&:hover', '&:focus'])
      addVariant('hocus-visible', ['&:hover', '&:focus-visible'])
      addVariant('table-th', ['&>*>*>th', '&>*>th'])
      addVariant('table-td', ['&>*>*>td', '&>*>td'])
      addVariant('table-cell', ['&>*>*>td', '&>*>td', '&>*>*>th', '&>*>th'])
      addVariant('table-tr', ['&>*>tr', '&>tr'])
      addVariant('table-caption', ['&>caption'])
      addVariant('table-thead', ['&>thead'])
      addVariant('table-tbody', ['&>tbody'])
      addVariant('table-tfoot', ['&>tfoot'])
      addVariant('x2', ['&&'])
    }),
  ],
})
