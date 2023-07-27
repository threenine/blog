<script setup>
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
  <div class="rounded-md bg-gray-100 shadow-lg px-4 py-5 sm:px-6">
    <div class="flex space-x-3">
      <div class="flex-shrink-0">
        <nuxt-img class="h-28 w-28 rounded-full mr-3" :src="author.image" :alt="author.fullName" />
      </div>
      <div class="min-w-0 flex-1">
        <p class="text-lg font-semibold text-orange-500">
          {{author.fullName}}
        </p>
        <p class="text-sm font-semibold text-gray-500">
          {{author.role}}
        </p>
        <p class=" text-base text-gray-700">
          {{author.profile }}
        </p>

      </div>

    </div>
  </div>
</template>



<style scoped></style>
