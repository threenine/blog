<script lang="ts" setup>
const route = useRoute()

const {data: post} = await useAsyncData('post', () => queryContent('/posts')
    .where({_path: route.path})
    .findOne())

useSeoMeta({
  title:  post.value?.title,
  description: post.value?.description,
  ogTitle: () => post.value?.title,
  ogDescription: () => post.value?.summary,
  ogImage:  () => `https://threenine.blog${post.value?.featureImage.url}`,
  twitterCard: 'summary_large_image',
  twitterDescription: () => post.value?.summary,
  twitterImage: () => `https://threenine.blog${post.value?.featureImage.url}`,
  twitterTitle: () => post.value?.title,
})

</script>

<template>
  <nuxt-layout name="post">
    <template #header>
      <post-header :post="post" />
    </template>
    <template #mainContent >

      <content-renderer :value="post" />
    </template>

    <template #rightColumn>

    </template>
  </nuxt-layout>
</template>

<style scoped></style>
