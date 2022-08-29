/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        offWhite: '#EDEEEE',
        gray: {
          dark: '#1E221B',
          main: '#36363C',
        },
        yellow: {
          dark: '#A2C139',
          main: '#CAF042',
        },
      },
    },
  },
  plugins: [],
}
