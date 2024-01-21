import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Providers } from '@/providers/providers'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Indie Journey',
  description: 'Start your indie journey, and make your own history.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='font-nunito w-full h-screen overflow-x-hidden'>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}
