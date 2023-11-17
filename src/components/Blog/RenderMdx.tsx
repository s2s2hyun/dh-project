'use client'

import React from 'react'
import { useMDXComponent } from 'next-contentlayer/hooks'
import Image from 'next/image'

const mdxComponents = {
  Image,
}

const RenderMdx = ({ blog }: any) => {
  const MDXContent = useMDXComponent(blog.body.code)
  return (
    <div
      className=" sm-prose-base  prose col-span-8 max-w-max
     font-in
      dark:prose-invert 
      md:prose-lg first-letter:text-3xl
       prose-blockquote:rounded-r-lg
       
       prose-blockquote:border-accent
       prose-blockquote:bg-accent/20
       prose-blockquote:p-2
       prose-blockquote:px-6
       prose-blockquote:not-italic prose-li:marker:text-accent
       dark:prose-blockquote:border-accentDark dark:prose-blockquote:bg-accentDark/20
       dark:prose-li:marker:text-accentDark
       sm:first-letter:text-5xl
       "
    >
      <MDXContent components={mdxComponents} />
    </div>
  )
}

export default RenderMdx
