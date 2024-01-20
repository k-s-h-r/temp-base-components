import type { Meta, StoryObj } from '@storybook/react'

import { Grid } from '../components/ui/Grid'
import { Flex } from '../components/ui/Flex'
import { Heading } from '../components/ui/Heading'
import { Stack } from '../components/ui/Stack'
import { Text } from '../components/ui/Text'
import { Input } from '../components/ui/Input'
import { InlineInput } from '../components/ui/InlineInput'
import { TextInput } from '../components/ui/TextInput'
import { Select } from '../components/ui/Select'
import { Radio } from '../components/ui/Radio'
import { Checkbox } from '../components/ui/Checkbox'
import { Page } from './Template/Page'
import { TextareaTemplate } from './Template/Textarea'

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof Page> = {
  title: 'Example/Form',
  component: Page,
  tags: ['autodocs'],
  argTypes: {},
}

export default meta
type Story = StoryObj<typeof Page>

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Name: Story = {
  args: {
    children: (
      <Stack space="xl">
        <Heading size="m" as="h2">
          名前
        </Heading>
        <Stack space="l">
          <Grid gap="m">
            <Grid.Item colSpan={{ initial: 12, md: 6 }}>
              <Input isRequired={true}>
                <Input.Label htmlFor="sample1" labelAfterText="必須">
                  氏
                </Input.Label>
                <TextInput id="sample1" />
              </Input>
            </Grid.Item>
            <Grid.Item colSpan={{ initial: 12, md: 6 }}>
              <Input isRequired={true}>
                <Input.Label htmlFor="sample2" labelAfterText="必須">
                  名
                </Input.Label>
                <TextInput id="sample2" />
              </Input>
            </Grid.Item>
          </Grid>
          <Grid gap="m">
            <Grid.Item colSpan={{ initial: 12, md: 6 }}>
              <Input isRequired={true}>
                <Input.Label htmlFor="sample3" labelAfterText="必須">
                  氏（カタカナ）
                </Input.Label>
                <TextInput id="sample3" />
              </Input>
            </Grid.Item>
            <Grid.Item colSpan={{ initial: 12, md: 6 }}>
              <Input isRequired={true}>
                <Input.Label htmlFor="sample4" labelAfterText="必須">
                  名（カタカナ）
                </Input.Label>
                <TextInput id="sample4" />
              </Input>
            </Grid.Item>
          </Grid>
        </Stack>
      </Stack>
    ),
  },
}

export const OtherName: Story = {
  args: {
    children: (
      <Stack space="xl">
        <Heading size="m" as="h2">
          Name
        </Heading>
        <Stack space="l">
          <Grid gap="m">
            <Grid.Item colSpan={{ initial: 12, md: 6 }}>
              <Input isRequired={true}>
                <Input.Label htmlFor="sample5" labelAfterText="Required">
                  First Name
                </Input.Label>
                <TextInput id="sample5" />
              </Input>
            </Grid.Item>
            <Grid.Item colSpan={{ initial: 12, md: 6 }}>
              <Input isRequired={true}>
                <Input.Label htmlFor="sample6" labelAfterText="Required">
                  Last Name
                </Input.Label>
                <TextInput id="sample6" />
              </Input>
            </Grid.Item>
          </Grid>
        </Stack>
      </Stack>
    ),
  },
}

export const DateSelect: Story = {
  args: {
    children: (
      <Stack space="xl">
        <Heading size="m" as="h2">
          セレクター式
        </Heading>
        <Stack space="l">
          <Input isRequired={true} isFieldset={true}>
            <Input.Label labelAfterText="Required">生年月日</Input.Label>
            <Input.Description id="sample1-description">
              <p>月を選択してから日を選んでください</p>
            </Input.Description>

            <Flex gap="m">
              <Flex.Item>
                <InlineInput htmlFor="sample7" label="年" labelPositionY="center">
                  <Select id="sample7" aria-describedby="sample1-description">
                    <option>2000</option>
                  </Select>
                </InlineInput>
              </Flex.Item>
              <Flex.Item>
                <InlineInput htmlFor="sample8" label="月" labelPositionY="center">
                  <Select id="sample8" aria-describedby="sample1-description">
                    <option>1</option>
                    <option>12</option>
                  </Select>
                </InlineInput>
              </Flex.Item>
              <Flex.Item>
                <InlineInput htmlFor="sample9" label="日" labelPositionY="center">
                  <Select id="sample9" aria-describedby="sample1-description">
                    <option>1</option>
                    <option>31</option>
                  </Select>
                </InlineInput>
              </Flex.Item>
            </Flex>
          </Input>
        </Stack>
      </Stack>
    ),
  },
}

