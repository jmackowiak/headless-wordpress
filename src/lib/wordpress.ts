const WORDPRESS_API_URL = 'https://headless-wordpress.wasmer.app/wp-json/wp/v2'

export interface WordPressPost {
  id: number
  title: {
    rendered: string
  }
  content: {
    rendered: string
  }
  excerpt: {
    rendered: string
  }
  date: string
  slug: string
  featured_media: number
  categories: number[]
  tags: number[]
  link: string
}

export interface WordPressCategory {
  id: number
  name: string
  slug: string
  count: number
}

// Pobierz wszystkie posty
export async function getPosts(): Promise<WordPressPost[]> {
  try {
    const response = await fetch(`${WORDPRESS_API_URL}/posts?_embed`)
    if (!response.ok) {
      throw new Error('Failed to fetch posts')
    }
    return await response.json()
  } catch (error) {
    console.error('Error fetching posts:', error)
    return []
  }
}

// Pobierz pojedynczy post po slug
export async function getPost(slug: string): Promise<WordPressPost | null> {
  try {
    const response = await fetch(
      `${WORDPRESS_API_URL}/posts?slug=${slug}&_embed`
    )
    if (!response.ok) {
      throw new Error('Failed to fetch post')
    }
    const posts = await response.json()
    return posts[0] || null
  } catch (error) {
    console.error('Error fetching post:', error)
    return null
  }
}

// Pobierz kategorie
export async function getCategories(): Promise<WordPressCategory[]> {
  try {
    const response = await fetch(`${WORDPRESS_API_URL}/categories`)
    if (!response.ok) {
      throw new Error('Failed to fetch categories')
    }
    return await response.json()
  } catch (error) {
    console.error('Error fetching categories:', error)
    return []
  }
}

// Pobierz posty z konkretnej kategorii
export async function getPostsByCategory(
  categoryId: number
): Promise<WordPressPost[]> {
  try {
    const response = await fetch(
      `${WORDPRESS_API_URL}/posts?categories=${categoryId}&_embed`
    )
    if (!response.ok) {
      throw new Error('Failed to fetch posts by category')
    }
    return await response.json()
  } catch (error) {
    console.error('Error fetching posts by category:', error)
    return []
  }
}
