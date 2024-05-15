// debug
console.log('Adding layer: articles')

export default defineNuxtConfig({
  components: [
    // mark components as global so they work in content
    { path: 'components', global: true },
  ]
})
