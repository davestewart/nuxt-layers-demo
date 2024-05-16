# Nuxt Layers Demo

> Demo repo for Nuxt Layers architecture article

<p align="center">
  <img src="https://raw.githubusercontent.com/davestewart/nuxt-layers-demo/main/splash.png" alt="Nuxt Layers Demo logo">
</p>

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

- `0.1.0` – **[Alpine starter repo](https://github.com/davestewart/nuxt-layers-demo/tree/16f9e7a0a9555d889d236d2f36f8a7f040105d4a)**<br>
  Local content extending external theme
- `0.5.0` – **[Combined theme and content](https://github.com/davestewart/nuxt-layers-demo/tree/8eb099e84d89204466e9ac7c8b3eb74eabc100af)**<br>
  Local content and theme, with a traditional flat folder structure (by concern)
- `1.0.0` – **[Refactor to flat layers](https://github.com/davestewart/nuxt-layers-demo/tree/a9345e527f340c71a5de286a19e19b90edc2d25c)**<br>
  Repackage to core, site and articles layers (by domain)
- `1.1.0` – **[Refactor layers to subfolder](https://github.com/davestewart/nuxt-layers-demo/tree/e022ec2f995128a4287ffa5bbedccbf40ec77594)**<br>
  Move site and articles to sub-folder (by domain, but neater)
- `1.2.0` – **Refactor using Nuxt Layers Utils** (TBC)<br>
  Migrate path configuration to root (by domain, but simpler)

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
