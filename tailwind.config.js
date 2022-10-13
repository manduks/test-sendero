/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        customGradient: 'linear-gradient(251deg, #5B4BAD 0%, #252525 38.46%)',
        avatarGradient:
          'linear-gradient(172.18deg, #DCFF50 6.03%, #7B61FF 69.49%)',
        buttonGradient:
          'linear-gradient(45deg, #ff0000, #ff7300, #fffb00, #48ff00, #00ffd5, #002bff, #7a00ff, #ff00c8, #ff0000)',
      },
      boxShadow: {
        customBoxShadow: '0px 4px 4px #7B61FF',
      },
      animation: {
        buttonAnimation: 'glowing 20s linear infinite',
      },
      transitionTimingFunction: {
        buttonTransition: 'opacity .3s ease-in-out',
      },
      keyframes: {
        glowing: {
          '0%': { backgroundPosition: '0 0' },
          '50%': { backgroundPosition: '400% 0' },
          '100%': { backgroundPosition: '0 0' },
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
      },
      backgroundSize: {
        bg400: '400%',
      },
    },
    colors: {
      'azul-claro': '#AC9CFF',
      'azul-fuerte': '#7B61FF',
      'negro-claro': '#252525',
      'slate-100': '#F1F5F9',
      'slate-200': '#E2E8F0',
      'slate-300': '#CBD5E1',
      'slate-400': '#94A3B8',
      'slate-50': '#F8FAFC',
      'slate-500': '#64748B',
      'slate-600': '#475569',
      'slate-700': '#334155',
      'slate-800': '#1E293B',
      'slate-900': '#0F172A',
      gris: '#DBDBDE',
      lima: '#DCFF50',
      negro: '#000000',
      vainilla: '#EDFFA5',
    },
    fontFamily: {
      'IBM-Plex-Mono': ['IBM Plex Mono'],
      'IBM-Plex-Sans': ['IBM Plex Sans'],
      Inter: ['IBM Plex Mono'],
      Jura: ['Jura'],
    },
  },
  plugins: [],
};
