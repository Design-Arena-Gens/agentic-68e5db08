import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Viral Reel Script Generator',
  description: 'Generate viral AI scripts for Instagram 30-second reels',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
