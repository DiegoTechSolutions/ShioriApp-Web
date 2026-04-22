import { Mail, MessageCircle, Github, Twitter, Instagram } from 'lucide-react'
import SectionTitle from '../components/SectionTitle'
import { socialLinks, contactEmail } from '../data/social'

export default function Community() {
  const handleEmailClick = () => {
    window.location.href = `mailto:${contactEmail}`
  }

  const handleContactSubmit = (e) => {
    e.preventDefault()
    // Aquí puedes añadir lógica para enviar el formulario
    alert('Mensaje enviado. Nos contactaremos pronto.')
  }

  return (
    <main className="w-full py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16">
          <SectionTitle
            title="Comunidad ShioriApp"
            subtitle="Únete a miles de lectores de manga en todo el mundo"
          />
        </div>

        {/* Social Channels */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
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
                className="group p-6 rounded-lg bg-md-surface border border-md-surface-variant/20 hover:border-primary-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary-500/10"
              >
                <div className="w-12 h-12 bg-primary-500/10 group-hover:bg-primary-500/20 rounded-lg flex items-center justify-center mb-4 transition-colors">
                  <Icon className="text-primary-400 group-hover:text-primary-300 transition-colors" size={24} />
                </div>
                <h3 className="text-lg font-semibold text-white group-hover:text-primary-400 transition-colors mb-2">
                  {link.name}
                </h3>
                <p className="text-md-text-variant text-sm">Síguenos en {link.name}</p>
              </a>
            )
          })}
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Contact Info */}
          <div>
            <h2 className="text-3xl font-bold text-white mb-6">Contacta con Nosotros</h2>
            <p className="text-md-text-variant mb-8">
              ¿Tienes preguntas, sugerencias o reportes de errores? Nos encantaría escucharte. Contáctanos directamente por email.
            </p>

            <button
              onClick={handleEmailClick}
              className="group flex items-center gap-3 px-6 py-4 bg-primary-500 hover:bg-primary-600 text-white font-semibold rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-primary-500/50 mb-8"
            >
              <Mail size={20} />
              Enviar Email a {contactEmail}
            </button>

            {/* FAQ */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-white">Preguntas Frecuentes</h3>
              <details className="group p-4 bg-md-surface rounded-lg border border-md-surface-variant/20 hover:border-primary-500/30 transition-all">
                <summary className="cursor-pointer font-medium text-md-text group-hover:text-primary-400 transition-colors">
                  ¿Cuándo estará disponible en iOS?
                </summary>
                <p className="mt-3 text-md-text-variant text-sm">
                  Estamos trabajando en la versión para iOS. Se espera que esté disponible en el Q3 2026.
                </p>
              </details>

              <details className="group p-4 bg-md-surface rounded-lg border border-md-surface-variant/20 hover:border-primary-500/30 transition-all">
                <summary className="cursor-pointer font-medium text-md-text group-hover:text-primary-400 transition-colors">
                  ¿Es gratuita la aplicación?
                </summary>
                <p className="mt-3 text-md-text-variant text-sm">
                  Sí, ShioriApp es completamente gratis y de código abierto. No hay publicidad ni pagos ocultos.
                </p>
              </details>

              <details className="group p-4 bg-md-surface rounded-lg border border-md-surface-variant/20 hover:border-primary-500/30 transition-all">
                <summary className="cursor-pointer font-medium text-md-text group-hover:text-primary-400 transition-colors">
                  ¿Dónde puedo reportar un error?
                </summary>
                <p className="mt-3 text-md-text-variant text-sm">
                  Puedes reportar errores en GitHub o en nuestro Discord. También puedes enviarnos un email detallando el problema.
                </p>
              </details>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h2 className="text-3xl font-bold text-white mb-6">Formulario de Contacto</h2>
            <form onSubmit={handleContactSubmit} className="space-y-4">
              <div>
                <label className="block text-md-text font-medium mb-2">Nombre</label>
                <input
                  type="text"
                  required
                  className="w-full px-4 py-2 bg-md-surface border border-md-surface-variant/20 rounded-lg text-md-text placeholder-md-text-variant focus:outline-none focus:border-primary-500 transition-colors"
                  placeholder="Tu nombre"
                />
              </div>

              <div>
                <label className="block text-md-text font-medium mb-2">Email</label>
                <input
                  type="email"
                  required
                  className="w-full px-4 py-2 bg-md-surface border border-md-surface-variant/20 rounded-lg text-md-text placeholder-md-text-variant focus:outline-none focus:border-primary-500 transition-colors"
                  placeholder="tu@email.com"
                />
              </div>

              <div>
                <label className="block text-md-text font-medium mb-2">Asunto</label>
                <input
                  type="text"
                  required
                  className="w-full px-4 py-2 bg-md-surface border border-md-surface-variant/20 rounded-lg text-md-text placeholder-md-text-variant focus:outline-none focus:border-primary-500 transition-colors"
                  placeholder="Asunto del mensaje"
                />
              </div>

              <div>
                <label className="block text-md-text font-medium mb-2">Mensaje</label>
                <textarea
                  required
                  rows={5}
                  className="w-full px-4 py-2 bg-md-surface border border-md-surface-variant/20 rounded-lg text-md-text placeholder-md-text-variant focus:outline-none focus:border-primary-500 transition-colors resize-none"
                  placeholder="Tu mensaje..."
                />
              </div>

              <button
                type="submit"
                className="w-full px-6 py-3 bg-primary-500 hover:bg-primary-600 text-white font-semibold rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-primary-500/50"
              >
                Enviar Mensaje
              </button>
            </form>
          </div>
        </div>

        {/* Community Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-12 border-t border-md-surface-variant/20">
          <div className="text-center">
            <div className="text-4xl font-bold text-primary-400 mb-2">1.2K+</div>
            <p className="text-md-text-variant">Miembros en Discord</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary-400 mb-2">500+</div>
            <p className="text-md-text-variant">Estrellas en GitHub</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary-400 mb-2">100K+</div>
            <p className="text-md-text-variant">Descargas Totales</p>
          </div>
        </div>
      </div>
    </main>
  )
}
