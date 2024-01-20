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
import Nav, { contentNav } from './Nav'
import NextLink from 'next/link'

export default function Template() {
  return (
    <div>
      <header>
        <div className={containerClass({ variant: 'full', className: 'bg-sea-800' })}>
          <Container>
            <div className="grid min-h-[15rem] items-center py-6">
              <Stack space="l">
                <Heading as="h1" color="white" className="text-[3rem] font-bold">
                  テンプレート
                </Heading>
              </Stack>
            </div>
          </Container>
        </div>
      </header>
      <GlobalNav current="/template" />
      <Nav />
      <main className="mt-10 pb-14">
        <Container>
          <Stack space="2xl">
            <Text>
              テンプレートとは、各サービス種別ごとに、よく発生するユーザータスクに対する最適な画面デザインをテンプレート化したものです。デジタル庁デザインシステムのスタイルとコンポーネントを使って構成されています。テキストや、要素の数などを変更して使用することができます。
            </Text>
            <List space="s">
              {contentNav.map((item) => (
                <List.Item key={item.name}>
                  {item.disabled ? (
                    <Link isDisabled={item.disabled}>{item.name}</Link>
                  ) : (
                    <Link as={NextLink} href={item.href}>
                      {item.name}
                    </Link>
                  )}
                </List.Item>
              ))}
            </List>
          </Stack>
        </Container>
      </main>
    </div>
  )
}
