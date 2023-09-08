/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#0e3a5d',
        secondary: '#5d4f44',
        black: '#000',
        white: '#fff',
        medium: '#6e6969',
        light: '#f8f4f4',
        dark: '#0c0c0c',
        danger: 'rgba(217,45,15,0.7791491596638656)',
        yellow: '#ffe66d',
        green: '#00ad84',
        primaryOpacity: 'rgba(14,58,93,0.7399334733893557)',
      },
      backgroundImage: {
        stockholm: 'url(/src/assets/background.jpg)',
        logo: 'url(/src/assets/logo.png)',
      },
    },
  },
  plugins: [],
};
