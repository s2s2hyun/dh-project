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
  // bfcache 테스트

  useEffect(() => {
    const handlePageShow = (event: PageTransitionEvent) => {
      if (event.persisted) {
        // 여기서 페이지가 bfcache로부터 복원될 때 필요한 상태 업데이트 수행
        console.log('Page was restored from bfcache.')
        // 예: setIsLoading(false);
      }
    }

    window.addEventListener('pageshow', handlePageShow)

    // 컴포넌트 언마운트 시 이벤트 리스너 제거
    return () => {
      window.removeEventListener('pageshow', handlePageShow)
    }
  }, [])

  return (
    <main className="flex flex-col items-center justify-center ">
      <HomeCoverSection blogs={allBlogs as BlogPost[]} />
      <RecentPost blogs={allBlogs as BlogPost[]} />
    </main>
  )
}
