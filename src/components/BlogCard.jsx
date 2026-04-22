import { Link } from 'react-router-dom'
import { ArrowRight, Calendar, User } from 'lucide-react'

export default function BlogCard({ post }) {
  return (
    <Link to={`/blog/${post.slug}`}>
      <article className="group h-full flex flex-col rounded-xl bg-md-surface border border-md-surface-variant/20 hover:border-primary-500/50 overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-primary-500/10">
        {/* Image */}
        <div className="relative h-40 bg-gradient-to-br from-primary-500/10 to-primary-600/10 overflow-hidden flex items-center justify-center">
          <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-transparent" />
          <div className="text-center text-md-text-variant">
            <div className="text-4xl mb-2">📰</div>
            <p className="text-xs">{post.category}</p>
          </div>
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300" />
        </div>

        {/* Content */}
        <div className="flex-1 p-4 flex flex-col">
          {/* Category */}
          <div className="inline-flex items-center gap-1 mb-2 w-fit">
            <span className="text-xs px-2 py-1 bg-primary-500/20 text-primary-300 rounded-full">
              {post.category}
            </span>
          </div>

          {/* Title */}
          <h3 className="text-lg font-semibold text-md-text mb-2 group-hover:text-primary-400 transition-colors line-clamp-2">
            {post.title}
          </h3>

          {/* Excerpt */}
          <p className="text-sm text-md-text-variant mb-4 line-clamp-2 flex-1">
            {post.excerpt}
          </p>

          {/* Meta */}
          <div className="flex items-center gap-4 text-xs text-md-text-variant pt-4 border-t border-md-surface-variant/20">
            <div className="flex items-center gap-1">
              <Calendar size={14} />
              {new Date(post.date).toLocaleDateString('es-ES')}
            </div>
            <div className="flex items-center gap-1">
              <User size={14} />
              {post.author}
            </div>
          </div>

          {/* CTA */}
          <div className="mt-4 flex items-center gap-2 text-primary-400 group-hover:gap-3 transition-all duration-300">
            <span className="text-sm font-semibold">Leer más</span>
            <ArrowRight size={16} />
          </div>
        </div>
      </article>
    </Link>
  )
}
