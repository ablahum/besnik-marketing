/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // primary: '#217BF4',
        muted: '#B2B7BE',
        paragraph: '#426666',
        countdown: '#7B9292',
      },
    },
    fontFamily: {
      sans: ['Inter', 'sans-serif'],
      poppins: ['Poppins', 'sans-serif'],
      lekton: 'Lekton',
    },
  },
  plugins: [],
}
