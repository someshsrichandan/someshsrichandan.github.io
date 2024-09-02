export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'small': "url('/assets/background-small.web')",
        'big': "url('/assets/background-medium.webp')",
        'profile': "url('/assets/som.png')",
      },
      fontFamily: {
        'primary': ['Orbitron'],
        'secondary': ['Electrolize'],
      },
      keyframes: {
        'sine-wave': {
          '0%': { transform: 'translateX(10px) rotate(45deg)', opacity: 1, },
          '50%': { transform: 'translateX(130px) rotate(45deg)', opacity: 0 },
          '100%': { transform: 'translateX(160px) rotate(45deg)', opacity: 0 },
        },
      },
      animation: {
        'sine-wave': 'sine-wave 1.5s infinite cubic-bezier(0.45, 0, 0.55, 1)',
      },
      backgroundOpacity: {
        'small-opacity': '0.5',
        'big-opacity': '0.5',
      },
    },
  },
  plugins: [],
}
