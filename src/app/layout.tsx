import './globals.css'
import { Noto_Sans_JP } from 'next/font/google'
import { Text, textClass } from '@/components/ui/Text'
import { Link } from '@/components/ui/Link'
import { Stack } from '@/components/ui/Stack'

const notojp = Noto_Sans_JP({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  variable: '--font-notojp',
  display: 'swap',
})

export const metadata = {
  title: '[Dummy] Design System',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja" className={`${notojp.variable}`}>
      <body>
        {children}
      </body>
    </html>
  )
}
