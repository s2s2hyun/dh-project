import { allBlogs } from '@/.contentlayer/generated'
import BlogDetail from '@/src/components/Blog/BlogDetail'
import RenderMdx from '@/src/components/Blog/RenderMdx'
import Tag from '@/src/components/Element/Tag'
import Image from 'next/image'

export default function Page({ params }: { params: { slug: string } }) {
  const blog = allBlogs.find((blog) => blog._raw.flattenedPath === params.slug)

  return (
    <article>
      <div className="relative mb-8 h-[70vh] w-full bg-dark text-center">
        <div className="absolute left-1/2 top-1/2 z-10 flex w-full -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center ">
          <Tag
            name={blog?.tags?.[0] ?? 'defaultTags'}
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
        <div className="col-span-4">Toc</div>
        <RenderMdx blog={blog} />
      </div>
    </article>
  )
}
