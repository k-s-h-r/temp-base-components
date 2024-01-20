import type { Meta, StoryObj } from '@storybook/react'
import { userEvent as user, waitFor, within } from '@storybook/testing-library'
import { expect } from '@storybook/jest'

import { Grid } from '@/components/ui/Grid'
import { Flex } from '@/components/ui/Flex'
import { Heading } from '@/components/ui/Heading'
import { Stack } from '@/components/ui/Stack'
import { Text } from '@/components/ui/Text'
import { Input } from '@/components/ui/Input'
import { InlineInput } from '@/components/ui/InlineInput'
import { TextInput } from '@/components/ui/TextInput'
import { Select } from '@/components/ui/Select'
import { Radio } from '@/components/ui/Radio'
import { Checkbox } from '@/components/ui/Checkbox'
import { Button } from '@/components/ui/Button'
import { Page } from '@/stories/Template/Page'
import { LoginTemplate } from '@/stories/Template/Login'

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof Page> = {
  title: 'Example/LoginPage',
  component: Page,
  // tags: ['autodocs'],
  argTypes: {},
}

export default meta
type Story = StoryObj<typeof Page>

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Login: Story = {
  args: {
    children: <LoginTemplate />,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const mail = canvas.getByLabelText(/メールアドレス/i)
    const password = canvas.getByLabelText(/パスワード/i)
    const submit = canvas.getByRole('button', { name: 'ログイン' })
    await expect(mail).toBeEnabled()
    await expect(password).toBeEnabled()
    await user.type(mail, 'mail@mail.com')
    await user.type(password, 'abc123456')
    await expect(submit).toBeEnabled()
    await user.click(submit)
  },
}

export const MailError: Story = {
  args: {
    children: <LoginTemplate />,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const mail = canvas.getByLabelText(/メールアドレス/i)
    const password = canvas.getByLabelText(/パスワード/i)
    const submit = canvas.getByRole('button', { name: 'ログイン' })
    await user.type(mail, 'mail')
    await user.type(password, 'abc123456')
    await expect(submit).toBeEnabled()
    await user.click(submit)
  },
}

export const PasswordError: Story = {
  args: {
    children: <LoginTemplate />,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const mail = canvas.getByLabelText(/メールアドレス/i)
    const password = canvas.getByLabelText(/パスワード/i)
    const submit = canvas.getByRole('button', { name: 'ログイン' })
    await user.type(mail, 'mail@mail.com')
    await user.type(password, 'abc')
    await expect(submit).toBeEnabled()
    await user.click(submit)
  },
}

export const PasswordError2: Story = {
  args: {
    children: <LoginTemplate />,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const mail = canvas.getByLabelText(/メールアドレス/i)
    const password = canvas.getByLabelText(/パスワード/i)
    const submit = canvas.getByRole('button', { name: 'ログイン' })
    await user.type(mail, 'mail@mail.com')
    await user.type(password, 'abcdefghijk')
    await expect(submit).toBeEnabled()
    await user.click(submit)
  },
}
