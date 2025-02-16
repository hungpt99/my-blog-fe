// types/blog.d.ts

export interface Blog {
  id: string // Unique identifier for the blog post (e.g., UUID or slug)
  title: string // The title of the blog
  category: string // Category of the blog (e.g., Web Development, AI)
  date: string // Date the blog was published
  excerpt: string // A short preview of the blog content
  content: string // Full content of the blog
  tags?: string[] // Optional array of tags associated with the blog
  imageUrl?: string // Optional URL for a cover image for the blog post
}

export type Project = {
  id: string
  title: string
  category: string
  date: string
  description: string
  content: string
  tags: string[]
  imageUrl: string
}
