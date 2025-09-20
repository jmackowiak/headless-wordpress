import { WordPressPost } from '@/lib/wordpress'

interface BlogPostProps {
  post: WordPressPost
}

export default function BlogPost({ post }: BlogPostProps) {
  // Funkcja do usuwania HTML tagów z treści
  const stripHtml = (html: string) => {
    return html.replace(/<[^>]*>/g, '')
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
    <article className="mb-6 rounded-lg bg-white p-6 shadow-md transition-shadow hover:shadow-lg">
      <h2 className="mb-3 text-2xl font-bold text-gray-900">
        {post.title.rendered}
      </h2>

      <div className="mb-4 text-sm text-gray-500">{formatDate(post.date)}</div>

      <div
        className="prose mb-4 max-w-none text-gray-700"
        dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}
      />

      <a
        href={`/blog/${post.slug}`}
        className="inline-block rounded bg-blue-600 px-4 py-2 text-white transition-colors hover:bg-blue-700"
      >
        Czytaj więcej
      </a>
    </article>
  )
}
