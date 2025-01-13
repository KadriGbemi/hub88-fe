/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#171743',
        secondary: '#282832',
        tetiary: '#b0e0e6',
        red: '#ff3b3b',
        danger: '#c34242',
      },
      backgroundColor: {
        primary: '#e9f02e',
        secondary: '#9da093',
        danger: '#c34242',
        tetiary: '#b0e0e6',
      },
      fontFamily: {
        grotesk: ['Space Grotesk'],
      },
    },
  },
  plugins: [],
}
