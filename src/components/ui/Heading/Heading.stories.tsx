import type { Meta, StoryObj } from '@storybook/react'
import { userEvent as user, waitFor, within } from '@storybook/testing-library'
import { expect } from '@storybook/jest'
import { Heading } from './'
import NextLink from 'next/link'

const meta: Meta<typeof Heading> = {
  component: Heading,
  args: { size: '', children: '見出し見出し見出し' },
  tags: ['autodocs'],
  argTypes: {
    as: {
      control: {
        type: 'inline-radio',
      },
      options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'span', 'div', 'strong'],
    },
    size: {
      control: {
        type: 'inline-radio',
      },
      options: ['2xl', 'xl', 'l', 'm', 's', 'xs', '2xs'],
    },
  },
}

export default meta

export const Default: StoryObj<typeof Heading> = {
  args: { size: '' },
  play: async ({ canvasElement }) => {},
}
export const ElementH1ToH6: StoryObj<typeof Heading> = {
  args: { as: 'h1' },
  play: async ({ canvasElement }) => {},
}
export const SizeXL: StoryObj<typeof Heading> = {
  args: { size: 'xl' },
  play: async ({ canvasElement }) => {},
}
export const SizeL: StoryObj<typeof Heading> = {
  args: { size: 'l' },
  play: async ({ canvasElement }) => {},
}
export const SizeM: StoryObj<typeof Heading> = {
  args: { size: 'm' },
  play: async ({ canvasElement }) => {},
}
export const SizeS: StoryObj<typeof Heading> = {
  args: { size: 's' },
  play: async ({ canvasElement }) => {},
}
export const SizeXS: StoryObj<typeof Heading> = {
  args: { size: 'xs' },
  play: async ({ canvasElement }) => {},
}
export const SizeXXS: StoryObj<typeof Heading> = {
  args: { size: '2xs' },
  play: async ({ canvasElement }) => {},
}

export const ColorWhite: StoryObj<typeof Heading> = {
  args: { color: 'white', className: 'bg-black' },
  play: async ({ canvasElement }) => {},
}

export const ColorBlack: StoryObj<typeof Heading> = {
  args: { color: 'black', className: 'bg-white' },
  play: async ({ canvasElement }) => {},
}
