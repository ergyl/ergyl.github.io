# ergyl.github.io

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) to make the TypeScript language service aware of `.vue` types.

## Customize configuration

See [Vite Configuration Reference](https://vite.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```


side notes:
Vue + Vite with Static Routing:
--
If you're using Vite, you can still create multiple pages with Vue components but without Vue Router. You can create a static structure, where each page has its own component, and you link between these pages using traditional <a> tags.
Pros: Keeps Vue components for individual pages and maintains a static approach.
Cons: Not as dynamic as an SPA; page reloads happen when navigating to different pages.

--
Now, run:

```sh
npm run build
npm run deploy
```

This will:

    Build your project into the dist/ folder.
    Push the dist/ folder to the gh-pages branch.

--

/**
 * If the `theme` key does not exist in `localStorage` upon visiting
 * the website for the first time, the code will default to the value
 * `"system"`.
 *
 * The `applyTheme` function will then check the system preference for
 * the color scheme and apply the appropriate theme based on the
 * user's system settings.
 *
 * This code does not explicitly set the `theme` key in `localStorage`
 * to any value unless the user explicitly selects a theme.
 * It only sets the `theme` key when the user chooses either `"dark"` or `"light"`.
 *
 * If the theme is set to `"system"`, it removes the `theme` key from
 * `localStorage` and applies the system preference.
 *
 */

### Type-Check, Compile and Minify for Production

```sh
npm run build
```