export const DateInput: Story = {
  args: {
    children: (
      <Stack space="xl">
        <Heading size="m" as="h2">
          インプット式
        </Heading>
        <Stack space="l">
          <Input isRequired={true} isFieldset={true}>
            <Input.Label labelAfterText="Required">生年月日</Input.Label>
            <Input.Description id="sample2-description">
              <p>月を選択してから日を選んでください</p>
            </Input.Description>
            <Flex gap="m">
              <Flex.Item>
                <InlineInput htmlFor="sample10" label="年" labelPositionY="center">
                  <TextInput id="sample10" aria-describedby="sample2-description" className="" />
                </InlineInput>
              </Flex.Item>
              <Flex.Item>
                <InlineInput htmlFor="sample11" label="月" labelPositionY="center">
                  <TextInput id="sample11" aria-describedby="sample2-description" />
                </InlineInput>
              </Flex.Item>
              <Flex.Item>
                <InlineInput htmlFor="sample12" label="日" labelPositionY="center">
                  <TextInput id="sample12" aria-describedby="sample2-description" />
                </InlineInput>
              </Flex.Item>
            </Flex>
          </Input>

          <Input isRequired={true} isFieldset={true}>
            <Input.Label labelAfterText="必須">雇用期間</Input.Label>
            <Input.Description id="sample3-description">
              <p>定めありを選んだ場合は、期間の開始日から終了日までを入力してください</p>
            </Input.Description>
            <Flex gap="m" className="flex-nowrap items-center">
              <Flex.Item>
                <InlineInput htmlFor="sample13" label="年" labelPositionY="center">
                  <TextInput id="sample13" aria-describedby="sample3-description" className="w-full" />
                </InlineInput>
              </Flex.Item>
              <Flex.Item>
                <InlineInput htmlFor="sample14" label="月" labelPositionY="center">
                  <TextInput id="sample14" aria-describedby="sample3-description" className="w-full" />
                </InlineInput>
              </Flex.Item>
              <Flex.Item>
                <InlineInput htmlFor="sample15" label="日" labelPositionY="center">
                  <TextInput id="sample15" aria-describedby="sample3-description" className="w-full" />
                </InlineInput>
              </Flex.Item>
              <Flex.Item span={1}>
                <Text>から</Text>
              </Flex.Item>
            </Flex>
          </Input>
        </Stack>
      </Stack>
    ),
  },
}

export const Gender: Story = {
  args: {
    children: (
      <Stack space="l">
        <Input isRequired={true} isFieldset={true}>
          <Heading as={Input.Label<HTMLLabelElement>} size="m" labelAfterText={'必須'}>
            性別
          </Heading>

          <Radio id="sample21" label="女性" name="gender" />
          <Radio id="sample22" label="男性" name="gender" />
          <Radio id="sample23" label="その他・無回答" name="gender" />
        </Input>
      </Stack>
    ),
  },
}

export const Address: Story = {
  args: {
    children: (
      <Stack space="xl">
        <Heading size="m" as="h2">
          住所
        </Heading>
        <Stack space="l">
          <Input isRequired={true} isError={true}>
            <Input.Label labelAfterText="必須" htmlFor="sample14">
              郵便番号
            </Input.Label>
            <Input.Description>
              <p>半角数字7桁。</p>
            </Input.Description>
            <TextInput id="sample14" isError={true} />
            <Input.Error>
              <p>エラーテキストが入ります</p>
            </Input.Error>
          </Input>
          <Input isRequired={true}>
            <Input.Label labelAfterText="必須" htmlFor="sample15">
              都道府県
            </Input.Label>
            <Select id="sample15" />
          </Input>
          <Input isRequired={true}>
            <Input.Label labelAfterText="必須" htmlFor="sample16">
              市区町村
            </Input.Label>
            <TextInput id="sample16" />
          </Input>
          <Input isRequired={true}>
            <Input.Label labelAfterText="必須" htmlFor="sample17">
              番地
            </Input.Label>
            <TextInput id="sample17" />
          </Input>
          <Input>
            <Input.Label htmlFor="sample18">建物名・部屋番号</Input.Label>
            <TextInput id="sample18" />
          </Input>
        </Stack>
      </Stack>
    ),
  },
}

export const Email: Story = {
  args: {
    children: (
      <Stack space="xl">
        <Heading size="m" as="h2">
          メールアドレス
        </Heading>
        <Stack space="l">
          <Input isRequired={true}>
            <Input.Label htmlFor="sample19" labelAfterText="必須">
              メールアドレス
            </Input.Label>
            <TextInput id="sample19" />
          </Input>
        </Stack>
        <Input isRequired={true}>
          <Input.Label htmlFor="sample20" labelAfterText="必須">
            メールアドレス
          </Input.Label>
          <TextInput id="sample20" variant="alert" />
          <Input.Error>
            <p>メールアドレスの入力は必須です</p>
          </Input.Error>
        </Input>
      </Stack>
    ),
  },
}

export const TextareaCount = {
  args: {
    children: <TextareaTemplate />,
  },
}
