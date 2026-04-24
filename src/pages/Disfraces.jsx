import { useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Search, Filter, ClipboardCheck, MessageCircle } from 'lucide-react'
import { disfraces, categorias, edades } from '../data/disfraces'
import ProductCard from '../components/ProductCard'

const WHATSAPP = '593993703790'
const COTIZAR_MSG = encodeURIComponent('¡Hola Rocío! Quisiera consultar sobre un disfraz especial para mí.')

const requisitos = [
  { num: '01', titulo: 'Reserva con anticipación', desc: 'Contáctanos por WhatsApp para verificar disponibilidad y reservar tu disfraz.' },
  { num: '02', titulo: 'Deja un depósito', desc: 'Se requiere un depósito de garantía que es devuelto al entregar el disfraz en buen estado.' },
  { num: '03', titulo: 'Duración del alquiler', desc: 'El alquiler estándar es de 24 horas. Podemos coordinar tiempos especiales.' },
  { num: '04', titulo: 'Entrega en perfecto estado', desc: 'El disfraz debe regresarse limpio. Ofrecemos servicio de limpieza por un costo adicional.' },
]

export default function Disfraces() {
  const [busqueda, setBusqueda] = useState('')
  const [edadFiltro, setEdadFiltro] = useState('todos')
  const [categoriaFiltro, setCategoriaFiltro] = useState('todos')

  const filtrados = useMemo(() => {
    return disfraces.filter(d => {
      const matchEdad = edadFiltro === 'todos' || d.edad === edadFiltro
      const matchCat = categoriaFiltro === 'todos' || d.categoria === categoriaFiltro
      const matchBusqueda = d.nombre.toLowerCase().includes(busqueda.toLowerCase()) ||
                            d.categoria.toLowerCase().includes(busqueda.toLowerCase())
      return matchEdad && matchCat && matchBusqueda
    })
  }, [busqueda, edadFiltro, categoriaFiltro])

  return (
    <div className="pt-16">
      {/* ── HEADER ── */}
      <section className="bg-gradient-to-br from-orange-50 to-brand-cream py-16">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl"
          >
            <span className="badge bg-brand-orange/15 text-brand-orange mb-3 inline-block">Alquiler de Disfraces</span>
            <h1 className="section-title mb-4">
              Encuentra tu{' '}
              <span className="text-brand-orange">disfraz perfecto</span>
            </h1>
            <p className="text-gray-600 text-lg">
              Más de 200 disfraces disponibles. Superhéroes, terror, época, religioso, infantil y tradición ecuatoriana.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── BUSCADOR & FILTROS ── */}
      <section className="bg-white sticky top-16 z-30 shadow-sm border-b border-brand-sand/30">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row gap-3 items-start md:items-center">
            {/* Search */}
            <div className="relative flex-1 max-w-sm">
              <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Buscar disfraz..."
                value={busqueda}
                onChange={e => setBusqueda(e.target.value)}
                className="w-full pl-9 pr-4 py-2.5 rounded-2xl border-2 border-brand-sand/60 focus:border-brand-orange focus:outline-none text-sm transition-colors"
              />
            </div>

            {/* Edad filter */}
            <div className="flex items-center gap-1.5">
              <Filter size={14} className="text-gray-400" />
              <div className="flex gap-1">
                {edades.map(({ id, label }) => (
                  <button
                    key={id}
                    onClick={() => setEdadFiltro(id)}
                    className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all duration-150 ${
                      edadFiltro === id
                        ? 'bg-brand-orange text-white shadow-sm'
                        : 'bg-brand-sand/40 text-gray-600 hover:bg-brand-sand'
                    }`}
                  >
                    {label}
                  </button>
                ))}
              </div>
            </div>

            {/* Results count */}
            <p className="text-xs text-gray-400 ml-auto">
              {filtrados.length} resultado{filtrados.length !== 1 ? 's' : ''}
            </p>
          </div>

          {/* Category pills */}
          <div className="flex gap-2 mt-3 overflow-x-auto pb-1 scrollbar-hide">
            {categorias.map(({ id, label }) => (
              <button
                key={id}
                onClick={() => setCategoriaFiltro(id)}
                className={`whitespace-nowrap px-4 py-1.5 rounded-full text-xs font-semibold transition-all duration-150 shrink-0 ${
                  categoriaFiltro === id
                    ? 'bg-brand-purple text-white shadow-sm'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── GRID DE PRODUCTOS ── */}
      <section className="max-w-7xl mx-auto px-4 py-12">
        <AnimatePresence mode="popLayout">
          {filtrados.length > 0 ? (
            <motion.div
              key="grid"
              className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-4"
              layout
            >
              {filtrados.map((item, i) => (
                <ProductCard key={item.id} item={item} tipo="disfraz" delay={i * 0.05} />
              ))}
            </motion.div>
          ) : (
            <motion.div
              key="empty"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="text-center py-20"
            >
              <p className="text-5xl mb-4">🎭</p>
              <h3 className="text-xl font-semibold text-brand-dark mb-2">No encontramos ese disfraz</h3>
              <p className="text-gray-500 mb-6">Intenta con otra búsqueda o contáctanos directamente</p>
              <a
                href={`https://wa.me/${WHATSAPP}?text=${COTIZAR_MSG}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp inline-flex"
              >
                <MessageCircle size={16} />
                Consultar disponibilidad
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </section>

      {/* ── REQUISITOS DE ALQUILER ── */}
      <section className="bg-brand-dark py-16">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="w-12 h-12 bg-brand-orange/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <ClipboardCheck size={24} className="text-brand-orange" />
            </div>
            <h2 className="text-3xl font-bold text-white mb-2">Requisitos de Alquiler</h2>
            <p className="text-gray-400">Todo lo que necesitas saber para alquilar tu disfraz</p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {requisitos.map(({ num, titulo, desc }, i) => (
              <motion.div
                key={num}
                className="bg-white/5 backdrop-blur rounded-3xl p-6 border border-white/10 hover:border-brand-orange/50 transition-colors"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <span className="text-4xl font-bold text-brand-orange/30 block mb-3">{num}</span>
                <h4 className="text-white font-semibold mb-2">{titulo}</h4>
                <p className="text-gray-400 text-sm leading-relaxed">{desc}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="text-center mt-10"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <a
              href={`https://wa.me/${WHATSAPP}?text=${COTIZAR_MSG}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-bold px-8 py-3.5 rounded-2xl transition-all hover:scale-105"
            >
              <MessageCircle size={18} />
              Reservar mi disfraz
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
