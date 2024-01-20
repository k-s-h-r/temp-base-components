import { Container, containerClass } from '@/components/ui/Container'
import { List } from '@/components/ui/List'
import { Link } from '@/components/ui/Link'
import { Text } from '@/components/ui/Text'
import NextLink from 'next/link'

type Props = {
  current?: string
}

export default function GlobalNav({ current }: Props) {
  const nav = [
    {
      name: '手引き',
      href: '/',
      disabled: false,
    },
    {
      name: 'スタイル',
      href: '/style',
      disabled: false,
    },
    {
      name: 'コンポーネント',
      href: '/components',
      disabled: false,
    },
    {
      name: 'テンプレート',
      href: '/template',
      disabled: false,
    },
  ]
  return (
    <nav className="bg-sea-100" aria-label="メインナビゲーション">
      <Container
        paddingX={{
          initial: 0,
          md: 10,
        }}>
        <ul className="flex justify-center">
          {nav.map((item) => (
            <li className={`flex-1 ${item.href === current ? 'bg-sea-50' : ''} flex`} key={item.name}>
              {item.disabled ? (
                <Link isDisabled={item.disabled} className="flex w-full items-center justify-center px-2 py-6">
                  {item.name}
                </Link>
              ) : (
                <Link
                  as={NextLink}
                  href={item.href}
                  aria-current={item.href === current ? 'page' : undefined}
                  className="flex w-full items-center justify-center px-2 py-6">
                  {item.name}
                </Link>
              )}
            </li>
          ))}
        </ul>
      </Container>
    </nav>
  )
}
