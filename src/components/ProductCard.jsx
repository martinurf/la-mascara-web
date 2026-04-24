import { motion } from 'framer-motion'
import { MessageCircle, CheckCircle, XCircle } from 'lucide-react'

const WHATSAPP = '593993703790'

function buildWALink(nombre, tipo = 'alquilar') {
  const msg = encodeURIComponent(`¡Hola! Me interesa ${tipo} el disfraz "${nombre}". ¿Está disponible?`)
  return `https://wa.me/${WHATSAPP}?text=${msg}`
}

export default function ProductCard({ item, tipo = 'disfraz', delay = 0 }) {
  const isDisponible = item.disponible !== false

  const waMsg = item.waMsgPersonalizado
    ? encodeURIComponent(item.waMsgPersonalizado)
    : tipo === 'disfraz'
      ? encodeURIComponent(`¡Hola! Quiero alquilar "${item.nombre}". ¿Está disponible?`)
      : encodeURIComponent(`¡Hola! Me interesa "${item.nombre}". ¿Me puede dar información?`)

  return (
    <motion.div
      className="card group"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay }}
      whileHover={{ y: -4 }}
    >
      <div className="relative overflow-hidden aspect-[4/5]">
        <img
          src={item.imagen}
          alt={item.nombre}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        {/* Availability badge */}
        <div className={`absolute top-3 right-3 flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold backdrop-blur-sm ${
          isDisponible ? 'bg-green-500/90 text-white' : 'bg-red-500/90 text-white'
        }`}>
          {isDisponible
            ? <><CheckCircle size={11} /> Disponible</>
            : <><XCircle size={11} /> Ocupado</>}
        </div>
        {/* Category badge */}
        <div className="absolute top-3 left-3">
          <span className="badge bg-white/90 text-brand-dark backdrop-blur-sm capitalize">
            {item.categoria}
          </span>
        </div>
      </div>

      <div className="p-4">
        <h3 className="font-semibold text-brand-dark mb-3 leading-tight">{item.nombre}</h3>
        <a
          href={`https://wa.me/${WHATSAPP}?text=${waMsg}`}
          target="_blank"
          rel="noopener noreferrer"
          className={`btn-whatsapp w-full justify-center ${!isDisponible ? 'opacity-50 pointer-events-none' : ''}`}
        >
          <MessageCircle size={15} />
          Lo quiero alquilar
        </a>
      </div>
    </motion.div>
  )
}
