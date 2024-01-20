import type { Meta, StoryObj } from '@storybook/react'
import { userEvent as user, waitFor, within } from '@storybook/testing-library'
import { expect } from '@storybook/jest'
import { Checkbox } from './'
import { Input } from '../Input'
import { MdInfoOutline } from 'react-icons/md'
import { Link } from '../Link'

const meta: Meta<typeof Checkbox> = {
  component: Checkbox,
  args: { disabled: false, label: 'Label' },
  tags: ['autodocs'],
  argTypes: {
    disabled: {
      description: '-',
    },
    required: {
      description: '-',
    },
    isError: {
      description: '-',
    },
    label: {
      description: '-',
    },
  },
}

export default meta

export const Default: StoryObj<typeof Checkbox> = {
  args: { id: 'checkbox' },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const checkbox = canvas.getByRole('checkbox', { name: 'Label' })
    await expect(checkbox).toBeEnabled()
    await expect(checkbox).not.toBeChecked()
    await user.click(checkbox)
    await expect(checkbox).toBeChecked()
    //   // await waitFor(() => expect(checkbox).toBeChecked())
  },
}
export const Alert: StoryObj<typeof Checkbox> = {
  args: { id: 'checkbox2', isError: true },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const checkbox = canvas.getByRole('checkbox', { name: 'Label' })
    const label = canvas.getByText('Label')

    await expect(checkbox).toHaveAttribute('data-error', 'true')
    await expect(checkbox).toBeEnabled()
    await expect(checkbox).not.toBeChecked()
    await user.click(checkbox)
    await expect(checkbox).toBeChecked()
  },
}
export const Disabled: StoryObj<typeof Checkbox> = {
  args: { id: 'checkbox3', disabled: true },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const checkbox = canvas.getByRole('checkbox', { name: 'Label' })
    await expect(checkbox).toBeDisabled()
    await expect(checkbox).not.toBeChecked()
    await user.click(checkbox)
    await expect(checkbox).not.toBeChecked()
  },
}

export const DisabledChecked: StoryObj<typeof Checkbox> = {
  args: { id: 'checkbox4', disabled: true, checked: true },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const checkbox = canvas.getByRole('checkbox', { name: 'Label' })
    await expect(checkbox).toBeDisabled()
    await expect(checkbox).toBeChecked()
    await user.click(checkbox)
    await expect(checkbox).toBeChecked()
  },
}

export const DescriptionError: StoryObj<typeof Checkbox> = {
  args: {
    id: 'checkbox5',
    isError: true,
    description: (
      <Input.Description>
        <p>DescriptionテキストDescriptionテキストDescriptionテキスト</p>
      </Input.Description>
    ),
    error: (
      <Input.Error>
        <p>ErrorテキストErrorテキストErrorテキスト</p>
      </Input.Error>
    ),
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const checkbox = canvas.getByRole('checkbox', { name: 'Label' })
    const label = canvas.getByText('Label')
    const error = canvas.getByText(/Errorテキスト/)
    const description = canvas.getByText(/Descriptionテキスト/)
  },
}

export const LabelCustom: StoryObj<typeof Checkbox> = {
  args: {
    id: 'checkbox6',
    label: (
      <span className="flex items-center">
        <MdInfoOutline className="mr-1 h-5 w-5" aria-label="info" />
        Label Custom
        <Link href="https://yahoo.co.jp" target="_blank" className="mx-1">
          link test
        </Link>
      </span>
    ),
  },
  play: async ({ canvasElement }) => {},
}

export const Panel: StoryObj<typeof Checkbox> = {
  args: {
    id: 'checkbox7',
    isPanel: true,
    description: (
      <Input.Description>
        <p>DescriptionテキストDescriptionテキストDescriptionテキスト</p>
      </Input.Description>
    ),
  },
  play: async ({ canvasElement }) => {},
}
