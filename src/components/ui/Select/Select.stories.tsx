import type { Meta, StoryObj } from '@storybook/react'
import { userEvent as user, waitFor, within } from '@storybook/testing-library'
import { expect, jest } from '@storybook/jest'
import { Select } from './'
import NextLink from 'next/link'

const meta: Meta<typeof Select> = {
  component: Select,
  args: { disabled: false },
  tags: ['autodocs'],
}

const OptionList = (
  <>
    <option value="text1">text1</option>
    <option value="text2">text2</option>
    <option value="text3">text3</option>
  </>
)

export default meta

const onChange = jest.fn()

export const Default: StoryObj<typeof Select> = {
  args: {
    disabled: false,
    children: OptionList,
    onChange,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const select = canvas.getByRole('combobox')
    await expect(select).toBeEnabled()
    await user.selectOptions(select, ['text2'])
    expect(onChange).toHaveBeenCalledTimes(1)
    expect(canvas.getByRole<HTMLOptionElement>('option', { name: 'text1' }).selected).toBe(false)
    expect(canvas.getByRole<HTMLOptionElement>('option', { name: 'text2' }).selected).toBe(true)
  },
}
export const Alert: StoryObj<typeof Select> = {
  args: { isError: true, children: OptionList },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const select = canvas.getByRole('combobox')
    await expect(select).toBeEnabled()
    await expect(select).toHaveAttribute('data-error', 'true')
  },
}

export const Multiple: StoryObj<typeof Select> = {
  args: { multiple: true, children: OptionList },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const select = canvas.getByRole('listbox')
    await user.selectOptions(select, ['text2', 'text3'])
    expect(canvas.getByRole<HTMLOptionElement>('option', { name: 'text1' }).selected).toBe(false)
    expect(canvas.getByRole<HTMLOptionElement>('option', { name: 'text2' }).selected).toBe(true)
    expect(canvas.getByRole<HTMLOptionElement>('option', { name: 'text3' }).selected).toBe(true)
  },
}
export const Size: StoryObj<typeof Select> = {
  args: { size: 3, children: OptionList },
  play: async ({ canvasElement }) => {},
}
export const Disabled: StoryObj<typeof Select> = {
  args: { disabled: true, children: OptionList },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const select = canvas.getByRole('combobox')
    await expect(select).not.toBeEnabled()
    await user.selectOptions(select, ['text2'])
    expect(canvas.getByRole<HTMLOptionElement>('option', { name: 'text1' }).selected).not.toBe(false)
    expect(canvas.getByRole<HTMLOptionElement>('option', { name: 'text2' }).selected).not.toBe(true)
  },
}

export const MaxWidth: StoryObj<typeof Select> = {
  args: { maxW: 's', children: OptionList },
}
