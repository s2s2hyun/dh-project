import React from 'react'
import { sortBlogs } from '@/src/utils'
import Link from 'next/link'
import BlogLayoutThree from '../Blog/BlogLayoutThree'
import { BlogPost } from '@/types/BlogPost'

const RecentPost = ({ blogs }: { blogs: BlogPost[] }) => {
  const sortedBlogs = sortBlogs(blogs)

  // console.log(sortedBlogs, " sortedBlogs 여기 맞지? ");

  return (
    <section className=" mt-16 flex w-full flex-col items-center justify-center px-5 sm:mt-24 sm:px-10 md:mt-32 md:px-24 sxl:px-32">
      <div className="flex w-full items-center justify-between">
        <h2 className="inline-block w-fit  text-2xl font-bold capitalize text-dark dark:text-light md:text-4xl">
          Recent Posts
        </h2>
        <Link
          href="/categories/all"
          className="inline-block text-base font-medium text-accent underline underline-offset-2  dark:text-accentDark md:text-lg"
        >
          View all
        </Link>
      </div>

      <div className="mt-16 grid grid-cols-1 grid-rows-2 gap-16 sm:grid-cols-2 lg:grid-cols-3">
        {sortedBlogs.map((blog, index) => {
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
