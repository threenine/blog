<script lang="ts" setup>
const route = useRoute()
useHead({
      title: "Cultivate, Develop & Sustain Innovation ",

      meta: [
         {name: "og:title", content: "Cultivate, Develop & Sustain Innovation"},
        {
          name: "description",
          content: "values-driven software development company specialising in delivering custom software solutions, " +
              "digital transformation, and IT consulting. We employ innovative thinking and decades of expertise to " +
              "help our clients leverage the latest technologies, always aiming to create the most fit-for-purpose digital solutions."
        }
      ],
      link: [
        {
          rel: 'canonical',
          href: 'https://threenine.blog' + route.path
        }
      ]
    },
)
</script>

<template>

    <blog-feature/>


</template>

<style scoped></style>
