import type { Meta, StoryObj } from '@storybook/react'
import { userEvent as user, waitFor, within } from '@storybook/testing-library'
import { expect } from '@storybook/jest'
import { TextInput } from './'

const meta: Meta<typeof TextInput> = {
  component: TextInput,
  args: { disabled: false },
  tags: ['autodocs'],
}

export default meta

export const Default: StoryObj<typeof TextInput> = {
  args: { disabled: false },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const textbox = canvas.getByRole('textbox')
    await expect(textbox).toBeEnabled()
    await user.type(textbox, 'Hello, World!')
    await expect(textbox).toHaveValue('Hello, World!')
  },
}
export const Alert: StoryObj<typeof TextInput> = {
  args: { isError: true },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const textbox = canvas.getByRole('textbox')
    expect(textbox).toBeEnabled()
    expect(textbox).toHaveAttribute('data-error', 'true')
  },
}
export const Placeholder: StoryObj<typeof TextInput> = {
  args: { placeholder: 'placeholder' },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const textbox = canvas.getByPlaceholderText('placeholder')
    expect(textbox).toBeInTheDocument()
  },
}
export const Disabled: StoryObj<typeof TextInput> = {
  args: { disabled: true },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const textbox = canvas.getByRole('textbox')
    await expect(textbox).not.toBeEnabled()
    await user.type(textbox, 'Hello, World!')
    await expect(textbox).toHaveValue('')
  },
}

export const MaxWidth: StoryObj<typeof TextInput> = {
  args: { maxW: 's' },
}
