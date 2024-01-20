import type { Meta, StoryObj } from '@storybook/react'
import { userEvent as user, waitFor, within } from '@storybook/testing-library'
import { expect, jest } from '@storybook/jest'
import { Breadcrumb } from './'
import { CgFormatSlash } from 'react-icons/cg'
import NextLink from 'next/link'
import { Link } from '../Link'

const meta: Meta<typeof Breadcrumb> = {
  component: Breadcrumb,
  args: {},
  tags: ['autodocs'],
  argTypes: {},
}

export default meta

const items = [
  <Breadcrumb.Item href="/" key={0}>
    Home
  </Breadcrumb.Item>,
  <Breadcrumb.Item href="/2" key={1}>
    2nd
  </Breadcrumb.Item>,
  <Breadcrumb.Item href="/3" key={2}>
    3rd
  </Breadcrumb.Item>,
  <Breadcrumb.Item key={3} aria-current="page">
    4th
  </Breadcrumb.Item>,
]
export const Default: StoryObj<typeof Breadcrumb> = {
  args: {
    children: items,
  },
  play: async ({ canvasElement }) => {},
}

export const LongLabelExample: StoryObj<typeof Breadcrumb> = {
  args: {
    children: (
      <>
        <Breadcrumb.Item href="/" key={0}>
          Home Home Home Home Home Home Home Home Home Home Home
        </Breadcrumb.Item>
        <Breadcrumb.Item href="/2" key={1}>
          2nd 2nd 2nd 2nd 2nd 2nd 2nd 2nd 2nd 2nd
        </Breadcrumb.Item>
        <Breadcrumb.Item href="/3" key={2}>
          3rd
        </Breadcrumb.Item>
        <Breadcrumb.Item key={3} aria-current="page">
          4th
        </Breadcrumb.Item>
      </>
    ),
  },
  play: async ({ canvasElement }) => {},
}

export const Separator: StoryObj<typeof Breadcrumb> = {
  args: {
    children: items,
    separator: <CgFormatSlash />,
  },
  play: async ({ canvasElement }) => {},
}

export const Separator2: StoryObj<typeof Breadcrumb> = {
  args: {
    children: items,
    separator: '/',
  },
  play: async ({ canvasElement }) => {},
}

export const PropItems: StoryObj<typeof Breadcrumb> = {
  args: {
    items: [
      {
        label: 'Home',
        href: '/',
      },
      {
        label: '2nd',
        href: '/2',
      },
      {
        label: '3rd',
        href: '/3',
      },
      {
        label: '4th',
      },
    ],
  },
  play: async ({ canvasElement }) => {},
}

export const PropItemsAsProp: StoryObj<typeof Breadcrumb> = {
  args: {
    itemAs: NextLink,
    items: [
      {
        label: 'Home',
        href: '/',
      },
      {
        label: '2nd',
        href: '/2',
      },
      {
        label: '3rd',
        href: '/3',
      },
      {
        label: '4th',
      },
    ],
  },
  play: async ({ canvasElement }) => {},
}

export const PropItemsAsProp2: StoryObj<typeof Breadcrumb> = {
  args: {
    items: [
      {
        as: NextLink,
        label: 'Home',
        href: '/',
      },
      {
        as: NextLink,
        label: '2nd',
        href: '/2',
      },
      {
        as: NextLink,
        label: '3rd',
        href: '/3',
      },
      {
        label: '4th',
      },
    ],
  },
  play: async ({ canvasElement }) => {},
}
export const PropItemsOtherProps: StoryObj<typeof Breadcrumb> = {
  args: {
    items: [
      {
        label: 'Home',
        href: '/',
        id: 'home',
      },
      {
        label: '2nd',
        href: '/2',
        'data-testid': 'home',
      },
      {
        as: 'button',
        type: 'button',
        label: '3rd',
        href: 'javascript:void(0)',
        onClick: (e: any) => {
          e.preventDefault()
          console.log('3rd')
        },
      },
      {
        label: '4th',
      },
    ],
  },
  play: async ({ canvasElement }) => {},
}
