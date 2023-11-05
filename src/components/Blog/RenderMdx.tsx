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
      className="prose prose-lg col-span-8 max-w-max font-in
     prose-blockquote:rounded-r-lg
     prose-blockquote:border-accent
    prose-blockquote:bg-accent/20
      prose-blockquote:p-2 
      prose-blockquote:px-6 prose-blockquote:not-italic
       prose-li:marker:text-accent"
    >
      <MDXContent components={mdxComponents} />
    </div>
  )
}

export default RenderMdx
