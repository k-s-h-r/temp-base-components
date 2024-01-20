import { Text, textClass } from '@/components/ui/Text'
import { Link } from '@/components/ui/Link'
import { Stack } from '@/components/ui/Stack'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
        {children}
        <footer className="p-4 text-center">
          <Stack space="s">
            <Text size="noteL">
              <Link href="https://www.figma.com/@digitalagencyjp" rel="noopener" target="_blank" isExternal={true}>
                Figma Community (@digitalagencyjp)
              </Link>
            </Text>
            <Text size="noteL">
              Copyright Digital Agency, Government of Japan 2023. Licensed under{' '}
              <Link href="https://creativecommons.org/licenses/by/4.0/" rel="noopener" target="_blank" isExternal={true}>
                CC BY 4.0
              </Link>
            </Text>
          </Stack>
        </footer>
    </>
  )
}
