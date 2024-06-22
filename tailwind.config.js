/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      animation: {
        fadeInDown: 'fade-in-down 1s ease-out',
        fadeInLeft: 'fade-in-left 0.8s ease-out forwards',
        fadeInRight: 'fade-in-right 0.8s ease-out forwards'
      },
      animationDelay: {
        '1s': '1s'
        // Add more delays if needed
      },

      keyframes: {
        'fade-in-down': {
          '0%': {
            opacity: 0,
            transform: 'translate3d(0, -100%, 0)'
          },
          '100%': {
            opacity: 1,
            transform: 'translate3d(0, 0, 0)'
          }
        },
        'fade-in-right': {
          '0%': {
            opacity: 0,
            transform: 'translate3d(100%, 0, 0)'
          },
          '100%': {
            opacity: 1,
            transform: 'translate3d(0, 0, 0)'
          }
        },
        'fade-in-left': {
          '0%': {
            opacity: 0,
            transform: 'translate3d(-100%, 0, 0)'
          },
          '100%': {
            opacity: 1,
            transform: 'translate3d(0, 0, 0)'
          }
        }
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: [
    function ({ addUtilities, theme, e }) {
      const delays = theme('animationDelay')
      const utilities = Object.entries(delays).reduce((acc, [key, value]) => {
        acc[`.${e(`animation-delay-${key}`)}`] = { animationDelay: value }
        return acc
      }, {})
      addUtilities(utilities)
    }
  ]
}
