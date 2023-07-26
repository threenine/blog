<script lang="ts" setup>
import {PropType} from "@vue/runtime-core";
import {PostHeading} from "~/types/PostHeading";
import MetaAuthor from "~/components/blog/meta-author.vue";

const props = defineProps({
  post: {
    type: Object as PropType<PostHeading>
  }

})
</script>

<template>
  <div class="mb-4 md:mb-0  max-w-full relative" style="height: 40em;">
    <div class="absolute left-0 bottom-0 w-full h-full z-10"
         style="background-image: linear-gradient(180deg,transparent,rgba(0,0,0,.7));"></div>
    <img :src="post?.featureImage?.url" class="absolute left-0 top-0 w-full h-full z-0 object-cover" :alt="post?.featureImage?.title" :title="post?.featureImage?.title" />
    <div class="p-4 absolute bottom-0 left-0 z-20">
      <a href="#"
         class="px-4 py-1 bg-black text-gray-200 inline-flex items-center justify-center mb-2">{{post?.category?.title}}</a>
      <h2 class="text-5xl font-semibold text-orange-500 leading-tight">
        {{ post?.title }}
      </h2>
      <p class="text-xl font-semibold text-gray-100">
        {{ post?.subtitle }}
      </p>

      <meta-author :publish-date="post?.publishDate" :username="post?.author"/>
<!--      <div class="flex mt-3">
        <img :src="post?.author?.imageUrl" :alt="post?.author?.name"
             class="h-10 w-10 rounded-full mr-2 object-cover" />
        <div>
          <p class="font-semibold text-gray-200 text-sm"> {{post?.author?.name}} </p>
          <p class="font-semibold text-gray-400 text-xs"> {{ post?.publishDate }} </p>
        </div>
      </div>-->
    </div>
  </div>
</template>

<style scoped></style>
