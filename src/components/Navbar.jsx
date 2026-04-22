import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X, Github, MessageCircle, Twitter, Instagram, Moon, Sun } from 'lucide-react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isDark, setIsDark] = useState(true)

  const toggleMenu = () => setIsOpen(!isOpen)

  const links = [
    { label: 'Blog', to: '/blog' },
    { label: 'Galería', to: '/gallery' },
    { label: 'Comunidad', to: '/community' },
  ]

  return (
    <header className="sticky top-0 z-50 bg-md-bg/95 backdrop-blur-md border-b border-md-surface-variant/20">
      <nav className="max-w-full mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 bg-gradient-to-br from-primary-400 to-primary-500 rounded-lg flex items-center justify-center text-white font-bold text-lg">
            S
          </div>
          <span className="text-lg font-bold text-white hidden sm:inline">ShioriApp</span>
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

        {/* Right Side - Social + Theme */}
        <div className="flex items-center gap-4">
          {/* Desktop Social Icons */}
          <div className="hidden sm:flex items-center gap-2">
            <a
              href="https://github.com/shioriapp"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-md-text-variant hover:text-primary-400 transition-colors"
              title="GitHub"
            >
              <Github size={18} />
            </a>
            <a
              href="https://discord.gg/shioriapp"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-md-text-variant hover:text-primary-400 transition-colors"
              title="Discord"
            >
              <MessageCircle size={18} />
            </a>
            <a
              href="https://twitter.com/shioriapp"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-md-text-variant hover:text-primary-400 transition-colors"
              title="Twitter"
            >
              <Twitter size={18} />
            </a>
            <a
              href="https://instagram.com/shioriapp"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-md-text-variant hover:text-primary-400 transition-colors"
              title="Instagram"
            >
              <Instagram size={18} />
            </a>
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
        <div className="md:hidden bg-md-surface border-b border-md-surface-variant/20 animate-fade-in">
          <div className="px-4 py-4 space-y-3">
            {links.map((link) => (
              <Link
                key={link.label}
                to={link.to}
                onClick={() => setIsOpen(false)}
                className="block px-4 py-2 text-md-text hover:text-primary-400 hover:bg-md-bg rounded-lg transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <a
              href="https://play.google.com/store/apps/details?id=com.shioriapp"
              onClick={() => setIsOpen(false)}
              className="block px-4 py-2 bg-primary-500 text-white rounded-lg font-semibold text-center hover:bg-primary-600 transition-colors"
            >
              Descargar
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
