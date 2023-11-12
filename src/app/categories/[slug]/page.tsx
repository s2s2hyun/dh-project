import { allBlogs } from '@/.contentlayer/generated'
import BlogLayoutThree from '@/src/components/Blog/BlogLayoutThree'
import Categories from '@/src/components/Blog/Categories'
import GithubSlugger, { slug } from 'github-slugger'

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
  return (
    <article className="mt-12 flex flex-col text-dark ">
      <div className="flex flex-col px-32 ">
        <h1 className="mt-6 text-5xl font-semibold ">#{params.slug}</h1>
        <span className="mt-2 inline-block">
          Discover more categories and expand your knowledge !
        </span>
      </div>
      <Categories categories={allCategories} currentSlug={params.slug} />
      <div className="mt-24 grid grid-cols-3 grid-rows-2 gap-16 px-32">
        {blogs.map((blog, index) => (
          <article key={index} className="relative col-span-1 row-span-1">
            <BlogLayoutThree blog={blog} />
          </article>
        ))}
      </div>
    </article>
  )
}

export default CategoryPage
