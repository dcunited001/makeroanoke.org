/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
    './node_modules/flowbite/**/*.js',
  ],
  theme: {
    extend: {
      textDecoration: ['active'],
      transitionProperty: {
        width: 'width',
      },
      colors: {
        accent: {
          1: 'hsl(288 95.8% 90.6%)',
          2: 'hsl(168 83.8% 78.2%)',
        },
        bkg: 'hsl(210 40% 98%)',
        content: 'hsl(217 32.6% 17.5%)',

        // NOTE: use with bg-navy, etc
        white: 'hsl(var(--color-white))',
        navy: 'hsl(var(--color-navy))',
        wood: 'hsl(var(--color-wood))',
        metal: 'hsl(var(--color-metal))',
        fabric: 'hsl(var(--color-fabric))',
        tronics: 'hsl(var(--color-tronics))',
        printing: 'hsl(var(--color-printing))',

        // TODO: set a default for alpha value
        // white: 'hsl(var(--color-white)) / <alpha-value>',
        // navy: 'hsl(var(--color-navy)) / <alpha-value>',
        // wood: 'hsl(var(--color-wood)) / <alpha-value>',
        // metal: 'hsl(var(--color-metal)) / <alpha-value>',
        // fabric: 'hsl(var(--color-fabric)) / <alpha-value>',
        // tronics: 'hsl(var(--color-tronics)) / <alpha-value>',
        // printing: 'hsl(var(--color-printing)) / <alpha-value>'
      },

      fontFamily: {
        sans: [
          'Fira Sans',
          'ui-sans-serif',
          'system-ui',
          '-apple-system',
          'system-ui',
          'Segoe UI',
          'Roboto',
          'Helvetica Neue',
          'Arial',
          'Noto Sans',
          'sans-serif',
          'Apple Color Emoji',
          'Segoe UI Emoji',
          'Segoe UI Symbol',
          'Noto Color Emoji',
        ],
        body: [
          'Fira Sans',
          'ui-sans-serif',
          'system-ui',
          '-apple-system',
          'system-ui',
          'Segoe UI',
          'Roboto',
          'Helvetica Neue',
          'Arial',
          'Noto Sans',
          'sans-serif',
          'Apple Color Emoji',
          'Segoe UI Emoji',
          'Segoe UI Symbol',
          'Noto Color Emoji',
        ],
        mono: [
          'ui-monospace',
          'SFMono-Regular',
          'Menlo',
          'Monaco',
          'Consolas',
          'Liberation Mono',
          'Courier New',
          'monospace',
        ],
      },
    },
  },
  plugins: [
    require('flowbite/plugin'),
    require('flowbite-typography'),
    require('tailwind-scrollbar')({ nocompatible: true }),

    // fetching dark mode from user's preferences
    // https://www.youtube.com/watch?v=WTchW0LdWL0
    ({ addComponents, theme }) => {
      addComponents({
        ':root': {
          '--color-bkg': '210deg 40% 98%',
          '--color-content': '217deg 32.6% 17.5%',
          '--color-accent1': '288deg 95.8% 90.6%',
          '--color-accent2': '186deg 83.8% 78.2%',
          '--color-white': '0deg 0% 100%',
          '--color-navy': '222deg 75% 15%',
          '--color-wood': '24deg 100% 55%',
          '--color-metal': '220deg 94% 51%',
          '--color-fabric': '189deg 76% 53%',
          '--color-tronics': '298deg 62% 47%',
          '--color-printing': '99deg 72% 59%',
        },
        // TODO: set color variables for dark theme
        '@media (prefers-color-scheme:dark)': {
          ':root': {
            '--color-bkg': '217deg 32.6% 17.5%',
            '--color-content': '210deg 40% 98%',
            '--color-accent1': '288deg 95.8% 60.6%',
            '--color-accent2': '186deg 83.8% 48.2%',
            '--color-white': '0deg 0% 100%',
            '--color-navy': '222deg 75% 15%',
            '--color-wood': '24deg 100% 55%',
            '--color-metal': '220deg 94% 51%',
            '--color-fabric': '189deg 76% 53%',
            '--color-tronics': '298deg 62% 47%',
            '--color-printing': '99deg 72% 59%',
          },
        },
      });
    },
  ],
};
