<script lang="ts" setup>
const props = defineProps({
  username: {
    type: String,
    required: true
  },
  publishDate: {
    type: String,
    required: true
  }
})
const {data: author} = await useAsyncData('author', () => queryContent('/authors')
    .where({username: props.username})
    .findOne())


</script>

<template>
  <div class="flex mt-3">
    <nuxt-img :src="author?.image" :alt="author?.name"
         class="h-10 w-10 rounded-full mr-2 object-cover" />
    <div>
      <p class="font-semibold text-gray-200 text-sm"> {{author?.fullName}} </p>
      <p class="font-semibold text-gray-400 text-xs"> {{ props.publishDate }} </p>
    </div>
  </div>
</template>

<style scoped></style>
