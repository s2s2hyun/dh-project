import { format, parseISO } from 'date-fns'
import { slug } from 'github-slugger'
import Link from 'next/link'
import React from 'react'
import ViewCounter from './ViewCounter'
import { BlogViewCountProps } from '@/types/BlogPost'

const BlogDetail = ({ blog, slug: blogSlug }: BlogViewCountProps) => {
  // console.log(blogSlug)
  // const firstTag = blog?.tags?.[0] || 'default-tag';
  // 조건문을 통해서도 tag 에 대한 type 에 대한 오류를 제거가 가능하다.
  return (
    <div className="mx-5 flex flex-wrap items-center justify-around rounded-lg bg-accent px-2 py-2 text-lg font-medium  text-light dark:bg-accentDark dark:text-dark sm:text-xl md:mx-10 md:px-10">
      <time className="m-3">
        {format(parseISO(blog.publishedAt), 'LLLL d, yyyy')}
      </time>
      <span className="m-3">
        <ViewCounter slug={blogSlug} />
      </span>
      <div className="m-3">{blog.readingTime.text}</div>
      {/* <Link href={`/categories/${slug(blog?.tags[0])}`}>{blog?.tags[0]}</Link> */}
      {blog?.tags && (
        <Link href={`/categories/${slug(blog.tags[0])}`}>{blog.tags[0]}</Link>
      )}
    </div>
  )
}

export default BlogDetail
