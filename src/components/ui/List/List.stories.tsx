import type { Meta, StoryObj } from '@storybook/react'
import { userEvent as user, waitFor, within } from '@storybook/testing-library'
import { expect } from '@storybook/jest'
import { List, listClass, listItemClass } from './'
import { MdOutlineOutlet, MdNorth } from 'react-icons/md'

const meta: Meta<typeof List> = {
  component: List,
  args: { children: '', className: '' },
  tags: ['autodocs'],
  argTypes: {
    children: {
      description: '`<List.Item>`もしくは`<li>`のみ許可される',
      table: {
        type: {
          summary: 'React.ReactNode',
        },
      },
    },
    className: {
      description: '任意のリスト項目要素のマーカーを使用したい場合はclassを使用する',
      table: {
        type: {
          summary: 'list-[lower-roman] | list-[cjk-earthly-branch] | list-[hiragana-iroha]',
        },
      },
    },
    icon: {
      description: 'リスト項目要素のマーカー',
      control: {
        type: 'text',
      },
      table: {
        type: {
          summary: 'React.ReactNode',
        },
      },
    },
    space: {
      description: 'Stackコンポーネント参照<br>※directionは`vertical`固定',
      control: {
        type: 'inline-radio',
      },
      options: [0, 'xs', 's', 'm', 'l', 'xl', '2xl', '3xl'],
      table: {
        defaultValue: {
          summary: 'undefined',
        },
        type: {
          summary: 'xs | s | m | l | xl | 2xl | 3xl',
        },
      },
    },
    indent: {
      description: 'ビュレットのインデント値。`1`=`1em`',
      control: {
        type: 'number',
      },
      table: {
        defaultValue: {
          summary: 'undefined',
        },
        type: {
          summary: 'number',
        },
      },
    },
    listStyleType: {
      description:
        'リスト項目要素のマーカーを変更します。decimal, disc, none, customのみ使用可能。<br>`icon`指定が優先され、`icon`指定を行う場合、強制的に`custom`になる。List.Itemのみで`icon`指定を行う場合は`<List>`要素で`listStyleType="custom"`を指定する必要あり。',
      control: {
        type: 'inline-radio',
      },
      options: ['decimal', 'disc', 'none', 'custom'],
      table: {
        defaultValue: {
          summary: 'disc',
        },
        type: {
          summary: 'decimal | disc | none | custom',
        },
      },
    },
    reversed: {
      description:
        'リストマーカーの順序を逆順にします。項目番号が降順 （大きい数から小さい数へ） となる。listStyleTypeで`decimal`を指定する場合のみ使用可能。',
      table: {
        defaultValue: {
          summary: 'undefined',
        },
        type: {
          summary: 'boolean',
        },
      },
      control: {
        type: 'boolean',
      },
    },
    start: {
      description: 'リストマーカーの開始数値を変更します。listStyleTypeで`decimal`を指定する場合のみ使用可能。',
      table: {
        defaultValue: {
          summary: 'undefined',
        },
        type: {
          summary: 'number',
        },
      },
      control: {
        type: 'number',
      },
    },
    as: {
      description: 'polymorphic component（基本的に`ol`に変更する場合に利用）',
      table: {
        defaultValue: {
          summary: '<ul>',
        },
        type: {
          summary: 'string | components',
        },
      },
      control: {
        type: 'text',
      },
    },
  },
}

export default meta

export const Default: StoryObj<typeof List> = {
  args: {
    children: (
      <>
        <List.Item>テキスト</List.Item>
        <List.Item>テキスト</List.Item>
      </>
    ),
  },
  play: async ({ canvasElement }) => {},
}
export const Nest: StoryObj<typeof List> = {
  args: {
    children: (
      <>
        <List.Item>テキスト</List.Item>
        <List.Item>
          テキスト
          <List icon="※">
            <List.Item>テキスト</List.Item>
            <List.Item>
              テキスト
              <List indent={4}>
                <List.Item>テキスト</List.Item>
                <List.Item>
                  テキスト
                  <List>
                    <List.Item>テキスト</List.Item>
                    <List.Item>テキスト</List.Item>
                  </List>
                </List.Item>
              </List>
            </List.Item>
          </List>
        </List.Item>
      </>
    ),
  },
  play: async ({ canvasElement }) => {},
}

