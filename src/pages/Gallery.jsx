import { useState } from 'react'
import SectionTitle from '../components/SectionTitle'
import ScreenshotCard from '../components/ScreenshotCard'
import { screenshots } from '../data/screenshots'

const categories = ['all', 'interface', 'reading', 'discovery', 'library', 'details', 'settings', 'features']

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState('all')

  const filtered = selectedCategory === 'all' ? screenshots : screenshots.filter((s) => s.category === selectedCategory)

  return (
    <main className="w-full py-20 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16">
          <SectionTitle
            title="Galería Completa"
            subtitle="Explora todas las vistas e interfaces de ShioriApp"
          />
        </div>

        {/* Filters */}
        <div className="mb-12 flex flex-wrap gap-3 justify-center">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2 rounded-lg font-medium transition-all duration-300 capitalize text-sm sm:text-base ${
                selectedCategory === cat
                  ? 'bg-primary-500 text-white shadow-lg shadow-primary-500/40'
                  : 'bg-md-surface/60 hover:bg-md-surface border border-md-surface-variant/40 text-md-text-variant hover:text-md-text'
              }`}
            >
              {cat === 'all' ? 'Todos' : cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {filtered.map((screenshot) => (
            <ScreenshotCard key={screenshot.id} screenshot={screenshot} />
          ))}
        </div>

        {/* Empty State */}
        {filtered.length === 0 && (
          <div className="text-center py-16">
            <p className="text-md-text-variant text-lg">No hay capturas en esta categoría</p>
          </div>
        )}

        {/* Info Box */}
        <div className="bg-md-surface/50 border border-primary-500/30 rounded-2xl p-8 text-center">
          <p className="text-md-text-variant mb-6 text-lg">
            ¿Te gustaría ver más capturas? Comparte tus sugerencias en nuestra comunidad.
          </p>
          <a
            href="/community"
            className="inline-flex px-6 py-3 bg-primary-500 hover:bg-primary-600 text-white font-semibold rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-primary-500/30"
          >
            Ir a Comunidad
          </a>
        </div>
      </div>
    </main>
  )
}
