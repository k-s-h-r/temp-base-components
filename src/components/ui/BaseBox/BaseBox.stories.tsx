import type { Meta, StoryObj } from '@storybook/react'
import { userEvent as user, waitFor, within } from '@storybook/testing-library'
import { expect } from '@storybook/jest'
import { BaseBox } from './'

const meta: Meta<typeof BaseBox> = {
  component: BaseBox,
  args: { children: 'BaseBox', as: '' },
  tags: ['autodocs'],
}

export default meta

export const Default: StoryObj<typeof BaseBox> = {
  args: {},
  play: async ({ canvasElement }) => {},
}
