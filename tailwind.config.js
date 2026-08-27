const {theme} = require('@sanity/demo/tailwind')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './intro-template/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    ...theme,
    extend: {
      ...theme.extend,
      // The Sanity demo preset uses a Fibonacci-like spacing scale intended for
      // its showcase pages. Keep its typography additions, but restore
      // Tailwind's standard spacing so utilities such as gap-8 and py-12 have
      // their expected, framework-default values throughout the public site.
      spacing: {},
    },
    // Overriding fontFamily to use @next/font loaded families
    fontFamily: {
      mono: 'var(--font-mono)',
      sans: 'var(--font-sans)',
      serif: 'var(--font-serif)',
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
