/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primaryColor: '#287279',
        secondaryColor: '#9998E1',
      },
    },
  },
  plugins: [],
};
