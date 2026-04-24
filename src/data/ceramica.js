export const tematicas = [
  { id: 'todas',      label: 'Todas' },
  { id: 'personajes', label: 'Personajes' },
  { id: 'religioso',  label: 'Religioso' },
  { id: 'hogar',      label: 'Hogar' },
]

// imagen_base: figura en arcilla sin pintar (referencia genérica)
// imagen_terminada: foto real de la pieza terminada por Rocío
const BASE = 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&q=80'

export const ceramicas = [
  // ── PERSONAJES ───────────────────────────────────────────────
  {
    id: 1,
    nombre: 'Spider-Man (Edición Coleccionista)',
    tematica: 'personajes',
    imagen_base: BASE,
    imagen_terminada: '/Spider-man.jpeg',
    descripcion: 'Figura pintada a mano, detalle premium',
  },
  {
    id: 2,
    nombre: 'Capitán América',
    tematica: 'personajes',
    imagen_base: BASE,
    imagen_terminada: '/Capitan%20America.jpeg',
    descripcion: 'Héroe de cerámica, 20 cm',
  },
  {
    id: 3,
    nombre: 'Pequeño Groot',
    tematica: 'personajes',
    imagen_base: BASE,
    imagen_terminada: '/groot.jpeg',
    descripcion: 'Guardián de la Galaxia, cerámica 15 cm',
  },
  {
    id: 4,
    nombre: 'Baby Groot',
    tematica: 'personajes',
    imagen_base: BASE,
    imagen_terminada: '/Baby%20Groot.jpeg',
    descripcion: 'Versión bebé, edición especial',
  },
  {
    id: 5,
    nombre: 'Maestro Yoda',
    tematica: 'personajes',
    imagen_base: BASE,
    imagen_terminada: '/Yoda.jpeg',
    descripcion: 'Ícono de Star Wars, pintado a mano',
  },
  {
    id: 6,
    nombre: 'Chewbacca',
    tematica: 'personajes',
    imagen_base: BASE,
    imagen_terminada: '/Chubaka.jpeg',
    descripcion: 'El fiel co-piloto del Halcón Milenario',
  },
  {
    id: 7,
    nombre: 'Dúo de Minions',
    tematica: 'personajes',
    imagen_base: BASE,
    imagen_terminada: '/minions.jpeg',
    descripcion: 'Kevin y Stuart, inseparables',
  },
  {
    id: 8,
    nombre: 'Shrek, el Ogro Encantado',
    tematica: 'personajes',
    imagen_base: BASE,
    imagen_terminada: '/shrek.jpeg',
    descripcion: 'El ogro más querido, 18 cm',
  },
  {
    id: 9,
    nombre: 'Doctora Juguetes',
    tematica: 'personajes',
    imagen_base: BASE,
    imagen_terminada: '/Doctora%20Juguetes.jpeg',
    descripcion: 'Ideal para regalos infantiles',
  },
  {
    id: 10,
    nombre: 'Gato Tom',
    tematica: 'personajes',
    imagen_base: BASE,
    imagen_terminada: '/Gato%20Tom.jpeg',
    descripcion: 'Clásico del cartoon, 14 cm',
  },
  {
    id: 11,
    nombre: 'Figura Étnica Africana',
    tematica: 'personajes',
    imagen_base: BASE,
    imagen_terminada: '/africana.jpeg',
    descripcion: 'Pieza decorativa de autor',
  },

  // ── RELIGIOSO ────────────────────────────────────────────────
  {
    id: 12,
    nombre: 'Virgen María',
    tematica: 'religioso',
    imagen_base: BASE,
    imagen_terminada: '/virgen%20maria.jpeg',
    descripcion: 'Figura devocional, acabado fino',
  },
  {
    id: 13,
    nombre: 'Virgen María (Estilo Clásico)',
    tematica: 'religioso',
    imagen_base: BASE,
    imagen_terminada: '/Virgen%20Maria%202%20.jpeg',
    descripcion: 'Versión clásica, colores tradicionales',
  },

  // ── HOGAR ────────────────────────────────────────────────────
  {
    id: 14,
    nombre: 'Trío de Elefantes de la Suerte',
    tematica: 'hogar',
    imagen_base: BASE,
    imagen_terminada: '/elefantes.jpeg',
    descripcion: 'Símbolo de prosperidad y fortuna',
  },
  {
    id: 15,
    nombre: 'Marco Fotográfico Osito Cariñoso',
    tematica: 'hogar',
    imagen_base: BASE,
    imagen_terminada: '/oso%20cuadro.jpeg',
    descripcion: 'Portarretrato artesanal único',
  },
  {
    id: 16,
    nombre: 'Vaca Decorativa de Granja',
    tematica: 'hogar',
    imagen_base: BASE,
    imagen_terminada: '/vaca.jpeg',
    descripcion: 'Figura campestre pintada a mano',
  },
]

export const personalizados = [
  {
    id: 1,
    titulo: 'Barcelona SC',
    descripcion: 'Colección completa del equipo canario',
    imagen: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=500&q=80',
  },
  {
    id: 2,
    titulo: 'Liga de Quito',
    descripcion: 'Figuras de los ídolos universitarios',
    imagen: 'https://images.unsplash.com/photo-1522778119026-d647f0596c20?w=500&q=80',
  },
  {
    id: 3,
    titulo: 'Bodas & Aniversarios',
    descripcion: 'Figuras de novios personalizadas a pedido',
    imagen: 'https://images.unsplash.com/photo-1523438885200-e635ba2c371e?w=500&q=80',
  },
]
