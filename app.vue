<template>
<nuxt-layout name="default">
    <nuxt-page></nuxt-page>
</nuxt-layout>
</template>
<script lang="ts" setup>

useHead({
  title: 'threenine',
  meta: [
    {name: 'og:image', content: 'https://threeine.co.uk/logo.svh'},
    {name: 'og:url', content: 'https://threenine.co.uk'},
    {name: 'twitter:card', content: 'summary_large_image'},
    {name: 'twitter:site', content: '@threenine39'},
    {name: 'twitter:creator', content: '@threenine39'},
    {name: 'twitter:title', content: 'threenine'},
    {
      name: 'twitter:description',
      content: 'Cultivate, Develop &amp; Sustain Innovation',
    },
    {name: 'twitter:image', content: 'https://threenine.co.uk/logo.svg'},
  ],
  script: [
    {src: ''},
  ]
})
</script>