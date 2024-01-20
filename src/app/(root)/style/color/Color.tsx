import { Meta } from '@storybook/blocks'
import Image from 'next/image'
import { Grid } from '@/components/ui/Grid'
import { Heading } from '@/components/ui/Heading'
import { Stack } from '@/components/ui/Stack'
import { Text } from '@/components/ui/Text'

const colorList = [
  {
    name: 'Text',
    type: 'text',
    light: [
      ['bg-text-body', 'Body', 'Sumi-900'],
      ['bg-text-description', 'Description', 'Sumi-700'],
      ['bg-text-placeholder', 'Place Holder', 'Sumi-600'],
      ['bg-text-onfill', 'On Fill', 'White', true],
      ['bg-text-link', 'Link', 'Sea-800'],
      ['bg-text-hover', 'Hover', 'Sea-900'],
      ['bg-text-active', 'Active', 'Sea-900'],
      ['bg-text-visited', 'Visited', 'Sea-900'],
      ['bg-text-alert', 'Alert', 'Sun-800'],
      ['bg-text-disabled', 'Disabled', 'Sumi-500'],
    ],
    dark: [
      ['bg-text-body', 'Body', 'White'],
      ['bg-text-description', 'Description', 'Sumi-400'],
      ['bg-text-placeholder', 'Place Holder', 'Sumi-500'],
      ['bg-text-onfill', 'On Fill', 'White'],
      ['bg-text-link', 'Link', 'Sea-300'],
      ['bg-text-hover', 'Hover', 'Sea-200'],
      ['bg-text-active', 'Active', 'Sea-200'],
      ['bg-text-visited', 'Visited', 'Sea-200'],
      ['bg-text-alert', 'Alert', 'Sun-500'],
      ['bg-text-disabled', 'Disabled', 'Sumi-600'],
    ],
  },
  {
    name: 'Icon',
    type: 'icon',
    light: [
      ['bg-icon-label', 'Label', 'Sumi-900'],
      ['bg-icon-active', 'Active', 'Sea-800'],
      ['bg-icon-alert', 'Alert', 'Sun-800'],
      ['bg-icon-disabled', 'Disabled', 'Sumi-500'],
    ],
    dark: [
      ['bg-icon-label', 'Label', 'White'],
      ['bg-icon-active', 'Active', 'Sea-300'],
      ['bg-icon-alert', 'Alert', 'Sun-500'],
      ['bg-icon-disabled', 'Disabled', 'Sumi-600'],
    ],
  },
  {
    name: 'Button',
    type: 'button',
    light: [
      ['bg-button-normal', 'Normal', 'Sumi-800'],
      ['bg-button-hover', 'Hover', 'darken Sea-800 13%'],
      ['bg-button-active', 'Active', 'darken Sea-800 13%'],
      ['bg-button-disabled', 'Disabled', 'Sumi-500'],
    ],
    dark: [
      ['bg-button-normal', 'Normal', 'Sea-300'],
      ['bg-button-hover', 'Hover', 'darken Sea-300 10%'],
      ['bg-button-active', 'Active', 'darken Sea-300 10%'],
      ['bg-button-disabled', 'Disabled', 'Sumi-500'],
    ],
  },
  {
    name: 'Background',
    type: 'bg',
    light: [
      ['bg-bg-primary', 'Primary', 'White', true],
      ['bg-bg-secondary', 'Secondary', 'Sumi-100'],
      ['bg-bg-tertiary', 'Tertiary', 'Sumi-50'],
    ],
    dark: [
      ['bg-bg-primary', 'Primary', 'Sumi-900', true],
      ['bg-bg-secondary', 'Secondary', 'Sumi-700'],
      ['bg-bg-tertiary', 'Tertiary', 'Sumi-800'],
    ],
  },
  {
    name: 'Border',
    type: 'border',
    light: [
      ['border-border-field border', 'Field', 'Sumi-900 1px', 1],
      ['border-border-divider border', 'Divider', 'Sumi-300 1px', 1],
      ['border-border-focused border-2', 'Focused', 'Wood-600 2px', 2],
      ['border-border-selected border-2', 'Selected', 'Sea-800 2px', 2],
      ['border-border-alert border-2', 'Alert', 'Sun-800 2px', 2],
      ['border-border-disabled border', 'Disabled', 'Sumi-300 1px', 1],
    ],
    dark: [
      ['border-border-field border', 'Field', 'White 1px', 1],
      ['border-border-divider border', 'Divider', 'Sumi-700 1px', 1],
      ['border-border-focused border-2', 'Focused', 'Wood-600 2px', 2],
      ['border-border-selected border-2', 'Selected', 'Sea-300 2px', 2],
      ['border-border-alert border-2', 'Alert', 'Sun-500 2px', 2],
      ['border-border-disabled border', 'Disabled', 'Sumi-300 1px', 1],
    ],
  },
  {
    name: 'Status',
    type: 'status',
    light: [
      ['bg-status-success', 'Success', 'Forest-600'],
      ['bg-status-alert', 'Alert', 'Sun-800'],
      ['bg-status-warning', 'Warning', 'Wood-800'],
    ],
    dark: [
      ['bg-status-success', 'Success', 'Forest-600'],
      ['bg-status-alert', 'Alert', 'Sun-500'],
      ['bg-status-warning', 'Warning', 'Wood-500'],
    ],
  },
  {
    name: 'Chart',
    type: 'chart',
    light: [
      ['bg-chart-primary', 'Primary', 'Sea-800'],
      ['bg-chart-secondary', 'Secondary', 'Sea-400'],
    ],
    dark: [
      ['bg-chart-primary', 'Primary', 'Sea-100'],
      ['bg-chart-secondary', 'Secondary', 'Sea-300'],
    ],
  },
]

const Color = (): JSX.Element => {
  return (
    <>
      <Stack space="l">
        {colorList.map((base) => (
          <Grid gap="m" key={base.type}>
            <Grid.Item colSpan={6} className="border border-sumi-300 p-6">
              <Stack space="l">
                <Heading size="xs">{base.name} Light</Heading>
                {base.light.map((color) => (
                  <Grid gridType="max_1fr" gap="m" className="items-center" key={`light-${color[1]}-${color[2]}`}>
                    <Grid.Item>
                      <div className={`h-10 w-10 rounded-full ${color[0]} ${color[3] === true ? 'border' : ''}`}></div>
                    </Grid.Item>
                    <Grid.Item>
                      <Text>
                        <strong>{color[1]}</strong>
                        <br />
                        {color[2]}
                      </Text>
                    </Grid.Item>
                  </Grid>
                ))}
              </Stack>
            </Grid.Item>
            <Grid.Item colSpan={6} className="border border-sumi-900 bg-bg-primary p-6" data-theme="dark">
              <Stack space="l">
                <Heading size="xs">{base.name} Dark</Heading>
                {base.dark.map((color) => (
                  <Grid gridType="max_1fr" gap="m" className="items-center" key={`dark-${color[1]}-${color[2]}`}>
                    <Grid.Item>
                      <div
                        className={`h-10 w-10 rounded-full ${color[0]} ${
                          color[3] === true ? 'border border-sumi-700' : ''
                        }`}></div>
                    </Grid.Item>
                    <Grid.Item>
                      <Text>
                        <strong>{color[1]}</strong>
                        <br />
                        {color[2]}
                      </Text>
                    </Grid.Item>
                  </Grid>
                ))}
              </Stack>
            </Grid.Item>
          </Grid>
        ))}
      </Stack>
    </>
  )
}

export default Color
