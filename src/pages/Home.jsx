import { useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Shirt, Palette, ShoppingBag, Scissors, ArrowRight, Sparkles, Heart, MessageCircle } from 'lucide-react'
import { ceramicas } from '../data/ceramica'

const WHATSAPP = '593993703790'
const COTIZAR_MSG = encodeURIComponent('¡Hola Rocío! Me gustaría cotizar algo especial.')

const ANO_FUNDACION = 1991
const anosDeHistoria = new Date().getFullYear() - ANO_FUNDACION

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show:   { opacity: 1, y: 0 },
}

const stagger = {
  show: { transition: { staggerChildren: 0.12 } },
}

const secciones = [
  {
    to: '/disfraces',
    icon: Shirt,
    titulo: 'Disfraces',
    subtitulo: 'Alquiler de disfraces',
    desc: 'Trajes típicos, navideños, superhéroes y más. Cosidos a mano por Rocío para tu evento.',
    color: 'from-brand-orange to-orange-400',
    img: 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=600&q=80',
  },
  {
    to: '/ceramica',
    icon: Palette,
    titulo: 'Cerámica Artesanal',
    subtitulo: 'Taller & Venta',
    desc: 'Figuras únicas pintadas a mano por Rocío. Vaciadas, horneadas y decoradas pieza por pieza.',
    color: 'from-brand-purple to-purple-400',
    img: 'https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=600&q=80',
  },
  {
    to: '/extras',
    icon: ShoppingBag,
    titulo: 'La Tiendita',
    subtitulo: 'Insumos & Accesorios',
    desc: 'Pinturas, pinceles, arcilla, maquillaje artístico y accesorios para tu creatividad.',
    color: 'from-brand-clay to-yellow-500',
    img: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=600&q=80',
  },
]

