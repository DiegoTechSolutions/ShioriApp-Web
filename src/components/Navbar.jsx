import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X, Github, MessageCircle, Twitter, Instagram } from 'lucide-react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)

  const links = [
    { label: 'Blog', to: '/blog' },
    { label: 'Galería', to: '/gallery' },
    { label: 'Comunidad', to: '/community' },
  ]

  const socialIcons = [
    { icon: Github, url: 'https://github.com/shioriapp', title: 'GitHub' },
    { icon: MessageCircle, url: 'https://discord.gg/shioriapp', title: 'Discord' },
    { icon: Twitter, url: 'https://twitter.com/shioriapp', title: 'Twitter' },
    { icon: Instagram, url: 'https://instagram.com/shioriapp', title: 'Instagram' },
  ]

  return (
    <header className="sticky top-0 z-50 bg-md-bg/90 backdrop-blur-md border-b border-md-surface-variant/20">
      <nav className="max-w-full mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 bg-gradient-to-br from-primary-400 to-primary-500 rounded-lg flex items-center justify-center text-white font-bold text-lg font-display">
            S
          </div>
          <span className="text-lg font-bold text-white hidden sm:inline font-display">ShioriApp</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <Link
              key={link.label}
              to={link.to}
              className="text-sm text-md-text-variant hover:text-primary-400 transition-colors duration-200 font-medium"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-3 sm:gap-4">
          {/* Desktop Social Icons */}
          <div className="hidden sm:flex items-center gap-1">
            {socialIcons.map((social, idx) => {
              const Icon = social.icon
              return (
                <a
                  key={idx}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-md-text-variant hover:text-primary-400 transition-colors"
                  title={social.title}
                >
                  <Icon size={18} />
                </a>
              )
            })}
          </div>

          {/* Download Button */}
          <a
            href="https://play.google.com/store/apps/details?id=com.shioriapp"
            className="hidden sm:inline-block px-4 py-2 text-sm bg-primary-500 hover:bg-primary-600 text-white rounded-lg font-semibold transition-all duration-200"
          >
            Descargar
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 text-md-text hover:text-primary-400 transition-colors"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-md-surface/80 border-b border-md-surface-variant/20 animate-fade-in">
          <div className="px-4 py-4 space-y-2">
            {links.map((link) => (
              <Link
                key={link.label}
                to={link.to}
                onClick={() => setIsOpen(false)}
                className="block px-4 py-3 text-md-text hover:text-primary-400 hover:bg-md-bg/60 rounded-lg transition-colors font-medium"
              >
                {link.label}
              </Link>
            ))}
            <a
              href="https://play.google.com/store/apps/details?id=com.shioriapp"
              onClick={() => setIsOpen(false)}
              className="block px-4 py-3 bg-primary-500 text-white rounded-lg font-semibold text-center hover:bg-primary-600 transition-colors"
            >
              Descargar
            </a>

            {/* Mobile Social Icons */}
            <div className="flex items-center gap-2 px-4 pt-4 border-t border-md-surface-variant/30 mt-4">
              {socialIcons.map((social, idx) => {
                const Icon = social.icon
                return (
                  <a
                    key={idx}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 p-2 text-center text-md-text-variant hover:text-primary-400 hover:bg-md-bg/40 rounded-lg transition-colors"
                    title={social.title}
                  >
                    <Icon size={18} className="mx-auto" />
                  </a>
                )
              })}
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
