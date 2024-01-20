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
import { MdNorth } from 'react-icons/md'

export default function ButtonComponent() {
  return (
    <>
      <Heading as="h2" size="m" id="button">
        Button
      </Heading>
      <StorybookButton href="https://digital-go-jp-design-system-storybook.vercel.app/?path=/docs/components-ui-button-index--docs" />
      <Grid gap="l">
        <Grid.Item colSpan={4}>
          <Button variant="primary" width="full">
            ボタン
          </Button>
        </Grid.Item>
        <Grid.Item colSpan={4}>
          <Button variant="secondary" width="full">
            ボタン
          </Button>
        </Grid.Item>
        <Grid.Item colSpan={4}>
          <Button variant="teriary" width="full">
            ボタン
          </Button>
        </Grid.Item>
      </Grid>
      <Grid gap="l">
        <Grid.Item colSpan={4}>
          <Button variant="primary" disabled width="full">
            ボタン
          </Button>
        </Grid.Item>
        <Grid.Item colSpan={4}>
          <Button variant="secondary" disabled width="full">
            ボタン
          </Button>
        </Grid.Item>
        <Grid.Item colSpan={4}>
          <Button variant="teriary" disabled width="full">
            ボタン
          </Button>
        </Grid.Item>
      </Grid>
      <Stack direction="horizontal" isFlex={false}>
        <Button variant="primary" size="xs">
          XSボタン
        </Button>
        <Button variant="primary" size="s">
          Sボタン
        </Button>
        <Button variant="primary" size="m">
          Mボタン
        </Button>
        <Button variant="primary" size="l">
          Lボタン
        </Button>
      </Stack>
      <Grid gap="l">
        <Grid.Item colSpan={12}>
          <Button variant="secondary" radius="full">
            <MdNorth role="img" className="h-6 w-6" aria-label="page top" />
          </Button>
        </Grid.Item>
      </Grid>
    </>
  )
}
