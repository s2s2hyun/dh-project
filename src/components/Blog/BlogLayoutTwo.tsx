import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Tag from '../Element/Tag'
import { format } from 'date-fns'

const BlogLayoutTwo = ({ blog }: any) => {
  return (
    <div className="grid grid-cols-12 items-center gap-4 text-dark dark:text-light">
      <Link
        href={blog.url}
        className="col-span-12 h-full overflow-hidden rounded-xl lg:col-span-4"
      >
        <Image
          src={blog.image?.filePath.replace('../public', '')}
          placeholder="blur"
          blurDataURL={blog.image.blurhashDataUrl}
          alt={blog.title}
          width={blog.image.width}
          height={blog.image.height}
          className="ease h-full w-full rounded-xl object-cover object-center transition-all duration-300 group-hover:scale-105 "
          sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 33vw,"
        />
      </Link>
      <div className="col-span-12 flex w-full flex-col lg:col-span-8 ">
        <span className="inline-block w-full text-xs font-semibold uppercase  text-accent dark:text-accentDark sm:text-sm">
          {blog.tags[0]}
        </span>

        <Link href={blog.url} className="my-1 inline-block">
          <h2 className="text-base font-semibold capitalize text-dark dark:text-light sm:text-lg ">
            <span
              className="bg-gradient-to-r from-accent/50 to-accent/50 bg-[length:0px_6px]
              bg-left-bottom bg-no-repeat transition-[background-size] duration-500 hover:bg-[length:100%_6px] dark:from-accentDark dark:to-accentDark"
            >
              {blog.title}
            </span>
          </h2>
        </Link>
        <span className="inline-block w-full text-xs font-semibold capitalize text-dark/50 dark:text-light/50 sm:text-base">
          {format(new Date(blog.publishedAt), 'MMMM dd yyyy')}
        </span>
      </div>
    </div>
  )
}

export default BlogLayoutTwo
