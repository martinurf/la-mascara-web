import { useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ShoppingBag, MessageCircle, Tag } from 'lucide-react'
import { extras, categoriasExtras } from '../data/extras'

const WHATSAPP = '593993703790'

export default function Extras() {
  const [categoria, setCategoria] = useState('todas')

  const filtrados = useMemo(() => {
    return extras.filter(e => categoria === 'todas' || e.categoria === categoria)
  }, [categoria])

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

      {/* ── FILTROS ── */}
      <section className="bg-white sticky top-16 z-30 shadow-sm border-b border-brand-sand/30">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex gap-2 overflow-x-auto pb-1">
            {categoriasExtras.map(({ id, label }) => (
              <button
                key={id}
                onClick={() => setCategoria(id)}
                className={`whitespace-nowrap px-4 py-1.5 rounded-full text-xs font-semibold transition-all duration-150 shrink-0 ${
                  categoria === id
                    ? 'bg-brand-clay text-white shadow-sm'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── GRID ── */}
      <section className="max-w-7xl mx-auto px-4 py-12">
        <AnimatePresence mode="popLayout">
          <motion.div
            key={categoria}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {filtrados.map((item, i) => (
              <motion.div
                key={item.id}
                className="card group"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.06 }}
                whileHover={{ y: -4 }}
              >
                <div className="relative overflow-hidden aspect-square">
                  <img
                    src={item.imagen}
                    alt={item.nombre}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="badge bg-white/90 text-brand-dark text-[10px] capitalize">
                      {item.categoria}
                    </span>
                  </div>
                  <div className="absolute top-3 right-3 flex items-center gap-1 bg-brand-orange text-white px-2 py-0.5 rounded-full text-xs font-bold">
                    <Tag size={10} />
                    {item.precio}
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-brand-dark text-sm mb-1">{item.nombre}</h3>
                  <p className="text-xs text-gray-500 mb-3">{item.descripcion}</p>
                  <a
                    href={`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(`¡Hola! Me interesa "${item.nombre}". ¿Está disponible?`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-whatsapp w-full justify-center text-xs py-2"
                  >
                    <MessageCircle size={13} />
                    Consultar
                  </a>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </section>

      {/* ── BANNER ── */}
      <section className="max-w-7xl mx-auto px-4 pb-16">
        <motion.div
          className="bg-gradient-to-r from-brand-clay to-brand-orange rounded-3xl p-8 text-white text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold mb-2">¿Buscas algo especial?</h3>
          <p className="text-white/80 mb-6">Si no encontraste lo que buscas, contáctanos. Conseguimos insumos especiales por pedido.</p>
          <a
            href={`https://wa.me/${WHATSAPP}?text=${encodeURIComponent('¡Hola! Busco un insumo especial que no vi en el catálogo.')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white text-brand-orange font-bold px-6 py-3 rounded-2xl hover:bg-brand-cream transition-colors"
          >
            <MessageCircle size={18} />
            Consultar por WhatsApp
          </a>
        </motion.div>
      </section>
    </div>
  )
}
