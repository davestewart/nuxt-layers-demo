import { defu } from 'defu'
import { createResolver } from '@nuxt/kit'
import { defineNuxtConfig } from 'nuxt/config'

const { resolve } = createResolver(import.meta.url)

// debug
console.log('Adding layer: core')

// That allows to overwrite these dependencies paths via `.env` for local development
const envModules = {
  tokens: process?.env?.THEME_DEV_TOKENS_PATH || '@nuxt-themes/tokens',
  elements: process?.env?.THEME_DEV_ELEMENTS_PATH || '@nuxt-themes/elements',
  studio: process?.env?.THEME_DEV_STUDIO_PATH || '@nuxthq/studio',
  typography: process?.env?.THEME_DEV_TYPOGRAPHY_PATH || '@nuxt-themes/typography'
}

/**
 * Config
 */
const config = defineNuxtConfig({
  runtimeConfig: {
    public: {
      FORMSPREE_URL: process.env.FORMSPREE_URL
    }
  },
})

/**
 * Modules
 */
const modules = defineNuxtConfig({
  extends: [
    envModules.typography,
    envModules.elements,
  ],

  modules: [
    envModules.tokens,
    envModules.studio,
    '@nuxt/content',
    '@nuxtjs/plausible',
    '@nuxt/devtools'
  ],

  content: {
    documentDriven: true,
    // note: path context is the config root (where the process is running)
    sources: {
      site: {
        driver: 'fs',
        base: './layers/site/content',
        prefix: '/',
      },
      articles: {
        driver: 'fs',
        base: './layers/articles/content',
        prefix: '/articles',
      }
    },
    navigation: {
      fields: ['navTitle'],
    },
    highlight: {
      theme: {
        default: 'github-light',
        dark: 'github-dark',
      },
      preload: ['json', 'js', 'ts', 'html', 'css', 'vue', 'diff', 'shell', 'markdown', 'yaml', 'bash', 'ini', 'c', 'cpp'],
    },
  },

  pinceau: {
    studio: true
  },

  nitro: {
    prerender: {
      ignore: ['/__pinceau_tokens_config.json', '/__pinceau_tokens_schema.json']
    }
  },
})

/**
 * Build
 */
const build = defineNuxtConfig({
  pages: true,

  experimental: {
    inlineSSRStyles: false
  },

  typescript: {
    includeWorkspace: true
  },
})

/**
 * App
 */
const app = defineNuxtConfig({
  app: {
    head: {
      htmlAttrs: {
        lang: 'en'
      }
    }
  },

  colorMode: {
    classSuffix: ''
  },

  css: [
    resolve('./assets/main.css'),
  ],
})

export default defu(
  config,
  modules,
  build,
  app
)
