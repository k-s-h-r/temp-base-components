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
import StorybookButton from '@/app/components/_parts/StorybookButton'

export default function HeadingComponent() {
  return (
    <>
      <Heading as="h2" size="m" id="heading">
        Heading
      </Heading>
      <StorybookButton href="https://temp-base-components-storybook.vercel.app/?path=/docs/components-ui-heading--docs" />
      <Grid gap="m">
        <Grid.Item colSpan={12}>
          <Heading as="p" size="2xl">
            見出しXXL
          </Heading>
          <Heading as="p" size="xl">
            見出しXL
          </Heading>
          <Heading as="p" size="l">
            見出しL
          </Heading>
          <Heading as="p" size="m">
            見出しM
          </Heading>
          <Heading as="p" size="s">
            見出しS
          </Heading>
          <Heading as="p" size="xs">
            見出しXS
          </Heading>
          <Heading as="p" size="2xs">
            見出しXXS
          </Heading>
        </Grid.Item>
      </Grid>
    </>
  )
}
