import './globals.css'

import { clsx } from 'clsx'
import type { Metadata } from 'next'
import { pretendard } from './fonts'
import { Theme, ThemePanel } from '@radix-ui/themes'

export const metadata: Metadata = {
  title: 'SignalKite',
  description: 'SignalKite',
}

export default function Root({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={clsx(`${pretendard.className}`, 'antialiased')}>
        <Theme accentColor='tomato' grayColor='sand' radius='medium'>
          {children}
        </Theme>
        {process.env.NODE_ENV === 'development' && <ThemePanel />}
      </body>
    </html>
  )
}
