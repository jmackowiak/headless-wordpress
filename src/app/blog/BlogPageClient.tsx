'use client'

import { useState } from 'react'
import { WordPressPost } from '@/lib/wordpress'
import BlogPost from '@/components/BlogPost'
import SearchBox from '@/components/SearchBox'

interface BlogPageClientProps {
  initialPosts: WordPressPost[]
}

export default function BlogPageClient({ initialPosts }: BlogPageClientProps) {
  const [posts, setPosts] = useState(initialPosts)

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="mb-8 text-center text-4xl font-bold text-gray-900">
        Blog
      </h1>

      <SearchBox posts={initialPosts} onSearch={setPosts} />

      {posts.length === 0 ? (
        <div className="py-12 text-center">
          <p className="text-lg text-gray-500">Brak postów do wyświetlenia.</p>
        </div>
      ) : (
        <div className="mx-auto max-w-4xl">
          {posts.map((post) => (
            <BlogPost key={post.id} post={post} />
          ))}
        </div>
      )}
    </div>
  )
}
