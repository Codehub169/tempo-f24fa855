/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-hue': '#FF6B6B', // Example vibrant pop color (Hue)
        'brand-neu-light': '#FDFDFC', // Example light neutral (Neu)
        'brand-neu-dark': '#333333', // Example dark neutral for text (Neu)
        'brand-neu-bg': '#F0F0F0', // Example neutral background
      },
      fontFamily: {
        'sans': ['Inter', 'sans-serif'], // Example: Using Inter as primary sans-serif
        // Add more specific fonts if needed, e.g., a display font with personality
      },
      // Define custom animations or transitions if needed for scroll effects etc.
      // For example:
      // animation: {
      //   'reveal': 'reveal 1s ease-out forwards',
      // },
      // keyframes: {
      //   reveal: {
      //     '0%': { opacity: '0', transform: 'translateY(20px)' },
      //     '100%': { opacity: '1', transform: 'translateY(0)' },
      //   },
      // },
    },
  },
  plugins: [],
}
