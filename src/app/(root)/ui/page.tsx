/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image'
import { Button } from '@/components/ui/Button'
import { Heading } from '@/components/ui/Heading'
import { Input } from '@/components/ui/Input'
import { Stack, VStack, HStack } from '@/components/ui/Stack'
import Link from 'next/link'
import NextLink from 'next/link'

export default function Home() {
  return (
    <main className="">
      <div className="">
        <p className="">デジタル庁デザインシステム利用の手引き</p>
        <p className="">Digital Agency Design System User's Guide</p>
      </div>
      <div>
        <div className="ox-4 stack-space-4">
          <Button variant="primary">button</Button>
          <Button variant="secondary">button</Button>
          <Button variant="teriary">button</Button>
          <Button as={NextLink} href="/test" variant="teriary">
            button
          </Button>
        </div>
        <Stack
          direction={{
            initial: 'horizontal',
            sm: 'vertical',
          }}
          space={{
            initial: 4,
            sm: 8,
            md: 0,
          }}
          className="bg-slate-300">
          <Button variant="primary">stack test button</Button>
          <Button variant="primary">stack test button</Button>
          <Button variant="primary">stack test button</Button>
        </Stack>
      </div>
      <div>
        <Button as="a" variant="primary" href="/">
          link button
        </Button>
        <Button variant="secondary">button</Button>
        <Button variant="teriary">button</Button>
        <Button as={Link} variant="primary" href="/test">
          Nextjs link button
        </Button>
      </div>
      <div>
        <VStack space={'px'}>
          <div className="border border-gray-600 p-2">
            1
            <HStack space="xl">
              <div className="border border-gray-600 p-2">1</div>
              <div className="border border-gray-600 p-2">2</div>
              <div className="border border-gray-600 p-2">3</div>
            </HStack>
          </div>
          <div className="border border-gray-600 p-2">2</div>
          <div className="border border-gray-600 p-2">3</div>
        </VStack>
      </div>
      <div>
        <HStack>
          <div className="border border-gray-600 p-2">1</div>
          <div className="border border-gray-600 p-2">2</div>
          <div className="border border-gray-600 p-2">3</div>
        </HStack>
      </div>
    </main>
  )
}
