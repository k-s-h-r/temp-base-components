import type { Meta, StoryObj } from '@storybook/react'
import { userEvent as user, waitFor, within } from '@storybook/testing-library'
import { expect } from '@storybook/jest'
import { Table, tableClass } from './'

const elements = [
  { position: 6, mass: 12.011, symbol: 'C', name: 'Carbon' },
  { position: 7, mass: 14.007, symbol: 'N', name: 'Nitrogen' },
  { position: 39, mass: 88.906, symbol: 'Y', name: 'Yttrium' },
  { position: 56, mass: 137.33, symbol: 'Ba', name: 'Barium' },
  { position: 58, mass: 140.12, symbol: 'Ce', name: 'Cerium' },
]

const rows = elements.map((element) => (
  <tr key={element.name}>
    <td>{element.position}</td>
    <td>{element.name}</td>
    <td>{element.symbol}</td>
    <td>{element.mass}</td>
  </tr>
))
const tableData = (
  <>
    <thead>
      <tr>
        <th>Element position</th>
        <th>Element name</th>
        <th>Symbol</th>
        <th>Atomic mass</th>
      </tr>
    </thead>
    <tbody>{rows}</tbody>
  </>
)

const meta: Meta<typeof Table> = {
  component: Table,
  args: {
    className: 'w-full',
    children: <>{tableData}</>,
  },
  tags: ['autodocs'],
  argTypes: {
    layout: {
      control: {
        type: 'inline-radio',
      },
      options: ['auto', 'fixed'],
    },
  },
}

export default meta

export const Default: StoryObj<typeof Table> = {
  args: {},
  play: async ({ canvasElement }) => {},
}

export const Fixed: StoryObj<typeof Table> = {
  args: {
    layout: 'fixed',
  },
  play: async ({ canvasElement }) => {},
}

export const CustomStyle: StoryObj<typeof Table> = {
  args: {
    children: (
      <>
        <thead>
          <tr>
            <th className="bg-sea-500">通常のユーティリティクラス指定では詳細度の問題で反映されない</th>
            <th className="text-white [th&]:bg-sea-500">importantや要素(th)指定の追加により詳細度を上げることで個別指定が可能</th>
            <th className="!bg-sea-500 text-white">important</th>
            <th className="text-white x2:bg-sea-500">拡張variantの「x2」も利用可能（詳細度0.2.0）</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </>
    ),
  },
  play: async ({ canvasElement }) => {},
}
