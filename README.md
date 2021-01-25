# ghost-shopify
Ghost is a development environment build off of an agnostic Shopify skeleton. 

# Usage
Ghost is designed to be used for GSAP and Tailwind based Shopify themes.

# Installation (current state)

```
$ npm install --save-dev gulp fs-path gulp-footer gulp-header gulp-postcss gulp-sourcemaps tailwindcss postcss-import autoprefixer gulp-imagemin gulp-concat gulp-terser gulp-cssnano
```

# Functions

```
$ gulp
```

* Compiles all javascript imports to a single javascript file
* Compiles all liquid files from layout, templates, sections, and snippets from the src directory to public.
* Optimizes all images in src/images and compiles them to public/assets
* Compiles Tailwind source to a single css file

# Working with Shopify Themekit

Make sure to only download themes into Ghost's /public folder. 

# Resources
https://www.shopify.com/partners/shopify-cheat-sheet

# Status

Ghost Shopify is a work in progress. 

- [ ] Define organizational structure
- [ ] Build all skeleton templates, sections, snippets, etc
- [ ] Config file: used to allow users to define the structure of a Ghost Shopify base
- [ ] Configure dev environment
- [ ] Create npm init ghost-shopify **or** create a form that builds based on settings 

