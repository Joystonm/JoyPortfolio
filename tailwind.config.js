/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xs': '475px',
      },
      colors: {
        'space-black': '#00010F',
        'neon-cyan': '#00FFFF',
        'neon-magenta': '#FF00FF',
        'electric-green': '#39FF14',
        'deep-blue': '#0066CC',
      },
      fontFamily: {
        'orbitron': ['Orbitron', 'monospace'],
        'exo': ['Exo 2', 'sans-serif'],
      },
      animation: {
        'float': 'float 15s infinite linear',
        'energy-flow': 'energyFlow 3s ease-in-out infinite',
        'scan': 'scan 2s infinite',
        'pulse-neon': 'pulse 2s ease-in-out infinite',
        'glitch': 'glitch 0.3s ease-in-out',
      },
      boxShadow: {
        'neon-cyan': '0 0 20px rgba(0, 255, 255, 0.5)',
        'neon-magenta': '0 0 20px rgba(255, 0, 255, 0.5)',
        'neon-green': '0 0 20px rgba(57, 255, 20, 0.5)',
      }
    },
  },
  plugins: [],
}
