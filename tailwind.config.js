import defaultTheme from 'tailwindcss/defaultTheme'

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      container: {
        padding: '1rem',
        center: true,
      },
      fontFamily: {
        dmSans: ['"DM Sans", sans-serif', defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
}
