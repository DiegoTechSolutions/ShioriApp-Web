import { useParams, useNavigate, Link } from 'react-router-dom'
import { ArrowLeft, Calendar, User } from 'lucide-react'
import { blogPosts } from '../data/blog'

export default function BlogPost() {
  const { slug } = useParams()
  const navigate = useNavigate()
  const post = blogPosts.find((p) => p.slug === slug)

  if (!post) {
    return (
      <main className="w-full py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Artículo no encontrado</h1>
          <p className="text-md-text-variant mb-8">El artículo que buscas no existe.</p>
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary-500 hover:bg-primary-600 text-white font-semibold rounded-lg transition-colors"
          >
            <ArrowLeft size={18} />
            Volver al Blog
          </Link>
        </div>
      </main>
    )
  }

  const relatedPosts = blogPosts.filter((p) => p.category === post.category && p.id !== post.id).slice(0, 3)

  return (
    <main className="w-full py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <button
          onClick={() => navigate('/blog')}
          className="inline-flex items-center gap-2 text-primary-400 hover:text-primary-300 font-medium mb-8 transition-colors group"
        >
          <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
          Volver al Blog
        </button>

        {/* Article */}
        <article className="mb-12">
          {/* Image */}
          <div className="w-full h-96 bg-gradient-to-br from-primary-500/10 to-primary-600/10 rounded-lg flex items-center justify-center text-8xl mb-8 border border-primary-500/20">
            📰
          </div>

          {/* Meta */}
          <div className="flex flex-wrap gap-6 items-center mb-6 pb-6 border-b border-md-surface-variant/20">
            <div className="flex items-center gap-2 text-md-text-variant">
              <Calendar size={16} />
              <span>{new Date(post.date).toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
            </div>
            <div className="flex items-center gap-2 text-md-text-variant">
              <User size={16} />
              <span>{post.author}</span>
            </div>
            <span className="px-3 py-1 bg-primary-500/20 text-primary-300 text-sm rounded-full capitalize">
              {post.category}
            </span>
          </div>

          {/* Title */}
          <h1 className="text-5xl font-bold text-white mb-6">{post.title}</h1>

          {/* Content */}
          <div className="prose prose-invert max-w-none">
            {post.content.split('\n\n').map((paragraph, idx) => {
              if (paragraph.startsWith('-')) {
                const items = paragraph.split('\n').filter((line) => line.trim())
                return (
                  <ul key={idx} className="list-disc list-inside space-y-2 text-md-text-variant mb-6">
                    {items.map((item, i) => (
                      <li key={i} className="text-md-text-variant">
                        {item.replace(/^-\s*/, '')}
                      </li>
                    ))}
                  </ul>
                )
              }
              if (paragraph.match(/^\d+\./)) {
                const items = paragraph.split('\n').filter((line) => line.trim())
                return (
                  <ol key={idx} className="list-decimal list-inside space-y-2 text-md-text-variant mb-6">
                    {items.map((item, i) => (
                      <li key={i} className="text-md-text-variant">
                        {item.replace(/^\d+\.\s*/, '')}
                      </li>
                    ))}
                  </ol>
                )
              }
              return (
                <p key={idx} className="text-md-text-variant leading-relaxed mb-6">
                  {paragraph}
                </p>
              )
            })}
          </div>
        </article>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <section className="mt-16">
            <h2 className="text-3xl font-bold text-white mb-8">Artículos Relacionados</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedPosts.map((relatedPost) => (
                <Link
                  key={relatedPost.id}
                  to={`/blog/${relatedPost.slug}`}
                  className="group p-4 rounded-lg bg-md-surface border border-md-surface-variant/20 hover:border-primary-500/50 transition-all duration-300"
                >
                  <h3 className="font-semibold text-md-text group-hover:text-primary-400 transition-colors mb-2 line-clamp-2">
                    {relatedPost.title}
                  </h3>
                  <p className="text-sm text-md-text-variant line-clamp-2">{relatedPost.excerpt}</p>
                </Link>
              ))}
            </div>
          </section>
        )}
      </div>
    </main>
  )
}
