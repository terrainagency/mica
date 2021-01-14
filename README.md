# ghost-shopify
Ghost is a development environment build off of an agnostic Shopify skeleton. 

# Usage
Ghost is designed to be used for GSAP and Tailwind based Shopify themes.

# Installation (coming soon)

Ghost comes with Tailwind and postCSS, along with a set of NPM build functions.

```
npm init ghost-shopify
```

# Functions

```
npm run ghost:build
```

* Compiles all javascript imports to a single javascript file
* Compiles Tailwind source to a single css file

```
npm run ghost:prod
```

* Minimizes all javascript and CSS, purges Tailwind classes via postCSS

# Status
Ghost Shopify is a work in progress. Current state:

- [ ] Define organizational structure
- [ ] Build all skeleton templates, sections, snippets, etc
- [ ] Config file: used to allow users to define the structure of a Ghost Shopify base
- [ ] Configure dev environment
- [ ] Create npm init ghost-shopify **or** create a form that builds based on settings 

