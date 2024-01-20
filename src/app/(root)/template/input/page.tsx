import Image from 'next/image'
import { Container, containerClass } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'
import { Box } from '@/components/ui/Box'
import { Heading } from '@/components/ui/Heading'
import { Text, textClass } from '@/components/ui/Text'
import { Input } from '@/components/ui/Input'
import { Radio } from '@/components/ui/Radio'
import { List } from '@/components/ui/List'
import { Link } from '@/components/ui/Link'
import { Grid } from '@/components/ui/Grid'
import { Select } from '@/components/ui/Select'
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
                  入力
                </Heading>
                <Text color="white">2022年5月31日 アップデート</Text>
              </Stack>
            </div>
          </Container>
        </div>
      </header>
      <GlobalNav current="/template" />
      <Nav current="/template/input" />
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
                    個人情報入力
                  </Heading>

                  <div className="border border-sumi-400 bg-white p-4">
                    <Stack space="2xl">
                      <Heading size="l" as="h1">
                        父となる方の情報を入力してください
                      </Heading>

                      <Stack space="m">
                        <Heading size="l" as="h2">
                          名前
                        </Heading>

                        <Input isRequired={true}>
                          <Input.Label htmlFor="sample1" labelAfterText="必須">
                            氏
                          </Input.Label>
                          <TextInput id="sample1" />
                        </Input>
                        <Input isRequired={true}>
                          <Input.Label htmlFor="sample2" labelAfterText="必須">
                            名
                          </Input.Label>
                          <TextInput id="sample2" />
                        </Input>
                        <Input isRequired={true}>
                          <Input.Label htmlFor="sample3" labelAfterText="必須">
                            氏（カタカナ）
                          </Input.Label>
                          <TextInput id="sample3" />
                        </Input>
                        <Input isRequired={true}>
                          <Input.Label htmlFor="sample4" labelAfterText="必須">
                            名（カタカナ）
                          </Input.Label>
                          <TextInput id="sample4" />
                        </Input>
                      </Stack>

                      <Stack space="m">
                        <Heading size="l" as="h2">
                          住所
                        </Heading>

                        <Input isRequired={true}>
                          <Input.Label htmlFor="sample5" labelAfterText="必須">
                            郵便番号
                          </Input.Label>
                          <TextInput maxW="s" id="sample5" />
                        </Input>
                        <Input isRequired={true}>
                          <Input.Label htmlFor="sample6" labelAfterText="必須">
                            都道府県
                          </Input.Label>
                          <Select maxW="s" id="sample6">
                            <option value="北海道">北海道</option>
                            <option value="青森県">青森県</option>
                            <option value="岩手県">岩手県</option>
                            <option value="宮城県">宮城県</option>
                          </Select>
                        </Input>
                        <Input isRequired={true}>
                          <Input.Label htmlFor="sample7" labelAfterText="必須">
                            電話番号
                          </Input.Label>
                          <TextInput maxW="s" id="sample7" />
                        </Input>
                      </Stack>
                      <Stack space="s">
                        <Button variant="primary" disabled>
                          次へ
                        </Button>
                        <Button variant="secondary">戻る</Button>
                      </Stack>
                    </Stack>
                  </div>

                  <div className="border border-sumi-400 bg-white p-4">
                    <Stack space="2xl">
                      <Heading size="l" as="h1">
                        あなたの情報を入力してください
                      </Heading>

                      <Stack space="m">
                        <Heading size="l" as="h2">
                          名前
                        </Heading>

                        <Input isRequired={true}>
                          <Input.Label htmlFor="sample2-1" labelAfterText="必須">
                            氏
                          </Input.Label>
                          <TextInput id="sample2-1" />
                        </Input>
                        <Input isRequired={true}>
                          <Input.Label htmlFor="sample2-2" labelAfterText="必須">
                            名
                          </Input.Label>
                          <TextInput id="sample2-2" />
                        </Input>
                        <Input isRequired={true}>
                          <Input.Label htmlFor="sample2-3" labelAfterText="必須">
                            氏（カタカナ）
                          </Input.Label>
                          <TextInput id="sample2-3" />
                        </Input>
                        <Input isRequired={true}>
                          <Input.Label htmlFor="sample2-4" labelAfterText="必須">
                            名（カタカナ）
                          </Input.Label>
                          <TextInput id="sample2-4" />
                        </Input>
                      </Stack>

                      <Stack space="m">
                        <Heading size="l" as="h2">
                          年齢・性別
                        </Heading>

                        <Input isRequired={true} isFieldset={true}>
                          <Input.Label labelAfterText="必須">性別</Input.Label>

                          <Radio label="男性" name="sample2-5" id="sample2-5-1" />
                          <Radio label="女性" name="sample2-5" id="sample2-5-2" />
                          <Radio label="無回答・その他" name="sample2-5" id="sample2-5-3" />
                        </Input>
                        <Input isRequired={true}>
                          <Input.Label htmlFor="sample2-7" labelAfterText="必須">
                            年齢
                          </Input.Label>
                          <TextInput maxW="s" id="sample2-7" />
                        </Input>
                      </Stack>
                      <Stack space="s">
                        <Button variant="primary" disabled>
                          次へ
                        </Button>
                        <Button variant="secondary">戻る</Button>
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
