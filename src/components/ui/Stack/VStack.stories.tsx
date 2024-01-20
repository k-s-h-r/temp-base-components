import type { Meta, StoryObj } from '@storybook/react'
import { userEvent as user, waitFor, within } from '@storybook/testing-library'
import { expect } from '@storybook/jest'
import { VStack } from './'

const meta: Meta<typeof VStack> = {
  title: 'components/layout/Stack/VStack',
  component: VStack,
  args: {
    space: 'm',
    children: (
      <>
        <div className="border border-border-divider p-2">stack</div>
        <div className="border border-border-divider p-2">stack</div>
        <div className="border border-border-divider p-2">stack</div>
      </>
    ),
  },
  // tags: ['autodocs'],
  argTypes: {
    space: {
      control: {
        type: 'inline-radio',
      },
      options: ['px', '0', '2', '4', '6', '8', '10', '12', '14', 's', 'm', 'l', 'xl'],
      description: '各itemの間隔<br>responsive: `initial` `md` `lg`',
      table: {
        defaultValue: {
          summary: 'm',
        },
        type: {
          summary: 'px | 0 | 2 | 4 | 6 | 8 | 10 | 12 | 14 | s | m | l | xl',
        },
      },
    },
    as: {
      description: 'polymorphic component',
      table: {
        defaultValue: {
          summary: '<div>',
        },
        type: {
          summary: 'string | components',
        },
      },
      control: {
        type: 'text',
      },
    },
    'only-stack-space（子要素）': {
      description: '※Stackコンポーネント直下の要素のclass名に指定<br>!only-stack-space-[*]',
      table: {
        type: {
          summary: 'px | 0 | 2 | 4 | 6 | 8 | 10 | 12 | 14 | s | m | l | xl',
        },
      },
    },
    children: {
      description: '',
      table: {
        type: {
          summary: 'React.ReactNode',
        },
      },
    },
  },
}

export default meta

export const Default: StoryObj<typeof VStack> = {
  args: {},
  play: async ({ canvasElement }) => {},
}
