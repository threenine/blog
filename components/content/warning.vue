<script lang="ts" setup></script>

<template>
  <div
      class="mb-4 rounded-lg bg-yellow-200 px-6 py-5 text-base text-gray-900"
      role="alert">
    <h4 class="mb-2 text-2xl font-medium leading-tight"><slot name="title" /></h4>
    <p class="mb-4">
    <slot />
    </p>
  </div>
</template>

<style scoped></style>
