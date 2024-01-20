import type { Meta, StoryObj } from '@storybook/react'
import { userEvent as user, waitFor, within } from '@storybook/testing-library'
import { expect } from '@storybook/jest'
import { Link } from './'
import { Text } from '../Text'
import { Stack } from '../Stack'
import { MdOutlineOutlet, MdNorth } from 'react-icons/md'
import NextLink from 'next/link'

const meta: Meta<typeof Link> = {
  component: Link,
  args: { children: 'リンクテキスト', className: '' },
  tags: ['autodocs'],
  argTypes: {
    children: {
      description: '',
      table: {
        type: {
          summary: 'React.ReactNode',
        },
      },
    },
    isLink: {
      description: 'リンクかどうか。`href`が`undefined`の場合も`false`になる。',
      table: {
        defaultValue: {
          summary: 'true',
        },
        type: {
          summary: 'boolean',
        },
      },
      control: {
        type: 'boolean',
      },
    },
    isLine: {
      description: '下線を付けるか',
      table: {
        defaultValue: {
          summary: 'true',
        },
        type: {
          summary: 'boolean',
        },
      },
      control: {
        type: 'boolean',
      },
    },
    isDisabled: {
      description:
        'リンクを無効にするか。`href`を削除するだけでリンクは無効になる。`isDisabled`の指定で薄くなるスタイルが適用される。',
      table: {
        defaultValue: {
          summary: 'false',
        },
        type: {
          summary: 'boolean',
        },
      },
      control: {
        type: 'boolean',
      },
    },
    isExternal: {
      description: '外部リンクか',
      table: {
        defaultValue: {
          summary: 'false',
        },
        type: {
          summary: 'boolean',
        },
      },
      control: {
        type: 'boolean',
      },
    },
    isUtility: {
      description: 'ユーティリティリンク',
      table: {
        defaultValue: {
          summary: 'false',
        },
        type: {
          summary: 'boolean',
        },
      },
      control: {
        type: 'boolean',
      },
    },
    as: {
      description: 'polymorphic component',
      table: {
        defaultValue: {
          summary: '<a>',
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

export const Default: StoryObj<typeof Link> = {
  args: {
    href: '#',
  },
  play: async ({ canvasElement }) => {},
}

export const WithIconBefore: StoryObj<typeof Link> = {
  args: {
    href: '#',
    children: (
      <>
        <MdOutlineOutlet className="mr-2 inline-block" />
        リンクテキスト
      </>
    ),
  },
  play: async ({ canvasElement }) => {},
}

export const WithIconAfter: StoryObj<typeof Link> = {
  args: {
    href: '#',
    children: (
      <>
        リンクテキスト
        <MdOutlineOutlet className="ml-2 inline-block" />
      </>
    ),
  },
  play: async ({ canvasElement }) => {},
}

export const ExternalLink: StoryObj<typeof Link> = {
  args: {
    href: '#',
    isExternal: true,
    children: <>リンクテキスト</>,
  },
  play: async ({ canvasElement }) => {},
}
export const ExternalLinkOverwrite: StoryObj<typeof Link> = {
  args: {
    href: '#',
    isExternal: true,
    target: '_self',
    rel: 'license',
    children: <>リンクテキスト</>,
  },
  play: async ({ canvasElement }) => {},
}

export const NoLink: StoryObj<typeof Link> = {
  args: {
    isLink: false,
    children: <>リンクテキスト(false、もしくはhrefなしでリンクなし)</>,
  },
  play: async ({ canvasElement }) => {},
}

export const NoLine: StoryObj<typeof Link> = {
  args: {
    href: '#',
    isLine: false,
    children: <>リンクテキスト(falseで下線なし)</>,
  },
  play: async ({ canvasElement }) => {},
}

export const DisabledLink: StoryObj<typeof Link> = {
  args: {
    isDisabled: true,
    children: <>リンクテキスト</>,
  },
  play: async ({ canvasElement }) => {},
}

export const UtilityLink: StoryObj<typeof Link> = {
  args: {
    href: '#',
    isUtility: true,
    children: <>リンクテキスト</>,
  },
  play: async ({ canvasElement }) => {},
}

export const NextjsLink: StoryObj<typeof Link> = {
  args: {
    href: '#',
    as: NextLink,
    children: <>リンクテキスト</>,
  },
  play: async ({ canvasElement }) => {},
}

export const Inline: StoryObj<typeof Link> = {
  args: {
    href: '#',
    isExternal: true,
    children: <>リンクテキスト</>,
  },
  decorators: [
    (Story) => (
      <Stack>
        <Text>
          bodyL: テキストテキストテキストテキストテキストテキストテキスト
          <Story />
          テキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
        </Text>
        <Text size="bodyM">
          bodyM: テキストテキストテキストテキストテキストテキストテキスト
          <Story />
          テキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
        </Text>
        <Text size="noteL">
          noteL: テキストテキストテキストテキストテキストテキストテキスト
          <Story />
          テキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
        </Text>
        <Text size="noteM">
          noteM: テキストテキストテキストテキストテキストテキストテキスト
          <Story />
          テキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
        </Text>
      </Stack>
    ),
  ],
  play: async ({ canvasElement }) => {},
}
