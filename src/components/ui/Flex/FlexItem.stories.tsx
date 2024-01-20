import type { Meta, StoryObj } from '@storybook/react'
import { userEvent as user, waitFor, within } from '@storybook/testing-library'
import { expect } from '@storybook/jest'
import { Flex } from './'

const meta: Meta<typeof Flex.Item> = {
  title: 'components/layout/Flex/Flex.Item',
  component: Flex.Item,
  args: {
    span: 1,
  },
  // tags: ['autodocs'],
  argTypes: {
    span: {
      control: {
        type: 'inline-radio',
      },
      options: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 'auto', undefined],
      description: '各アイテムの使用カラム数<br>responsive: `initial` `md` `lg`',
      table: {
        defaultValue: {
          summary: 'undefined',
        },
        type: {
          summary: '1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | auto',
        },
      },
    },
  },
}

export default meta

export const Default: StoryObj<typeof Flex.Item> = {
  args: { children: '1', className: 'border border-border-divider p-2' },
  decorators: [
    (Story) => (
      <Flex.Wrapper>
        <Flex>
          <Story />
        </Flex>
      </Flex.Wrapper>
    ),
  ],
  play: async ({ canvasElement }) => {},
}
