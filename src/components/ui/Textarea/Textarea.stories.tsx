import type { Meta, StoryObj } from '@storybook/react'
import { userEvent as user, waitFor, within } from '@storybook/testing-library'
import { expect } from '@storybook/jest'
import { Textarea } from './'

const meta: Meta<typeof Textarea> = {
  component: Textarea,
  args: { disabled: false },
  tags: ['autodocs'],
}

export default meta

export const Default: StoryObj<typeof Textarea> = {
  args: { disabled: false },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const textbox = canvas.getByRole('textbox')
    await expect(textbox).toBeEnabled()
    await user.type(textbox, 'Hello,{enter}World!')
    await expect(textbox).toHaveValue('Hello,\nWorld!')
  },
}
export const Alert: StoryObj<typeof Textarea> = {
  args: { isError: true },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const textbox = canvas.getByRole('textbox')
    expect(textbox).toBeEnabled()
    expect(textbox).toHaveAttribute('data-error', 'true')
  },
}
export const Placeholder: StoryObj<typeof Textarea> = {
  args: { placeholder: 'placeholder' },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const textbox = canvas.getByPlaceholderText('placeholder')
    expect(textbox).toBeInTheDocument()
  },
}
export const Disabled: StoryObj<typeof Textarea> = {
  args: { disabled: true },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const textbox = canvas.getByRole('textbox')
    await expect(textbox).not.toBeEnabled()
    await user.type(textbox, 'Hello,{enter}World!')
    await expect(textbox).toHaveValue('')
  },
}

export const MaxWidth: StoryObj<typeof Textarea> = {
  args: { maxW: 's' },
}
