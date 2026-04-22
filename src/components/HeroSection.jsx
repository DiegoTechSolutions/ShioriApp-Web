import { Download } from 'lucide-react'

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Gradient */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary-500/20 rounded-full blur-3xl opacity-20 animate-pulse" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary-600/20 rounded-full blur-3xl opacity-20 animate-pulse" />
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-slide-up">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-500/10 border border-primary-500/20 rounded-full">
              <span className="w-2 h-2 bg-primary-500 rounded-full animate-pulse" />
              <span className="text-sm font-medium text-primary-300">Nuevo en 2026</span>
            </div>

            {/* Title */}
            <div>
              <h1 className="text-5xl sm:text-6xl font-bold mb-4">
                <span className="text-white">Lee Manga</span>
                <br />
                <span className="bg-gradient-to-r from-primary-400 to-primary-600 bg-clip-text text-transparent">
                  sin Límites
                </span>
              </h1>
              <p className="text-xl text-md-text-variant max-w-md leading-relaxed">
                ShioriApp es el lector de manga moderno que necesitabas. Descarga, organiza y disfruta de miles de títulos
                en un solo lugar.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a
                href="https://play.google.com/store/apps/details?id=com.shioriapp"
                className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary-500 hover:bg-primary-600 text-white font-semibold rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-primary-500/50"
              >
                <Download size={20} />
                Descargar en Play Store
              </a>
              <a
                href="#features"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-md-surface-variant hover:border-primary-500 text-md-text hover:text-primary-400 font-semibold rounded-lg transition-all duration-300"
              >
                Ver Características
              </a>
            </div>

            {/* Stats */}
            <div className="flex gap-8 pt-8 border-t border-md-surface-variant/20">
              <div>
                <div className="text-2xl font-bold text-primary-400">10K+</div>
                <p className="text-sm text-md-text-variant">Mangas Disponibles</p>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary-400">100K+</div>
                <p className="text-sm text-md-text-variant">Descargas</p>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary-400">4.8★</div>
                <p className="text-sm text-md-text-variant">Valoración Play Store</p>
              </div>
            </div>
          </div>

          {/* Right - Phone Mockup */}
          <div className="hidden lg:flex items-center justify-center">
            <div className="relative w-72 h-96">
              {/* Phone Frame */}
              <div className="absolute inset-0 bg-gradient-to-br from-md-surface-variant to-md-surface rounded-3xl border-8 border-md-surface-variant shadow-2xl overflow-hidden">
                {/* Screen Content */}
                <div className="w-full h-full bg-gradient-to-br from-primary-600/20 to-primary-900/20 flex items-center justify-center relative">
                  {/* Animated Background */}
                  <div className="absolute inset-0 opacity-30">
                    <div className="w-32 h-32 bg-primary-500 rounded-full blur-3xl absolute top-4 right-4 animate-pulse" />
                    <div className="w-32 h-32 bg-primary-600 rounded-full blur-3xl absolute bottom-4 left-4 animate-pulse" />
                  </div>

                  {/* Content */}
                  <div className="relative text-center text-md-text-variant space-y-4 p-6">
                    <div className="text-6xl mb-4">📚</div>
                    <p className="font-semibold text-md-text">ShioriApp</p>
                    <p className="text-xs text-md-text-variant">Lector de Manga Moderno</p>
                  </div>
                </div>

                {/* Notch */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-40 h-6 bg-md-surface rounded-b-3xl" />
              </div>

              {/* Glow Effect */}
              <div className="absolute -inset-4 bg-gradient-to-r from-primary-500 to-primary-600 rounded-3xl opacity-20 blur-2xl animate-pulse" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
