<script setup>


const {data: posts } = await useAsyncData('posts', () => queryContent('/posts').sort({publishDateTime: -1}).find());

</script>
<template>
  <div class="bg-white py-2 sm:py-10">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
        <article v-for="post in posts" :key="post.id" class="flex flex-col items-start justify-between">
          <div class="relative w-full">
            <img :src="post.featureImage.url" :alt="post.featureImage.title" class="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]" />
            <div class="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
          </div>
          <div class="max-w-xl">
            <div class="mt-8 flex items-center gap-x-4 text-xs">
              <time :datetime="post.datetime" class="text-gray-500">{{ post.date }}</time>
              <a :href ="post._path" class="relative z-10 rounded bg-gray-900 px-3 py-1.5 font-medium text-gray-200">{{ post.category }}</a>
            </div>
            <div class="group relative">
              <h3 class="mt-3 text-lg font-semibold leading-6 text-orange-600 group-hover:text-orange-400">
                <a :href="post._path">
                  <span class="absolute inset-0" />
                  {{ post.title }}
                </a>
              </h3>
              <p class="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">{{ post.description }}</p>
            </div>
           <blog-list-author :username="post.author" />
          </div>
        </article>
      </div>
    </div>
  </div>
</template>

