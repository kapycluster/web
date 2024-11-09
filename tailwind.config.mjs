import defaultTheme from 'tailwindcss/defaultTheme'

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Geist Sans', ...defaultTheme.fontFamily.sans],
        serif: ['Crimson Text', ...defaultTheme.fontFamily.serif],
        mono: ['Geist Mono', ...defaultTheme.fontFamily.mono],
      },
      height: {
        headerHeight: 'var(--header-height)',
      },
      colors: {
        base: 'var(--base)',
        brand: 'var(--brand)',
        onBrand: 'var(--on-brand)',
        highlight: 'var(--highlight)',
        surface: 'var(--surface)',
        text: 'var(--text)',
        subtle: 'var(--subtle)',
      },
    },
  },
  plugins: [],
}
