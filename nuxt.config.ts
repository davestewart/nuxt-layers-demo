import { createResolver } from '@nuxt/kit'

const { resolve } = createResolver(import.meta.url)

// That allows to overwrite these dependencies paths via `.env` for local development
const envModules = {
  tokens: process?.env?.THEME_DEV_TOKENS_PATH || '@nuxt-themes/tokens',
  elements: process?.env?.THEME_DEV_ELEMENTS_PATH || '@nuxt-themes/elements',
  studio: process?.env?.THEME_DEV_STUDIO_PATH || '@nuxthq/studio',
  typography: process?.env?.THEME_DEV_TYPOGRAPHY_PATH || '@nuxt-themes/typography'
}

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  extends: [
    // third-party layers
    envModules.typography,
    envModules.elements,

    // local layers
    './core',
  ],

  app: {
    head: {
      htmlAttrs: {
        lang: 'en'
      }
    }
  },

  runtimeConfig: {
    public: {
      FORMSPREE_URL: process.env.FORMSPREE_URL
    }
  },

  pages: true,

  modules: [
    envModules.tokens,
    envModules.studio,
    '@nuxt/content',
    '@nuxtjs/plausible',
    '@nuxt/devtools'
  ],

  components: [
    { path: resolve('./components'), global: true },
    { path: resolve('./components/content'), global: true },
    { path: resolve('./components/data-entry'), global: true }
  ],

  css: [
    resolve('./assets/main.css'),
  ],

  colorMode: {
    classSuffix: ''
  },

  pinceau: {
    studio: true
  },

  content: {
    documentDriven: true,
    navigation: {
      fields: ['navTitle']
    },
    highlight: {
      theme: {
        default: 'github-light',
        dark: 'github-dark'
      },
      preload: ['json', 'js', 'ts', 'html', 'css', 'vue', 'diff', 'shell', 'markdown', 'yaml', 'bash', 'ini', 'c', 'cpp']
    }
  },

  experimental: {
    inlineSSRStyles: false
  },

  typescript: {
    includeWorkspace: true
  },

  nitro: {
    prerender: {
      ignore: ['/__pinceau_tokens_config.json', '/__pinceau_tokens_schema.json']
    }
  },
})
