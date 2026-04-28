import { Link } from 'react-router-dom'
import { ArrowRight, Calendar, User } from 'lucide-react'

export default function BlogCard({ post }) {
  return (
    <Link to={`/blog/${post.slug}`}>
      <article className="group h-full flex flex-col rounded-2xl bg-md-bg/50 border border-md-surface-variant/30 hover:border-primary-500/40 overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-primary-500/10">
        {/* Image */}
        <div className="relative h-48 bg-gradient-to-br from-primary-500/15 to-primary-600/10 overflow-hidden flex items-center justify-center">
          <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 to-transparent" />
          <div className="text-center text-md-text-variant z-10">
            <div className="text-5xl mb-3">📰</div>
            <p className="text-sm font-medium">{post.category}</p>
          </div>
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300" />
        </div>

        {/* Content */}
        <div className="flex-1 p-6 flex flex-col">
          {/* Category */}
          <div className="inline-flex items-center gap-1 mb-3 w-fit">
            <span className="text-xs px-3 py-1 bg-primary-500/20 text-primary-300 rounded-full font-medium">
              {post.category}
            </span>
          </div>

          {/* Title */}
          <h3 className="text-lg font-bold text-md-text mb-3 group-hover:text-primary-400 transition-colors line-clamp-2 font-display">
            {post.title}
          </h3>

          {/* Excerpt */}
          <p className="text-sm text-md-text-variant mb-4 line-clamp-2 flex-1">
            {post.excerpt}
          </p>

          {/* Meta */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 text-xs text-md-text-variant pt-4 border-t border-md-surface-variant/30">
            <div className="flex items-center gap-2">
              <Calendar size={14} />
              <span>{new Date(post.date).toLocaleDateString('es-ES')}</span>
            </div>
            <div className="flex items-center gap-2">
              <User size={14} />
              <span>{post.author}</span>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-4 flex items-center gap-2 text-primary-400 group-hover:gap-3 transition-all duration-300 font-medium">
            <span className="text-sm">Leer más</span>
            <ArrowRight size={16} />
          </div>
        </div>
      </article>
    </Link>
  )
}
