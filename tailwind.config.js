/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {

    extend: {
      fontFamily: {
        'sawarabi': ['"Sawarabi Mincho", serif'],
        'garamond': ['"EB Garamond", serif'],
        'hack': ['"Hack", monospace'],
        'poppins': ['"Poppins", sans serif']
      }
    },
  },
  corePlugins: {
    preflight: false
  },
  plugins: [],
}

