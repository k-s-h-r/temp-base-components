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
import { Table } from '@/components/ui/Table'
import GlobalNav from '@/app/_components/GlobalNav'
import Nav from '@/app/(root)/style/Nav'
import NextLink from 'next/link'

import Image01 from './assets/01.svg'
import Image02 from './assets/02.svg'
import Image03 from './assets/03.svg'

export default function Home() {
  return (
    <div>
      <header>
        <div className={containerClass({ variant: 'full', className: 'bg-sea-800' })}>
          <Container>
            <div className="grid min-h-[15rem] items-center py-6">
              <Stack space="l">
                <Heading as="h1" color="white" className="text-[3rem] font-bold">
                  余白
                </Heading>
                <Text color="white">2021年12月7日 作成</Text>
              </Stack>
            </div>
          </Container>
        </div>
      </header>
      <GlobalNav current="/style" />
      <Nav current="/style/margin" />
      <main className="mt-10 pb-14">
        <Container>
          <Stack space="2xl">
            <Box color="secondary" padding={10}>
              <List space="s">
                <List.Item icon="01">
                  <Text>
                    <Link as={NextLink} href="#01">
                      バリエーション
                    </Link>
                  </Text>
                </List.Item>
                <List.Item icon="02">
                  <Text>
                    <Link as={NextLink} href="#02">
                      見出しにおけるスペーシングルール
                    </Link>
                  </Text>
                </List.Item>
                <List.Item icon="03">
                  <Text>
                    <Link as={NextLink} href="#03">
                      適用例
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
                      バリエーション
                    </Heading>

                    <Grid gap="base">
                      <Grid.Item
                        colSpan={{
                          initial: 12,
                        }}>
                        <Stack space="l">
                          <Text>
                            8pxをスペーシングの基本とします。大きなサイズのスペーシングはフィボナッチ数列を用いて定義し、小さなサイズのスペーシングは2で割り定義します。
                          </Text>
                        </Stack>
                      </Grid.Item>
                    </Grid>

                    <Grid gap="base">
                      <Grid.Item
                        colSpan={{
                          initial: 12,
                          md: 6,
                        }}>
                        <Table className="w-full">
                          <thead>
                            <tr>
                              <th>トークン名</th>
                              <th>値（rem）</th>
                              <th>基準値をもとにした実値（px）</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>xs</td>
                              <td>0.25rem</td>
                              <td>4px</td>
                            </tr>
                            <tr>
                              <td>s</td>
                              <td>0.5rem</td>
                              <td>8px</td>
                            </tr>
                            <tr>
                              <td>m</td>
                              <td>1rem</td>
                              <td>16px</td>
                            </tr>
                            <tr>
                              <td>l</td>
                              <td>1.5rem</td>
                              <td>24px</td>
                            </tr>
                            <tr>
                              <td>xl</td>
                              <td>2.5rem</td>
                              <td>40px</td>
                            </tr>
                            <tr>
                              <td>2xl</td>
                              <td>4rem</td>
                              <td>64px</td>
                            </tr>
                            <tr>
                              <td>3xl</td>
                              <td>6.5rem</td>
                              <td>104px</td>
                            </tr>
                          </tbody>
                        </Table>
                      </Grid.Item>

                      <Grid.Item
                        colSpan={{
                          initial: 12,
                          md: 6,
                        }}>
                        <div className={centerClass()}>
                          <Image src={Image01} alt="" />
                        </div>
                      </Grid.Item>
                    </Grid>
                  </Stack>
                </Stack>
              </section>

              <section id="02">
                <Stack space="xl">
                  <Stack space="l">
                    <Heading as="h3" size="xs">
                      見出しにおけるスペーシングルール
                    </Heading>

                    <Grid gap="base">
                      <Grid.Item
                        colSpan={{
                          initial: 12,
                        }}>
                        <Stack space="l">
                          <Text>
                            見出しの上、見出しと本文との間に使うスペーシングは、右の表を基本とします。モバイル、タブレット、デスクトップ共通でこのルールを使います。
                          </Text>
                        </Stack>
                      </Grid.Item>
                    </Grid>

                    <Grid gap="base">
                      <Grid.Item
                        colSpan={{
                          initial: 12,
                          md: 6,
                        }}
                        colStart={{
                          md: 4,
                        }}>
                        <Table className="w-full">
                          <thead>
                            <tr>
                              <th>見出しレベル</th>
                              <th>Hの上</th>
                              <th>HとBodyの間</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <th>H1</th>
                              <td>64px</td>
                              <td>24px</td>
                            </tr>
                            <tr>
                              <th>H2</th>
                              <td>64px</td>
                              <td>24px</td>
                            </tr>
                            <tr>
                              <th>H3</th>
                              <td>40px</td>
                              <td>24px</td>
                            </tr>
                            <tr>
                              <th>H4</th>
                              <td>40px</td>
                              <td>16px</td>
                            </tr>
                            <tr>
                              <th>H5</th>
                              <td>40px</td>
                              <td>16px</td>
                            </tr>
                            <tr>
                              <th>H6</th>
                              <td>24px</td>
                              <td>16px</td>
                            </tr>
                          </tbody>
                        </Table>
                      </Grid.Item>
                    </Grid>
                  </Stack>
                </Stack>
              </section>

              <section id="03">
                <Stack space="xl">
                  <Stack space="l">
                    <Heading as="h3" size="xs">
                      適用例
                    </Heading>

                    <Grid gap="base">
                      <Grid.Item
                        colSpan={{
                          initial: 12,
                        }}>
                        <Stack space="l">
                          <Text>スペーシングのルールを適用したデザインの具体例です。</Text>
                        </Stack>
                      </Grid.Item>
                    </Grid>

                    <Grid gap="base">
                      <Grid.Item
                        colSpan={{
                          initial: 12,
                          md: 6,
                        }}>
                        <Stack space="m">
                          <Text>モバイル</Text>
                          <div className={centerClass()}>
                            <Image src={Image02} alt="" />
                          </div>
                        </Stack>
                      </Grid.Item>
                      <Grid.Item
                        colSpan={{
                          initial: 12,
                          md: 6,
                        }}>
                        <Stack space="m">
                          <Text>デスクトップ</Text>
                          <div className={centerClass()}>
                            <Image src={Image03} alt="" />
                          </div>
                        </Stack>
                      </Grid.Item>
                    </Grid>
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
