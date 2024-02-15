# MakeRoanoke.org

A site covering MAKE Roanoke.

## Workflow

### Writing Content with Front Matter

Using the Front Matter extension in VS Code, you can add posts, events and
images while viewing the changes live.

1. Get the latest version of the site. Make a branch if you can.
2. Once the project is open, the Front Matter extension should have started the
   webserver. This requires that `npm` can install what you need. If so,
   Front Matter will start your webserver at http://localhost:4321
3. Make desired changes. If you're branching and new to Git, try to limit the
   changes only to the files needed to add the post or event.
4. Test changes locally. AstroJS is picky about the formatting for tags and
   dates.
5. If you're not comfortable with Git, then submit the markdown file and images
   via email.

The main process may eventually be updated so that you may work on the site in
VS Code on Github. This would make branching a bit easier. If this works with
Github Codespaces, we should be able to collaborate in real time.

### Developing locally

You will want to have git and docker tools installed.

1. Start a new branch
2. Make desired changes
3. Test changes locally using the Front Matter extension in VS Code this
   repository is in.
   
   `npm run dev` or `npx astro dev --site https://127.0.0.1:4321 --host 127.0.0.1`

4. Commit and push branch
5. Create a PR to merge changes into main.
6. Get approval from a Make Raonoke member, in order to merge to main.
7. Github actions will take care of publishing the website.

# Astro JS

Features:

- ✅ Minimal styling (make it your own!)
- ✅ 100/100 Lighthouse performance
- ✅ SEO-friendly with canonical URLs and OpenGraph data
- ✅ Sitemap support
- ✅ RSS Feed support
- ✅ Markdown & MDX support

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
├── public/
├── src/
│   ├── components/
│   ├── content/
│   ├── layouts/
│   └── pages/
├── astro.config.mjs
├── README.md
├── package.json
└── tsconfig.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

The `src/content/` directory contains "collections" of related Markdown and MDX documents. Use `getCollection()` to retrieve posts from `src/content/blog/`, and type-check your frontmatter using an optional schema. See [Astro's Content Collections docs](https://docs.astro.build/en/guides/content-collections/) to learn more.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Check out [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).

## Credit

This theme is based off of the lovely [Bear Blog](https://github.com/HermanMartinus/bearblog/).
