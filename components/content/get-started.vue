
<script setup lang="ts">

const Click = () => {
  location.href = 'https://threenine.co.uk'
};

</script>
<template>
  <div class="bg-orange-50 rounded-md">
    <section class="mb-32">
      <div class="flex flex-wrap">
        <div class="mb-12 w-full shrink-0 grow-0 basis-auto lg:mb-0 lg:w-5/12">
          <div class="flex lg:py-12">
            <img src="/images/api-development.jpg"
                 class="w-full rounded-lg shadow-lg dark:shadow-black/20 lg:ml-[50px] z-[10]" alt="image" />
          </div>
        </div>
        <div class="w-full shrink-0 grow-0 basis-auto lg:w-7/12">
          <div class="flex h-full items-center rounded-lg bg-primary p-6 text-center text-gray-400 lg:pl-12 lg:text-left">
            <div class="lg:pl-12">
              <h2 class="mb-6 text-3xl font-bold">
                Need help with API Develoment?
              </h2>
              <p class="mb-6 pb-2 lg:pb-0">
               threenine.co.uk can help you with your API Development. We have experience in building APIs for a range
                of clients, from small startups to large multi-national enterprises. We can help you with your
                API Development, whether you need a new API or need to improve an existing one.
              </p>
              <button type="button" @click="Click"
                      class="rounded-full border-2 border-orange-300 px-7 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal text-orange-500 transition duration-150 ease-in-out hover:border-orange-100 hover:bg-orange-100 hover:bg-opacity-10 hover:text-orange-500 focus:border-orange-300 focus:text-orange-900 focus:outline-none focus:ring-0 active:border-orange-900 active:text-orange-900"
                      data-te-ripple-init data-te-ripple-color="dark">
                Connect today
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
