import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Tag from '../Element/Tag'
import { format } from 'date-fns'

const BlogLayoutThree = ({ blog }: any) => {
  return (
    <div className="flex flex-col items-center text-dark dark:text-light">
      <Link href={blog.url} className=" h-full overflow-hidden rounded-xl">
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
      <div className="mt-4 flex w-full  flex-col">
        <span className="text-xs font-semibold uppercase text-accent dark:text-accentDark sm:text-sm">
          {blog.tags[0]}
        </span>

        <Link href={blog.url} className="my-1 inline-block">
          <h2 className="text-base font-semibold capitalize text-dark sm:text-lg ">
            <span
              className="bg-gradient-to-r from-accent/50 to-accent/50 bg-[length:0px_6px] bg-left-bottom
              bg-no-repeat transition-[background-size]
              duration-500 hover:bg-[length:100%_6px] dark:from-accentDark dark:to-accentDark dark:text-light "
            >
              {blog.title}
            </span>
          </h2>
        </Link>
        <span className="text-sm font-semibold capitalize text-dark/50  dark:text-light/50 sm:text-base">
          {format(new Date(blog.publishedAt), 'MMMM dd yyyy')}
        </span>
      </div>
    </div>
  )
}

export default BlogLayoutThree
