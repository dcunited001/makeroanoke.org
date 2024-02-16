// npm install --save-dev prettier prettier-plugin-astro

/** @type {import("prettier").Config} */
export default {
  printWidth: 80,
  semi: true,
  singleQuote: true,
  plugins: ['prettier-plugin-astro'],
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
