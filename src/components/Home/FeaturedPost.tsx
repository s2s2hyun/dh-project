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

  const lastBlogIndex = sortedBlogs.length - 1

  return (
    <section className="mt-16 flex w-full flex-col items-center justify-center px-5 sm:mt-24 sm:px-10 md:mt-32 md:px-24 sxl:px-32">
      <h2 className="inline-block w-full text-2xl font-bold capitalize text-dark dark:text-light md:text-4xl">
        Feature Post
      </h2>
      <div className="mt-10 grid grid-cols-2 grid-rows-2 gap-6 sm:mt-16">
        <article className="relative col-span-2 row-span-2 sxl:col-span-1">
          <BlogLayoutOne blog={sortedBlogs[lastBlogIndex - 1]} />
        </article>
        <article className="relative col-span-2 row-span-1 sm:col-span-1">
          <BlogLayoutTwo blog={sortedBlogs[lastBlogIndex - 2]} />
        </article>
        <article className="relative col-span-2 row-span-1 sm:col-span-1">
          <BlogLayoutTwo blog={sortedBlogs[lastBlogIndex]} />
        </article>
      </div>
    </section>
  )
}

export default FeaturedPost
