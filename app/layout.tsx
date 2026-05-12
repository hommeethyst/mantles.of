import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'MANTLES. — Essential Luxury',
  description: 'Minimal luxury fashion. Timeless essentials crafted with intention for the considered wardrobe.',
  generator: 'v0.app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-mantles-bg">
      <body className="antialiased tracking-tight">
        {children}
      </body>
    </html>
  )
}
