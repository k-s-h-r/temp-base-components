import type { Meta, StoryObj } from '@storybook/react'
import { userEvent as user, waitFor, within } from '@storybook/testing-library'
import { expect } from '@storybook/jest'
import { Grid } from './'

const meta: Meta<typeof Grid> = {
  title: 'components/layout/Grid/Grid',
  component: Grid,
  args: { gridType: 12, gridDisplay: 'block', children: '', className: '' },
  tags: ['autodocs'],
  argTypes: {
    gridType: {
      control: {
        type: 'inline-radio',
      },
      options: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 15, 16, 'max_1fr', '1fr_max', 'auto_1fr', '1fr_auto'],
      description: 'gridのベースカラム数<br>responsive: `initial` `md` `lg`',
      table: {
        defaultValue: {
          summary: '12',
        },
        type: {
          summary: '1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | auto | max_1fr | 1fr_max | auto_1fr | 1fr_auto',
        },
      },
    },
    gap: {
      control: {
        type: 'inline-radio',
      },
      options: ['px', 0, 2, 4, 6, 8, 10, 12, 'base', 'xs', 's', 'm', 'l', 'xl', '2xl', '3xl'],
      description: 'gridのgap値<br>responsive: `initial` `md` `lg`',
      table: {
        defaultValue: {
          summary: '0',
        },
        type: {
          summary: 'px | 0 | 2 | 4 | 6 | 8 | 10 | 12 | base | xs | s | m | l | xl | 2xl | 3xl',
        },
      },
    },
    gridDisplay: {
      control: {
        type: 'inline-radio',
      },
      options: ['block', 'inline'],
      description: '`grid` or `inline-grid`<br>responsive: `initial` `md` `lg`',
      table: {
        defaultValue: {
          summary: 'block',
        },
        type: {
          summary: 'block | inline',
        },
      },
    },
  },
}

export default meta

