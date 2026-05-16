import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'BreMan - Equine Breeding Management',
  description: 'Breeding management system for AQHA broodmares and offspring tracking',
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
