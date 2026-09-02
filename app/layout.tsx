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
    default: "رول ماشین | فروش عمده انواع بلبرینگ، رولبرینگ و یاتاقان صنعتی",
    template: "%s | رول ماشین",
  },

  description:
    "رول ماشین، تأمین‌کننده و عمده‌فروش انواع بلبرینگ، رولبرینگ، یاتاقان و قطعات صنعتی از برندهای SKF، FAG، NSK، NTN، Timken و Koyo با تضمین اصالت کالا، مشاوره تخصصی و ارسال به سراسر ایران.",

  keywords: [
    "بلبرینگ",
    "رولبرینگ",
    "یاتاقان",
    "بلبرینگ SKF",
    "بلبرینگ FAG",
    "بلبرینگ NSK",
    "بلبرینگ NTN",
    "بلبرینگ Timken",
    "بلبرینگ Koyo",
    "SKF",
    "FAG",
    "NSK",
    "NTN",
    "Timken",
    "Koyo",
    "فروش بلبرینگ",
    "خرید بلبرینگ",
    "عمده فروشی بلبرینگ",
    "واردکننده بلبرینگ",
    "بلبرینگ تهران",
    "بلبرینگ امیرکبیر",
    "یاتاقان صنعتی",
    "قطعات صنعتی",
    "رول ماشین",
  ],

  applicationName: "Roll Machine",

  authors: [
    {
      name: "رول ماشین",
      url: "https://rollmachine.ir",
    },
  ],

  creator: "رول ماشین",

  publisher: "رول ماشین",

  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  openGraph: {
    type: "website",
    locale: "fa_IR",
    url: "https://rollmachine.ir",
    siteName: "رول ماشین",

    title: "رول ماشین | فروش عمده انواع بلبرینگ و رولبرینگ",

    description:
      "تأمین‌کننده تخصصی انواع بلبرینگ، رولبرینگ، یاتاقان و قطعات صنعتی از برندهای معتبر جهانی با تضمین اصالت کالا.",

    images: [
      {
        url: "/images/logo.png",
        width: 1200,
        height: 630,
        alt: "رول ماشین | Roll Machine",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "رول ماشین | Roll Machine",

    description:
      "فروش عمده انواع بلبرینگ، رولبرینگ، یاتاقان و قطعات صنعتی.",

    images: ["/images/logo.png"],
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },

  category: "Industrial Equipment",

};

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
