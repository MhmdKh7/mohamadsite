import StructuredData from "./structured-data";
import "@/lib/firebase";
import { GoogleAnalytics } from '@next/third-parties/google'
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
  metadataBase: new URL("https://rollmachine.ir"),

  title: {
    default: "رول ماشین | فروش انواع بلبرینگ، رولبرینگ و یاتاقان صنعتی",
    template: "%s | رول ماشین",
  },

  description:
    "رول ماشین، مرجع تخصصی فروش انواع بلبرینگ، رولبرینگ، یاتاقان و قطعات صنعتی از برندهای SKF، FAG، NSK، Timken و NTN با ضمانت اصالت کالا و ارسال سریع.",

  keywords: [
    "بلبرینگ",
    "رولبرینگ",
    "یاتاقان",
    "بلبرینگ SKF",
    "بلبرینگ FAG",
    "بلبرینگ NSK",
    "بلبرینگ NTN",
    "Timken",
    "قطعات صنعتی",
    "فروش بلبرینگ",
    "خرید بلبرینگ",
    "رول ماشین",
  ],

  applicationName: "Roll Machine",

  authors: [
    {
      name: "Roll Machine",
      url: "https://rollmachine.ir",
    },
  ],

  creator: "Roll Machine",

  publisher: "Roll Machine",

  alternates: {
    canonical: "https://rollmachine.ir",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  openGraph: {
    title: "رول ماشین | فروش انواع بلبرینگ و رولبرینگ",
    description:
      "مرجع تخصصی فروش بلبرینگ، رولبرینگ و یاتاقان صنعتی با بهترین قیمت و ضمانت اصالت کالا.",
    url: "https://rollmachine.ir",
    siteName: "Roll Machine",
    locale: "fa_IR",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Roll Machine",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "رول ماشین",
    description:
      "فروش انواع بلبرینگ، رولبرینگ و قطعات صنعتی",
    images: ["/og-image.jpg"],
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
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
        <StructuredData />
        {children}
        <Toaster position="top-center" />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>

      <GoogleAnalytics gaId="G-PVGTJTZ2LV" />

    </html>
  )
}
