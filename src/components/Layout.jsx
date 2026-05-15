import { Link, NavLink } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { useLenis } from 'lenis/react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Phone, Mail, MapPin, ArrowUp, Sun, Moon } from 'lucide-react'
import { Toaster } from 'sonner'
import { staggerContainer, fadeIn } from '../lib/animation'
import { useThemeStore } from '../store/useThemeStore'

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/services', label: 'Services' },
  { to: '/projects', label: 'Projects' },
  { to: '/about', label: 'About' },
  { to: '/blog', label: 'Blog' },
  { to: '/contact', label: 'Contact' },
]

export default function Layout({ children }) {
  const [open, setOpen] = useState(false)
  const [showTop, setShowTop] = useState(false)
  const { theme, toggleTheme } = useThemeStore()

  const lenis = useLenis()

  useEffect(() => {
    if (!lenis) return
    const onScroll = (e) => setShowTop(e.animatedScroll > 300)
    lenis.on('scroll', onScroll)
    return () => lenis.off('scroll', onScroll)
  }, [lenis])

  const scrollToTop = () => lenis?.scrollTo(0, { duration: 1 })

  return (
    <div className="min-h-screen flex flex-col bg-surface dark:bg-dark text-dark dark:text-text-dark transition-colors">
      <Toaster position="top-right" richColors closeButton />

      <div className="bg-primary text-white text-sm py-2 hidden md:block">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-end gap-6">
          <span className="flex items-center gap-1"><Phone size={14} /> (555) 123-4567</span>
          <span className="flex items-center gap-1"><Mail size={14} /> info@electfirm.com</span>
          <span className="flex items-center gap-1"><MapPin size={14} /> Serving All Areas</span>
        </div>
      </div>

      <header className="sticky top-0 z-50 bg-white dark:bg-dark-alt border-b border-border dark:border-border-dark">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16">
          <Link to="/" className="text-xl font-bold text-primary">
            Elect<span className="text-accent">Firm</span>
          </Link>

          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map(l => (
              <NavLink key={l.to} to={l.to} end={l.to === '/'}
                className={({ isActive }) =>
                   `text-sm font-medium transition-colors hover:text-accent ${isActive ? 'text-accent' : 'text-text dark:text-gray-300'}`
                }>
                {l.label}
              </NavLink>
            ))}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg text-text-muted dark:text-gray-300 hover:bg-surface-alt dark:hover:bg-gray-800 transition-colors"
              aria-label="Toggle theme"
            >
              {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
            </button>
            <Link to="/quote" className="bg-accent hover:bg-accent-light text-dark font-semibold px-4 py-2 rounded-lg text-sm transition-all">
              Get a Quote
            </Link>
          </nav>

          <div className="flex items-center gap-1 md:hidden">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg text-text-muted dark:text-gray-300 hover:bg-surface-alt dark:hover:bg-gray-800 transition-colors"
              aria-label="Toggle theme"
            >
              {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
            </button>
            <button onClick={() => setOpen(!open)}>
              {open ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="md:hidden overflow-hidden border-t border-border dark:border-border-dark bg-white dark:bg-dark-alt"
            >
              <motion.div
                variants={staggerContainer}
                initial="hidden"
                animate="visible"
                className="px-4 pb-4 pt-2 space-y-2"
              >
                {navLinks.map(l => (
                  <motion.div key={l.to} variants={fadeIn}>
                    <NavLink key={l.to} to={l.to} end={l.to === '/'}
                      onClick={() => setOpen(false)}
                      className={({ isActive }) =>
                        `block py-2 text-sm font-medium ${isActive ? 'text-accent' : 'text-text dark:text-gray-300'}`
                      }>
                      {l.label}
                    </NavLink>
                  </motion.div>
                ))}
                <motion.div variants={fadeIn}>
                  <Link to="/quote" onClick={() => setOpen(false)}
                    className="block text-center bg-accent text-dark font-semibold px-4 py-2 rounded-lg text-sm">
                    Get a Quote
                  </Link>
                </motion.div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <main className="flex-1">{children}</main>

      <AnimatePresence>
        {showTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            onClick={scrollToTop}
            className="fixed bottom-6 right-6 z-40 bg-accent hover:bg-accent-light text-dark p-3 rounded-full shadow-lg transition-colors"
          >
            <ArrowUp size={20} />
          </motion.button>
        )}
      </AnimatePresence>

      <footer className="bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-3">ElectFirm</h3>
            <p className="text-sm text-gray-300">Trusted electrical services for 15 years. Industrial, commercial, and residential expertise.</p>
          </div>
          <div>
            <h4 className="font-semibold mb-3">Quick Links</h4>
            <div className="space-y-2 text-sm text-gray-300">
              {navLinks.map(l => (
                <Link key={l.to} to={l.to} className="block hover:text-accent">{l.label}</Link>
              ))}
              <Link to="/faq" className="block hover:text-accent">FAQ</Link>
              <Link to="/careers" className="block hover:text-accent">Careers</Link>
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-3">Services</h4>
            <div className="space-y-2 text-sm text-gray-300">
              {['Industrial', 'Commercial', 'Residential', 'Emergency'].map(s => (
                <Link key={s} to={`/services/${s.toLowerCase()}`} className="block hover:text-accent">{s}</Link>
              ))}
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-3">Contact</h4>
            <div className="space-y-2 text-sm text-gray-300">
              <p>(555) 123-4567</p>
              <p>info@electfirm.com</p>
              <p>123 Main St, City, State</p>
            </div>
          </div>
        </div>
        <div className="border-t border-border-dark py-4 text-center text-sm text-gray-400">
          &copy; {new Date().getFullYear()} ElectFirm. All rights reserved.
        </div>
      </footer>
    </div>
  )
}
