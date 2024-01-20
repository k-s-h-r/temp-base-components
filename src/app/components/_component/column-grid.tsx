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
      <Heading as="h2" size="m" id="grid">
        カラム(Grid)
      </Heading>
      <StorybookButton href="https://digital-go-jp-design-system-storybook.vercel.app/?path=/docs/components-layout-grid-grid-index--docs" />

      <Heading as="h3" size="xs">
        12カラム
      </Heading>
      <Grid gap="l">
        <Grid.Item colSpan={3}>
          <div className="bg-bg-secondary text-center p-4">4カラム</div>
        </Grid.Item>
        <Grid.Item colSpan={3}>
          <div className="bg-bg-secondary text-center p-4">4カラム</div>
        </Grid.Item>
        <Grid.Item colSpan={3}>
          <div className="bg-bg-secondary text-center p-4">4カラム</div>
        </Grid.Item>
        <Grid.Item colSpan={3}>
          <div className="bg-bg-secondary text-center p-4">4カラム</div>
        </Grid.Item>
      </Grid>
      <Grid gap="l">
        <Grid.Item colSpan={4}>
          <div className="bg-bg-secondary text-center p-4">3カラム</div>
        </Grid.Item>
        <Grid.Item colSpan={4}>
          <div className="bg-bg-secondary text-center p-4">3カラム</div>
        </Grid.Item>
        <Grid.Item colSpan={4}>
          <div className="bg-bg-secondary text-center p-4">3カラム</div>
        </Grid.Item>
      </Grid>
      <Grid gap="l">
        <Grid.Item colSpan={6}>
          <div className="bg-bg-secondary text-center p-4">2カラム</div>
        </Grid.Item>
        <Grid.Item colSpan={6}>
          <div className="bg-bg-secondary text-center p-4">2カラム</div>
        </Grid.Item>
      </Grid>
      <Grid gap="l">
        <Grid.Item colSpan={12}>
          <div className="bg-bg-secondary text-center p-4">1カラム</div>
        </Grid.Item>
      </Grid>
      <Grid gap="l">
        <Grid.Item colSpan={6}>
          <div className="bg-bg-secondary text-center p-4">2カラム</div>
        </Grid.Item>
        <Grid.Item colSpan={6}>
          <div className="bg-bg-secondary text-center p-4">2カラム</div>
        </Grid.Item>
      </Grid>
      <Heading as="h3" size="xs">
        15カラム
      </Heading>
      <Grid gap="l" gridType={15}>
        <Grid.Item colSpan={3}>
          <div className="bg-bg-secondary text-center p-4">3/15</div>
        </Grid.Item>
        <Grid.Item colSpan={3}>
          <div className="bg-bg-secondary text-center p-4">3/15</div>
        </Grid.Item>
        <Grid.Item colSpan={3}>
          <div className="bg-bg-secondary text-center p-4">3/15</div>
        </Grid.Item>
        <Grid.Item colSpan={3}>
          <div className="bg-bg-secondary text-center p-4">3/15</div>
        </Grid.Item>
        <Grid.Item colSpan={3}>
          <div className="bg-bg-secondary text-center p-4">3/15</div>
        </Grid.Item>
      </Grid>
      <Heading as="h3" size="xs">
        16カラム
      </Heading>
      <Grid gap="l" gridType={16}>
        <Grid.Item colSpan={2}>
          <div className="bg-bg-secondary text-center p-4">2/16</div>
        </Grid.Item>
        <Grid.Item colSpan={2}>
          <div className="bg-bg-secondary text-center p-4">2/16</div>
        </Grid.Item>
        <Grid.Item colSpan={2}>
          <div className="bg-bg-secondary text-center p-4">2/16</div>
        </Grid.Item>
        <Grid.Item colSpan={2}>
          <div className="bg-bg-secondary text-center p-4">2/16</div>
        </Grid.Item>
        <Grid.Item colSpan={2}>
          <div className="bg-bg-secondary text-center p-4">2/16</div>
        </Grid.Item>
        <Grid.Item colSpan={2}>
          <div className="bg-bg-secondary text-center p-4">2/16</div>
        </Grid.Item>
        <Grid.Item colSpan={2}>
          <div className="bg-bg-secondary text-center p-4">2/16</div>
        </Grid.Item>
        <Grid.Item colSpan={2}>
          <div className="bg-bg-secondary text-center p-4">2/16</div>
        </Grid.Item>
      </Grid>
    </>
  )
}
