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
          cream: '#FFF6DE',
          turquoise: '#8BDFDD',
          coral: '#F48F68',
          yellow: '#FFE394',
          dark: '#121C1C', // Dark modern teal-grey background
          darkcard: '#1B2A2A', // Card dark color
        }
      },
      fontFamily: {
        sans: ['Poppins', 'Inter', 'sans-serif'],
        sora: ['Sora', 'sans-serif'],
      },
      animation: {
        'float-slow': 'float 8s ease-in-out infinite',
        'float-medium': 'float 5s ease-in-out infinite',
        'float-fast': 'float 3s ease-in-out infinite',
        'spin-slow': 'spin 20s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        }
      }
    },
  },
  plugins: [],
}
