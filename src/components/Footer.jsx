import { Link } from 'react-router-dom'
import { MapPin, Clock, Phone, Instagram, Facebook, Heart } from 'lucide-react'

const MAPS_URL = 'https://maps.google.com/?q=Juana+Atabalipa+140+Ibarra+Ecuador'
const WHATSAPP = '593993703790'
const INSTAGRAM = 'https://instagram.com/lamascara_ibarra'
const FACEBOOK = 'https://facebook.com/lamascara.ibarra'

export default function Footer() {
  return (
    <footer className="bg-brand-dark text-white mt-24">
      <div className="max-w-7xl mx-auto px-4 py-14 grid grid-cols-1 md:grid-cols-3 gap-10">

        {/* ── Marca ── */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div className="w-12 h-12 rounded-2xl overflow-hidden shadow-md shrink-0">
              <img src="/Logo.jpeg" alt="Logo La Máscara" className="w-full h-full object-cover" />
            </div>
            <div>
              <p className="font-bold text-xl" style={{ fontFamily: 'Playfair Display, serif' }}>La Máscara</p>
              <p className="text-xs text-brand-clay">Ibarra, Ecuador · Desde 1991</p>
            </div>
          </div>
          <p className="text-gray-400 text-sm leading-relaxed">
            Donde la fantasía toma forma. Disfraces cosidos a mano por Rocío Recalde, cerámica artesanal pintada pieza por pieza e insumos creativos.
          </p>
          <div className="flex gap-3 mt-5">
            <a
              href={INSTAGRAM}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-xl bg-white/10 hover:bg-brand-purple flex items-center justify-center transition-colors"
            >
              <Instagram size={16} />
            </a>
            <a
              href={FACEBOOK}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-xl bg-white/10 hover:bg-brand-orange flex items-center justify-center transition-colors"
            >
              <Facebook size={16} />
            </a>
          </div>
        </div>

        {/* ── Navegación ── */}
        <div>
          <h4 className="font-semibold text-brand-sand mb-4">Navegación</h4>
          <ul className="space-y-2 text-sm text-gray-400">
            {[
              ['/', 'Inicio'],
              ['/disfraces', 'Disfraces'],
              ['/ceramica', 'Cerámica Artesanal'],
              ['/extras', 'La Tiendita'],
            ].map(([to, label]) => (
              <li key={to}>
                <Link to={to} className="hover:text-brand-orange transition-colors">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* ── Contacto ── */}
        <div>
          <h4 className="font-semibold text-brand-sand mb-4">Encuéntranos</h4>
          <ul className="space-y-3 text-sm text-gray-400">
            <li>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-2 hover:text-brand-orange transition-colors"
              >
                <MapPin size={15} className="shrink-0 mt-0.5 text-brand-clay" />
                Juana Atabalipa 140, Ibarra, Imbabura, Ecuador
              </a>
            </li>
            <li className="flex items-start gap-2">
              <Clock size={15} className="shrink-0 mt-0.5 text-brand-clay" />
              <span>
                Lun – Sáb: 9:00 AM – 1:00 PM<br />
                <span className="pl-0">&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;2:30 PM – 6:30 PM</span>
              </span>
            </li>
            <li>
              <a
                href={`https://wa.me/${WHATSAPP}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-green-400 transition-colors"
              >
                <Phone size={15} className="text-green-400" />
                +593 99 370 3790
              </a>
            </li>
          </ul>
        </div>

      </div>

      <div className="border-t border-white/10 py-4 text-center text-xs text-gray-500">
        <span>© {new Date().getFullYear()} La Máscara · Hecho con </span>
        <Heart size={11} className="inline text-brand-orange mx-0.5" />
        <span> en Ibarra, Ecuador</span>
      </div>
    </footer>
  )
}
