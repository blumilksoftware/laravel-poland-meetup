<script setup>
defineProps({
  company: {
    type: Object,
    default: () => { },
  },
  meetups: {
    type: Array,
    default: () => [],
  },
  name: {
    type: String,
    default: '',
  },
})

</script>
<template>
  <div class="my-10 bg-white tracking-tight text-zinc-700 shadow-lg">
    <div v-if="company.bio" class="lg:py-18 mx-auto max-w-7xl p-4 sm:px-6 lg:px-8">
      <div class="space-y-12">
        <h2 class="first-letter:text-laravel lg:py-18 w-full justify-center border-b py-10 px-7 text-2xl font-bold sm:px-6 md:text-4xl lg:px-8">
          O firmie
        </h2>
        <div class="h-full text-xl md:flex md:flex-row-reverse md:text-3xl">
          <div class="my-10 w-full self-center md:w-1/3">
            <img class="mx-auto h-14 md:h-20" :src="company.logo">
          </div>
          <div class="text-md mx-4 my-7 text-left italic leading-8 text-zinc-600 md:w-2/3 md:text-lg md:font-normal md:tracking-wide lg:font-semibold">
            {{ company.bio }}
          </div>
        </div>
        <div class="my-5 w-full"/>
      </div>
    </div>
  </div>
</template>
