import { useState } from 'react'
import { WordPressPost } from '@/lib/wordpress'

// Funkcja do usuwania HTML tagów
const stripHtml = (html: string) => {
  return html.replace(/<[^>]*>/g, '')
}

interface SearchBoxProps {
  posts: WordPressPost[]
  onSearch: (filteredPosts: WordPressPost[]) => void
}

export default function SearchBox({ posts, onSearch }: SearchBoxProps) {
  const [searchTerm, setSearchTerm] = useState('')

  const handleSearch = (term: string) => {
    setSearchTerm(term)

    if (term.trim() === '') {
      onSearch(posts)
      return
    }

    const filtered = posts.filter((post) => {
      const title = stripHtml(post.title.rendered).toLowerCase()
      const content = stripHtml(post.content.rendered).toLowerCase()
      const excerpt = stripHtml(post.excerpt.rendered).toLowerCase()
      const search = term.toLowerCase()

      return (
        title.includes(search) ||
        content.includes(search) ||
        excerpt.includes(search)
      )
    })

    onSearch(filtered)
  }

  return (
    <div className="mb-8">
      <input
        type="text"
        placeholder="Szukaj w postach..."
        value={searchTerm}
        onChange={(e) => handleSearch(e.target.value)}
        className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-blue-500 focus:outline-none"
      />
    </div>
  )
}
