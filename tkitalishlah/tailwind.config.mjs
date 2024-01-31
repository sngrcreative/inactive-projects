import defaultTheme from 'tailwindcss/defaultTheme'

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Patrick Hand"', ...defaultTheme.fontFamily.sans],
        heading: ['Chewy', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        brand: {
          light: '#F9ECD7',
          dark: '#48142C',
        },
      },
    },
  },
  plugins: [],
}
