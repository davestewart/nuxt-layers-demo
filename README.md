# Nuxt Layers Demo

> Demo repo for Nuxt Layers architecture article

## Intro

This repo accompanies my article on using Nuxt Layers to modularise sites by domain:

- [Modular site architecture with Nuxt layers](https://davestewart.co.uk/blog/nuxt-layers/)

The repo is built off the [Alpine Theme](https://github.com/nuxt-themes/alpine), because:

1. it's a good all-round, production-ready repo
2. it has enough sections that could be migrated to layers
3. it had the potential for good before and after cases

It's designed to show how an existing site can be fairly easily refactored to Nuxt layers, gaining the benefits of a site architected by domain, rather than concern.

The article introduces the reader to layers and covers various techniques to build and get the most out of a layered site.

All the techniques discussed there are employed in this demo.

## Instructions

The milestones in the migration will be:

- `0.1.0` – Alpine starter repo<br>
  Local content extending external theme
- `0.5.0` – Combined theme and content<br>
  Local content and theme, traditional flat folder structure (by concern)
- `1.0.0` – Manually configured base, theme and content<br>
  Initial migration to layers (by domain, but somewhat brittle)
- `1.1.0` – Automatically configured base, theme and content<br>
  Implement Nuxt Layers Utils (by domain, but flexible)

Check out the repo, install and run the dev build:

```bash
git clone https://github.com/davestewart/nuxt-layers-demo.git
cd nuxt-layers-demo
npm install
npm run dev
```

Checkout individual tags to compare configurations.


## Feedback

If you have any comments or questions, feel free to create an issue, or drop a [comment](http://davestwart.co.uk/blog/nuxt-layers/#hyvor-talk-view) on the original article.

Cheers,<br>
Dave
