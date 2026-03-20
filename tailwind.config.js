/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Premium Jeshfield Global Color Palette
        primary: {
          DEFAULT: '#1B4D3E', // Deep forest green
          light: '#2D6A56',
          dark: '#0F2E26',
        },
        accent: {
          DEFAULT: '#D4AF37', // Rich gold
          light: '#E8C547',
          dark: '#B8941F',
        },
        dark: {
          DEFAULT: '#0D0D0D', // Near black
          light: '#1A1A1A',
          lighter: '#2D2D2D',
        },
        cream: {
          DEFAULT: '#FAF8F5', // Soft cream white
          dark: '#F0EDE8',
        },
      },
      fontFamily: {
        heading: ['var(--font-montserrat)', 'Montserrat', 'sans-serif'],
        body: ['var(--font-poppins)', 'Poppins', 'sans-serif'],
      },
      animation: {
        'gradient': 'gradient 8s ease infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'slide-up': 'slideUp 0.6s ease-out forwards',
        'fade-in': 'fadeIn 0.5s ease-out forwards',
      },
      keyframes: {
        gradient: {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 20px rgba(212, 175, 55, 0.3)' },
          '100%': { boxShadow: '0 0 40px rgba(212, 175, 55, 0.6)' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(135deg, #0D0D0D 0%, #1B4D3E 50%, #0D0D0D 100%)',
        'gold-gradient': 'linear-gradient(135deg, #D4AF37 0%, #E8C547 50%, #D4AF37 100%)',
        'glass': 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)',
      },
    },
  },
  plugins: [],
}
