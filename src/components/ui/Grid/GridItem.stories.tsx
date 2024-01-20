import type { Meta, StoryObj } from '@storybook/react'
import { userEvent as user, waitFor, within } from '@storybook/testing-library'
import { expect } from '@storybook/jest'
import { Grid } from './'

const meta: Meta<typeof Grid.Item> = {
  title: 'components/layout/Grid/Grid.Item',
  component: Grid.Item,
  args: { children: 'col', colSpan: 1, className: 'border border-border-divider p-2' },
  argTypes: {
    colSpan: {
      control: {
        type: 'inline-radio',
      },
      options: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, undefined],
      description: 'グリッドアイテムのサイズ<br>responsive: `initial` `md` `lg`',
      table: {
        defaultValue: {
          summary: 'undefined',
        },
        type: {
          summary: '1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | undefined',
        },
      },
    },
    colStart: {
      control: {
        type: 'inline-radio',
      },
      options: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, undefined],
      description: 'グリッドアイテムの先頭位置<br>responsive: `initial` `md` `lg`',
      table: {
        defaultValue: {
          summary: 'undefined',
        },
        type: {
          summary: '1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | undefined',
        },
      },
    },
    colEnd: {
      control: {
        type: 'inline-radio',
      },
      options: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, undefined],
      description: 'グリッドアイテムの末尾位置<br>responsive: `initial` `md` `lg`',
      table: {
        defaultValue: {
          summary: 'undefined',
        },
        type: {
          summary: '1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | undefined',
        },
      },
    },
  },
}

export default meta

export const Default: StoryObj<typeof Grid.Item> = {
  args: {},
  decorators: [
    (Story) => (
      <Grid>
        <Story />
      </Grid>
    ),
  ],
  play: async ({ canvasElement }) => {},
}

