<script lang="ts" setup>
</script>

<template>
  <div class="relative flex min-h-screen flex-col">
    <slot name="header" />
    <div class="flex min-h-0 flex-1 overflow-hidden">
  <!-- 3 column wrapper -->
  <div class="mx-auto w-full max-w-7xl grow lg:flex xl:px-2">
    <!-- Left sidebar & main wrapper -->
    <div class="flex-1 xl:flex ">

      <div class="px-4 py-6 sm:px-6 lg:pl-8 xl:flex-1 xl:pl-6">
        <div class="max-w-full prose prose-lg dark:text-gray-800 text-gray-800 px-2 sm:px-1 dark:prose-blockquote:text-orange-500
       prose-blockquote:text-xl prose-headings:text-orange-500 prose-a:no-underline prose-a:text-orange-500 dark:prose-a:text-orange-500 justify-evenly">
        <slot name="mainContent" />
          </div>
      </div>
    </div>

    <div class="border-t border-gray-200 px-4 py-6 sm:px-6 lg:w-96 lg:border-l lg:border-t-0 lg:pr-8 xl:pr-6">
      <slot name="rightColumn" />
    </div>
  </div>
    </div>
  </div>
</template>

<style scoped></style>
