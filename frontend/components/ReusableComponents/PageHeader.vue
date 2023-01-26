<script setup>
import PulseBackgroundAnimation from '@/components/ReusableComponents/PulseBackgroundAnimation.vue'

defineProps({
  // meetup: {
  //   type: Object,
  //   default: () => {},
  // },
  text1: {
    type: String,
    default: () => '',
  },
  text2: {
    type: String,
    default: () => '',
  },
  text3: {
    type: String,
    default: () => '',
  },
  sentence: {
    type: String,
    default: () => '',
  },
})

</script>

<template>
  <div class="relative overflow-hidden bg-white">
    <PulseBackgroundAnimation/>
    <div class="relative py-16 sm:pb-36">
      <main class="mx-auto max-w-7xl px-4 sm:mt-20">
        <div class="text-center">
          <h1 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
            <span class="block xl:inline">{{ text1 }}</span>
            {{ ' ' }}
            <span class="text-laravel block xl:inline">{{ text2 }}</span>
            {{ ' ' }}
            <span class="block xl:inline">{{ text3 }}</span>
          </h1>
          <blockquote class="mx-auto mt-3 max-w-md text-base text-gray-500 sm:text-lg md:mt-5 md:max-w-3xl md:text-xl">
            {{ sentence }}
          </blockquote>
        </div>
      </main>
    </div>
  </div>
</template>
