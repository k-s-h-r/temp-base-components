import type { Preview } from '@storybook/react'
import { themes } from '@storybook/theming'
import { useDarkMode } from 'storybook-dark-mode'
import React, { useEffect } from 'react'
import { withScreenshot } from 'storycap'
import '../src/app/globals.css' // replace with the name of your tailwind css file
import './styles.css'


const preview: Preview = {
  decorators: [
    (Story) => {
      const isDarkMode = useDarkMode()
      useEffect(() => {
        document.documentElement.dataset.theme = isDarkMode ? 'dark' : 'light'
      }, [isDarkMode])
      return <Story />
    },
    // @ts-ignore
    withScreenshot,
  ],
  parameters: {
    darkMode: {
      stylePreview: true,
      classTarget: 'html',
      // Override the default dark theme
      dark: { ...themes.dark },
      // Override the default light theme
      light: { ...themes.normal },
    },
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    options: {
      // storySort: (a, b) => (a.id === b.id ? 0 : a.id.localeCompare(b.id, undefined, { numeric: true })),
    },
  },
}

export default preview
