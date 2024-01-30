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
import NextLink from 'next/link'
import StorybookButton from '@/app/components/_parts/StorybookButton'

export default function ButtonComponent() {
  return (
    <>
      <Heading as="h2" size="m" id="stack">
        Stack
      </Heading>
      <StorybookButton href="https://temp-base-components-storybook.vercel.app/?path=/docs/components-layout-stack-stack-index--docs" />
      <Stack space="m" direction="vertical">
        <div className="bg-bg-secondary text-center p-4">Stack(vertical)</div>
        <div className="bg-bg-secondary text-center p-4">Stack(vertical)</div>
        <div className="bg-bg-secondary text-center p-4">Stack(vertical)</div>
        <div className="bg-bg-secondary text-center p-4">Stack(vertical)</div>
      </Stack>
      <Stack space="m" direction="horizontal">
        <div className="bg-bg-secondary text-center p-4">Stack(horizontal)</div>
        <div className="bg-bg-secondary text-center p-4">Stack(horizontal)</div>
        <div className="bg-bg-secondary text-center p-4">Stack(horizontal)</div>
        <div className="bg-bg-secondary text-center p-4">Stack(horizontal)</div>
      </Stack>
    </>
  )
}
