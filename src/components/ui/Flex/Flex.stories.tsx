import type { Meta, StoryObj } from '@storybook/react'
import { userEvent as user, waitFor, within } from '@storybook/testing-library'
import { expect } from '@storybook/jest'
import { Flex } from './'

const meta: Meta<typeof Flex> = {
  title: 'components/layout/Flex/Flex',
  component: Flex,
  args: { flexDisplay: 'block', gap: 4 },
  // tags: ['autodocs'],
  decorators: [
    (Story) => (
      <Flex.Wrapper>
        <Story />
      </Flex.Wrapper>
    ),
  ],
  argTypes: {
    gap: {
      control: {
        type: 'inline-radio',
      },
      options: ['px', 0, 2, 4, 6, 8, 10, 12, 'base', 'xs', 's', 'm', 'l', 'xl', '2xl', '3xl'],
      description: '各アイテムの間隔<br>responsive: `initial` `md` `lg`',
      table: {
        defaultValue: {
          summary: '0',
        },
        type: {
          summary: 'px | 0 | 2 | 4 | 6 | 8 | 10 | 12 | base | xs | s | m | l | xl | 2xl | 3xl',
        },
      },
    },
    flexDisplay: {
      control: {
        type: 'inline-radio',
      },
      options: ['block', 'inline'],
      description: '`flex` or `inline-flex`<br>responsive: `initial` `md` `lg`',
    },
  },
}

export default meta

export const Default: StoryObj<typeof Flex> = {
  args: {
    children: (
      <>
        <Flex.Item span={3} className="border border-border-divider p-2">
          3
        </Flex.Item>
        <Flex.Item span={3} className="border border-border-divider p-2">
          3
        </Flex.Item>
        <Flex.Item span={3} className="border border-border-divider p-2">
          3
        </Flex.Item>
        <Flex.Item span={3} className="border border-border-divider p-2">
          3
        </Flex.Item>
        <Flex.Item span={3} className="border border-border-divider p-2">
          3
        </Flex.Item>
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

export const SpanResponsive: StoryObj<typeof Flex> = {
  args: {
    children: (
      <>
        <Flex.Item span={{ initial: 12, sm: 6, lg: 3 }} className="border border-border-divider p-2">
          12 - 6 - 3
        </Flex.Item>
        <Flex.Item span={{ initial: 12, sm: 6, lg: 3 }} className="border border-border-divider p-2">
          12 - 6 - 3
        </Flex.Item>
        <Flex.Item span={{ initial: 12, sm: 6, lg: 3 }} className="border border-border-divider p-2">
          12 - 6 - 3
        </Flex.Item>
        <Flex.Item span={{ initial: 6, sm: 12, lg: 3 }} className="border border-border-divider p-2">
          6 - 12 - 3
        </Flex.Item>
      </>
    ),
  },
  play: async ({ canvasElement }) => {},
}

export const Gap: StoryObj<typeof Flex> = {
  args: {
    gap: 4,
    children: (
      <>
        <Flex.Item span={12}>
          <Flex.Wrapper>
            <Flex gap="m">
              <Flex.Item span={6} className="border border-border-divider p-2">
                gap-4
              </Flex.Item>
              <Flex.Item span={6} className="border border-border-divider p-2">
                gap-4
              </Flex.Item>
            </Flex>
          </Flex.Wrapper>
        </Flex.Item>
        <Flex.Item span={12}>
          <Flex.Wrapper>
            <Flex gap="px">
              <Flex.Item span={6} className="border border-border-divider p-2">
                gap-px
              </Flex.Item>
              <Flex.Item span={6} className="border border-border-divider p-2">
                gap-px
              </Flex.Item>
            </Flex>
          </Flex.Wrapper>
        </Flex.Item>
        <Flex.Item span={12}>
          <Flex.Wrapper>
            <Flex gap="xl">
              <Flex.Item span={6} className="border border-border-divider p-2">
                gap-12
              </Flex.Item>
              <Flex.Item span={6} className="border border-border-divider p-2">
                gap-12
              </Flex.Item>
            </Flex>
          </Flex.Wrapper>
        </Flex.Item>
      </>
    ),
  },
  play: async ({ canvasElement }) => {},
}

export const GapResponsive: StoryObj<typeof Flex> = {
  args: {
    gap: { initial: 0, md: 8 },
    children: (
      <>
        <Flex.Item span={6} className="border border-border-divider p-2">
          gap - initial:0, md:8
        </Flex.Item>
        <Flex.Item span={6} className="border border-border-divider p-2">
          gap - initial:0, md:8
        </Flex.Item>
      </>
    ),
  },
  play: async ({ canvasElement }) => {},
}
