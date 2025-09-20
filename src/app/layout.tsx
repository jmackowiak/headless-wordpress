import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import Link from 'next/link'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Headless WordPress Blog',
  description:
    'Nowoczesny blog zbudowany z Next.js i WordPress jako headless CMS',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pl">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <nav className="border-b bg-white shadow-sm">
          <div className="container mx-auto px-4">
            <div className="flex h-16 items-center justify-between">
              <Link href="/" className="text-2xl font-bold text-gray-900">
                Headless WP
              </Link>
              <div className="flex space-x-6">
                <Link
                  href="/"
                  className="text-gray-600 transition-colors hover:text-gray-900"
                >
                  Strona główna
                </Link>
                <Link
                  href="/blog"
                  className="text-gray-600 transition-colors hover:text-gray-900"
                >
                  Blog
                </Link>
              </div>
            </div>
          </div>
        </nav>
        {children}
      </body>
    </html>
  )
}
