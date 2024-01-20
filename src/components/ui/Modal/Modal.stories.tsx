import type { Meta, StoryObj } from '@storybook/react'
import { userEvent as user, waitFor, within } from '@storybook/testing-library'
import { expect } from '@storybook/jest'
import { Modal, ModalContent, ModalTrigger, ModalTitle, ModalDescription, ModalClose } from './'
import { Heading } from '../Heading'
import { Text } from '../Text'
import { Button } from '../Button'
import { Stack } from '../Stack'
import { Input } from '../Input'
import { Select } from '../Select'
import { TextInput } from '../TextInput'
import * as Dialog from '@radix-ui/react-dialog'

const meta: Meta<typeof Modal> = {
  component: Modal,
  args: { children: '' },
  tags: ['autodocs'],
}

export default meta

export const Default: StoryObj<typeof Modal> = {
  args: {
    children: (
      <>
        <ModalTrigger asChild>
          <Button>open</Button>
        </ModalTrigger>
        <ModalContent>
          <Stack space="m">
            <Heading as={ModalTitle} size="m">
              ダイアログタイトル
            </Heading>
            <Text as={ModalDescription}>ダイアログの補助テキストが入ります。</Text>

            <Stack
              space={{
                initial: 6,
                sm: 10,
              }}>
              <Stack space="m">
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
              <Stack space="s">
                <Button variant="primary">ボタン</Button>
                <ModalClose asChild>
                  <Button variant="teriary">Close</Button>
                </ModalClose>
              </Stack>
            </Stack>
          </Stack>
        </ModalContent>
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
