import type { Meta, StoryObj } from '@storybook/react'
import { userEvent as user, waitFor, within } from '@storybook/testing-library'
import { expect } from '@storybook/jest'
import { Text, textClass } from './'
import NextLink from 'next/link'

const meta: Meta<typeof Text> = {
  component: Text,
  args: {
    size: 'bodyL',
    children:
      'テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト',
  },
  tags: ['autodocs'],
  argTypes: {
    as: {
      control: {
        type: 'inline-radio',
      },
      options: ['p', 'span', 'div', 'strong'],
    },
    size: {
      control: {
        type: 'inline-radio',
      },
      options: ['bodyL', 'bodyM', 'labelL', 'labelM', 'noteL', 'noteM'],
    },
  },
}

export default meta

export const Default: StoryObj<typeof Text> = {
  args: {},
  play: async ({ canvasElement }) => {},
}
export const BodyL: StoryObj<typeof Text> = {
  args: { size: 'bodyL' },
  play: async ({ canvasElement }) => {},
}
export const BodyM: StoryObj<typeof Text> = {
  args: { size: 'bodyM' },
  play: async ({ canvasElement }) => {},
}
export const LabelL: StoryObj<typeof Text> = {
  args: { size: 'labelL' },
  play: async ({ canvasElement }) => {},
}
export const LabelM: StoryObj<typeof Text> = {
  args: { size: 'labelM' },
  play: async ({ canvasElement }) => {},
}
export const NoteL: StoryObj<typeof Text> = {
  args: { size: 'noteL' },
  play: async ({ canvasElement }) => {},
}
export const NoteM: StoryObj<typeof Text> = {
  args: { size: 'noteM' },
  play: async ({ canvasElement }) => {},
}

export const TagStrong: StoryObj<typeof Text> = {
  args: {
    children: <strong>ボールド</strong>,
  },
}
export const TagB: StoryObj<typeof Text> = {
  args: {
    children: <b>ボールド</b>,
  },
}

export const TagS: StoryObj<typeof Text> = {
  args: {
    children: <s>打消し線</s>,
  },
}
export const TagDel: StoryObj<typeof Text> = {
  args: {
    children: <del>打消し線</del>,
  },
}

export const ClassName: StoryObj<typeof Text> = {
  args: {
    className: textClass(),
  },
}

export const ColorWhite: StoryObj<typeof Text> = {
  args: { color: 'white', className: 'bg-black' },
  play: async ({ canvasElement }) => {},
}

export const ColorBlack: StoryObj<typeof Text> = {
  args: { color: 'black', className: 'bg-white' },
  play: async ({ canvasElement }) => {},
}