export const BaseIcon: StoryObj<typeof List> = {
  args: {
    icon: '※',
    children: (
      <>
        <List.Item>テキスト</List.Item>
        <List.Item>テキスト</List.Item>
      </>
    ),
  },
  play: async ({ canvasElement }) => {},
}
export const BaseIconReactNode: StoryObj<typeof List> = {
  args: {
    icon: (
      <div className="pt-1.5">
        <MdOutlineOutlet />
      </div>
    ),
    children: (
      <>
        <List.Item>テキスト</List.Item>
        <List.Item>テキスト</List.Item>
      </>
    ),
  },
  play: async ({ canvasElement }) => {},
}
export const CustomIcon: StoryObj<typeof List> = {
  args: {
    icon: '※',
    children: (
      <>
        <List.Item>テキスト</List.Item>
        <List.Item icon="※※">テキスト</List.Item>
        <List.Item icon="01.">テキスト</List.Item>
        <List.Item icon={0}>テキスト</List.Item>
        <List.Item icon={1}>テキスト</List.Item>
        <List.Item
          icon={
            <div className="pt-1.5">
              <MdNorth />
            </div>
          }>
          テキスト
        </List.Item>
        <List.Item>
          テキスト
          <List icon={<span aria-hidden>※</span>}>
            <List.Item>テキスト</List.Item>
            <List.Item>テキスト</List.Item>
          </List>
        </List.Item>
      </>
    ),
  },
  play: async ({ canvasElement }) => {},
}
export const Space: StoryObj<typeof List> = {
  args: {
    space: 4,
    children: (
      <>
        <List.Item>
          テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
        </List.Item>
        <List.Item>
          テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
        </List.Item>
        <List.Item>
          テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
        </List.Item>
      </>
    ),
  },
  play: async ({ canvasElement }) => {},
}

export const Indent: StoryObj<typeof List> = {
  args: {
    indent: 3.5,
    listStyleType: 'custom',
    children: (
      <>
        <List.Item icon="※">
          テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
        </List.Item>
        <List.Item icon="※※">
          テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
        </List.Item>
      </>
    ),
  },
  play: async ({ canvasElement }) => {},
}

export const Orderred: StoryObj<typeof List> = {
  args: {
    listStyleType: 'decimal',
    as: 'ol',
    children: (
      <>
        <List.Item>テキストテキスト</List.Item>
        <List.Item>テキストテキスト</List.Item>
        <List.Item>テキストテキスト</List.Item>
        <List.Item>テキストテキスト</List.Item>
      </>
    ),
  },
  play: async ({ canvasElement }) => {},
}

export const OrderredOtherListStyleType: StoryObj<typeof List> = {
  args: {
    listStyleType: 'decimal',
    as: 'ol',
    className: 'list-[lower-roman]',
    children: (
      <>
        <List.Item>テキスト</List.Item>
        <List.Item>テキスト</List.Item>
        <List.Item>
          テキスト
          <List as="ol" listStyleType="decimal" className="list-[cjk-earthly-branch]">
            <List.Item>テキスト</List.Item>
            <List.Item>テキスト</List.Item>
            <List.Item>
              テキスト
              <List as="ol" listStyleType="decimal" className="list-[hiragana-iroha]">
                <List.Item>テキスト</List.Item>
                <List.Item>テキスト</List.Item>
                <List.Item>テキスト</List.Item>
              </List>
            </List.Item>
          </List>
        </List.Item>
      </>
    ),
  },
}

export const OrderredReverse: StoryObj<typeof List> = {
  args: {
    listStyleType: 'decimal',
    as: 'ol',
    reversed: true,
    children: (
      <>
        <List.Item>テキスト</List.Item>
        <List.Item>テキスト</List.Item>
        <List.Item>テキスト</List.Item>
        <List.Item>テキスト</List.Item>
      </>
    ),
  },
}

export const OrderredStart: StoryObj<typeof List> = {
  args: {
    listStyleType: 'decimal',
    as: 'ol',
    start: '4',
    children: (
      <>
        <List.Item>テキスト</List.Item>
        <List.Item>テキスト</List.Item>
        <List.Item>テキスト</List.Item>
        <List.Item>テキスト</List.Item>
      </>
    ),
  },
}


export const OnlyClass: StoryObj = {
  render: () => (
    <>
      <ul className={listClass()}>
        <li className={listItemClass().baseClass()}>
          <div className={listItemClass().wrapperClass()}>
            テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
          </div>
        </li>
      </ul>
    </>
  ),
}
