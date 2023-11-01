import { format, parseISO } from 'date-fns'
import Link from 'next/link'
import React from 'react'

const BlogDetail = ({ blog }: any) => {
  console.log(blog)
  return (
    <div className="mx-10 flex flex-wrap items-center justify-around rounded-lg bg-accent px-10 py-2 text-xl font-medium text-light">
      <time className="m-3">
        {format(parseISO(blog.publisedhAt), 'LLLL d, yyyy')}
      </time>
      <span className="m-3">10 views</span>
      <div className="m-3">{blog.readingTime.text}</div>
      <Link href={`/categories/${blog?.tags[0]}`}>#{blog?.tags[0]}</Link>
    </div>
  )
}

export default BlogDetail
