/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    backgroundImage: {
      'img-bg-hero': "url('../assets/bg-hero.png')",
    },
    extend: {
      colors: {
      'primary-gray': '#171717',
      'secundary-gray': '#1C1C1C',
      'opacity-gray': 'rgb(94, 94, 94, 0.18);',
      'primary-green': '#1FA51B',
    }
    },
    theme: {
      screens: {
        'tablet': '640px',
        // => @media (min-width: 640px) { ... }
  
        'laptop': '1024px',
        // => @media (min-width: 1024px) { ... }
  
        'desktop': '1280px',
        // => @media (min-width: 1280px) { ... }
      },
    }
  },
  plugins: [],
}
