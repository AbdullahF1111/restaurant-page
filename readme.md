# Restaurant Page

A single-page restaurant website built with vanilla JavaScript. All page content is generated dynamically through DOM manipulation, with tab-based navigation between pages. Built as part of [The Odin Project](https://www.theodinproject.com/lessons/node-path-javascript-restaurant-page) JavaScript curriculum.

**Live demo:** [https://abdullahf1111.github.io/restaurant-page/](https://abdullahf1111.github.io/restaurant-page/)

## Features

- Three tabs: **Home**, **Menu**, and **Contact**
- All content rendered with JavaScript only (`div#content` starts empty in the HTML)
- Each tab is its own ES module that exports a function to build its content
- Menu dishes rendered from an array of objects in a responsive card grid
- Local images imported and bundled with Webpack
- Deployed to GitHub Pages from the `gh-pages` branch

## Tech Stack

- HTML, CSS, JavaScript (ES modules)
- [Webpack 5](https://webpack.js.org/) with `html-webpack-plugin`, `style-loader`, and `css-loader`
- GitHub Pages

## Project Structure

```
restaurant-page/
├── src/
│   ├── images/
│   ├── contact.js
│   ├── home.js
│   ├── index.js
│   ├── menu.js
│   ├── style.css
│   └── template.html
├── .gitignore
├── package.json
├── webpack.config.js
└── readme.md
```

## Getting Started

Clone the repository and install dependencies:

```bash
git clone https://github.com/AbdullahF1111/restaurant-page.git
cd restaurant-page
npm install
```

Start the development server:

```bash
npx webpack serve
```

Build for production (output goes to `dist/`):

```bash
npx webpack
```

## Deployment

The `dist` folder is pushed to the `gh-pages` branch:

```bash
git checkout gh-pages && git merge main --no-edit
npx webpack
git add dist -f && git commit -m "Deployment commit"
git subtree push --prefix dist origin gh-pages
git checkout main
```

## What I Learned

- Creating and appending elements with the DOM API
- Splitting code into ES modules with `import` / `export`
- Setting up Webpack: loaders, plugins, and a dev server
- Switching tabs by clearing and re-rendering `div#content`
- Deploying a build folder to GitHub Pages with `git subtree`

## License

ISC