import StructuredData from "./structured-data";
import "@/lib/firebase";
import { GoogleAnalytics } from '@next/third-parties/google'
import type { Metadata, Viewport } from 'next'
import { Vazirmatn } from 'next/font/google'
import './globals.css'
import { Toaster } from '@/components/ui/sonner'
import Script from 'next/script'
import { MobileContactBar } from '@/components/mobile-contact-bar'

const vazirmatn = Vazirmatn({
  subsets: ['arabic', 'latin'],
  variable: '--font-vazirmatn',
  display: 'swap',
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
    icon: "/images/logo.png",
    shortcut: "/images/logo.png",
    apple: "/images/logo.png",
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
      <head>
        <Script id="yektanet-analytics" strategy="afterInteractive">{`
!function (t, e, n) {
    t.yektanetAnalyticsObject = n, t[n] = t[n] || function () {
        t[n].q.push(arguments)
    }, t[n].q = t[n].q || [];
    var a = new Date, r = a.getFullYear().toString() + "0" + a.getMonth() + "0" + a.getDate() + "0" + a.getHours(),
        c = e.getElementsByTagName("script")[0], s = e.createElement("script");
    s.id = "ua-script-MUCDSUrd"; s.dataset.analyticsobject = n;
    s.async = 1; s.type = "text/javascript";
    s.src = "https://cdn.yektanet.com/rg_woebegone/scripts_v3/MUCDSUrd/rg.complete.js?v=" + r, c.parentNode.insertBefore(s, c)
}(window, document, "yektanet");
`}</Script>
      </head>
      <body className={`${vazirmatn.className} font-sans antialiased pb-20 md:pb-0`}>
        <StructuredData />
        {children}
        <MobileContactBar />
        <Toaster position="top-center" />
      </body>

      <GoogleAnalytics gaId="G-PVGTJTZ2LV" />

    </html>
  )
}
