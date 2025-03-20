import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Luminous',
  description:
    'Luminous is a sanctuary for celebrating the multifaceted beauty of women through the lens of artistry. We believe light is both a sculptor and a storyteller',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body>{children}</body>
    </html>
  )
}
