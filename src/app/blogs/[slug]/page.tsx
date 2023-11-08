import { allBlogs } from '@/.contentlayer/generated'
import BlogDetail from '@/src/components/Blog/BlogDetail'
import RenderMdx from '@/src/components/Blog/RenderMdx'
import Tag from '@/src/components/Element/Tag'
import Image from 'next/image'
import { slug } from 'github-slugger'

interface Heading {
  level: 'one' | 'two' | 'three'
  text: string
  slug: string
}

export async function generateStaticParams() {
  return allBlogs.map((blog) => ({ slug: blog._raw.flattenedPath }))
}

export default function Page({ params }: { params: { slug: string } }) {
  const blog = allBlogs.find((blog) => blog._raw.flattenedPath === params.slug)

  console.log(blog?.tags?.[0])

  return (
    <article>
      <div className="relative mb-8 h-[70vh] w-full bg-dark text-center">
        <div className="absolute left-1/2 top-1/2 z-10 flex w-full -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center ">
          <Tag
            name={slug(blog?.tags?.[0] ?? 'defaultTags')}
            link={`/categories/${blog?.tags?.[0]}`}
            className="px-6 py-2 text-sm"
          />
          <h1 className="relative mt-6 inline-block w-5/6 text-5xl font-semibold capitalize leading-normal text-light">
            {blog?.title}
          </h1>
        </div>
        <div className="absolute bottom-0 left-0 right-0 top-0 h-full bg-dark/60 ">
          <Image
            src={
              blog?.image?.filePath.replace('../public', '') ??
              'default-img-path'
            }
            placeholder="blur"
            blurDataURL={blog?.image?.blurhashDataUrl}
            alt={blog?.title ?? 'default-alt'}
            width={blog?.image?.width}
            height={blog?.image?.height}
            className="aspect-square h-full w-full object-cover object-center"
          />
        </div>
      </div>
      <BlogDetail blog={blog} slug={params.slug} />

      <div className="mt-8 grid grid-cols-12 gap-16 px-10">
        <div className="col-span-4">
          <details
            className="sticky top-6 max-h-[80vh] overflow-hidden overflow-y-auto rounded-lg border-[1px] border-solid border-dark p-4 text-dark "
            open
          >
            <summary className="cursor-pointer text-lg font-semibold  capitalize">
              Table of Content
            </summary>
            <ul className="mt-4 font-in text-base ">
              {blog?.toc.map((heading: Heading) => {
                return (
                  <li key={`#${heading.slug}`} className="py-1">
                    <a
                      href={`#${heading.slug}`}
                      data-level={heading.level}
                      className="flex items-center
                      justify-start border-solid border-dark/40
                      data-[level=two]:border-t data-[level=three]:pl-6 data-[level=two]:pl-0 data-[level=two]:pt-2
                      "
                    >
                      {heading.level === 'three' ? (
                        <span className="mr-2 flex h-1 w-1 rounded-full bg-dark">
                          &nbsp;
                        </span>
                      ) : null}
                      <span className="hover:underline">{heading.text}</span>
                    </a>
                  </li>
                )
              })}
            </ul>
          </details>
        </div>
        <RenderMdx blog={blog} />
      </div>
    </article>
  )
}
