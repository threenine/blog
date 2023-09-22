<template>
  <footer class="bg-gray-800" aria-labelledby="footer-heading">
    <h2 id="footer-heading" class="sr-only">Footer</h2>
    <div class="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32">
      <div class="xl:grid xl:grid-cols-3 xl:gap-8">
        <div class="space-y-8">
          <nuxt-img class="h-16" provider="cloudinary" src="/v1690791866/brand/main-logo-header-light_qlosel.png" alt="threenine.co.uk - " />
          <div class="flex space-x-6">
            <a v-for="item in navigation.social" :key="item.name" :href="item.href" class="text-gray-200 hover:text-gray-400">
              <span class="sr-only">{{ item.name }}</span>
              <Icon :name="item.icon" class="h-6 w-6" aria-hidden="true" />
            </a>
          </div>
        </div>
        <div class="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
          <div class="md:grid md:grid-cols-2 md:gap-8">
            <div>
              <h3 class="text-sm font-semibold leading-6 text-gray-100">Products</h3>
              <ul role="list" class="mt-6 space-y-4">
                <li v-for="item in navigation.solutions" :key="item.name">
                  <a :href="item.href" class="text-sm leading-6 text-gray-100 hover:text-white">{{ item.name }}</a>
                </li>
              </ul>
            </div>
            <div class="mt-10 md:mt-0">
              <h3 class="text-sm font-semibold leading-6 text-gray-100">Services</h3>
              <ul role="list" class="mt-6 space-y-4">
                <li v-for="item in navigation.support" :key="item.name">
                  <a :href="item.href" class="text-sm leading-6 text-gray-100 hover:text-white">{{ item.name }}</a>
                </li>
              </ul>
            </div>
          </div>
          <div class="md:grid md:grid-cols-2 md:gap-8">
            <div>
              <h3 class="text-sm font-semibold leading-6 text-gray-100">Company</h3>
              <ul role="list" class="mt-6 space-y-4">
                <li v-for="item in navigation.company" :key="item.name">
                  <a :href="item.href" class="text-sm leading-6 text-gray-100 hover:text-white">{{ item.name }}</a>
                </li>
              </ul>
            </div>
            <div class="mt-10 md:mt-0">
              <h3 class="text-sm font-semibold leading-6 text-gray-100">Legal</h3>
              <ul role="list" class="mt-6 space-y-4">
                <li v-for="item in navigation.legal" :key="item.name">
                  <a :href="item.href" class="text-sm leading-6 text-gray-100 hover:text-white">{{ item.name }}</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="mt-16 border-t border-white/10 pt-8 sm:mt-20 lg:mt-24">
        <nuxt-link to="https://find-and-update.company-information.service.gov.uk/company/05608093" class="mt-8 text-base text-gray-200 md:order-1 md:mt-0">&copy {{ new Date().getFullYear() }} THREENINE CONSULTING LIMITED registered in England & Wales 05608093 VAT no. GB 900383850</nuxt-link>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">


const navigation = {
  solutions: [
    { name: 'API Template Pack', href: 'https://threenine.co.uk/products/api-template-pack' },
  ],
  support: [
    { name: 'API Development', href: 'https://threenine.co.uk/services/api-development' },
  ],
  company: [
    { name: 'About', href: 'https://threenine.co.uk/about' },
    { name: 'Blog', href: 'https://threenine.blog' },
  ],
  legal: [
    { name: 'Privacy', href: 'https://threenine.co.uk/legals/privacy-policy' },
    { name: 'Cookie Policy', href: 'https://threenine.co.uk/legals/cookie-policy' },
    { name: 'Copyright', href: 'https://threenine.co.uk/legals/copyright' },
  ],
  social: [
    {
      name: 'Twitter',
      href: 'https://twitter.com/threenine39',
      icon:'fa6-brands:x-twitter'
    },
    {
      name: 'GitHub',
      href: 'https://github.com/threenine',
      icon:'radix-icons:github-logo',
    },
    {
      name: 'YouTube',
      href: 'https://www.youtube.com/@ThreenineCoUk',
      icon: 'ion:social-youtube-outline',
    },
    {
      name: 'rss',
      href: 'https://threenine.blog/rss',
      icon: 'jam:rss-feed',
    },
  ],
}
</script>