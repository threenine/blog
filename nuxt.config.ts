// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: {enabled: true},
  modules: ['nuxt-schema-org', '@nuxtjs/tailwindcss', '@nuxt/content',  '@nuxt/image', 'nuxt-icon', 'nuxt-headlessui'],
  runtimeConfig: {
    public: {
      fathom_analytics_id: process.env.fathom_analytics_id,
      siteUrl: 'https://threenine.blog'
    }
  },
  tailwindcss: {
    cssPath: '~/assets/css/tailwind.css',
    configPath: 'tailwind.config',
  },
  nitro: {
    prerender: {
      routes: ['/sitemap.xml', '/rss.xml']
    }
  },
  image: {
    provider: 'cloudinary',
    cloudinary: {
      baseURL: 'https://res.cloudinary.com/threenine-co-uk/image/upload/'
    }
  }
})
