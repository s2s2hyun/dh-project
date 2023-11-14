import { sortBlogs } from '@/src/utils'
import React from 'react'
import BlogLayoutOne from '../Blog/BlogLayoutOne'
import BlogLayoutTwo from '../Blog/BlogLayoutTwo'

interface BlogImage {
  filePath: string
  blurhashDataUrl: string
}

interface Blog {
  publishedAt: string
  updatedAt: string
  image: BlogImage
  title: string
  tags: string[]
  description: string
  url: string
}

const FeaturedPost = ({ blogs }: { blogs: Blog[] }) => {
  const sortedBlogs = sortBlogs(blogs)

  return (
    <section className="mt-32 flex w-full flex-col items-center justify-center px-32">
      <h2 className="inline-block w-full text-4xl font-bold capitalize">
        Feature Post
      </h2>
      <div className="mt-16 grid grid-cols-2 grid-rows-2 gap-6">
        <article className="relative col-span-1 row-span-2">
          <BlogLayoutOne blog={sortedBlogs[1]} />
        </article>
        <article className="relative col-span-1 row-span-1">
          <BlogLayoutTwo blog={sortedBlogs[2]} />
        </article>
        <article className="relative col-span-1 row-span-1">
          <BlogLayoutTwo blog={sortedBlogs[3]} />
        </article>
      </div>
    </section>
  )
}

export default FeaturedPost
