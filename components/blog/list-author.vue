<script lang="ts" setup>
const props = defineProps({
  username: {
    type: String,
    required: true
  }
})
const {data: author} = await useAsyncData('author', () => queryContent('/authors')
    .where({username: props.username})
    .findOne())

</script>

<template>
  <div class="relative mt-8 flex items-center gap-x-4">
    <nuxt-img :src="author?.image" :alt="author?.fullName" class="h-10 w-10 rounded-full bg-gray-100" />
    <div class="text-sm leading-6">
      <p class="font-semibold text-orange-600">
          <span class="absolute inset-0" />
          {{ author?.fullName }}

      </p>
      <p class="text-gray-600">{{ author?.role }}</p>
    </div>
  </div>
</template>

<style scoped></style>
