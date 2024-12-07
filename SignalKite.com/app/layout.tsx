import './globals.css'

import { clsx } from 'clsx'
import type { Metadata } from 'next'
import { pretendard } from './fonts'

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
        {children}
      </body>
    </html>
  )
}
