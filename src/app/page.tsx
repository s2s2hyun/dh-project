'use client'

import Image from 'next/image'
import HomeCoverSection from '../components/Home/HomeCoverSection'
import { allBlogs } from 'contentlayer/generated'
import FeaturedPost from '../components/Home/FeaturedPost'
import RecentPost from '../components/Home/RecentPost'
import { BlogPost } from '@/types/BlogPost'
import SiteMetaData from '../utils/siteMetaData'
import { useEffect } from 'react'

interface PageTransitionEvent extends Event {
  readonly persisted: boolean
}

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center ">
      <HomeCoverSection blogs={allBlogs as BlogPost[]} />
      <RecentPost blogs={allBlogs as BlogPost[]} />
    </main>
  )
}
