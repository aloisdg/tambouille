![tambouille-banner](/public/static/images/twitter-card.png)

# Tambouile

Tambouille is a personnal french recipes website aimed to my family and acquaintances. It was inspired by an exercise made with my former PO.

## Stack

Tambouille use:

- React
- Next.js
- Gatsby
- Tailwindcss
- MDX
- Husky

and is hosted on Vercel.

Built with a [template](https://GitHub.com/timlrx/tailwind-nextjs-starter-blog) made by @timlrx. He was inspired by [Lee Robinson's blog](https://github.com/leerob/leerob.io), but focuses only on static site generation. Design is adapted from [Tailwindlabs blog](https://github.com/tailwindlabs/blog.tailwindcss.com).

## Features

- Perfect lighthouse accessibility score
- Mobile-friendly view
- Light and dark theme
- Support for tags - each unique tag will be its own page
- Support for nested routing of blog posts
- Projects page
- SEO friendly with RSS feed, sitemaps and more!

## Development

First, run the development server:

```bash
npm start
# or
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

## Extend / Customize

`data/siteMetadata.json` - contains most of the site related information which should be modified for a user's need.

`data/headerNavLinks.js` - navigation links.

`data/recettes` - add your own recpies.

`public/static` - store assets such as images and favicons.

`css/tailwind.css` - contains the tailwind stylesheet which can be modified to change the overall look and feel of the site.

`components/social-icons` - to add other icons, simply copy an svg file from [Simple Icons](https://simpleicons.org/) and map them in `index.js`. Other icons uses [heroicons](https://heroicons.com/).

`components/MDXComponents.js` - pass the JSX code or React component by specifying it over here. You can then call them directly in the `.mdx` or `.md` file. By default, a custom link and image component is passed.

`layouts` - main templates used in pages.

`pages` - pages to route to. Read the [Next.js documentation](https://nextjs.org/docs) for more information

## Recipe

### Frontmatter

Frontmatter follows [Hugo's standards](https://gohugo.io/content-management/front-matter/).

Currently 7 fields are supported.

```
title (required)
date (required)
tags (required, can be empty array)
lastmod (optional)
draft (optional)
summary (optional)
images (optional, if none provided defaults to socialBanner in siteMetadata config)
author (kim | alois)
```

Here's an example of a post's frontmatter:

```
---
title: 'Introducing Tailwind Nexjs Starter Blog'
date: '2021-01-12'
lastmod: '2021-01-18'
tags: ['next-js', 'tailwind', 'guide']
draft: false
summary: 'Looking for a performant, out of the box template, with all the best in web technology to support your blogging needs? Checkout the Tailwind Nextjs Starter Blog template.'
images: ['/static/images/canada/mountains.jpg', '/static/images/canada/toronto.jpg']
author: alois
---
```

### Compose

`scripts/compose.js` can be used to easily generate a post with pre-filled front matter.

The first argument is the name of the post and the second optional argument is the extension (default to .mdx)

Example code to generate the post called "My First Post" in markdown format

```
node ./scripts/compose.js "My First Post" .md
```

This will generate `./data/recettes/my-first-recipe.md` with pre-filled front matter.
