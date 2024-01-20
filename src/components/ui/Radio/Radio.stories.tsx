import type { Meta, StoryObj } from '@storybook/react'
import { userEvent as user, waitFor, within } from '@storybook/testing-library'
import { expect } from '@storybook/jest'
import { Radio } from './'
import { Input } from '../Input'
import { MdInfoOutline } from 'react-icons/md'
import { Link } from '../Link'

const meta: Meta<typeof Radio> = {
  component: Radio,
  args: { disabled: false, label: 'Label', isError: false, required: false },
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

export const Default: StoryObj<typeof Radio> = {
  args: { id: 'radio' },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const radio = canvas.getByRole('radio', { name: 'Label' })
    await expect(radio).toBeEnabled()
    await expect(radio).not.toBeChecked()
    await user.click(radio)
    await expect(radio).toBeChecked()
    //   // await waitFor(() => expect(radio).toBeChecked())
  },
}
export const Alert: StoryObj<typeof Radio> = {
  args: { id: 'radio2', isError: true },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const radio = canvas.getByRole('radio', { name: 'Label' })
    const label = canvas.getByText('Label')

    await expect(radio).toHaveAttribute('data-error', 'true')
    await expect(radio).toBeEnabled()
    await expect(radio).not.toBeChecked()
    await user.click(radio)
    await expect(radio).toBeChecked()
  },
}
export const Disabled: StoryObj<typeof Radio> = {
  args: { id: 'radio3', disabled: true },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const radio = canvas.getByRole('radio', { name: 'Label' })
    await expect(radio).toBeDisabled()
    await expect(radio).not.toBeChecked()
    await user.click(radio)
    await expect(radio).not.toBeChecked()
  },
}

export const DisabledChecked: StoryObj<typeof Radio> = {
  args: { id: 'radio4', disabled: true, checked: true },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const radio = canvas.getByRole('radio', { name: 'Label' })
    await expect(radio).toBeDisabled()
    await expect(radio).toBeChecked()
    await user.click(radio)
    await expect(radio).toBeChecked()
  },
}

export const DescriptionError: StoryObj<typeof Radio> = {
  args: {
    id: 'radio5',
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
    const radio = canvas.getByRole('radio', { name: 'Label' })
    const label = canvas.getByText('Label')
    const error = canvas.getByText(/Errorテキスト/)
    const description = canvas.getByText(/Descriptionテキスト/)
  },
}

export const LabelCustom: StoryObj<typeof Radio> = {
  args: {
    id: 'radio6',
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

export const Panel: StoryObj<typeof Radio> = {
  args: {
    id: 'radio7',
    isPanel: true,
    description: (
      <Input.Description>
        <p>DescriptionテキストDescriptionテキストDescriptionテキスト</p>
      </Input.Description>
    ),
  },
  play: async ({ canvasElement }) => {},
}
