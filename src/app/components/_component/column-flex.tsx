import Image from 'next/image'
import { Container, containerClass } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'
import { Box } from '@/components/ui/Box'
import { Flex } from '@/components/ui/Flex'
import { Heading } from '@/components/ui/Heading'
import { Text, textClass } from '@/components/ui/Text'
import { Input } from '@/components/ui/Input'
import { List } from '@/components/ui/List'
import { Link } from '@/components/ui/Link'
import { Stack, VStack, HStack } from '@/components/ui/Stack'
import { centerClass } from '@/components/ui/Center'
import NextLink from 'next/link'
import StorybookButton from '@/app/components/_parts/StorybookButton'

export default function ButtonComponent() {
  return (
    <>
      <Heading as="h2" size="m" id="flex">
        カラム(Flex)
      </Heading>
      <StorybookButton href="https://temp-base-components-storybook.vercel.app/?path=/docs/components-layout-flex-flex-index--docs" />

      <Heading as="h3" size="xs">
        12カラム
      </Heading>
      <Flex.Wrapper>
        <Flex gap="l">
          <Flex.Item span={3}>
            <div className="bg-bg-secondary text-center p-4">4カラム</div>
          </Flex.Item>
          <Flex.Item span={3}>
            <div className="bg-bg-secondary text-center p-4">4カラム</div>
          </Flex.Item>
          <Flex.Item span={3}>
            <div className="bg-bg-secondary text-center p-4">4カラム</div>
          </Flex.Item>
          <Flex.Item span={3}>
            <div className="bg-bg-secondary text-center p-4">4カラム</div>
          </Flex.Item>
        </Flex>
      </Flex.Wrapper>
      <Flex.Wrapper>
        <Flex gap="l">
          <Flex.Item span={4}>
            <div className="bg-bg-secondary text-center p-4">3カラム</div>
          </Flex.Item>
          <Flex.Item span={4}>
            <div className="bg-bg-secondary text-center p-4">3カラム</div>
          </Flex.Item>
          <Flex.Item span={4}>
            <div className="bg-bg-secondary text-center p-4">3カラム</div>
          </Flex.Item>
        </Flex>
      </Flex.Wrapper>
      <Flex.Wrapper>
        <Flex gap="l">
          <Flex.Item span={6}>
            <div className="bg-bg-secondary text-center p-4">2カラム</div>
          </Flex.Item>
          <Flex.Item span={6}>
            <div className="bg-bg-secondary text-center p-4">2カラム</div>
          </Flex.Item>
        </Flex>
      </Flex.Wrapper>
      <Flex.Wrapper>
        <Flex gap="l">
          <Flex.Item span={12}>
            <div className="bg-bg-secondary text-center p-4">1カラム</div>
          </Flex.Item>
        </Flex>
      </Flex.Wrapper>
      <Flex.Wrapper>
        <Flex gap="l">
          <Flex.Item span={6}>
            <div className="bg-bg-secondary text-center p-4">2カラム</div>
          </Flex.Item>
          <Flex.Item span={6}>
            <div className="bg-bg-secondary text-center p-4">2カラム</div>
          </Flex.Item>
        </Flex>
      </Flex.Wrapper>
    </>
  )
}
