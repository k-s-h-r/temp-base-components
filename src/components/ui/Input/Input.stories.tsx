import type { Meta, StoryObj } from '@storybook/react'
import { userEvent as user, waitFor, within } from '@storybook/testing-library'
import { expect } from '@storybook/jest'
import { Input } from './'
import { TextInput } from '../TextInput'
import { Textarea } from '../Textarea'
import { Select } from '../Select'
import { Checkbox } from '../Checkbox'
import { Text } from '../Text'
import { Heading } from '../Heading'
import { Grid } from '../Grid'

const meta: Meta<typeof Input> = {
  component: Input,
  args: { children: <TextInput placeholder="input text" /> },
  tags: ['autodocs'],
  argTypes: {
    isDisabled: {
      control: 'boolean',
      description: '-',
    },
    isRequired: {
      control: 'boolean',
      description: '-',
    },
    isError: {
      control: 'boolean',
      description: '-',
    },
    isFieldset: {
      control: 'boolean',
      description: '-',
    },
    classnames: {
      control: 'object',
    },
  },
}

export default meta

export const Default: StoryObj<typeof Input> = {
  args: {},
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

export const Fieldset: StoryObj<typeof Input> = {
  args: {
    isFieldset: true,
    children: (
      <>
        <Input.Label>Legend</Input.Label>
        <Checkbox label="checkbox1" />
        <Checkbox label="checkbox2" />
        <Checkbox label="checkbox3" />
      </>
    ),
  },
  play: async ({ canvasElement }) => {},
}

export const Description: StoryObj<typeof Input> = {
  args: {
    children: (
      <>
        <Input.Label htmlFor="testid">ラベル</Input.Label>
        <Input.Description>
          <p>DescriptionテキストDescriptionテキストDescriptionテキスト</p>
        </Input.Description>
        <TextInput placeholder="input text" id="testid" />
      </>
    ),
  },
  play: async ({ canvasElement }) => {},
}

export const AriaDescription: StoryObj<typeof Input> = {
  args: {
    children: (
      <>
        <Input.Label htmlFor="testid2">ラベル</Input.Label>
        <Input.Description id="inputId2-description">
          <p>DescriptionテキストDescriptionテキストDescriptionテキスト</p>
        </Input.Description>
        <TextInput placeholder="input text" id="testid2" aria-describedby="inputId2-description" />
      </>
    ),
  },
  play: async ({ canvasElement }) => {},
}

export const Error: StoryObj<typeof Input> = {
  args: {
    isError: true,
    children: (
      <>
        <Input.Label htmlFor="testiderror">ラベル</Input.Label>
        <TextInput placeholder="input text" id="testiderror" isError={true} />
        <Input.Error>
          <p>ErrorテキストErrorテキストErrorテキスト</p>
        </Input.Error>
      </>
    ),
  },
  play: async ({ canvasElement }) => {},
}

export const Disabled: StoryObj<typeof Input> = {
  args: {
    isDisabled: true,
    children: (
      <>
        <Input.Label htmlFor="testiderror">ラベル</Input.Label>
        <Input.Description>
          <p>DescriptionテキストDescriptionテキストDescriptionテキスト</p>
        </Input.Description>
        <TextInput placeholder="input text" id="testiderror" disabled />
        <Input.Error>
          <p>ErrorテキストErrorテキストErrorテキスト</p>
        </Input.Error>
      </>
    ),
  },
  play: async ({ canvasElement }) => {},
}

export const SelectElement: StoryObj<typeof Input> = {
  args: {
    children: (
      <>
        <Input.Label htmlFor="selectid">ラベル</Input.Label>
        <Input.Description>description</Input.Description>
        <Select id="selectid">
          <option>option</option>
        </Select>
      </>
    ),
  },
  play: async ({ canvasElement }) => {},
}

export const LabelHidden: StoryObj<typeof Input> = {
  args: {
    children: (
      <>
        <Input.Label htmlFor="testid3" isHidden={true}>
          ラベル
        </Input.Label>
        <Input.Description className="only-stack-space-0">description</Input.Description>
        <TextInput placeholder="input text" id="testid3" />
      </>
    ),
  },
  play: async ({ canvasElement }) => {},
}

export const LabelAfterText: StoryObj<typeof Input> = {
  args: {
    children: (
      <>
        <Input.Label labelAfterText={'任意'} htmlFor="testid4">
          ラベル
        </Input.Label>
        <Input.Description>description</Input.Description>
        <TextInput placeholder="input text" id="testid4" />
      </>
    ),
  },
  play: async ({ canvasElement }) => {},
}

export const LabelAfterTextRequired: StoryObj<typeof Input> = {
  args: {
    isRequired: true,
    children: (
      <>
        <Input.Label labelAfterText={'必須'} htmlFor="testid5">
          ラベル
        </Input.Label>
        <Input.Description>description</Input.Description>
        <TextInput placeholder="input text" id="testid5" />
      </>
    ),
  },
  play: async ({ canvasElement }) => {},
}

export const LabelSizeM: StoryObj<typeof Input> = {
  args: {
    children: (
      <>
        <Input.Label size="m" htmlFor="testid5">
          ラベル
        </Input.Label>
        <Input.Description>description</Input.Description>
        <TextInput placeholder="input text" id="testid5" />
      </>
    ),
  },
  play: async ({ canvasElement }) => {},
}

export const LabelSizeL: StoryObj<typeof Input> = {
  args: {
    children: (
      <>
        <Input.Label size="l" htmlFor="testid6">
          ラベル
        </Input.Label>
        <Input.Description>description</Input.Description>
        <TextInput placeholder="input text" id="testid6" />
      </>
    ),
  },
  play: async ({ canvasElement }) => {},
}

export const CharacterLimit: StoryObj<typeof Input> = {
  args: {
    children: (
      <>
        <Input.Label htmlFor="testcharacterlimit">ラベル</Input.Label>
        <Textarea placeholder="input text" id="testcharacterlimit" />
        <Grid gridType="1fr_max" gap="m">
          <Grid.Item></Grid.Item>
          <Grid.Item>
            <Input.Count count={0} limit={100} />
          </Grid.Item>
        </Grid>
      </>
    ),
  },
  play: async ({ canvasElement }) => {},
}

export const CharacterLimitError: StoryObj<typeof Input> = {
  args: {
    isError: true,
    children: (
      <>
        <Input.Label htmlFor="testcharacterlimit">ラベル</Input.Label>
        <Textarea placeholder="input text" id="testcharacterlimit" isError={true} />
        <Grid gridType="1fr_max" gap="m">
          <Grid.Item>
            <Input.Error>
              <p>ErrorテキストErrorテキストErrorテキスト</p>
            </Input.Error>
          </Grid.Item>
          <Grid.Item>
            <Input.Count count={101} limit={100} />
          </Grid.Item>
        </Grid>
      </>
    ),
  },
  play: async ({ canvasElement }) => {},
}
