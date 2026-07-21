import type { Metadata, Viewport } from 'next'
import { Vazirmatn } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import { Toaster } from '@/components/ui/sonner'

const vazirmatn = Vazirmatn({ 
  subsets: ['arabic', 'latin'],
  variable: '--font-vazirmatn'
})

export const metadata: Metadata = {
  title: 'فروشگاه بلرینگ | خرید انواع یاتاقان و بلبرینگ',
  description: 'فروشگاه تخصصی بلرینگ و یاتاقان - ارائه دهنده انواع بلبرینگ، رولبرینگ و یاتاقان صنعتی با بهترین کیفیت و قیمت',
  keywords: ['بلرینگ', 'یاتاقان', 'بلبرینگ', 'رولبرینگ', 'قطعات صنعتی'],
}

export const viewport: Viewport = {
  themeColor: '#1e40af',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fa" dir="rtl" className="bg-background">
      <body className={`${vazirmatn.className} font-sans antialiased`}>
        {children}
        <Toaster position="top-center" />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
