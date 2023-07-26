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
  ogImage:  () => `${post.value?.featureImage.url}`,
  twitterCard: 'summary_large_image',
  twitterDescription: () => post.value?.summary,
  twitterImage: () => `${post.value?.featureImage.url}`,
  twitterTitle: () => post.value?.title,
})

</script>

<template>
  <nuxt-layout name="post">
    <template #header>
      <blog-header :post="post" />
    </template>
    <template #mainContent >

      <content-renderer :value="post" />
      <blog-author />
    </template>

    <template #rightColumn>

    </template>

  </nuxt-layout>
</template>

<style scoped></style>
