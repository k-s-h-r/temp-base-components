import type { Meta, StoryObj } from '@storybook/react'
import { userEvent as user, waitFor, within } from '@storybook/testing-library'
import { expect } from '@storybook/jest'
import { InlineInput } from './'
import { RadioInput } from '../Radio'
import { TextInput } from '../TextInput'
import { Input } from '../Input'
import { CheckboxInput } from '../Checkbox'
import { Select } from '../Select'

const meta: Meta<typeof InlineInput> = {
  component: InlineInput,
  args: { className: '', label: 'Label' },
  tags: ['autodocs'],
}

export default meta

export const Default: StoryObj<typeof InlineInput> = {
  args: { htmlFor: 'radio', isPadding: true, isPanel: false, children: <RadioInput id="radio" /> },
  play: async ({ canvasElement }) => {
    //   const canvas = within(canvasElement)
    //   // const checkbox = canvas.getByRole("input", { name: "記事タイトル" });
    //   const checkbox = canvas.getByRole('checkbox')
    //   await user.click(checkbox)
    //   // await waitFor(() => expect(checkbox).toBeChecked())
    //   await expect(checkbox).toBeChecked()
    //   await expect(checkbox).toBeEnabled()
  },
}
export const DefaultCheckbox: StoryObj<typeof InlineInput> = {
  args: { htmlFor: 'checkbox', isPadding: true, children: <CheckboxInput id="checkbox" /> },
  play: async ({ canvasElement }) => {},
}
export const Description: StoryObj<typeof InlineInput> = {
  args: {
    htmlFor: 'radio2',
    isPadding: true,
    description: (
      <Input.Description>
        <p>Description Text</p>
      </Input.Description>
    ),
    children: <RadioInput id="radio2" />,
  },
  play: async ({ canvasElement }) => {},
}
export const Alert: StoryObj<typeof InlineInput> = {
  args: {
    htmlFor: 'radio3',
    isPadding: true,
    isError: true,
    error: (
      <Input.Error>
        <p>Error Text</p>
      </Input.Error>
    ),
    children: <RadioInput id="radio3" variant="alert" />,
  },
  play: async ({ canvasElement }) => {},
}

export const DescriptionAlertOutside: StoryObj<typeof InlineInput> = {
  args: {
    htmlFor: 'radio22',
    isPadding: true,
    description: (
      <Input.Description>
        <p>Description Text</p>
      </Input.Description>
    ),
    isError: true,
    error: (
      <Input.Error>
        <p>Error Text</p>
      </Input.Error>
    ),
    isOutside: true,
    children: <RadioInput id="radio22" variant="alert" />,
  },
  play: async ({ canvasElement }) => {},
}

export const DescriptionOutside: StoryObj<typeof InlineInput> = {
  args: {
    htmlFor: 'radio222',
    isPadding: true,
    description: (
      <Input.Description>
        <p>Description Text</p>
      </Input.Description>
    ),
    isError: true,
    error: (
      <Input.Error>
        <p>Error Text</p>
      </Input.Error>
    ),
    isDescriptionOutside: true,
    children: <RadioInput id="radio222" variant="alert" />,
  },
  play: async ({ canvasElement }) => {},
}

export const AlertOutside: StoryObj<typeof InlineInput> = {
  args: {
    htmlFor: 'radio2222',
    isPadding: true,
    description: (
      <Input.Description>
        <p>Description Text</p>
      </Input.Description>
    ),
    isError: true,
    error: (
      <Input.Error>
        <p>Error Text</p>
      </Input.Error>
    ),
    isErrorOutside: true,
    children: <RadioInput id="radio2222" variant="alert" />,
  },
  play: async ({ canvasElement }) => {},
}

export const Disabled: StoryObj<typeof InlineInput> = {
  args: {
    isPadding: true,
    isDisabled: true,
    children: <RadioInput id="radio4" disabled />,
    htmlFor: 'radio4',
  },
  play: async ({ canvasElement }) => {
    //   const canvas = within(canvasElement)
    //   const checkbox = canvas.getByRole('checkbox')
    //   await user.click(checkbox)
    //   await expect(checkbox).not.toBeChecked()
    //   await expect(checkbox).toBeDisabled()
  },
}
export const DisabledChecked: StoryObj<typeof InlineInput> = {
  args: { htmlFor: 'radio5', isPadding: true, isDisabled: true, children: <RadioInput id="radio5" disabled checked /> },
  play: async ({ canvasElement }) => {
    //   const canvas = within(canvasElement)
    //   const checkbox = canvas.getByRole('checkbox')
    //   await user.click(checkbox)
    //   await expect(checkbox).not.toBeChecked()
    //   await expect(checkbox).toBeDisabled()
  },
}

export const LabelPositionXLeft: StoryObj<typeof InlineInput> = {
  args: { htmlFor: 'select', labelPositionX: 'left', children: <Select id="select" /> },
  play: async ({ canvasElement }) => {},
}

export const LabelPositionYCenter: StoryObj<typeof InlineInput> = {
  args: { htmlFor: 'select2', labelPositionY: 'center', children: <Select id="select2" /> },
  play: async ({ canvasElement }) => {},
}
export const TextInputLabelPositionYCenter: StoryObj<typeof InlineInput> = {
  args: { htmlFor: 'textinput', labelPositionY: 'center', children: <TextInput id="textinput" /> },
  play: async ({ canvasElement }) => {},
}

export const TextInputLabelPositionYCenterXLeft: StoryObj<typeof InlineInput> = {
  args: { htmlFor: 'textinput2', labelPositionX: 'left', labelPositionY: 'center', children: <TextInput id="textinput2" /> },
  play: async ({ canvasElement }) => {},
}

export const PanelOnlyRadioCheckbox: StoryObj<typeof InlineInput> = {
  args: { htmlFor: 'radio6', isPanel: true, children: <RadioInput isPanel={true} id="radio6" /> },
  play: async ({ canvasElement }) => {},
}
