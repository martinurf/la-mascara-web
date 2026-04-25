import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, MapPin, Shirt, Palette, ShoppingBag, Home } from 'lucide-react'

const MAPS_URL = 'https://maps.google.com/?q=Juana+Atabalipa+140+Ibarra+Ecuador'

const links = [
  { to: '/',          label: 'Inicio',     icon: Home },
  { to: '/disfraces', label: 'Disfraces',  icon: Shirt },
  { to: '/ceramica',  label: 'Cerámica',   icon: Palette },
  { to: '/extras',    label: 'Tiendita',   icon: ShoppingBag },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => setOpen(false), [location])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#FAF7F4]/95 backdrop-blur-md shadow-md py-2'
          : 'bg-[#FAF7F4]/80 backdrop-blur-sm py-3'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">

        {/* ── Logo real ── */}
        <Link to="/" className="flex items-center gap-2.5 group">
          <div className="h-11 w-11 rounded-2xl overflow-hidden shadow-md group-hover:scale-105 transition-transform shrink-0">
            <img
              src="/Logo.jpeg"
              alt="Logo La Máscara"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="leading-tight">
            <p className="font-bold text-brand-dark text-lg leading-none" style={{ fontFamily: 'Playfair Display, serif' }}>
              La Máscara
            </p>
            <p className="text-xs text-brand-clay font-medium">Ibarra, Ecuador</p>
          </div>
        </Link>

        {/* ── Links desktop ── */}
        <nav className="hidden md:flex items-center gap-1">
          {links.map(({ to, label, icon: Icon }) => {
            const active = location.pathname === to
            return (
              <Link
                key={to}
                to={to}
                className={`flex items-center gap-1.5 px-4 py-2 rounded-2xl text-sm font-medium transition-all duration-200 ${
                  active
                    ? 'bg-brand-orange text-white shadow-sm'
                    : 'text-brand-dark hover:bg-brand-sand/60 hover:text-brand-orange'
                }`}
              >
                <Icon size={15} />
                {label}
              </Link>
            )
          })}
        </nav>

        {/* ── CTA Ubicación ── */}
        <div className="hidden md:flex items-center gap-2">
          <a
            href={MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-4 py-2 rounded-2xl border-2 border-brand-clay text-brand-clay text-sm font-semibold hover:bg-brand-clay hover:text-white transition-all duration-200"
          >
            <MapPin size={15} />
            Ubicación
          </a>
        </div>

        {/* ── Hamburguesa mobile ── */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 rounded-2xl hover:bg-brand-sand/60 transition-colors"
          aria-label="Menú"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* ── Menú mobile ── */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-[#FAF7F4] border-t border-brand-sand/50 overflow-hidden"
          >
            <div className="px-4 py-3 flex flex-col gap-1">
              {links.map(({ to, label, icon: Icon }) => {
                const active = location.pathname === to
                return (
                  <Link
                    key={to}
                    to={to}
                    className={`flex items-center gap-2 px-4 py-3 rounded-2xl text-sm font-medium transition-all ${
                      active ? 'bg-brand-orange text-white' : 'text-brand-dark hover:bg-brand-sand/60'
                    }`}
                  >
                    <Icon size={16} />
                    {label}
                  </Link>
                )
              })}
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-3 rounded-2xl border-2 border-brand-clay text-brand-clay text-sm font-semibold mt-1"
              >
                <MapPin size={16} />
                Ver Ubicación en Maps
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
