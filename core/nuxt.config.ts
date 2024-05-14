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

const config = defineNuxtConfig({
  runtimeConfig: {
    public: {
      FORMSPREE_URL: process.env.FORMSPREE_URL
    }
  },
})

const modules = defineNuxtConfig({
  extends: [
    envModules.typography,
    envModules.elements,
  ],

  modules: [
    envModules.tokens,
    envModules.studio,
    '@nuxtjs/plausible',
    '@nuxt/devtools'
  ],

  pinceau: {
    studio: true
  },

  nitro: {
    prerender: {
      ignore: ['/__pinceau_tokens_config.json', '/__pinceau_tokens_schema.json']
    }
  },
})

const build = defineNuxtConfig({
  experimental: {
    inlineSSRStyles: false
  },

  typescript: {
    includeWorkspace: true
  },
})

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
