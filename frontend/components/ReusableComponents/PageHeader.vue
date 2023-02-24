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
  <div class="relative overflow-hidden bg-white shadow-lg">
    <PulseBackgroundAnimation/>
    <div class="relative py-16 sm:pb-36">
      <main class="mx-auto max-w-7xl px-4 sm:mt-20">
        <div class="text-center">
          <h1 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
            <span v-if="!word2 && !word3" class="first-letter:text-laravel block">{{ word1 }}</span>
            <span v-if="word2 && word3" class="block xl:inline">{{ word1 }}</span>
            {{ ' ' }}
            <span class="text-laravel block xl:inline">{{ word2 }}</span>
            {{ ' ' }}
            <span class="block xl:inline">{{ word3 }}</span>
          </h1>
          <blockquote class="text-laravel mx-auto mt-3 max-w-md text-base font-semibold italic sm:text-lg md:mt-5 md:max-w-3xl md:text-xl">
            {{ sentence }}
          </blockquote>
        </div>
      </main>
    </div>
  </div>
</template>