export default function Home() {
  const [heroImgs] = useState(() => {
    const shuffled = [...ceramicas].sort(() => Math.random() - 0.5)
    return shuffled.slice(0, 4)
  })

  return (
    <div className="pt-16">

      {/* ══════════════════════════════════════════════════
          HERO
      ══════════════════════════════════════════════════ */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-cream via-[#FDFBF7] to-purple-50/40 -z-10" />
        <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-brand-orange/10 rounded-full blur-3xl -z-10" />
        <div className="absolute bottom-0 left-10 w-[400px] h-[400px] bg-brand-purple/10 rounded-full blur-3xl -z-10" />

        <div className="max-w-7xl mx-auto px-4 py-20 grid md:grid-cols-2 gap-12 items-center">

          {/* ── Texto ── */}
          <motion.div variants={stagger} initial="hidden" animate="show">
            <motion.div variants={fadeUp} className="flex items-center gap-2 mb-4">
              <span className="badge bg-brand-orange/15 text-brand-orange">
                <Sparkles size={12} className="inline mr-1" />
                Ibarra, Ecuador · Desde {ANO_FUNDACION}
              </span>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-brand-dark leading-[1.1] mb-6"
            >
              La Máscara:{' '}
              <span className="bg-gradient-to-r from-brand-orange to-brand-purple bg-clip-text text-transparent">
                Donde la fantasía
              </span>{' '}
              toma forma
            </motion.h1>

            <motion.p variants={fadeUp} className="text-lg text-gray-600 mb-8 max-w-md leading-relaxed">
              Disfraces cosidos a mano, cerámica artesanal pintada pieza por pieza e insumos creativos. Todo en el corazón de Ibarra, con el sello de Rocío Recalde.
            </motion.p>

            {/* 4 botones Hero */}
            <motion.div variants={fadeUp} className="flex flex-wrap gap-3">
              <Link to="/disfraces" className="btn-primary flex items-center gap-2">
                <Shirt size={16} /> Ver Disfraces
              </Link>
              <Link to="/ceramica" className="btn-secondary flex items-center gap-2">
                <Palette size={16} /> Ver Cerámicas
              </Link>
              <Link to="/extras" className="btn-emerald flex items-center gap-2">
                <ShoppingBag size={16} /> La Tiendita
              </Link>
              <a
                href={`https://wa.me/${WHATSAPP}?text=${COTIZAR_MSG}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp"
              >
                <MessageCircle size={16} />
                Escríbenos
              </a>
            </motion.div>

            {/* Stats */}
            <motion.div variants={fadeUp} className="flex gap-8 mt-10">
              {[
                ['123+', 'Disfraces'],
                [`${anosDeHistoria}`, 'Años de trayectoria'],
              ].map(([num, label]) => (
                <div key={label}>
                  <p className="text-2xl font-bold text-brand-orange">{num}</p>
                  <p className="text-xs text-gray-500">{label}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* ── Collage fotos estilo local ── */}
          <motion.div
            className="relative hidden md:block"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="rounded-3xl overflow-hidden h-52 shadow-xl mt-8">
                  <img
                    src={heroImgs[0]?.imagen_terminada}
                    alt={heroImgs[0]?.nombre}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="rounded-3xl overflow-hidden h-44 shadow-xl">
                  <img
                    src={heroImgs[1]?.imagen_terminada}
                    alt={heroImgs[1]?.nombre}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="space-y-4">
                <div className="rounded-3xl overflow-hidden h-44 shadow-xl">
                  <img
                    src={heroImgs[2]?.imagen_terminada}
                    alt={heroImgs[2]?.nombre}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="rounded-3xl overflow-hidden h-52 shadow-xl">
                  <img
                    src={heroImgs[3]?.imagen_terminada}
                    alt={heroImgs[3]?.nombre}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Badge flotante */}
            <motion.div
              className="absolute -bottom-4 -left-4 bg-white rounded-2xl shadow-xl px-4 py-3 flex items-center gap-2"
              animate={{ y: [0, -6, 0] }}
              transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
            >
              <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-brand-orange to-brand-purple flex items-center justify-center">
                <Scissors size={14} className="text-white" />
              </div>
              <div>
                <p className="text-xs font-bold text-brand-dark">Hecho a mano</p>
                <p className="text-[10px] text-gray-400">Cerámicas y Disfraces</p>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          EL LEGADO DE ROCÍO  —  Verde Esmeralda suave
      ══════════════════════════════════════════════════ */}
      <section className="py-20 relative overflow-hidden" style={{ backgroundColor: '#EAF5EA' }}>
        {/* destellos decorativos sutiles */}
        <div className="absolute top-0 right-0 w-72 h-72 bg-emerald-200/50 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-emerald-100/60 rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">

            {/* ── Foto de Rocío ── */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="rounded-[2rem] overflow-hidden shadow-2xl aspect-[4/5] max-w-sm mx-auto ring-4 ring-emerald-300/50">
                <img
                  src="/Rocio.jpeg"
                  alt="Rocío Recalde, fundadora de La Máscara"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-emerald-300/30 rounded-full blur-xl" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-emerald-200/40 rounded-full blur-xl" />

              {/* Badge flotante */}
              <motion.div
                className="absolute bottom-6 -right-4 md:-right-8 bg-white rounded-2xl shadow-xl p-3 flex items-center gap-2"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-600 to-emerald-400 flex items-center justify-center">
                  <Heart size={16} className="text-white fill-white" />
                </div>
                <div>
                  <p className="text-xs font-bold text-brand-dark">Hecho con pasión</p>
                  <p className="text-[10px] text-emerald-700 font-medium">Desde {ANO_FUNDACION}</p>
                </div>
              </motion.div>
            </motion.div>

            {/* ── Texto ── */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="badge bg-emerald-200 text-emerald-800 mb-4 inline-block tracking-wide">
                El Legado
              </span>
              <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-6 text-emerald-900">
                El Legado de{' '}
                <span className="text-emerald-600">Rocío</span>
              </h2>

              <div className="space-y-4 text-emerald-800 leading-relaxed">
                <p className="text-lg">
                  Detrás de cada figura, cada disfraz y cada pincelada, está <strong className="text-emerald-950">Rocío Recalde</strong>, quien fundó La Máscara con sus propias manos en {ANO_FUNDACION}.
                </p>
                <p>
                  Rocío es una <strong className="text-emerald-950">costurera experta</strong>: la gran mayoría de nuestras prendas son creaciones propias, confeccionadas y cosidas con precisión y dedicación en nuestro taller.
                </p>
                <p>
                  También es <strong className="text-emerald-950">artista de la cerámica</strong>: cada figura pasa por un proceso de vaciado en molde, pulido minucioso, horneado y pintura artística a mano, convirtiéndola en una pieza única.
                </p>
              </div>

              {/* Highlights */}
              <div className="grid grid-cols-2 gap-3 mt-8">
                {[
                  { icon: '🧵', label: 'Costurera profesional', sub: 'Gran mayoría: creaciones propias' },
                  { icon: '🏺', label: 'Artista de cerámica', sub: 'Vaciado, horneado y pintado' },
                  { icon: '✨', label: 'Personalización', sub: 'Tu idea, su arte' },
                  { icon: '📍', label: 'Ibarra, Ecuador', sub: `${anosDeHistoria} años de trayectoria` },
                ].map(({ icon, label, sub }) => (
                  <div key={label} className="bg-white/70 backdrop-blur rounded-2xl p-3 flex items-center gap-2 border border-emerald-200">
                    <span className="text-2xl">{icon}</span>
                    <div>
                      <p className="font-semibold text-emerald-900 text-sm">{label}</p>
                      <p className="text-xs text-emerald-600">{sub}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          3 ACCESOS DIRECTOS
      ══════════════════════════════════════════════════ */}
      <section className="py-20 bg-brand-cream">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            className="text-center mb-14"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title mb-3">¿Qué estás buscando?</h2>
            <p className="text-gray-500 max-w-md mx-auto">Explora nuestros tres mundos creativos</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {secciones.map(({ to, icon: Icon, titulo, subtitulo, desc, color, img }, i) => (
              <motion.div
                key={to}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12 }}
                whileHover={{ y: -6 }}
                className="card group cursor-pointer overflow-hidden"
              >
                <Link to={to} className="block">
                  <div className="relative h-52 overflow-hidden">
                    <img
                      src={img}
                      alt={titulo}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t ${color} opacity-60`} />
                    <div className="absolute top-4 left-4">
                      <div className="w-10 h-10 bg-white/20 backdrop-blur rounded-2xl flex items-center justify-center">
                        <Icon size={20} className="text-white" />
                      </div>
                    </div>
                    <div className="absolute bottom-4 left-4">
                      <span className="text-[10px] font-semibold text-white/80 uppercase tracking-wider">{subtitulo}</span>
                      <h3 className="text-white text-2xl font-bold">{titulo}</h3>
                    </div>
                  </div>
                  <div className="p-5">
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">{desc}</p>
                    <div className={`flex items-center gap-1.5 text-sm font-semibold bg-gradient-to-r ${color} bg-clip-text text-transparent`}>
                      Explorar <ArrowRight size={14} className="text-brand-orange" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          CTA FINAL
      ══════════════════════════════════════════════════ */}
      <section className="py-20 bg-brand-dark relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-brand-purple/30 via-transparent to-brand-orange/20" />
        <motion.div
          className="max-w-3xl mx-auto px-4 text-center relative z-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            ¿Tienes una idea especial?
          </h2>
          <p className="text-gray-300 text-lg mb-8">
            Cuéntale a Rocío tu visión y la convierte en realidad. Confecciona disfraces a medida y crea cerámica personalizada para cualquier ocasión.
          </p>
          <a
            href={`https://wa.me/${WHATSAPP}?text=${COTIZAR_MSG}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-bold px-8 py-4 rounded-2xl shadow-xl transition-all duration-200 hover:scale-105 text-lg"
          >
            <MessageCircle size={22} />
            Escríbele a Rocío
          </a>
        </motion.div>
      </section>

    </div>
  )
}
