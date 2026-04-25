import { motion } from 'framer-motion'
import { ShoppingBag, MessageCircle, Wrench } from 'lucide-react'

const WHATSAPP = '593993703790'

export default function Extras() {
  return (
    <div className="pt-16">
      {/* ── HEADER ── */}
      <section className="bg-gradient-to-br from-amber-50 to-brand-cream py-16 relative overflow-hidden">
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-brand-clay/15 rounded-full blur-3xl translate-x-1/4 translate-y-1/4" />
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-2xl">
            <span className="badge bg-brand-clay/20 text-brand-clay mb-3 inline-block">
              <ShoppingBag size={12} className="inline mr-1" /> Insumos & Accesorios
            </span>
            <h1 className="section-title mb-4">
              La{' '}
              <span className="text-brand-clay">Tiendita</span>
            </h1>
            <p className="text-gray-600 text-lg leading-relaxed">
              Todo lo que necesitas para crear, pintar y transformar. Pinturas, pinceles, arcilla, maquillaje artístico y mucho más.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── AVISO RENOVACIÓN ── */}
      <section className="max-w-2xl mx-auto px-4 py-24 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="w-20 h-20 bg-brand-clay/10 rounded-3xl flex items-center justify-center mx-auto mb-6">
            <Wrench size={36} className="text-brand-clay" />
          </div>
          <h2 className="text-2xl font-bold text-brand-dark mb-3">Catálogo en renovación</h2>
          <p className="text-gray-500 leading-relaxed mb-2">
            Estamos actualizando La Tiendita con fotos reales de todos nuestros productos.
          </p>
          <p className="text-gray-400 text-sm mb-10">Vuelve pronto — ¡viene con muchas novedades!</p>

          <a
            href={`https://wa.me/${WHATSAPP}?text=${encodeURIComponent('¡Hola Rocío! Quisiera consultar sobre los insumos y accesorios disponibles en La Tiendita.')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 btn-whatsapp text-sm px-6 py-3"
          >
            <MessageCircle size={16} />
            Consultar disponibilidad por WhatsApp
          </a>
        </motion.div>
      </section>
    </div>
  )
}
