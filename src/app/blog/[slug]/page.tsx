import { getPost, getPosts } from '@/lib/wordpress'
import { notFound } from 'next/navigation'

interface BlogPostPageProps {
  params: {
    slug: string
  }
}

export async function generateStaticParams() {
  const posts = await getPosts()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const post = await getPost(params.slug)

  if (!post) {
    notFound()
  }

  // Funkcja do formatowania daty
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('pl-PL', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    })
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <article className="mx-auto max-w-4xl">
        <header className="mb-8">
          <h1 className="mb-4 text-4xl font-bold text-gray-900">
            {post.title.rendered}
          </h1>
          <div className="text-lg text-gray-500">{formatDate(post.date)}</div>
        </header>

        <div
          className="prose max-w-none leading-relaxed text-gray-700"
          dangerouslySetInnerHTML={{ __html: post.content.rendered }}
        />

        <div className="mt-8 border-t border-gray-200 pt-6">
          <a
            href="/blog"
            className="inline-block rounded bg-gray-600 px-4 py-2 text-white transition-colors hover:bg-gray-700"
          >
            ← Powrót do bloga
          </a>
        </div>
      </article>
    </div>
  )
}
