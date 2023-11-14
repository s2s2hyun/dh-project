import React from 'react'
import { sortBlogs } from '@/src/utils'
import Link from 'next/link'
import BlogLayoutThree from '../Blog/BlogLayoutThree'
import { BlogPost } from '@/types/BlogPost'

const RecentPost = ({ blogs }: { blogs: BlogPost[] }) => {
  const sortedBlogs = sortBlogs(blogs)

  // console.log(sortedBlogs, " sortedBlogs 여기 맞지? ");

  return (
    <section className="mt-32 flex w-full flex-col items-center justify-center px-32">
      <div className="flex w-full items-center justify-between">
        <h2 className="inline-block text-4xl font-bold capitalize">
          Recent Posts
        </h2>
        <Link
          href="/categories/all"
          className="inline-block text-lg font-medium text-accent  underline underline-offset-2"
        >
          View all
        </Link>
      </div>

      <div className="mt-16 grid grid-cols-3 grid-rows-2 gap-16">
        {sortedBlogs.slice(4, 10).map((blog, index) => {
          return (
            <article key={index} className="relative col-span-1 row-span-1">
              <BlogLayoutThree blog={blog} />
            </article>
          )
        })}
      </div>
    </section>
  )
}

export default RecentPost
