export interface BlogImage {
  filePath: string;
  blurhashDataUrl: string;
}

export interface BlogPost {
  publisedhAt: string;
  updatedAt: string;
  image: BlogImage;
  title: string;
  tags: string[];
  description: string;
  url: string;
}
