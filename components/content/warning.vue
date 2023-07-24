<script lang="ts" setup></script>

<template>
  <div
      class="mb-4 rounded-lg bg-yellow-100 px-6 py-5 text-base text-gray-800"
      role="alert">
    <h4 class="mb-2 text-2xl font-medium leading-tight text-center"><slot name="title" /></h4>
    <div class="mb-4">
    <slot />
    </div>
  </div>
</template>

<style scoped></style>
