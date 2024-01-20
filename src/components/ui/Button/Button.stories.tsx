import type { Meta, StoryObj } from '@storybook/react'
import { userEvent as user, waitFor, within } from '@storybook/testing-library'
import { expect, jest } from '@storybook/jest'
import { Button } from './'
import { MdOutlineOutlet, MdNorth } from 'react-icons/md'
import NextLink from 'next/link'

const meta: Meta<typeof Button> = {
  component: Button,
  args: { children: '送信する' },
  tags: ['autodocs'],
  argTypes: {
    children: {
      description: '',
      table: {
        type: {
          summary: 'React.ReactNode',
        },
      },
    },
    variant: {
      description: 'Color指定',
      control: {
        type: 'inline-radio',
      },
      options: ['primary', 'secondary', 'teriary'],
      table: {
        defaultValue: {
          summary: 'primary',
        },
        type: {
          summary: 'primary | secondary | teriary',
        },
      },
    },
    size: {
      description: 'サイズ指定',
      control: {
        type: 'inline-radio',
      },
      options: ['xs', 's', 'm', 'l', 'none'],
      table: {
        defaultValue: {
          summary: 'm',
        },
        type: {
          summary: 'xs | s | m | l | none',
        },
      },
    },
    radius: {
      description: '丸ボタン<br>※現状`full`設定ではsize指定は無効',
      control: {
        type: 'inline-radio',
      },
      options: ['full', 'normal'],
      table: {
        defaultValue: {
          summary: 'normal',
        },
        type: {
          summary: 'full | normal',
        },
      },
    },
    width: {
      description: '幅指定',
      control: {
        type: 'inline-radio',
      },
      options: ['full', undefined],
      table: {
        defaultValue: {
          summary: 'undefined',
        },
        type: {
          summary: 'full | undefined',
        },
      },
    },
    disabled: {
      description: 'disabled',
      table: {
        defaultValue: {
          summary: 'undefined',
        },
        type: {
          summary: 'boolean',
        },
      },
      control: {
        type: 'boolean',
      },
    },
    as: {
      description: 'polymorphic component',
      table: {
        defaultValue: {
          summary: '<button>',
        },
        type: {
          summary: 'string | components',
        },
      },
      control: {
        type: 'text',
      },
    },
  },
}

const mockFunc = jest.fn()
const mockDisabledFunc = jest.fn()

export default meta

export const Default: StoryObj<typeof Button> = {
  args: { disabled: false, onClick: mockFunc },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const button = canvas.getByRole('button', { name: '送信する' })
    expect(button).toBeInTheDocument()
    await user.click(button)
    await expect(mockFunc).toHaveBeenCalled()
  },
}
export const Primary: StoryObj<typeof Button> = {
  args: { variant: 'primary' },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const button = canvas.getByRole('button', { name: '送信する' })
    /*
    expect(button).toHaveStyleRule({
      backgroundColor: 'rgba(0, 0, 0, 0)',
      borderColor: 'rgba(0, 0, 0, 0)',
      color: 'var(--button-normal)',
    })
    */
    const style = window.getComputedStyle(button)
  },
}
export const Secondary: StoryObj<typeof Button> = {
  args: { variant: 'secondary' },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const button = canvas.getByRole('button', { name: '送信する' })
  },
}
export const Teriary: StoryObj<typeof Button> = {
  args: { variant: 'teriary' },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const button = canvas.getByRole('button', { name: '送信する' })
  },
}
export const SizeXS: StoryObj<typeof Button> = {
  args: { size: 'xs' },
  play: async ({ canvasElement }) => {},
}
export const SizeS: StoryObj<typeof Button> = {
  args: { size: 's' },
  play: async ({ canvasElement }) => {},
}
export const SizeM: StoryObj<typeof Button> = {
  args: { size: 'm' },
  play: async ({ canvasElement }) => {},
}
export const SizeL: StoryObj<typeof Button> = {
  args: { size: 'l' },
  play: async ({ canvasElement }) => {},
}
export const WithIcon: StoryObj<typeof Button> = {
  args: {
    children: (
      <>
        <MdOutlineOutlet className="mr-2 h-6 w-6" aria-hidden />
        <span>送信する</span>
      </>
    ),
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const button = canvas.getByRole('button', { name: '送信する' })
    expect(button).toBeInTheDocument()
  },
}
export const PageTopButton: StoryObj<typeof Button> = {
  args: {
    variant: 'secondary',
    radius: 'full',
    children: (
      <>
        <MdNorth role="img" className="h-6 w-6" aria-label="page top" />
      </>
    ),
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const img = canvas.getByRole('img', { name: 'page top' })
    expect(img).toBeInTheDocument()
  },
}
export const Link: StoryObj<typeof Button> = {
  args: { as: 'a', href: '/' },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const link = canvas.getByRole('link', { name: '送信する' })
    expect(link).toBeInTheDocument()
    expect(link).toHaveAttribute('href', '/')
  },
}

export const NextjsLink: StoryObj<typeof Button> = {
  args: { as: NextLink, href: '/' },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const link = canvas.getByRole('link', { name: '送信する' })
    expect(link).toBeInTheDocument()
    expect(link).toHaveAttribute('href', '/')
  },
}

export const Disabled: StoryObj<typeof Button> = {
  args: { disabled: true, onClick: mockDisabledFunc },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const button = canvas.getByRole('button')
    await expect(button).toBeDisabled()
    await user.click(button)
    await expect(mockDisabledFunc).not.toHaveBeenCalled()
  },
}
