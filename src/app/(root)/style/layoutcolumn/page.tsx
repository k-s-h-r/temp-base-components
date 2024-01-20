/* eslint-disable react/no-unescaped-entities */
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
import { centerClass } from '@/components/ui/Center'
import GlobalNav from '@/app/_components/GlobalNav'
import Nav from '@/app/(root)/style/Nav'
import NextLink from 'next/link'

import Image01 from './assets/01.svg'
import Image02 from './assets/02.svg'
import Image03 from './assets/03.svg'
import Image04 from './assets/04.svg'
import Image05 from './assets/05.svg'
import Image06 from './assets/06.svg'
import Image07 from './assets/07.svg'
import Image08 from './assets/08.svg'
import Image09 from './assets/09.svg'

export default function Home() {
  return (
    <div>
      <header>
        <div className={containerClass({ variant: 'full', className: 'bg-sea-800' })}>
          <Container>
            <div className="grid min-h-[15rem] items-center py-6">
              <Stack space="l">
                <Heading as="h1" color="white" className="text-[3rem] font-bold">
                  レイアウトカラム
                </Heading>
                <Text color="white">2022年9月15日 アップデート</Text>
              </Stack>
            </div>
          </Container>
        </div>
      </header>
      <GlobalNav current="/style" />
      <Nav current="/style/layoutcolumn" />
      <main className="mt-10 pb-14">
        <Container>
          <Stack space="2xl">
            <Box color="secondary" padding={10}>
              <List space="s">
                <List.Item icon="01">
                  <Text>
                    <Link as={NextLink} href="#01">
                      レイアウトパターン
                    </Link>
                  </Text>
                </List.Item>
                <List.Item icon="02">
                  <Text>
                    <Link as={NextLink} href="#02">
                      ブレイクポイント
                    </Link>
                  </Text>
                </List.Item>
                <List.Item icon="03">
                  <Text>
                    <Link as={NextLink} href="#03">
                      段落の読みやすさの配慮
                    </Link>
                  </Text>
                </List.Item>
              </List>
            </Box>

            <Stack space="2xl">
              <section id="01">
                <Stack space="xl">
                  <Stack space="l">
                    <Heading as="h3" size="xs">
                      レイアウトパターン
                    </Heading>
                    <Text>
                      ページのレイアウトは、12グリッドを基本とした4分割を使います。省庁のサイトのトップ、詳細、フォームはそれぞれ1:2:1、3:1、3:1（右カラム無し）を使います。
                    </Text>
                  </Stack>

                  <Stack space="2xl">
                    <Grid gap="base">
                      <Grid.Item
                        colSpan={{
                          initial: 12,
                          md: 5,
                        }}>
                        <div className={''}>
                          <Image src={Image01} alt="" />
                        </div>
                      </Grid.Item>
                      <Grid.Item
                        colSpan={{
                          initial: 12,
                          md: 7,
                        }}>
                        <Stack space="l">
                          <Heading size="2xs" as="h4">
                            スマートフォン
                          </Heading>
                          <Stack space="s">
                            <Heading size="3xs" as="h5">
                              トップ/詳細/フォーム
                            </Heading>
                            <Grid gap="base">
                              <Grid.Item colSpan={12} className="bg-sumi-200 p-4 text-center">
                                1分の1
                              </Grid.Item>
                            </Grid>
                          </Stack>
                        </Stack>
                      </Grid.Item>
                    </Grid>

                    <Grid gap="base">
                      <Grid.Item
                        colSpan={{
                          initial: 12,
                          md: 5,
                        }}>
                        <div className={''}>
                          <Image src={Image02} alt="" />
                        </div>
                      </Grid.Item>
                      <Grid.Item
                        colSpan={{
                          initial: 12,
                          md: 7,
                        }}>
                        <Stack space="l">
                          <Heading size="2xs" as="h4">
                            タブレット
                          </Heading>
                          <Stack space="s">
                            <Heading size="3xs" as="h5">
                              トップ/詳細
                            </Heading>
                            <Grid gap="base">
                              <Grid.Item colSpan={12} className="bg-sumi-200 p-4 text-center">
                                1分の1
                              </Grid.Item>
                              <Grid.Item colSpan={6} className="bg-sumi-200 p-4 text-center">
                                2分の1
                              </Grid.Item>
                              <Grid.Item colSpan={6} className="bg-sumi-200 p-4 text-center">
                                2分の1
                              </Grid.Item>
                            </Grid>
                          </Stack>

                          <Stack space="s">
                            <Heading size="3xs" as="h5">
                              フォーム
                            </Heading>
                            <Grid>
                              <Grid.Item colSpan={12} className="bg-sumi-200 p-4 text-center">
                                1分の1
                              </Grid.Item>
                            </Grid>
                          </Stack>
                        </Stack>
                      </Grid.Item>
                    </Grid>

                    <Grid gap="base">
                      <Grid.Item
                        colSpan={{
                          initial: 12,
                          md: 5,
                        }}>
                        <div className={''}>
                          <Image src={Image03} alt="" />
                        </div>
                      </Grid.Item>
                      <Grid.Item
                        colSpan={{
                          initial: 12,
                          md: 7,
                        }}>
                        <Stack space="l">
                          <Heading size="2xs" as="h4">
                            デスクトップ
                          </Heading>
                          <Stack space="s">
                            <Heading size="3xs" as="h5">
                              トップ
                            </Heading>
                            <Grid gap="base">
                              <Grid.Item colSpan={3} className="bg-sumi-200 p-4 text-center">
                                4分の1
                              </Grid.Item>
                              <Grid.Item colSpan={6} className="bg-sumi-200 p-4 text-center">
                                4分の2
                              </Grid.Item>
                              <Grid.Item colSpan={3} className="bg-sumi-200 p-4 text-center">
                                4分の1
                              </Grid.Item>

                              <Grid.Item colSpan={3} className="bg-sumi-200 p-4 text-center">
                                4分の1
                              </Grid.Item>
                              <Grid.Item colSpan={3} className="bg-sumi-200 p-4 text-center">
                                4分の1
                              </Grid.Item>
                              <Grid.Item colSpan={3} className="bg-sumi-200 p-4 text-center">
                                4分の1
                              </Grid.Item>
                              <Grid.Item colSpan={3} className="bg-sumi-200 p-4 text-center">
                                4分の1
                              </Grid.Item>
                            </Grid>
                          </Stack>

                          <Stack space="s">
                            <Heading size="3xs" as="h5">
                              詳細
                            </Heading>
                            <Grid gap="base">
                              <Grid.Item colSpan={9} className="bg-sumi-200 p-4 text-center">
                                4分の3
                              </Grid.Item>
                              <Grid.Item colSpan={3} className="bg-sumi-200 p-4 text-center">
                                4分の1
                              </Grid.Item>

                              <Grid.Item colSpan={3} className="bg-sumi-200 p-4 text-center">
                                4分の1
                              </Grid.Item>
                              <Grid.Item colSpan={3} className="bg-sumi-200 p-4 text-center">
                                4分の1
                              </Grid.Item>
                              <Grid.Item colSpan={3} className="bg-sumi-200 p-4 text-center">
                                4分の1
                              </Grid.Item>
                              <Grid.Item colSpan={3} className="bg-sumi-200 p-4 text-center">
                                4分の1
                              </Grid.Item>
                            </Grid>
                          </Stack>

                          <Stack space="s">
                            <Heading size="3xs" as="h5">
                              フォーム
                            </Heading>
                            <Grid gap="base">
                              <Grid.Item colSpan={9} className="bg-sumi-200 p-4 text-center">
                                4分の3
                              </Grid.Item>
                            </Grid>
                          </Stack>

                          <Stack space="s">
                            <Heading size="3xs" as="h5">
                              その他
                            </Heading>
                            <Grid gap="base">
                              <Grid.Item colSpan={4} className="bg-sumi-200 p-4 text-center">
                                3分の1
                              </Grid.Item>
                              <Grid.Item colSpan={4} className="bg-sumi-200 p-4 text-center">
                                3分の1
                              </Grid.Item>
                              <Grid.Item colSpan={4} className="bg-sumi-200 p-4 text-center">
                                3分の1
                              </Grid.Item>
                            </Grid>
                          </Stack>
                        </Stack>
                      </Grid.Item>
                    </Grid>

                    <div className={centerClass({ isImage: true })}>
                      <Image src={Image04} alt="" />
                    </div>
                  </Stack>
                </Stack>
              </section>
              <section id="02">
                <Stack space="xl">
                  <Stack space="l">
                    <Heading as="h3" size="xs">
                      ブレイクポイント
                    </Heading>
                    <Text>
                      ブレイクポイントは、レイアウト要件によって定義された画面サイズの臨界点です。コンテンツのレイアウトはブレイクポイントにて、各画面サイズの範囲に合わせて調整することができます。
                    </Text>
                  </Stack>

                  <Stack space="l">
                    <div className={centerClass({ isImage: true })}>
                      <Image src={Image05} alt="" />
                    </div>

                    <div className={centerClass({ isImage: true })}>
                      <Image src={Image06} alt="" />
                    </div>
                    <div className={centerClass({ isImage: true })}>
                      <Image src={Image07} alt="" />
                    </div>
                  </Stack>
                </Stack>
              </section>
              <section id="03">
                <Stack space="xl">
                  <Stack space="l">
                    <Heading as="h3" size="xs">
                      段落の読みやすさの配慮
                    </Heading>
                    <Text>
                      より閲覧しやすいサイトにするために、一行あたりの最大文字数を40文字にすることをお勧めします。こうすることでウェブアクセシビリティ規格レベルAAAを満たすことになります。
                    </Text>
                    <List space="s">
                      <List.Item>
                        <Link
                          href="https://waic.jp/docs/WCAG20/quickref/index.html#visual-audio-contrast-visual-presentation"
                          target="_blank">
                          1.4.8 視覚的提示ーレベル AAA
                          [https://waic.jp/docs/WCAG20/quickref/index.html#visual-audio-contrast-visual-presentation]
                        </Link>
                      </List.Item>
                    </List>
                  </Stack>

                  <Stack space="l">
                    <div className={centerClass({ isImage: true })}>
                      <Image src={Image08} alt="" />
                    </div>
                    <div className={centerClass({ isImage: true })}>
                      <Image src={Image09} alt="" />
                    </div>
                  </Stack>
                </Stack>
              </section>
            </Stack>
          </Stack>
        </Container>
      </main>
    </div>
  )
}
