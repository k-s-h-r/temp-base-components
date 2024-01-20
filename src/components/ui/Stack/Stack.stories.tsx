import type { Meta, StoryObj } from '@storybook/react'
import { userEvent as user, waitFor, within } from '@storybook/testing-library'
import { expect } from '@storybook/jest'
import { Stack } from './'

const meta: Meta<typeof Stack> = {
  title: 'components/layout/Stack/Stack',
  component: Stack,
  args: {
    space: 'm',
    direction: 'vertical',
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
    direction: {
      control: {
        type: 'inline-radio',
      },
      options: ['vertical', 'horizontal'],
      description: 'Stackの向き<br>responsive: `initial` `md` `lg`',
      table: {
        defaultValue: {
          summary: 'vertical',
        },
        type: {
          summary: 'vertical | horizontal',
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

export const Default: StoryObj<typeof Stack> = {
  args: {},
  play: async ({ canvasElement }) => {},
}

export const Horizontal: StoryObj<typeof Stack> = {
  args: { direction: 'horizontal' },
  play: async ({ canvasElement }) => {},
}
export const Vertical: StoryObj<typeof Stack> = {
  args: { direction: 'vertical' },
  play: async ({ canvasElement }) => {},
}
export const Responsive: StoryObj<typeof Stack> = {
  args: {
    direction: {
      initial: 'vertical',
      md: 'horizontal',
    },
    space: {
      initial: 2,
      md: 12,
    },
  },
  play: async ({ canvasElement }) => {},
}

export const SpaceToken: StoryObj<typeof Stack> = {
  args: {
    space: 'm',
  },
  play: async ({ canvasElement }) => {},
}

export const CustomSpace: StoryObj<typeof Stack> = {
  args: {
    direction: 'vertical',
    space: 6,
    children: (
      <>
        <div className="border border-border-divider p-2">stack</div>
        <div className="border border-border-divider p-2 !only-stack-space-px">stack custom space [px]</div>
        <div className="border border-border-divider p-2">stack</div>
        <div className="border border-border-divider p-2 !only-stack-space-12">stack custom space [12]</div>
      </>
    ),
  },
  play: async ({ canvasElement }) => {},
}

export const CustomElement: StoryObj<typeof Stack> = {
  args: {
    direction: 'vertical',
    space: 4,
    as: 'ul',
    children: (
      <>
        <li className="border border-border-divider p-2">stack</li>
        <li className="border border-border-divider p-2">stack</li>
        <li className="border border-border-divider p-2">stack</li>
        <li className="border border-border-divider p-2">stack</li>
      </>
    ),
  },
  play: async ({ canvasElement }) => {},
}

export const Nest: StoryObj<typeof Stack> = {
  args: {
    direction: 'vertical',
    space: 4,
    children: (
      <>
        <div className="border border-border-divider p-2">stack</div>
        <Stack space={0} direction="horizontal" className="border border-border-divider p-2">
          <div className="border border-border-divider p-2">stack</div>
          <div className="border border-border-divider p-2">stack</div>
          <div className="border border-border-divider p-2">stack</div>
        </Stack>
        <Stack space={10} className="border border-border-divider p-2">
          <div className="border border-border-divider p-2">stack</div>
          <div className="border border-border-divider p-2">stack</div>
          <div className="border border-border-divider p-2">stack</div>
        </Stack>
        <Stack space="m" direction="horizontal" className="border border-border-divider p-2">
          <div className="border border-border-divider p-2">stack</div>
          <div className="border border-border-divider p-2">stack</div>
          <div className="border border-border-divider p-2">stack</div>
        </Stack>
      </>
    ),
  },
  play: async ({ canvasElement }) => {},
}
