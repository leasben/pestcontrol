/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*html",
    "../src/**/*.js",
  ],
  theme: {
    screens: {
      sm: '640px',
      md: '769px',
      lg: '1024px',
      xl: '1180px',
    },
    fontFamily: {
      sans: ['sans-serif'],
      serif: ['Times New Roman', 'ui-serif'],
      'montserrat-extra-light': ['Montserrat ExtraLight', 'sans-serif'],
      'montserrat-light': ['Montserrat Light', 'sans-serif'],
      'montserrat-regular': ['Montserrat Regular', 'sans-serif'],
      'montserrat-medium': ['Montserrat Medium', 'sans-serif'],
      'montserrat-bold': ['Montserrat Bold', 'sans-serif'],
    },
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        blue: '#0e428a',
        darkGray: '#4b4b4b',
        darkBlue: '#08265A',
        green: '#07522c',
        red: '#ff0000',
        gunmetal: '#1A1B1F',
        lilac: '#b3c2da',
      },
    },
  },
  plugins: [],
}


