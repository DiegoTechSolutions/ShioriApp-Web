import { ArrowRight, BookOpen, Palette, Zap, Download, Github, MessageCircle, Twitter, Instagram } from 'lucide-react'
import { features } from '../data/features'
import { socialLinks, contactEmail } from '../data/social'

export default function Home() {
  return (
    <main className="w-full">
      {/* Hero Section - Inspirado en Mihon */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Background Gradient */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl opacity-20" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary-600/10 rounded-full blur-3xl opacity-20" />
        </div>

        {/* Content */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8 animate-slide-up">
              {/* Brand */}
              <div>
                <h1 className="text-6xl sm:text-7xl font-bold mb-2">
                  <span className="text-white">Shiori</span>
                  <span className="bg-gradient-to-r from-primary-400 to-primary-600 bg-clip-text text-transparent">
                    App
                  </span>
                </h1>
              </div>

              {/* Tagline */}
              <h2 className="text-3xl sm:text-4xl font-semibold text-md-text-variant">
                Lector de manga moderno
              </h2>

              {/* Description */}
              <p className="text-lg text-md-text-variant max-w-md leading-relaxed">
                Descubre y lee manga, webtoons, cómics y más — más fácil que nunca en tu dispositivo Android.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <a
                  href="https://play.google.com/store/apps/details?id=com.shioriapp"
                  className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary-500 hover:bg-primary-600 text-white font-semibold rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-primary-500/50 text-center"
                >
                  <Download size={20} />
                  Descargar
                </a>
                <a
                  href="#features"
                  className="group inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-primary-500/30 hover:border-primary-500 text-md-text hover:text-primary-400 font-semibold rounded-lg transition-all duration-300"
                >
                  Conocer Más
                  <ArrowRight size={18} />
                </a>
              </div>

              {/* Social Links */}
              <div className="flex gap-3 pt-4">
                {socialLinks.map((link) => {
                  const iconMap = {
                    MessageCircle: MessageCircle,
                    Github: Github,
                    Twitter: Twitter,
                    Instagram: Instagram,
                  }
                  const Icon = iconMap[link.icon] || MessageCircle

                  return (
                    <a
                      key={link.id}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 flex items-center justify-center rounded-lg bg-md-surface hover:bg-primary-500/20 text-md-text-variant hover:text-primary-400 transition-all duration-200"
                      title={link.name}
                    >
                      <Icon size={20} />
                    </a>
                  )
                })}
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
                      <div className="w-32 h-32 bg-primary-500 rounded-full blur-3xl absolute top-4 right-4" />
                      <div className="w-32 h-32 bg-primary-600 rounded-full blur-3xl absolute bottom-4 left-4" />
                    </div>

                    {/* Content */}
                    <div className="relative text-center text-md-text-variant space-y-4 p-6">
                      <div className="text-6xl mb-4">📚</div>
                      <p className="font-semibold text-md-text text-xl">ShioriApp</p>
                      <p className="text-xs text-md-text-variant">Lector de Manga</p>
                    </div>
                  </div>

                  {/* Notch */}
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-40 h-6 bg-md-surface rounded-b-3xl" />
                </div>

                {/* Glow Effect */}
                <div className="absolute -inset-4 bg-gradient-to-r from-primary-500 to-primary-600 rounded-3xl opacity-20 blur-2xl" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section - Estilo Mihon (3 columnas) */}
      <section id="features" className="py-20 bg-md-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Title */}
          <div className="mb-16 text-center">
            <h2 className="text-4xl font-bold text-white mb-4">
              Características Principales
            </h2>
            <p className="text-md-text-variant text-lg max-w-2xl mx-auto">
              Todo lo que necesitas para una experiencia de lectura perfecta
            </p>
          </div>

          {/* Features Grid - 3 columnas como Mihon */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="group text-center">
              <div className="w-16 h-16 bg-primary-500/10 rounded-lg flex items-center justify-center mx-auto mb-6 group-hover:bg-primary-500/20 transition-colors">
                <BookOpen className="text-primary-400" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">
                Lector Inteligente
              </h3>
              <p className="text-md-text-variant leading-relaxed mb-4">
                Interfaz optimizada para lectura fluida de manga y webtoons con múltiples modos de visualización.
              </p>
              <a href="/gallery" className="inline-flex items-center gap-2 text-primary-400 hover:text-primary-300 font-medium transition-colors">
                Ver más <ArrowRight size={16} />
              </a>
            </div>

            {/* Feature 2 */}
            <div className="group text-center">
              <div className="w-16 h-16 bg-primary-500/10 rounded-lg flex items-center justify-center mx-auto mb-6 group-hover:bg-primary-500/20 transition-colors">
                <Palette className="text-primary-400" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">
                Personalización Total
              </h3>
              <p className="text-md-text-variant leading-relaxed mb-4">
                Tema oscuro nativo, fuentes personalizables y ajustes de lectura completamente a tu gusto.
              </p>
              <a href="/gallery" className="inline-flex items-center gap-2 text-primary-400 hover:text-primary-300 font-medium transition-colors">
                Ver más <ArrowRight size={16} />
              </a>
            </div>

            {/* Feature 3 */}
            <div className="group text-center">
              <div className="w-16 h-16 bg-primary-500/10 rounded-lg flex items-center justify-center mx-auto mb-6 group-hover:bg-primary-500/20 transition-colors">
                <Zap className="text-primary-400" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">
                Rápido y Potente
              </h3>
              <p className="text-md-text-variant leading-relaxed mb-4">
                Rendimiento optimizado, sin publicidades molestas, completamente gratuito y código abierto.
              </p>
              <a href="/community" className="inline-flex items-center gap-2 text-primary-400 hover:text-primary-300 font-medium transition-colors">
                Ver más <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-md-bg border-y border-md-surface-variant/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl sm:text-5xl font-bold text-primary-400 mb-2">10K+</div>
              <p className="text-md-text-variant">Mangas Disponibles</p>
            </div>
            <div className="text-center">
              <div className="text-4xl sm:text-5xl font-bold text-primary-400 mb-2">100K+</div>
              <p className="text-md-text-variant">Descargas</p>
            </div>
            <div className="text-center">
              <div className="text-4xl sm:text-5xl font-bold text-primary-400 mb-2">4.8★</div>
              <p className="text-md-text-variant">En Google Play</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-md-surface">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Listo para Comenzar?
          </h2>
          <p className="text-lg text-md-text-variant mb-8">
            Descarga ShioriApp ahora y únete a miles de lectores de manga
          </p>
          <a
            href="https://play.google.com/store/apps/details?id=com.shioriapp"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary-500 hover:bg-primary-600 text-white font-semibold rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-primary-500/50"
          >
            <Download size={20} />
            Descargar ShioriApp
          </a>
        </div>
      </section>
    </main>
  )
}
