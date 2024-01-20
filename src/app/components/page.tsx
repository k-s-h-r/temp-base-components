/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image'
import { Container, containerClass } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'
import { Box } from '@/components/ui/Box'
import { Grid } from '@/components/ui/Grid'
import { Heading } from '@/components/ui/Heading'
import { Text, textClass } from '@/components/ui/Text'
import { Input } from '@/components/ui/Input'
import { List } from '@/components/ui/List'
import { Link } from '@/components/ui/Link'
import { Stack, VStack, HStack } from '@/components/ui/Stack'
import { centerClass } from '@/components/ui/Center'
import GlobalNav from '@/app/_components/GlobalNav'
import Nav from '@/app/_components/SubNav'
import NextLink from 'next/link'
import ButtonComponent from '@/app/components/_component/button'
import TextComponent from '@/app/components/_component/text'
import HeadingComponent from '@/app/components/_component/heading'
import ColumnGridComponent from '@/app/components/_component/column-grid'
import ColumnFlexComponent from '@/app/components/_component/column-flex'
import StackComponent from '@/app/components/_component/stack'

const contentNav = [
  {
    name: 'Button',
    href: '/components#button',
    disabled: false,
  },
  {
    name: 'Heading',
    href: '/components#heading',
    disabled: false,
  },
  {
    name: 'Text',
    href: '/components#text',
    disabled: false,
  },
  {
    name: 'カラム(Grid)',
    href: '/components#column-grid',
    disabled: false,
  },
  {
    name: 'カラム(Flex)',
    href: '/components#column-flex',
    disabled: false,
  },
  {
    name: 'Stack',
    href: '/components#stack',
    disabled: false,
  },
  {
    name: '...',
    href: '/components#',
    disabled: true,
  },
]

export default function Home() {
  return (
    <div>
      <header>
        <div className={containerClass({ variant: 'full', className: 'bg-sea-800' })}>
          <Container>
            <div className="grid min-h-[15rem] items-center py-6">
              <Stack space="l">
                <Heading as="h1" color="white" className="text-[3rem] font-bold">
                  コンポーネント
                </Heading>
              </Stack>
            </div>
          </Container>
        </div>
      </header>
      <GlobalNav current="/components" />
      <Nav contentNav={contentNav} />
      <main className="mt-10 pb-14">
        <Container>
          <Stack space="2xl">
            <Text>
              コンポーネントとは、直訳すると「部品」という意味です。インターフェース（利用者が実際に操作する画面）を構成する主要な部品の形やルールを、汎用性の高い形であらかじめ定めることで、設計したい画面の目的や機能に応じて効率よく組み立てたり、一貫したデザインの実装を可能とすることを目的としています。
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
          <Stack space="2xl" className="mt-2xl">
            <Stack space="l" isFlex={false}>
              <ButtonComponent />
            </Stack>
            <Stack space="l" isFlex={false}>
              <HeadingComponent />
            </Stack>
            <Stack space="l" isFlex={false}>
              <TextComponent />
            </Stack>
            <Stack space="l" isFlex={false}>
              <ColumnGridComponent />
            </Stack>
            <Stack space="l" isFlex={false}>
              <ColumnFlexComponent />
            </Stack>
            <Stack space="l" isFlex={false}>
              <StackComponent />
            </Stack>
          </Stack>
        </Container>
      </main>
    </div>
  )
}
