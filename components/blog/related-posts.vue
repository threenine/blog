<script lang="ts" setup>
const props = defineProps({
  category: {
    type: String,
    required: true
  }
})
const {data: posts} = await useAsyncData('posts', () => queryContent('/posts')
    .where({category: props.category})
    .sort({publishDateTime: -1})
    .find())

</script>

<template>
    <div class="overflow-hidden bg-gray-100 shadow-lg">
      <p class="text-lg text-orange-500 ml-5 text=semibold mb-5">Related Posts</p>
      <ul role="list" class="divide-y divide-gray-300 divide-dashed">
        <li v-for="post in posts" :key="post._id" class="px-6 py-4">
          <nuxt-link :to="post._path" class="text-orange-400 text-base">{{post.title}}</nuxt-link>
        </li>
      </ul>
    </div>

</template>

<style scoped></style>
