import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Petales',
  description: 'Discover the beauty of all women around the world',
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
