/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      '2xsm': '400px',
      // => @media (min-width: 400px) { ... }

      'xsm': '550px',
      // => @media (min-width: 550px) { ... }

      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {},
  },
  variants: {
    lineClamp: ['responsive', 'hover']
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
  darkMode: "class",
}