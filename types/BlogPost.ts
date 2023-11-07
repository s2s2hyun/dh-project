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
