import { Container, containerClass } from '@/components/ui/Container'
import { List } from '@/components/ui/List'
import { Link } from '@/components/ui/Link'
import { Text } from '@/components/ui/Text'
import NextLink from 'next/link'

type Props = {
  current?: string
}

export const contentNav = [
  {
    name: 'ボタン',
    href: '/components/button',
    disabled: false,
  },
]

export default function Nav({ current }: Props) {
  return (
    <nav className="border-t-8 border-sea-50 bg-sea-50" aria-label="サブナビゲーション">
      <Container
        paddingX={{
          initial: 0,
          md: 10,
        }}>
        <ul className="flex justify-center">
          {contentNav.map((item) => (
            <li className={`${item.href === current ? 'bg-white' : ''} flex`} key={item.name}>
              {item.disabled ? (
                <Link isDisabled={item.disabled} className="flex items-center justify-center px-4 pb-6 pt-4">
                  {item.name}
                </Link>
              ) : (
                <Link
                  as={NextLink}
                  href={item.href}
                  aria-current={item.href === current ? 'page' : undefined}
                  className="flex items-center justify-center px-4 pb-6 pt-4">
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
