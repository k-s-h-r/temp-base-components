import type { Meta, StoryObj } from '@storybook/react'
import { userEvent as user, waitFor, within } from '@storybook/testing-library'
import { expect } from '@storybook/jest'
import { Pagination } from './'
import { Link } from '../Link'
import NextLink from 'next/link'

const meta: Meta<typeof Pagination> = {
  component: Pagination,
  args: {},
  tags: ['autodocs'],
  argTypes: {},
}

export default meta

export const Default: StoryObj<typeof Pagination> = {
  args: {
    value: 5,
    total: 10,
    siblings: 3,
    isSimple: false,
    withControl: true,
    withEdge: true,
  },
  play: async ({ canvasElement }) => {},
}

export const Pagination2: StoryObj<typeof Pagination> = {
  args: {
    value: 1,
    total: 10,
  },
  play: async ({ canvasElement }) => {},
}
export const Pagination3: StoryObj<typeof Pagination> = {
  args: {
    value: 10,
    total: 10,
  },
  play: async ({ canvasElement }) => {},
}

export const Siblings: StoryObj<typeof Pagination> = {
  args: {
    siblings: 1,
    value: 5,
    total: 10,
  },
  play: async ({ canvasElement }) => {},
}

export const NoControl: StoryObj<typeof Pagination> = {
  args: {
    value: 5,
    total: 10,
    withControl: false,
  },
  play: async ({ canvasElement }) => {},
}

export const NoEdge: StoryObj<typeof Pagination> = {
  args: {
    value: 5,
    total: 10,
    withEdge: false,
  },
  play: async ({ canvasElement }) => {},
}

export const Simple: StoryObj<typeof Pagination> = {
  args: {
    value: 5,
    total: 10,
    isSimple: true,
  },
  play: async ({ canvasElement }) => {},
}

export const PaginationOnClick: StoryObj<typeof Pagination> = {
  args: {
    value: 5,
    total: 10,
    getItemProps: (page, control) => {
      if (control === 'first') {
        return { onClick: () => console.log('first') }
      }

      if (control === 'last') {
        return { onClick: () => console.log('last') }
      }

      if (control === 'next') {
        return { onClick: () => console.log(page) }
      }

      if (control === 'prev') {
        return { onClick: () => console.log(page) }
      }

      return { onClick: () => console.log(page) }
    },
  },
  play: async ({ canvasElement }) => {},
}
export const PaginationLink: StoryObj<typeof Pagination> = {
  args: {
    value: 5,
    total: 10,
    getItemProps: (page, control) => {
      if (control === 'first') {
        return { as: 'a', href: '#page-1' }
      }

      if (control === 'last') {
        return { as: 'a', href: '#page-10' }
      }

      if (control === 'next' || control === 'prev') {
        return { as: 'a', href: `#page-${page}` }
      }

      return { as: 'a', href: `#page-${page}` }
    },
  },
  play: async ({ canvasElement }) => {},
}

export const PaginationNextLink: StoryObj<typeof Pagination> = {
  args: {
    value: 5,
    total: 10,
    getItemProps: (page, control) => {
      if (control === 'first') {
        return { as: NextLink, href: '#page-1' }
      }

      if (control === 'last') {
        return { as: NextLink, href: '#page-10' }
      }

      if (control === 'next' || control === 'prev') {
        return { as: 'a', href: `#page-${page}` }
      }

      return { as: NextLink, href: `#page-${page}` }
    },
  },
  play: async ({ canvasElement }) => {},
}
