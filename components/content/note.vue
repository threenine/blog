<script lang="ts" setup></script>

<template>
  <div class="bg-gray-200 border border-l-orange-500 border-l-4 rounded-md shadow-lg text-gary-800 px-4 py-3" role="alert">
    <p class="font-bold"><Icon name="pepicons-pop:bulletin-notice" class="h-8 w-8 mr-3 text-orange-500" /></p>
    <div class="text-md pl-2 pr-2"><slot name="message" /></div>
  </div>
</template>

<style scoped></style>
