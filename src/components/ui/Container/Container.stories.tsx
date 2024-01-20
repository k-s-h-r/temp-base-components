import type { Meta, StoryObj } from '@storybook/react'
import { userEvent as user, waitFor, within } from '@storybook/testing-library'
import { expect } from '@storybook/jest'
import { Container } from './'

const meta: Meta<typeof Container> = {
  component: Container,
  args: { children: '', className: '' },
  tags: ['autodocs'],
}

export default meta

export const Default: StoryObj<typeof Container> = {
  args: {
    children: (
      <>
        <div className="border border-border-divider p-2">Container</div>
      </>
    ),
  },
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

export const Full: StoryObj<typeof Container> = {
  args: {
    variant: 'full',
    children: (
      <>
        <div className="border border-border-divider p-2">Container</div>
      </>
    ),
  },
  play: async ({ canvasElement }) => {},
}
