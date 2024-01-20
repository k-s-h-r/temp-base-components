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
import NextLink from 'next/link'

import Image01 from '../assets/01.svg'
import Image02 from '../assets/02.svg'
import Image03 from '../assets/03.svg'
import Image04 from '../assets/04.svg'
import Image05 from '../assets/05.svg'
import Image06 from '../assets/06.svg'

export default function Home() {
  return (
    <div>
      <header>
        <div className={containerClass({ variant: 'full', className: 'bg-sea-800' })}>
          <Container>
            <div className="py-6">
              <Text size="bodyM" color="white">
                デジタル庁
              </Text>
            </div>
            <div className="grid min-h-[24rem] items-center py-6">
              <Stack space="l">
                <Heading as="h1" color="white" className="text-[3rem] font-bold">
                  デジタル庁デザインシステム利用の手引き
                </Heading>
                <Text color="white" className="text-[1.6rem] font-bold">
                  Digital Agency Design System User's Guide
                </Text>
              </Stack>
            </div>
            <div className="py-6">
              <Text size="bodyM" color="white">
                2022年8月31日 デジタル庁サービスデザインユニット
              </Text>
            </div>
          </Container>
        </div>
      </header>
      <GlobalNav current="/" />
      <main className="mt-10 pb-14">
        <Container>
          <Stack space="2xl">
            <Box color="secondary" padding={10}>
              <Stack as={List} space="s">
                <List.Item icon="01">
                  <Text>
                    <Link as={NextLink} href="#section01">
                      デザインシステムとは？
                    </Link>
                  </Text>
                </List.Item>
                <List.Item icon="02">
                  <Text>
                    <Link as={NextLink} href="#section02">
                      構築と推進の目的
                    </Link>
                  </Text>
                </List.Item>
                <List.Item icon="03">
                  <Text>
                    <Link as={NextLink} href="#section03">
                      対象プロジェクトと準拠レベル
                    </Link>
                  </Text>
                </List.Item>
                <List.Item icon="04">
                  <Text>
                    <Link as={NextLink} href="#section04">
                      導入方法
                    </Link>
                  </Text>
                </List.Item>
              </Stack>
            </Box>
            <section id="section01">
              <Stack space="xl">
                <Heading as="h2" size="xl" className="flex items-center">
                  <span className="mr-6 text-[6rem]">01</span> <span>デザインシステムとは？</span>
                </Heading>

                <Stack space="l" as="section">
                  <Heading as="h3" size="l">
                    デザインシステムとは？
                  </Heading>
                  <Text>
                    デザインシステムとは<strong>「あるべきデザインを一貫性を持ってユーザーに提供するための仕組み」</strong>。
                  </Text>
                  <Text>
                    デジタル庁デザインシステムは、使い勝手のいい行政サービスを効率よく構築するためのガイドライン、コード、テンプレート、コミュニティを提供します。
                  </Text>
                  <div className={centerClass({ isImage: true, className: 'py-6' })}>
                    <Image src={Image01} alt="" />
                  </div>
                </Stack>

                <Stack space="l" as="section">
                  <Heading as="h3" size="l">
                    構成要素
                  </Heading>
                  <Text>
                    <strong>住民向けのウェブサイト及びサービス、特にモバイル版のデザイン</strong>
                    を優先してアップデートを行っています。
                  </Text>
                  <div className={centerClass({ isImage: true, className: 'py-6' })}>
                    <Image src={Image02} alt="" />
                  </div>
                </Stack>
              </Stack>
            </section>

            <section id="section02">
              <Stack space="xl">
                <Heading as="h2" size="xl" className="flex items-center">
                  <span className="mr-6 text-[6rem]">02</span> <span>構築と推進の目的</span>
                </Heading>

                <Stack space="l" as="section">
                  <Heading as="h3" size="l">
                    背景
                  </Heading>
                  <Text>
                    各府省庁が個別に構築しているウェブサイトやサービス。デザインがバラバラで、ユーザーは構造や機能をその都度理解し、必要な情報にたどり着くのに時間がかかります。運営側も、開発や更新に手間のかかる状態となっています。
                  </Text>
                  <div className={centerClass({ isImage: true, className: 'py-6' })}>
                    <Image src={Image03} alt="" />
                  </div>
                </Stack>
                <Stack space="l" as="section">
                  <Heading as="h3" size="l">
                    目的
                  </Heading>
                  <Text>
                    あらかじめ「アクセシビリティ」「ユーザビリティ」を担保したデザインパーツを再利用することで、一貫性のあるデザインを効率よく実現。
                    <strong>
                      使いやすさの向上、開発効率の向上、改善サイクルの迅速化を図り、より大きな課題やサービスの改善に集中する
                    </strong>
                    のが目的です。
                    <br />
                    詳細は、
                    <Link href="https://www.digital.go.jp/policies/servicedesign/designsystem/" target="_blank">
                      デジタル庁ウェブサイト
                    </Link>
                    をご覧ください。
                  </Text>
                  <div className={centerClass({ isImage: true, className: 'py-6' })}>
                    <Image src={Image04} alt="" />
                  </div>
                </Stack>
              </Stack>
            </section>

            <section id="section03">
              <Stack space="xl">
                <Heading as="h2" size="xl" className="flex items-center">
                  <span className="mr-6 text-[6rem]">03</span> <span>対象プロジェクトと準拠レベル</span>
                </Heading>

                <Stack space="l" as="section">
                  <Heading as="h3" size="l">
                    対象プロジェクトと準拠レベル
                  </Heading>
                  <Text>① システムは原則必須、②③ システムは推奨です。</Text>

                  <div className={centerClass({ isImage: true, className: 'py-6' })}>
                    <Image src={Image05} alt="" />
                  </div>
                </Stack>
              </Stack>
            </section>

            <section id="section04">
              <Stack space="xl">
                <Heading as="h2" size="xl" className="flex items-center">
                  <span className="mr-6 text-[6rem]">04</span> <span>導入方法</span>
                </Heading>

                <Stack space="l" as="section">
                  <Heading as="h3" size="l">
                    検討のタイミング
                  </Heading>
                  <Text>調達の「前」に検討をはじめることでその後の開発プロセスや試験を効率化し、品質を向上できます。</Text>
                  <div className={centerClass({ isImage: true, className: 'py-6' })}>
                    <Image src={Image06} alt="" />
                  </div>
                </Stack>
              </Stack>
            </section>
          </Stack>
        </Container>
      </main>
    </div>
  )
}
