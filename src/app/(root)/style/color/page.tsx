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
import { Stack, VStack, HStack } from '@/components/ui/Stack'
import { centerClass } from '@/components/ui/Center'
import GlobalNav from '@/app/_components/GlobalNav'
import Nav from '@/app/(root)/style/Nav'
import NextLink from 'next/link'

import Color from '@/app/(root)/style/color/Color'

import Image01 from './assets/styles-color-01.svg'
import Image02 from './assets/styles-color-02.svg'
import Image03 from './assets/styles-color-03.svg'
import Image04 from './assets/styles-color-04.svg'
import Image05 from './assets/styles-color-05.svg'

export default function Home() {
  return (
    <div>
      <header>
        <div className={containerClass({ variant: 'full', className: 'bg-sea-800' })}>
          <Container>
            <div className="grid min-h-[15rem] items-center py-6">
              <Stack space="l">
                <Heading as="h1" color="white" className="text-[3rem] font-bold">
                  カラー
                </Heading>
                <Text color="white">2023年5月1日 アップデート</Text>
              </Stack>
            </div>
          </Container>
        </div>
      </header>
      <GlobalNav current="/style" />
      <Nav current="/style/color" />
      <main className="mt-10 pb-14">
        <Container>
          <Stack space="2xl">
            <Box color="secondary" padding={10}>
              <List space="s">
                <List.Item icon="01">
                  <Text>
                    <Link as={NextLink} href="#01">
                      Color Tokens
                    </Link>
                  </Text>
                </List.Item>
                <List.Item icon="02">
                  <Text>
                    <Link as={NextLink} href="#02">
                      ガイドライン
                    </Link>
                  </Text>
                </List.Item>
                <List.Item icon="03">
                  <Text>
                    <Link as={NextLink} href="#03">
                      仕様
                    </Link>
                  </Text>
                </List.Item>
              </List>
            </Box>

            <section id="01">
              <Stack space="2xl">
                <Stack space="l">
                  <Heading as="h2" size="m">
                    Color Tokens
                  </Heading>
                  <Text>
                    カラーガイドは、色の用途ごとに名前を割り当てた「セマンティックカラー」で構成されています。原則、デザイン時はセマンティックカラーから用途にあった色を選択してください。セマンティックカラーは、後述するプリミティブカラーを参照しています。実装時はセマンティックカラーとプリミティブカラーに指定されたトークン（変数名）を活用することで運用保守性を高めることができます。
                  </Text>
                </Stack>

                <div className={centerClass({ isImage: true, className: 'py-6' })}>
                  <Image src={Image05} alt="" />
                </div>

                <Color />
              </Stack>
            </section>

            <section id="02">
              <Stack space="xl">
                <Stack space="l">
                  <Heading as="h2" size="m">
                    ガイドライン
                  </Heading>
                  <Heading as="h3" size="xs">
                    カラー設計の原則
                  </Heading>
                  <Text>
                    カラーの設計も利用者目線に立つことが重要です。情報発信源及びサービス運営組織としての信頼性のため、省庁やサービスを横断した統一感が重要となります。デザインシステムのカラーガイドを踏襲することで、統一感があり、アクセシビリティに配慮された配色を効率よく適用できます。
                  </Text>
                </Stack>

                <div className={centerClass({ isImage: true, className: 'py-6' })}>
                  <Image src={Image01} alt="" />
                </div>

                <Stack space="l">
                  <Heading as="h3" size="xs">
                    アクセシビリティへの配慮
                  </Heading>
                  <Text>
                    多様な色覚特性を考慮し、色を唯一の視覚的伝脱手段とするのは避けてください。
                    <br />
                    また、文字と背景の色には少なくとも 4.5:1 のコントラスト比を確保します。サイズの大きなテキスト（少なくとも 18
                    ポイント、又は 14 ポイントの太字）及びサイズの大きな文字画像には少なくとも 3:1 のコントラスト比が必要です。
                  </Text>
                </Stack>

                <Stack space="l">
                  <Heading as="h4" size="2xs">
                    関連する達成基準
                  </Heading>
                  <List space="s">
                    <List.Item>
                      <Link href="https://waic.jp/translations/WCAG21/#use-of-color" target="_blank">
                        1.4.1 色の使用 [https://waic.jp/translations/WCAG21/#use-of-color]
                      </Link>
                    </List.Item>
                    <List.Item>
                      <Link href="https://waic.jp/translations/WCAG21/#contrast-minimum" target="_blank">
                        1.4.3 コントラスト (最低限) [https://waic.jp/translations/WCAG21/#contrast-minimum]
                      </Link>
                    </List.Item>
                  </List>
                </Stack>

                <div className={centerClass({ isImage: true, className: 'py-6' })}>
                  <Image src={Image02} alt="" />
                </div>
              </Stack>
            </section>

            <section id="03">
              <Stack space="xl">
                <Stack space="l">
                  <Heading as="h2" size="m">
                    仕様
                  </Heading>
                  <Heading as="h3" size="xs">
                    デザイントークン
                  </Heading>
                  <Text>
                    デザイントークンは、デザインと実装の共通言語となるものです。変数名とその構造を示すことで、一貫性を高め運用効率性の高い開発を可能にします。既存の概念（16進数のカラーコードなど）に具体的な値を与え扱いやすくしたプリミティブトークン、特定の用途別に定義したセマンティックトークンのふたつを使い分ける構成となっています。
                  </Text>
                </Stack>

                <div className={centerClass({ isImage: true, className: 'py-6' })}>
                  <Image src={Image03} alt="" />
                </div>

                <Stack space="l">
                  <Heading as="h3" size="xs">
                    プリミティブカラー
                  </Heading>
                  <Text>
                    デジタル庁デザインシステムが独自に指定したカラーパレットをプリミティブカラーとして指定しています。セマンティックカラーとして指定されていない色は、コントラスト比に十分注意した上で補助色として使用したり、イラストレーションに使用することも可能です。
                  </Text>
                </Stack>

                <div className={centerClass({ isImage: true, className: 'py-6' })}>
                  <Image src={Image04} alt="" />
                </div>
              </Stack>
            </section>
          </Stack>
        </Container>
      </main>
    </div>
  )
}
