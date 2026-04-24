/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          orange:   '#F26419',
          purple:   '#864AF9',
          sand:     '#E8D5B0',
          clay:     '#C9956C',
          cream:    '#FDFBF7',   // ivory suave — reemplaza blanco puro
          dark:     '#1A1A2E',
          emerald:  '#1D5C45',   // verde esmeralda sección Legado
        }
      },
      fontFamily: {
        display: ['Georgia', 'serif'],
        body: ['system-ui', 'sans-serif'],
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
        '4xl': '2rem',
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':      { transform: 'translateY(-8px)' },
        }
      }
    },
  },
  plugins: [],
}
