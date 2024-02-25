// npm install --save-dev prettier prettier-plugin-astro prettier-plugin-tailwindcss

/** @type {import("prettier").Config} */
export default {
  printWidth: 80,
  semi: true,
  singleQuote: true,
  plugins: ['prettier-plugin-astro', 'prettier-plugin-tailwindcss'],
  tailwindFunctions: ['clsx', 'cva'],
  overrides: [
    {
      files: '*.astro',
      singleQuote: true,
      options: {
        parser: 'astro',
      },
    },
  ],
};
