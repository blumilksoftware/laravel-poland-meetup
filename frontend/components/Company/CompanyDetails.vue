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
        <div class="relative h-full text-xl md:text-3xl lg:flex lg:flex-row-reverse">
          <svg class="absolute top-0 left-0 h-24 w-24 translate-y-16 text-zinc-200 opacity-50 lg:-translate-x-1 lg:-translate-y-10" stroke="currentColor" fill="none" viewBox="0 0 144 144" aria-hidden="true">
            <path stroke-width="2" d="M41.485 15C17.753 31.753 1 59.208 1 89.455c0 24.664 14.891 39.09 32.109 39.09 16.287 0 28.386-13.03 28.386-28.387 0-15.356-10.703-26.524-24.663-26.524-2.792 0-6.515.465-7.446.93 2.327-15.821 17.218-34.435 32.11-43.742L41.485 15zm80.04 0c-23.268 16.753-40.02 44.208-40.02 74.455 0 24.664 14.891 39.09 32.109 39.09 15.822 0 28.386-13.03 28.386-28.387 0-15.356-11.168-26.524-25.129-26.524-2.792 0-6.049.465-6.98.93 2.327-15.821 16.753-34.435 31.644-43.742L121.525 15z"/>
          </svg>
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
