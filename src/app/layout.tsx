import type { Metadata } from 'next'
import { Noto_Sans_KR, Manrope } from 'next/font/google'
import './globals.css'
import { cx } from '../utils'
import Header from '../components/Header'
import Footer from '../components/Footer'
import SiteMetaData from '@/src/utils/siteMetaData'
import Script from 'next/script'

const notoSansKr = Noto_Sans_KR({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-in',
})

const manrope = Manrope({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-mr',
})

export const metadata: Metadata = {
  metadataBase: new URL(SiteMetaData.siteUrl),
  title: {
    template: `%s | ${SiteMetaData.title}`,
    default: SiteMetaData.title,
  },
  description: SiteMetaData.description,
  openGraph: {
    title: SiteMetaData.title,
    description: SiteMetaData.description,
    url: SiteMetaData.siteUrl,
    siteName: SiteMetaData.title,
    images: [SiteMetaData.siteLogo],
    locale: 'ko-KR',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  twitter: {
    card: 'summary_large_image',
    title: SiteMetaData.title,
    images: [SiteMetaData.socialBanner],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="kor">
      <head>
        <link rel="icon" href="/favicon-16x16.png" />
      </head>
      <body
        className={cx(
          notoSansKr.variable,
          manrope.variable,
          'bg-light font-mr dark:bg-dark',
        )}
      >
        <Script id="theme-script">
          {`if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            document.documentElement.classList.add('dark');
          } else {
            document.documentElement.classList.remove('dark');
          }`}
        </Script>

        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
