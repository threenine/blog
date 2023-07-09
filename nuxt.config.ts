// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: {enabled: true},
  modules: ['nuxt-simple-sitemap', 'nuxt-schema-org', '@nuxtjs/tailwindcss', '@nuxt/content',  '@nuxt/image'],
  runtimeConfig: {
    public: {
      fathom_analytics_id: process.env.fathom_analytics_id,
      siteUrl: 'https://threenine.blog'
    }
  },
  tailwindcss: {
    cssPath: '~/assets/css/tailwind.css',
    configPath: 'tailwind.config',
  }
})