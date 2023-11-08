import { sortBlogs } from '@/src/utils'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Tag from '../Element/Tag'
import { slug } from 'github-slugger'

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
  // ... any other properties used in the Blog object
}

const HomeCoverSection = ({ blogs }: { blogs: Blog[] }) => {
  const sortedBlogs = sortBlogs(blogs)

  const blog = sortedBlogs[0] as Blog
  return (
    <div className="inline-block w-full">
      <article className=" relative mx-10 flex h-[85vh]  flex-col items-start justify-end">
        <div className="absolute bottom-0 left-0 right-0 top-0 z-0 h-full rounded-3xl bg-gradient-to-b from-transparent from-0% to-dark" />
        <Image
          src={blog.image.filePath.replace('../public', '')}
          placeholder="blur"
          blurDataURL={blog.image.blurhashDataUrl}
          alt={blog.title}
          fill
          className="-z-10 h-full w-full rounded-3xl object-cover object-center"
        />
        <div className="z-0 flex w-3/4 flex-col items-start justify-center p-16 text-light">
          {/* <Link href={`/categories/${blog.tags[0]}`}>{blog.tags[0]}</Link> */}
          <Tag link={`/categories/${slug(blog.tags[0])}`} name={blog.tags[0]} />
          <Link href={blog.url} className="mt-6">
            <h1 className="text-4xl font-bold capitalize ">
              <span
                className="bg-gradient-to-r from-accent to-accent bg-[length:0px_6px] 
                bg-left-bottom bg-no-repeat
                transition-[background-size] duration-500 hover:bg-[length:100%_6px] dark:from-accentDark/50 dark:to-accentDark/50 "
              >
                {blog.title}
              </span>
            </h1>
          </Link>

          <p className="mt-4 inline-block font-in text-xl">
            {blog.description}
          </p>
        </div>
      </article>
    </div>
  )
}

export default HomeCoverSection
