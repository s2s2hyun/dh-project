import { allBlogs } from '@/.contentlayer/generated'
import BlogLayoutThree from '@/src/components/Blog/BlogLayoutThree'
import Categories from '@/src/components/Blog/Categories'
import GithubSlugger, { slug } from 'github-slugger'
import SiteMetaData from '@/src/utils/siteMetaData'
import { sortBlogs } from '@/src/utils'
interface Params {
  slug: string
}

const slugger = new GithubSlugger()

export async function generateStaticParams() {
  const categories: string[] = []
  const paths = [{ slug: 'all' }]

  allBlogs.map((blog) => {
    if (blog.isPublished) {
      blog.tags?.map((tag) => {
        let slugified = slugger.slug(tag)
        if (!categories.includes(slugified)) {
          categories.push(slugified)
          paths.push({ slug: slugified })
        }
      })
    }
  })

  return paths
}

// 카테고리 클릭시 보여지는 MetaData
export async function generateMetadata({
  params,
}: {
  params: { slug: string }
}) {
  return {
    title: `${params.slug.replaceAll('-', ' ')} Blogs`,
    description: `Learn more about ${
      params.slug === 'all' ? 'web developer' : params.slug
    } Jr.프론트엔드 개발 임동현`,
  }
}

const CategoryPage = ({ params }: { params: Params }) => {
  const allCategories = ['all']

  const blogs = allBlogs.filter((blog) => {
    return blog?.tags?.some((tag) => {
      const slugified = slug(tag)
      if (!allCategories.includes(slugified)) {
        allCategories.push(slugified)
      }
      if (params.slug == 'all') {
        return true
      }

      return slugified === params.slug
    })
  })

  const categoryName = decodeURIComponent(params.slug)

  const blogDate = sortBlogs(blogs)

  return (
    <article className="mt-12 flex flex-col text-dark dark:text-light">
      <div className="flex flex-col px-5 sm:px-10 md:px-24 sxl:px-32">
        <h1 className="mt-6 text-2xl font-semibold md:text-4xl lg:text-5xl ">
          #{params.slug}
        </h1>
        <span className="mt-2 inline-block">
          Discover more categories and expand your knowledge !
        </span>
      </div>
      <Categories categories={allCategories} currentSlug={params.slug} />
      <div className="sm: mt-24  grid grid-cols-1 grid-rows-2 gap-16 px-5 sm:grid-cols-2 sm:px-10 md:px-24 lg:grid-cols-3 sxl:mt-32 sxl:px-32">
        {blogDate.map((blog, index) => (
          <article key={index} className="relative col-span-1 row-span-1">
            <BlogLayoutThree blog={blog} />
          </article>
        ))}
      </div>
    </article>
  )
}

export default CategoryPage
