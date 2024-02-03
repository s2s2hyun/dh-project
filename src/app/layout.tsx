import type { Metadata } from 'next'
import { Noto_Sans_KR, Manrope } from 'next/font/google'
import './globals.css'
import { cx } from '../utils'
import Header from '../components/Header'
import Footer from '../components/Footer'
import SiteMetaData from '@/src/utils/siteMetaData'
import Script from 'next/script'
import Providers from '../utils/providers'
import Head from 'next/head'

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
    // images: [SiteMetaData.socialBanner],
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
        <link rel="icon" href="/favicon.ico" />
        <meta
          property="og:url"
          content={
            (metadata?.openGraph?.url as string) ?? 'https://donghyundev.com/'
          }
        />
        <meta
          name="google-site-verification"
          content="HnXW6PvAgRAB4tkaRIQpZawuDzASeMGRheyYGRNwLVE"
        />
        <meta
          name="naver-site-verification"
          content="3ec8b6ae3e09d81748339a89bbe42c30372614b6"
        />
        <meta
          property="og:image"
          content="https://donghyundev.com/og-image.png"
        />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="400" />
        <meta property="og:image:height" content="400" />
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
