/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily: {
      sans: ['var(--font-inter)', 'sans-serif'],
    },
    extend: {
      colors: {
        'rose': '#FF0042',
        'darker': '#111213',
        'dark': '#1d1e20',
        'light-dark': '#5e636e'
      },
      backgroundImage: {
        'hero-image': "url('/hero-bg.png')",
      },
      fontFamily: {
        mono: ['var(--font-plex-mono)', 'monospace'],
      },
      boxShadow: {
        button: '0px 0px 18px 7px rgba(255,0,68, .2)',
      },
    },
  },
  plugins: [],
}
