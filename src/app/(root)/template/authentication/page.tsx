import Image from 'next/image'
import { Container, containerClass } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'
import { Box } from '@/components/ui/Box'
import { Heading } from '@/components/ui/Heading'
import { Text, textClass } from '@/components/ui/Text'
import { Input } from '@/components/ui/Input'
import { List } from '@/components/ui/List'
import { Link } from '@/components/ui/Link'
import { Grid } from '@/components/ui/Grid'
import { Stack, VStack, HStack } from '@/components/ui/Stack'
import { TextInput } from '@/components/ui/TextInput'
import GlobalNav from '@/app/_components/GlobalNav'
import Nav from '../Nav'
import NextLink from 'next/link'

export default function Login() {
  return (
    <div>
      <header>
        <div className={containerClass({ variant: 'full', className: 'bg-sea-800' })}>
          <Container>
            <div className="grid min-h-[15rem] items-center py-6">
              <Stack space="l">
                <Heading as="h1" color="white" className="text-[3rem] font-bold">
                  認証
                </Heading>
                <Text color="white">2022年5月31日 作成</Text>
              </Stack>
            </div>
          </Container>
        </div>
      </header>
      <GlobalNav current="/template" />
      <Nav current="/template/authentication" />
      <main className="mt-10 pb-14">
        <Container>
          <Stack space="2xl">
            <Text>
              生年月日や姓名など利用者の情報を尋ねるインターフェースでは、手順や必要情報の明示、適切な入力支援が必要となります。
            </Text>

            <Stack space="l">
              <Heading size="l" as="h1">
                テンプレート
              </Heading>

              <div className={containerClass({ variant: 'full', className: 'bg-sumi-50 p-4' })}>
                <Stack space="l">
                  <Heading size="2xs" as="h2">
                    メールアドレスとパスワード
                  </Heading>

                  <div className="border border-sumi-400 bg-white p-4">
                    <Stack space="2xl">
                      <Heading size="l" as="h1">
                        ログイン
                      </Heading>

                      <Stack space="m">
                        <Input isRequired={true}>
                          <Input.Label htmlFor="sample1" labelAfterText="必須">
                            メールアドレス
                          </Input.Label>
                          <TextInput id="sample1" />
                        </Input>
                        <Input isRequired={true}>
                          <Input.Label htmlFor="sample2" labelAfterText="必須">
                            パスワード
                          </Input.Label>
                          <TextInput id="sample2" type="password" />
                        </Input>
                      </Stack>
                      <Stack space="s">
                        <Button variant="primary">ログイン</Button>
                        <Button variant="secondary">新規登録</Button>
                        <Button variant="teriary">パスワードをお忘れの方</Button>
                      </Stack>
                    </Stack>
                  </div>
                </Stack>
              </div>
            </Stack>
          </Stack>
        </Container>
      </main>
    </div>
  )
}
