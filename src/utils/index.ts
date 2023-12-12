import { compareDesc, parseISO } from 'date-fns'

interface Blog {
  publishedAt: string
  updatedAt: string
}

export const cx = (...className: string[]) => className.filter(Boolean).join('')

// export const sortBlogs = (blogs: Blog[]) => {
//   return blogs
//     .slice()
//     .sort((a, b) => compareDesc(parseISO(a.publishedAt), parseISO(b.updatedAt)))
// }

export const sortBlogs = (blogs: Blog[]) => {
  return blogs
    .slice()
    .sort((a, b) =>
      compareDesc(parseISO(a.publishedAt), parseISO(b.publishedAt)),
    )
}
