import { ArrowRight, BookOpen, Palette, Zap, Download, Github, MessageCircle, Twitter, Instagram } from 'lucide-react'
import { features } from '../data/features'
import { socialLinks, contactEmail } from '../data/social'

export default function Home() {
  return (
    <main className="w-full bg-md-bg text-md-text overflow-hidden">
      {/* Hero Section - Simplificado y Moderno */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 pb-20">
        {/* Background - Minimalista */}
        <div className="absolute inset-0 opacity-40">
          <div className="absolute top-20 right-10 w-72 h-72 bg-primary-500/15 rounded-full blur-3xl" />
          <div className="absolute bottom-20 left-10 w-96 h-96 bg-primary-600/10 rounded-full blur-3xl" />
        </div>

        {/* Content */}
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-8 items-center">
            {/* Left - Phone Mockup - Mejorado */}
            <div className="hidden lg:flex items-center justify-start">
              <div className="relative w-56 h-80">
                {/* Glow Background */}
                <div className="absolute -inset-4 bg-gradient-to-br from-primary-500/20 to-primary-600/15 rounded-2xl blur-xl" />

                {/* Phone Frame */}
                <div className="relative bg-gradient-to-br from-md-surface-variant to-md-surface rounded-2xl border-6 border-md-surface-variant shadow-xl overflow-hidden h-full">
                  {/* Status Bar */}
                  <div className="h-5 bg-md-surface/90 flex items-center justify-center text-xs text-md-text-variant">
                    <div className="absolute left-3 text-xs font-medium">9:41</div>
                    <div className="flex gap-0.5 text-xs">
                      <span>📶</span>
                      <span>📡</span>
                      <span>🔋</span>
                    </div>
                  </div>

                  {/* Screen Content */}
                  <div className="h-full w-full bg-gradient-to-br from-primary-600/10 to-primary-900/5 flex flex-col items-center justify-center relative p-4">
                    {/* Decorative Elements */}
                    <div className="absolute inset-0 opacity-15">
                      <div className="w-32 h-32 bg-primary-500 rounded-full blur-2xl absolute top-6 right-4" />
                    </div>

                    {/* Content */}
                    <div className="relative text-center space-y-3">
                      <div className="text-5xl mb-1">📖</div>
                      <h3 className="text-base font-bold text-white">ShioriApp</h3>
                      <p className="text-xs text-md-text-variant font-medium">Lector de Manga</p>
                      <div className="mt-4 space-y-1">
                        <div className="h-1.5 bg-md-surface-variant/40 rounded-full w-20 mx-auto" />
                        <div className="h-1.5 bg-md-surface-variant/25 rounded-full w-24 mx-auto" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Content */}
            <div className="space-y-5">
              {/* Main Title */}
              <div className="space-y-2">
                <h1 className="text-4xl sm:text-5xl font-bold font-display">
                  <span className="text-white">Shiori</span>
                  <br />
                  <span className="bg-gradient-to-r from-primary-400 to-primary-500 bg-clip-text text-transparent">
                    App
                  </span>
                </h1>
                <p className="text-base sm:text-lg text-md-text-variant font-medium">
                  Lee manga sin límites
                </p>
              </div>

              {/* Description */}
              <p className="text-sm sm:text-base text-md-text-variant leading-relaxed">
                Descubre miles de manga, webtoons y cómics. Gratis, sin publicidades y con interfaz optimizada.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="https://play.google.com/store/apps/details?id=com.shioriapp"
                  className="flex items-center justify-center gap-2 px-6 py-3 bg-primary-500 hover:bg-primary-600 text-white font-semibold rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-primary-500/30 text-sm"
                >
                  <Download size={18} />
                  Descargar
                </a>
                <a
                  href="#features"
                  className="flex items-center justify-center gap-2 px-6 py-3 border-2 border-primary-500/40 hover:border-primary-400 text-md-text hover:text-primary-300 font-semibold rounded-lg transition-all duration-300 text-sm"
                >
                  Conocer más
                  <ArrowRight size={16} />
                </a>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-3 pt-3 border-t border-md-surface-variant/40">
                <div>
                  <div className="text-xl sm:text-2xl font-bold text-primary-400">10K+</div>
                  <p className="text-xs text-md-text-variant">Títulos</p>
                </div>
                <div>
                  <div className="text-xl sm:text-2xl font-bold text-primary-400">100K+</div>
                  <p className="text-xs text-md-text-variant">Descargas</p>
                </div>
                <div>
                  <div className="text-xl sm:text-2xl font-bold text-primary-400">4.8★</div>
                  <p className="text-xs text-md-text-variant">Valoración</p>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex gap-2 pt-2">
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
                      className="w-10 h-10 flex items-center justify-center rounded-lg bg-primary-500/10 hover:bg-primary-500/20 text-md-text-variant hover:text-primary-300 transition-all duration-200"
                      title={link.name}
                    >
                      <Icon size={18} />
                    </a>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section - Simplificada */}
      <section id="features" className="py-20 bg-md-surface/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Title */}
          <div className="mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold font-display text-white mb-4">
              Características Principales
            </h2>
            <p className="text-lg text-md-text-variant max-w-2xl">
              Todo lo que necesitas para una experiencia de lectura perfecta
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="group p-8 rounded-2xl bg-md-bg/50 hover:bg-md-surface/60 transition-all duration-300 border border-md-surface-variant/30">
              <div className="w-14 h-14 bg-primary-500/20 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary-500/30 transition-colors">
                <BookOpen className="text-primary-400" size={28} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                Lector Inteligente
              </h3>
              <p className="text-md-text-variant leading-relaxed mb-4 text-sm">
                Interfaz optimizada para lectura fluida con múltiples modos de visualización y ajustes personalizables.
              </p>
              <a href="/gallery" className="inline-flex items-center gap-2 text-primary-400 hover:text-primary-300 font-medium transition-colors text-sm">
                Ver más <ArrowRight size={16} />
              </a>
            </div>

            {/* Feature 2 */}
            <div className="group p-8 rounded-2xl bg-md-bg/50 hover:bg-md-surface/60 transition-all duration-300 border border-md-surface-variant/30">
              <div className="w-14 h-14 bg-primary-500/20 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary-500/30 transition-colors">
                <Palette className="text-primary-400" size={28} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                Personalización Total
              </h3>
              <p className="text-md-text-variant leading-relaxed mb-4 text-sm">
                Tema oscuro, fuentes ajustables y opciones de lectura completamente personalizables.
              </p>
              <a href="/community" className="inline-flex items-center gap-2 text-primary-400 hover:text-primary-300 font-medium transition-colors text-sm">
                Ver más <ArrowRight size={16} />
              </a>
            </div>

            {/* Feature 3 */}
            <div className="group p-8 rounded-2xl bg-md-bg/50 hover:bg-md-surface/60 transition-all duration-300 border border-md-surface-variant/30">
              <div className="w-14 h-14 bg-primary-500/20 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary-500/30 transition-colors">
                <Zap className="text-primary-400" size={28} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                Rápido y Libre
              </h3>
              <p className="text-md-text-variant leading-relaxed mb-4 text-sm">
                Rendimiento optimizado, sin publicidades, completamente gratuito y código abierto.
              </p>
              <a href="/community" className="inline-flex items-center gap-2 text-primary-400 hover:text-primary-300 font-medium transition-colors text-sm">
                Ver más <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Final */}
      <section className="py-16 sm:py-20 bg-md-bg">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl sm:text-5xl font-bold font-display text-white mb-6">
            ¿Listo para Comenzar?
          </h2>
          <p className="text-lg text-md-text-variant mb-8 max-w-2xl mx-auto">
            Descarga ShioriApp ahora y únete a miles de lectores disfrutando de manga sin límites.
          </p>
          <a
            href="https://play.google.com/store/apps/details?id=com.shioriapp"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary-500 hover:bg-primary-600 text-white font-semibold rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-primary-500/30"
          >
            <Download size={20} />
            Descargar ShioriApp
          </a>
        </div>
      </section>
    </main>
  )
}
