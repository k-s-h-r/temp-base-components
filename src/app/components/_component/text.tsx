import Image from 'next/image'
import { Container, containerClass } from '@/components/ui/Container'
import { Text } from '@/components/ui/Text'
import { Box } from '@/components/ui/Box'
import { Grid } from '@/components/ui/Grid'
import { Heading } from '@/components/ui/Heading'
import { Input } from '@/components/ui/Input'
import { List } from '@/components/ui/List'
import { Link } from '@/components/ui/Link'
import { Stack, VStack, HStack } from '@/components/ui/Stack'
import { centerClass } from '@/components/ui/Center'
import GlobalNav from '@/app/_components/GlobalNav'
import Nav from '@/app/_components/SubNav'
import NextLink from 'next/link'
import StorybookButton from '@/app/components/_parts/StorybookButton'

export default function TextComponent() {
  return (
    <>
      <Heading as="h2" size="m" id="text">
        Text
      </Heading>
      <StorybookButton href="https://temp-base-components-storybook.vercel.app/?path=/docs/components-ui-text--docs" />
      <Grid gap="m">
        <Grid.Item colSpan={12}>
          <Text size="bodyL">bodyL</Text>
        </Grid.Item>
        <Grid.Item colSpan={12}>
          <Text size="bodyM">bodyM</Text>
        </Grid.Item>
        <Grid.Item colSpan={12}>
          <Text size="labelL">labelL</Text>
        </Grid.Item>
        <Grid.Item colSpan={12}>
          <Text size="labelM">labelM</Text>
        </Grid.Item>
        <Grid.Item colSpan={12}>
          <Text size="noteL">noteL</Text>
        </Grid.Item>
        <Grid.Item colSpan={12}>
          <Text size="noteM">noteM</Text>
        </Grid.Item>
      </Grid>
    </>
  )
}
