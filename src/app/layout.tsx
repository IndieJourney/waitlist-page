import type { Metadata } from 'next';
import './globals.css';
import { Providers } from '@/providers/providers';
import { Analytics } from '@vercel/analytics/react';

export const metadata: Metadata = {
  title: 'Indie Journey',
  description: 'Start your indie journey, and make your own history.',
  openGraph : {
    title: 'Indie Journey',
    description: 'Start your indie journey, and make your own history.',
    images : "https://us-east-1.tixte.net/uploads/omega.tixte.co/indiejourney-thumbnail.png"
  }
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
          <Analytics />
        </Providers>
      </body>
    </html>
  )
}