export const Default: StoryObj<typeof Grid> = {
  args: {
    children: (
      <>
        <Grid.Item colSpan={3} className="border border-border-divider p-2">
          3
        </Grid.Item>
        <Grid.Item colSpan={3} className="border border-border-divider p-2">
          3
        </Grid.Item>
        <Grid.Item colSpan={3} className="border border-border-divider p-2">
          3
        </Grid.Item>
        <Grid.Item colSpan={3} className="border border-border-divider p-2">
          3
        </Grid.Item>
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

export const Column15: StoryObj<typeof Grid> = {
  args: {
    gridType: 15,
    children: (
      <>
        <Grid.Item colSpan={3} className="border border-border-divider p-2">
          3
        </Grid.Item>
        <Grid.Item colSpan={3} className="border border-border-divider p-2">
          3
        </Grid.Item>
        <Grid.Item colSpan={3} className="border border-border-divider p-2">
          3
        </Grid.Item>
        <Grid.Item colSpan={3} className="border border-border-divider p-2">
          3
        </Grid.Item>
        <Grid.Item colSpan={3} className="border border-border-divider p-2">
          3
        </Grid.Item>
      </>
    ),
  },
  play: async ({ canvasElement }) => {},
}

export const Column16: StoryObj<typeof Grid> = {
  args: {
    gridType: 16,
    children: (
      <>
        <Grid.Item colSpan={4} className="border border-border-divider p-2">
          4
        </Grid.Item>
        <Grid.Item colSpan={4} className="border border-border-divider p-2">
          4
        </Grid.Item>
        <Grid.Item colSpan={4} className="border border-border-divider p-2">
          4
        </Grid.Item>
        <Grid.Item colSpan={4} className="border border-border-divider p-2">
          4
        </Grid.Item>
      </>
    ),
  },
  play: async ({ canvasElement }) => {},
}
export const Column_Max_1fr: StoryObj<typeof Grid> = {
  args: {
    gridType: 'max_1fr',
    children: (
      <>
        <Grid.Item className="border border-border-divider p-2">max content</Grid.Item>
        <Grid.Item className="border border-border-divider p-2">1fr</Grid.Item>
      </>
    ),
  },
  play: async ({ canvasElement }) => {},
}
export const Column_1fr_Max: StoryObj<typeof Grid> = {
  args: {
    gridType: '1fr_max',
    children: (
      <>
        <Grid.Item className="border border-border-divider p-2">1fr</Grid.Item>
        <Grid.Item className="border border-border-divider p-2">max content</Grid.Item>
      </>
    ),
  },
  play: async ({ canvasElement }) => {},
}

export const Column_Auto_1fr: StoryObj<typeof Grid> = {
  args: {
    gridType: 'auto_1fr',
    children: (
      <>
        <Grid.Item className="border border-border-divider p-2">auto</Grid.Item>
        <Grid.Item className="border border-border-divider p-2">1fr</Grid.Item>
      </>
    ),
  },
  play: async ({ canvasElement }) => {},
}
export const Column_1fr_Auto: StoryObj<typeof Grid> = {
  args: {
    gridType: '1fr_auto',
    children: (
      <>
        <Grid.Item className="border border-border-divider p-2">1fr</Grid.Item>
        <Grid.Item className="border border-border-divider p-2">auto</Grid.Item>
      </>
    ),
  },
  play: async ({ canvasElement }) => {},
}

export const Gap: StoryObj<typeof Grid> = {
  args: {
    gap: 4,
    children: (
      <>
        <Grid.Item colSpan={12}>
          <Grid gap="m">
            <Grid.Item colSpan={6} className="border border-border-divider p-2">
              gap-4
            </Grid.Item>
            <Grid.Item colSpan={6} className="border border-border-divider p-2">
              gap-4
            </Grid.Item>
          </Grid>
        </Grid.Item>
        <Grid.Item colSpan={12}>
          <Grid gap="px">
            <Grid.Item colSpan={6} className="border border-border-divider p-2">
              gap-px
            </Grid.Item>
            <Grid.Item colSpan={6} className="border border-border-divider p-2">
              gap-px
            </Grid.Item>
          </Grid>
        </Grid.Item>
        <Grid.Item colSpan={12}>
          <Grid gap="xl">
            <Grid.Item colSpan={6} className="border border-border-divider p-2">
              gap-12
            </Grid.Item>
            <Grid.Item colSpan={6} className="border border-border-divider p-2">
              gap-12
            </Grid.Item>
          </Grid>
        </Grid.Item>
      </>
    ),
  },
  play: async ({ canvasElement }) => {},
}

export const GapResponsive: StoryObj<typeof Grid> = {
  args: {
    gap: { initial: 0, md: 8 },
    children: (
      <>
        <Grid.Item colSpan={6} className="border border-border-divider p-2">
          gap - initial:0, md:8
        </Grid.Item>
        <Grid.Item colSpan={6} className="border border-border-divider p-2">
          gap - initial:0, md:8
        </Grid.Item>
      </>
    ),
  },
  play: async ({ canvasElement }) => {},
}


export const ColSpan: StoryObj<typeof Grid> = {
  args: {
    children: (
      <>
        <Grid.Item colSpan={1} className="border border-border-divider p-2">
          1
        </Grid.Item>
        <Grid.Item colSpan={8} className="border border-border-divider p-2">
          8
        </Grid.Item>
        <Grid.Item colSpan={3} className="border border-border-divider p-2">
          3
        </Grid.Item>
        <Grid.Item colSpan={6} className="border border-border-divider p-2">
          6
        </Grid.Item>
      </>
    ),
  },
  play: async ({ canvasElement }) => {},
}

export const ColSpanResponsive: StoryObj<typeof Grid> = {
  args: {
    children: (
      <>
        <Grid.Item colSpan={{ initial: 12, sm: 6, lg: 3 }} className="border border-border-divider p-2">
          12 - 6 - 3
        </Grid.Item>
        <Grid.Item colSpan={{ initial: 12, sm: 6, lg: 3 }} className="border border-border-divider p-2">
          12 - 6 - 3
        </Grid.Item>
        <Grid.Item colSpan={{ initial: 12, sm: 6, lg: 3 }} className="border border-border-divider p-2">
          12 - 6 - 3
        </Grid.Item>
        <Grid.Item colSpan={{ sm: 6, lg: 3 }} className="border border-border-divider p-2">
          12 - 6 - 3
        </Grid.Item>
      </>
    ),
  },
  play: async ({ canvasElement }) => {},
}
