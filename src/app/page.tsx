import { getPosts } from '@/lib/wordpress'
import BlogPost from '@/components/BlogPost'
import Link from 'next/link'

export default async function Home() {
  const posts = await getPosts()
  const recentPosts = posts.slice(0, 3) // Pokaż tylko 3 najnowsze posty

  return (
    <div className="min-h-screen bg-gray-50">
      <main className="container mx-auto px-4 py-12">
        <div className="mb-12 text-center">
          <h1 className="mb-4 text-5xl font-bold text-gray-900">
            Headless WordPress + Next.js
          </h1>
          <p className="mb-8 text-xl text-gray-600">
            Nowoczesny blog zbudowany z Next.js i WordPress jako headless CMS
          </p>
          <Link
            href="/blog"
            className="inline-block rounded-lg bg-blue-600 px-8 py-3 text-lg font-semibold text-white transition-colors hover:bg-blue-700"
          >
            Zobacz wszystkie posty
          </Link>
        </div>

        {recentPosts.length > 0 && (
          <section className="mb-16">
            <h2 className="mb-8 text-center text-3xl font-bold text-gray-900">
              Najnowsze posty
            </h2>
            <div className="mx-auto max-w-4xl">
              {recentPosts.map((post) => (
                <BlogPost key={post.id} post={post} />
              ))}
            </div>
          </section>
        )}

        <section className="text-center">
          <h2 className="mb-8 text-3xl font-bold text-gray-900">
            Funkcjonalności
          </h2>
          <div className="mx-auto grid max-w-4xl gap-8 md:grid-cols-3">
            <div className="rounded-lg bg-white p-6 shadow-md">
              <h3 className="mb-4 text-xl font-semibold">WordPress CMS</h3>
              <p className="text-gray-600">
                Zarządzaj treścią przez znany interfejs WordPress
              </p>
            </div>
            <div className="rounded-lg bg-white p-6 shadow-md">
              <h3 className="mb-4 text-xl font-semibold">Next.js Frontend</h3>
              <p className="text-gray-600">
                Szybki i nowoczesny frontend z React i TypeScript
              </p>
            </div>
            <div className="rounded-lg bg-white p-6 shadow-md">
              <h3 className="mb-4 text-xl font-semibold">REST API</h3>
              <p className="text-gray-600">
                Komunikacja przez WordPress REST API
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
