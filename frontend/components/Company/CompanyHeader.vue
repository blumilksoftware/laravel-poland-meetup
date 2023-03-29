<script setup>
import PulseBackgroundAnimation from '@/components/ReusableComponents/PulseBackgroundAnimation.vue'
import LinkedinIcon from '@/components/Icons/LinkedinIcon.vue'
import FacebookIcon from '@/components/Icons/FacebookIcon.vue'
import TwitterIcon from '@/components/Icons/TwitterIcon.vue'
import { LinkIcon, MapPinIcon } from '@heroicons/vue/24/outline'

defineProps({
  company: {
    type: Object,
    default: () => { },
  },
})

</script>
<template>
  <div class="relative overflow-hidden bg-white shadow-lg">
    <PulseBackgroundAnimation/>
    <div class="relative py-5 sm:pb-8">
      <main class="mx-auto max-w-7xl px-4 sm:mt-20">
        <div class="block text-center">
          <h1 class="hover:text-laravel first-letter:text-laravel text-4xl font-bold tracking-tight text-gray-900 transition duration-200 hover:scale-110 sm:text-5xl md:text-6xl">
            {{ company.name }}
          </h1>
          <p class="text-laravel mt-4 text-xl">
            {{ company.location }}
          </p>
          <div class="my-3 mx-auto flex items-center justify-center space-x-5 sm:my-10">
            <linkedin-icon v-if="company.linkedin" :href="company.linkedin" class="h-12 w-12 pr-2 text-zinc-600"/>
            <facebook-icon v-if="company.facebook" :href="company.facebook" class="h-12 w-12 pr-2 text-zinc-600"/>
            <twitter-icon v-if="company.twitter" :href="company.twitter" class="h-12 w-12 pr-2 text-zinc-600"/>
            <a v-if="company.website" :href="company.website" target="_blank" rel="noopener" class="align-center flex font-bold text-zinc-600 transition duration-200 hover:scale-110" alt="website"><link-icon class="h-[40px] w-[40px]"/></a>
            <a v-if="company.location" href="#map" class="flex h-12 w-12 justify-center font-bold text-zinc-600 transition duration-200 hover:scale-110" alt="location"><map-pin-icon class="h-[43px] w-[43px]"/></a>
          </div>
        </div>
      </main>
    </div>
  </div>
</template>
