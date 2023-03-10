<script setup>
import QuoteIcon from '../ReusableComponents/QuoteIcon.vue'

defineProps({
  company: {
    type: Object,
    default: () => { },
  },
  meetups: {
    type: Array,
    default: () => [],
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
        <div class="relative h-full text-xl md:text-3xl lg:flex lg:flex-row-reverse">
          <quote-icon/>
          <div class="my-10 w-full self-center lg:w-1/3">
            <img class="mx-auto h-14 lg:h-20" :src="company.logo">
          </div>
          <div class="text-md mx-4 py-3 text-left leading-8 text-zinc-600 sm:my-2 md:text-lg md:font-normal md:tracking-wide lg:w-2/3 lg:font-semibold">
            {{ company.bio }}
          </div>
        </div>
        <div class="my-5 w-full"/>
      </div>
    </div>
  </div>
</template>
