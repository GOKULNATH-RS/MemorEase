/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif']
      }
    },
    colors: {
      transparent: 'transparent',
      black: '#030712',
      white: '#f9fafb',
      primary: '#7FC7D9',
      // secondary: '#070F2B'
      secondary: '#060f27'
    }
  },
  plugins: []
}
