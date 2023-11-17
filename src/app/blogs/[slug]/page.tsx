import { allBlogs } from '@/.contentlayer/generated'
import BlogDetail from '@/src/components/Blog/BlogDetail'
import RenderMdx from '@/src/components/Blog/RenderMdx'
import Tag from '@/src/components/Element/Tag'
import Image from 'next/image'
import { slug } from 'github-slugger'
import SiteMetaData from '@/src/utils/siteMetaData'

interface Heading {
  level: 'one' | 'two' | 'three'
  text: string
  slug: string
}

export async function generateStaticParams() {
  return allBlogs.map((blog) => ({ slug: blog._raw.flattenedPath }))
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string }
}) {
  const blog = allBlogs.find((blog) => blog._raw.flattenedPath === params.slug)

  if (!blog) {
    return
  }

  const publishedAt = new Date(blog.publishedAt).toISOString()
  const modifiedAt = new Date(blog.updatedAt || blog.publishedAt).toISOString()

  let imageList: any = [SiteMetaData.socialBanner]

  if (blog.image) {
    imageList =
      typeof blog.image.filePath === 'string'
        ? [SiteMetaData.siteUrl + blog.image.filePath.replace('../public', '')]
        : blog.image
  }

  const ogImages = imageList.map((img: string) => {
    return {
      url: img.includes('http') ? img : SiteMetaData.siteUrl + img,
    }
  })

  const authors = blog?.author ? [blog.author] : SiteMetaData.authors

  return {
    title: blog.title,
    description: blog.description,
    openGraph: {
      title: blog.title,
      description: blog.description,
      url: blog.url,
      locale: 'ko-KR',
      type: 'article',
      publishedTime: publishedAt,
      modifiedTime: modifiedAt,
      images: ogImages,
      authors: authors.length > 0 ? authors : [SiteMetaData.authors],
    },
  }
}

export default function Page({ params }: { params: { slug: string } }) {
  const blog = allBlogs.find((blog) => blog._raw.flattenedPath === params.slug)

  let imageList: any = [SiteMetaData.socialBanner]

  if (blog?.image) {
    imageList =
      typeof blog.image.filePath === 'string'
        ? [SiteMetaData.siteUrl + blog.image.filePath.replace('../public', '')]
        : blog.image
  }

  // https://developers.google.com/search/docs/appearance/structured-data/article?hl=ko
  // https://nextjs.org/docs/app/building-your-application/optimizing/metadata#json-ld
  //  nextjs => json-ld
  //jsonld @type : NewsArticle뉴스기사 , BlogPosting 블로그 포스팅 ,publisher  'publisher'(기사 게시자에 대한 세부정보 포함), 'mainEntityOfPage'(기사의 표준 URL 표시), 'wordCount'(기사 길이 표시) 등이 있습니다.
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting ',
    headline: blog?.title,
    description: blog?.description,
    image: imageList,
    datePublished: new Date(blog?.publishedAt || new Date()).toISOString(),
    dateModified: new Date(
      blog?.updatedAt || blog?.publishedAt || new Date(),
    ).toISOString(),
    author: [
      {
        '@type': 'Person',
        name: blog?.author ? [blog.author] : SiteMetaData.authors,
        url: SiteMetaData.siteUrl + blog?.url,
      },
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <article>
        <div className="relative mb-8 h-[70vh] w-full bg-dark text-center">
          <div className="absolute left-1/2 top-1/2 z-10 flex w-full -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center ">
            <Tag
              name={slug(blog?.tags?.[0] ?? 'defaultTags')}
              link={`/categories/${blog?.tags?.[0]}`}
              className="px-6 py-2 text-sm"
            />
            <h1 className="relative mt-6 inline-block w-5/6 text-2xl  font-semibold capitalize leading-normal text-light md:text-3xl lg:text-5xl">
              {blog?.title}
            </h1>
          </div>
          <div className="absolute bottom-0 left-0 right-0 top-0 h-full bg-dark/60 dark:bg-dark/40 ">
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
        {blog && <BlogDetail blog={blog} slug={params.slug} />}

        <div className="mt-8 grid grid-cols-12 gap-y-8 px-5 md:px-10  lg:gap-8 sxl:gap-16">
          <div className="col-span-12 lg:col-span-4">
            <details
              className="sticky top-6 max-h-[80vh] overflow-hidden overflow-y-auto rounded-lg border-[1px] border-solid border-dark p-4 text-dark dark:border-light dark:text-light "
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
                      data-[level=two]:border-t data-[level=three]:pl-4 data-[level=two]:pl-0 data-[level=two]:pt-2 sm:data-[level=three]:pl-6
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
    </>
  )
}
