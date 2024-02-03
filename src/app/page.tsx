import Image from 'next/image'
import HomeCoverSection from '../components/Home/HomeCoverSection'
import { allBlogs } from 'contentlayer/generated'
import FeaturedPost from '../components/Home/FeaturedPost'
import RecentPost from '../components/Home/RecentPost'
import { BlogPost } from '@/types/BlogPost'
import { Metadata } from 'next'
import SiteMetaData from '../utils/siteMetaData'

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
    images: [SiteMetaData.socialBanner],
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

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center ">
      <HomeCoverSection blogs={allBlogs as BlogPost[]} />
      <FeaturedPost blogs={allBlogs as BlogPost[]} />
      <RecentPost blogs={allBlogs as BlogPost[]} />
    </main>
  )
}
