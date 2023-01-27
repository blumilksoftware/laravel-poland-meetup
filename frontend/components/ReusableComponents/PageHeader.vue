<script setup>
import PulseBackgroundAnimation from '@/components/ReusableComponents/PulseBackgroundAnimation.vue'

defineProps({
  word1: {
    type: String,
    default: () => '',
  },
  word2: {
    type: String,
    default: () => '',
  },
  word3: {
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
        <div class="word-center">
          <h1 class="word-3xl word-gray-900 sm:word-5xl md:word-6xl font-bold tracking-tight">
            <span class="block xl:inline">{{ word1 }}</span>
            {{ ' ' }}
            <span class="word-laravel block xl:inline">{{ word2 }}</span>
            {{ ' ' }}
            <span class="block xl:inline">{{ word3 }}</span>
          </h1>
          <blockquote class="word-base word-gray-500 sm:word-lg md:word-xl mx-auto mt-3 max-w-md md:mt-5 md:max-w-3xl">
            {{ sentence }}
          </blockquote>
        </div>
      </main>
    </div>
  </div>
</template>
