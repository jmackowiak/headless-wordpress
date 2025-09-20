import { getPosts } from '@/lib/wordpress'
import BlogPost from '@/components/BlogPost'

export default async function BlogPage() {
  const posts = await getPosts()

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <h1 className="mb-8 text-center text-4xl font-bold text-gray-900">
          Blog
        </h1>

        {posts.length === 0 ? (
          <div className="py-12 text-center">
            <p className="text-lg text-gray-500">
              Brak postów do wyświetlenia.
            </p>
          </div>
        ) : (
          <div className="mx-auto max-w-4xl">
            {posts.map((post) => (
              <BlogPost key={post.id} post={post} />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
