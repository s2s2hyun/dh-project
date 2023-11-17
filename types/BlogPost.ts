export interface BlogImage {
  filePath: string
  blurhashDataUrl: string
}

export interface BlogPost {
  publishedAt: string
  updatedAt: string
  image: BlogImage
  title: string
  tags: string[]
  description: string
  url: string
}

export interface BlogDetailProps {
  publishedAt: string
  readingTime: { text: string }
  tags?: string[]
}

export interface BlogViewCountProps {
  blog: BlogDetailProps
  slug: string
}

export interface ViewCounterProps {
  slug: string
  noCount?: boolean
  showCount?: boolean
}
