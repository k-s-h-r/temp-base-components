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
import Nav, { contentNav } from '@/app/(root)/style/Nav'
import NextLink from 'next/link'

export default function Home() {
  return (
    <div>
      <header>
        <div className={containerClass({ variant: 'full', className: 'bg-sea-800' })}>
          <Container>
            <div className="grid min-h-[15rem] items-center py-6">
              <Stack space="l">
                <Heading as="h1" color="white" className="text-[3rem] font-bold">
                  スタイル
                </Heading>
              </Stack>
            </div>
          </Container>
        </div>
      </header>
      <GlobalNav current="/style" />
      <Nav />
      <main className="mt-10 pb-14">
        <Container>
          <Stack space="2xl">
            <Text>
              スタイルは、サービスやウェブサイトが目指している姿勢や態度、印象を表現する最小単位のルールを定義したものです。
              <br />
              具体的には、カラースキーム、角丸の半径、フォントサイズや行間などの情報が含まれます。
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
