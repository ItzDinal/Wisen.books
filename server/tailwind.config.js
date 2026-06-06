/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./views/**/*.ejs'],
  theme: {
    extend: {
      colors: {
        wisen: {
          black: '#0B090A',
          navy: '#161A1D',
          darkred: '#660708',
          primary: '#A4161A',
          accent: '#BA181B',
          bright: '#E5383B',
          taupe: '#B1A7A6',
          gray: '#D3D3D3',
          soft: '#F5F3F4',
          white: '#FFFFFF'
        }
      },

      fontFamily: {
        sans: ['Poppins', 'ui-sans-serif', 'system-ui', 'sans-serif']
      },

      boxShadow: {
        card: '0 28px 80px rgba(11, 9, 10, 0.08)'
      },

      keyframes: {
        fadeUp: {
          '0%': {
            opacity: '0',
            transform: 'translateY(18px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)'
          }
        }
      },

      animation: {
        fadeUp: 'fadeUp 0.8s ease-out both'
      }
    }
  },

  plugins: []
};