import type { Meta, StoryObj } from '@storybook/react'
import { userEvent as user, waitFor, within } from '@storybook/testing-library'
import { expect } from '@storybook/jest'
import { Box } from './'

const meta: Meta<typeof Box> = {
  component: Box,
  args: { children: 'Box', as: '' },
  tags: ['autodocs'],
}

export default meta

export const Default: StoryObj<typeof Box> = {
  args: {},
  play: async ({ canvasElement }) => {},
}
export const Primary: StoryObj<typeof Box> = {
  args: { color: 'primary' },
  play: async ({ canvasElement }) => {},
}
export const Secondary: StoryObj<typeof Box> = {
  args: { color: 'secondary' },
  play: async ({ canvasElement }) => {},
}
export const Teriary: StoryObj<typeof Box> = {
  args: { color: 'teriary' },
  play: async ({ canvasElement }) => {},
}
export const Padding: StoryObj<typeof Box> = {
  args: { color: 'secondary', padding: 12 },
  play: async ({ canvasElement }) => {},
}
export const AsSection: StoryObj<typeof Box> = {
  args: { as: 'section', color: 'secondary' },
  play: async ({ canvasElement }) => {},
}
