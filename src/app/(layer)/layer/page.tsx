/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image'
import { Container, containerClass } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'
import { Box } from '@/components/ui/Box'
import { Heading } from '@/components/ui/Heading'
import { Text, textClass } from '@/components/ui/Text'
import { Input } from '@/components/ui/Input'
import { List } from '@/components/ui/List'
import { Flex } from '@/components/ui/Flex'
import { Grid } from '@/components/ui/Grid'
import { Link } from '@/components/ui/Link'
import { Stack, VStack, HStack } from '@/components/ui/Stack'
import { centerClass } from '@/components/ui/Center'
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
                  ダミーテキスト
                </Heading>
              </Stack>
            </div>
          </Container>
        </div>
      </header>
      <main className="mt-10 pb-14">
        <Container>
          <Stack space="2xl">
            <Text>
              ダミーテキスト。ダミーテキスト。ダミーテキスト。ダミーテキスト。ダミーテキスト。ダミーテキスト。ダミーテキスト。
            </Text>
            <List space="s">
              <List.Item>
                <Text>リスト</Text>
              </List.Item>
              <List.Item>
                <Text>リスト</Text>
              </List.Item>
              <List.Item>
                <Text>リスト</Text>
              </List.Item>
            </List>
            <Flex gap={8}>
              <Flex.Item span={4}><Button width="full">ボタンテキスト</Button></Flex.Item>
              <Flex.Item span={4}><Button width="full">ボタンテキスト</Button></Flex.Item>
              <Flex.Item span={4}><Button width="full">ボタンテキスト</Button></Flex.Item>
            </Flex>
            <Flex gap={8}>
              <Flex.Item span={{sm: 12, md: 6}}>
                <Box color="secondary">
                  <Stack space="m">
                    <Stack space="s">
                      <Heading as="h2" size="s">見出し</Heading>
                      <Text size="labelL">0000.00.00</Text>
                    </Stack>
                    <Text>ダミーテキストダミーテキストダミーテキストダミーテキストダミーテキスト。</Text>
                    <Button width="full">ボタンテキスト</Button>
                  </Stack>
                </Box>
              </Flex.Item>
              <Flex.Item span={{sm: 12, md: 6}}>
                <Box color="secondary">
                  <Grid gap="m" className="md:grid-rows-[1fr_auto] grid-cols-[30%_auto]">
                    <Stack space="m" className="md:row-span-2">
                      <img src="https://placehold.co/75x75" alt="" />
                    </Stack>
                    <Stack space="m">
                      <Stack space="s">
                        <Heading as="h2" size="s">見出し</Heading>
                        <Text size="labelL">0000.00.00</Text>
                      </Stack>
                      <Stack space="s">
                        <Text>ダミーテキストダミーテキストダミーテキストダミーテキストダミーテキスト。</Text>
                      </Stack>
                    </Stack>
                    <Stack space="s" className="col-span-2 md:col-span-1">
                      <Button width="full">ボタンテキスト</Button>
                    </Stack>
                  </Grid>
                </Box>
              </Flex.Item>
            </Flex>
          </Stack>
        </Container>
      </main>
    </div>
  )
}
