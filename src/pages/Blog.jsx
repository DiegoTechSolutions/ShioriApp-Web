import { useState } from 'react'
import SectionTitle from '../components/SectionTitle'
import BlogCard from '../components/BlogCard'
import { blogPosts } from '../data/blog'

const categories = ['all', 'update', 'tutorial', 'announcement']

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState('all')

  const filtered = selectedCategory === 'all' ? blogPosts : blogPosts.filter((p) => p.category === selectedCategory)

  return (
    <main className="w-full py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12">
          <SectionTitle title="Blog" subtitle="Noticias, tutoriales y actualizaciones sobre ShioriApp" />
        </div>

        {/* Filters */}
        <div className="mb-12 flex flex-wrap gap-3">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 capitalize ${
                selectedCategory === cat
                  ? 'bg-primary-500 text-white shadow-lg shadow-primary-500/50'
                  : 'bg-md-surface hover:bg-md-surface-variant text-md-text-variant hover:text-md-text border border-md-surface-variant/20'
              }`}
            >
              {cat === 'all' ? 'Todos' : cat}
            </button>
          ))}
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filtered.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>

        {/* Empty State */}
        {filtered.length === 0 && (
          <div className="text-center py-12">
            <p className="text-md-text-variant text-lg">No hay artículos en esta categoría</p>
          </div>
        )}
      </div>
    </main>
  )
}
