import { useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Palette, MessageCircle, Sparkles, ToggleLeft, ToggleRight } from 'lucide-react'
import { ceramicas, tematicas, personalizados } from '../data/ceramica'

const WHATSAPP = '593993703790'
const COTIZAR_MSG = encodeURIComponent('¡Hola Rocío! Me gustaría cotizar una pieza de cerámica personalizada.')

export default function Ceramica() {
  const [tematica, setTematica] = useState('todas')
  const [verTerminada, setVerTerminada] = useState(true)

  const filtradas = useMemo(() => {
    return ceramicas.filter(c => tematica === 'todas' || c.tematica === tematica)
  }, [tematica])

  return (
    <div className="pt-16">
      {/* ── HEADER ── */}
      <section className="bg-gradient-to-br from-purple-50 to-brand-cream py-16 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-brand-purple/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4" />
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-2xl">
            <span className="badge bg-brand-purple/15 text-brand-purple mb-3 inline-block">
              <Palette size={12} className="inline mr-1" /> Taller & Venta
            </span>
            <h1 className="section-title mb-4">
              Cerámica{' '}
              <span className="text-brand-purple">Artesanal</span>
            </h1>
            <p className="text-gray-600 text-lg leading-relaxed">
              Cada figura nace de sus manos. Pintadas a mano con amor, disponibles en figura base para que tú mismo la pintes, o terminadas con colores vibrantes.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── FILTROS ── */}
      <section className="bg-white sticky top-16 z-30 shadow-sm border-b border-brand-sand/30">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex flex-wrap items-center gap-4 justify-between">
            {/* Tematica pills */}
            <div className="flex gap-2 overflow-x-auto pb-1">
              {tematicas.map(({ id, label }) => (
                <button
                  key={id}
                  onClick={() => setTematica(id)}
                  className={`whitespace-nowrap px-4 py-1.5 rounded-full text-xs font-semibold transition-all duration-150 shrink-0 ${
                    tematica === id
                      ? 'bg-brand-purple text-white shadow-sm'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>

            {/* Toggle base/terminada */}
            <div className="flex items-center gap-3 shrink-0">
              <span className={`text-sm font-medium transition-colors ${!verTerminada ? 'text-brand-clay' : 'text-gray-400'}`}>
                Base
              </span>
              <button
                onClick={() => setVerTerminada(!verTerminada)}
                className="relative w-14 h-7 rounded-full transition-colors duration-300 focus:outline-none"
                style={{ backgroundColor: verTerminada ? '#864AF9' : '#C9956C' }}
                aria-label="Toggle vista"
              >
                <motion.div
                  className="absolute top-0.5 w-6 h-6 bg-white rounded-full shadow-md"
                  animate={{ left: verTerminada ? '30px' : '2px' }}
                  transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                />
              </button>
              <span className={`text-sm font-medium transition-colors ${verTerminada ? 'text-brand-purple' : 'text-gray-400'}`}>
                Terminada
              </span>
            </div>
          </div>

          {/* Switch indicator */}
          <div className="mt-2">
            <span className={`text-xs font-medium px-3 py-1 rounded-full ${
              verTerminada ? 'bg-brand-purple/10 text-brand-purple' : 'bg-brand-clay/20 text-brand-clay'
            }`}>
              {verTerminada ? '✨ Viendo: Figuras terminadas (pintadas a mano)' : '🏺 Viendo: Figuras base (para pintar tú mismo)'}
            </span>
          </div>
        </div>
      </section>

      {/* ── GRID DE CERÁMICA ── */}
      <section className="max-w-7xl mx-auto px-4 py-12">
        <AnimatePresence mode="wait">
          <motion.div
            key={`${tematica}-${verTerminada}`}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            {filtradas.map((item, i) => (
              <motion.div
                key={item.id}
                className="card group"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.06 }}
                whileHover={{ y: -4 }}
              >
                <div className="relative overflow-hidden aspect-square">
                  <AnimatePresence mode="wait">
                    <motion.img
                      key={verTerminada ? 'terminada' : 'base'}
                      src={verTerminada ? item.imagen_terminada : item.imagen_base}
                      alt={verTerminada
                        ? `Figura de cerámica artesanal de ${item.nombre} pintada a mano en Ibarra, Ecuador`
                        : `Figura base de cerámica sin pintar de ${item.nombre} — taller La Máscara Ibarra`
                      }
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    />
                  </AnimatePresence>
                  <div className="absolute top-3 left-3">
                    <span className="badge bg-white/90 text-brand-dark text-[10px] capitalize">
                      {item.tematica}
                    </span>
                  </div>
                  <div className={`absolute top-3 right-3 badge text-white text-[10px] ${
                    verTerminada ? 'bg-brand-purple/90' : 'bg-brand-clay/90'
                  }`}>
                    {verTerminada ? '✨ Pintada' : '🏺 Base'}
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-brand-dark text-sm mb-1">{item.nombre}</h3>
                  <p className="text-xs text-gray-500 mb-3">{item.descripcion}</p>
                  <a
                    href={`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(`¡Hola! Me interesa la figura "${item.nombre}" (${verTerminada ? 'terminada' : 'base para pintar'}). ¿Cuál es el precio?`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-whatsapp w-full justify-center text-xs py-2"
                  >
                    <MessageCircle size={13} />
                    Consultar precio
                  </a>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </section>

      {/* ── PERSONALIZADOS ── */}
      <section className="bg-gradient-to-br from-brand-purple/5 to-brand-sand/30 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="w-12 h-12 bg-brand-purple/15 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Sparkles size={24} className="text-brand-purple" />
            </div>
            <h2 className="section-title mb-3">Trabajos Personalizados</h2>
            <p className="text-gray-600 max-w-lg mx-auto">
              ¿Tu equipo de fútbol? ¿Una figura de boda? ¿Tu personaje favorito? Cotiza tu idea única.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-3 gap-6 mb-10">
            {personalizados.map((p, i) => (
              <motion.div
                key={p.id}
                className="card group overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -4 }}
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={p.imagen}
                    alt={p.titulo}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-white font-bold text-lg">{p.titulo}</h3>
                    <p className="text-white/80 text-xs">{p.descripcion}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <a
              href={`https://wa.me/${WHATSAPP}?text=${COTIZAR_MSG}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 btn-secondary text-lg px-8 py-4"
            >
              <Sparkles size={20} />
              Cotizar mi idea única
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
