import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Tag from '../Element/Tag'
import { format } from 'date-fns'

const BlogLayoutThree = ({ blog }: any) => {
  return (
    <div className="flex flex-col items-center text-dark ">
      <Link href={blog.url} className=" h-full overflow-hidden rounded-xl">
        <Image
          src={blog.image?.filePath.replace('../public', '')}
          placeholder="blur"
          blurDataURL={blog.image.blurhashDataUrl}
          alt={blog.title}
          width={blog.image.width}
          height={blog.image.height}
          className="aspect-[4/3] h-full w-full object-cover object-center"
        />
      </Link>
      <div className="mt-4 flex w-full  flex-col">
        <span className="text-sm font-semibold uppercase text-accent">
          {blog.tags[0]}
        </span>

        <Link href={blog.url} className="my-1 inline-block">
          <h2 className="text-lg font-semibold capitalize text-dark ">
            <span
              className="bg-gradient-to-r from-accent/50 to-accent/50 bg-[length:0px_6px]
              bg-left-bottom bg-no-repeat transition-[background-size] duration-500 hover:bg-[length:100%_6px] "
            >
              {blog.title}
            </span>
          </h2>
        </Link>
        <span className="text-base font-semibold capitalize text-dark/50">
          {format(new Date(blog.publishedAt), 'MMMM dd yyyy')}
        </span>
      </div>
    </div>
  )
}

export default BlogLayoutThree
