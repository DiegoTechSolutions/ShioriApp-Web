import { Link } from 'react-router-dom'
import { Mail, Github, Twitter, MessageCircle, Instagram } from 'lucide-react'
import { socialLinks, contactEmail } from '../data/social'

export default function Footer() {
  return (
    <footer className="bg-md-surface border-t border-md-surface-variant/20 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-primary-400 to-primary-500 rounded-lg flex items-center justify-center text-white font-bold">
                S
              </div>
              <span className="font-bold">ShioriApp</span>
            </div>
            <p className="text-md-text-variant text-sm">
              Lector de manga moderno para Android
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-semibold mb-4 text-md-text text-sm">Enlaces</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="text-md-text-variant hover:text-primary-400 transition-colors">
                  Inicio
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-md-text-variant hover:text-primary-400 transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/community" className="text-md-text-variant hover:text-primary-400 transition-colors">
                  Comunidad
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="text-md-text-variant hover:text-primary-400 transition-colors">
                  Galería
                </Link>
              </li>
            </ul>
          </div>

          {/* Info */}
          <div>
            <h3 className="font-semibold mb-4 text-md-text text-sm">Info</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-md-text-variant hover:text-primary-400 transition-colors">
                  Privacidad
                </a>
              </li>
              <li>
                <a href="#" className="text-md-text-variant hover:text-primary-400 transition-colors">
                  Términos
                </a>
              </li>
              <li>
                <a href="#" className="text-md-text-variant hover:text-primary-400 transition-colors">
                  Licencia
                </a>
              </li>
            </ul>
          </div>

          {/* Socials */}
          <div>
            <h3 className="font-semibold mb-4 text-md-text text-sm">Síguenos</h3>
            <div className="flex gap-2">
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
                    className="w-9 h-9 flex items-center justify-center rounded-lg bg-md-bg hover:bg-primary-500/20 text-md-text-variant hover:text-primary-400 transition-all duration-200"
                    title={link.name}
                  >
                    <Icon size={16} />
                  </a>
                )
              })}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-md-surface-variant/20 pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm">
            <p className="text-md-text-variant">
              © 2026 ShioriApp. Todos los derechos reservados.
            </p>
            <a
              href={`mailto:${contactEmail}`}
              className="text-md-text-variant hover:text-primary-400 transition-colors flex items-center gap-2"
            >
              <Mail size={16} />
              {contactEmail}
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
