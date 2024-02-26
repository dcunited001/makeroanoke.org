/** @type {import('tailwindcss').Config} */

// base-color:        #BEA812   hsl(52, 83%, 41%)
// accent-color:                hsl(52, 100%, 81%)
//                    #BE3012   hsl(10, 83%, 41%)   ACTUAL
// text-color:        #051831   hsl(214, 81%, 11%)
// background-color:            hsl(215, 46%, 69%)
//                    #FEFAEC   hsl(47, 90%, 96%)   ACTUAL
// border-color:                hsla(215, 49%, 8%, 0.5)

const baseColor = '52deg 83% 41%';
const accent2Color = '10deg 83% 41%';
const textColor = '214deg 81% 11%';
const bkgColor = '47deg 90% 96%';
// const borderColor = 'hsla(215, 49%, 8%, 0.5)';

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

      colors: {
        primary: 'hsl(var(--color-primary))',
        accent: {
          1: 'hsl(var(--color-accent1))',
          2: 'hsl(var(--color-accent2))',
        },
        bkg: 'hsl(var(--color-bkg))',
        content: 'hsl(var(--color-content))',

        // NOTE: use with bg-navy, etc
        white: 'hsl(var(--color-white))',
        navy: 'hsl(var(--color-navy))',
        wood: 'hsl(var(--color-wood))',
        metal: 'hsl(var(--color-metal))',
        fabric: 'hsl(var(--color-fabric))',
        electronics: 'hsl(var(--color-electronics))',
        printing: 'hsl(var(--color-printing))',

        // TODO: set a default for alpha value
        // white: 'hsl(var(--color-white)) / <alpha-value>',
        // navy: 'hsl(var(--color-navy)) / <alpha-value>',
        // wood: 'hsl(var(--color-wood)) / <alpha-value>',
        // metal: 'hsl(var(--color-metal)) / <alpha-value>',
        // fabric: 'hsl(var(--color-fabric)) / <alpha-value>',
        // electronics: 'hsl(var(--color-electronics)) / <alpha-value>',
        // printing: 'hsl(var(--color-printing)) / <alpha-value>'
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
          '--color-bkg': bkgColor,
          '--color-content': textColor,
          '--color-primary': baseColor,
          '--color-accent1': accent2Color,
          '--color-accent2': '186deg 83.8% 78.2%',
          '--color-white': '0deg 0% 100%',
          '--color-navy': '222deg 75% 15%',
          '--color-wood': '24deg 100% 55%',
          '--color-metal': '220deg 94% 51%',
          '--color-fabric': '189deg 76% 53%',
          '--color-electronics': '298deg 62% 47%',
          '--color-printing': '99deg 72% 59%',
        },
        // TODO: set color variables for dark theme
        '@media (prefers-color-scheme:dark)': {
          ':root': {
            '--color-bkg': bkgColor,
            '--color-content': textColor, // (textColor + 7⁰) + 80 light
            '--color-primary': baseColor,
            '--color-accent1': accent2Color, // accentColor - 30 light
            '--color-accent2': '186deg 83.8% 48.2%', // accentColor - 30 light
            '--color-white': '0deg 0% 100%',
            '--color-navy': '222deg 75% 15%',
            '--color-wood': '24deg 100% 55%',
            '--color-metal': '220deg 94% 51%',
            '--color-fabric': '189deg 76% 53%',
            '--color-electronics': '298deg 62% 47%',
            '--color-printing': '99deg 72% 59%',
          },
        },
      });
    },
  ],
};
