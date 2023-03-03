<script setup>
import FacebookIcon from '@/components/Icons/FacebookIcon.vue'
import LinkedinIcon from '@/components/Icons/LinkedinIcon.vue'
import TwitterIcon from '@/components/Icons/TwitterIcon.vue'
import { PresentationChartLineIcon, UserIcon } from '@heroicons/vue/24/outline'

defineProps({
  meetups: {
    type: Array,
    default: () => [],
  },
  speaker: {
    type: Object,
    default: () => {},
  },
  loading: {
    type: Boolean,
    default: true,
  },
})

</script>
<template>
  <div class="mx-auto">
    <div>
      <h2 class="first-letter:text-laravel lg:py-18 w-full border-b py-10 px-7 text-2xl font-bold sm:px-6 md:text-4xl lg:px-8">
        Wizytówka
      </h2>
      <div class="my-12 flex items-center justify-center space-x-10 md:space-x-24">
        <img :src="speaker.image" :alt="'zdjęcie prelegenta' + speaker.name" class="h-32 w-32 rounded-full shadow-lg md:h-56 md:w-56">
        <div class="space-y-4">
          <div class="flex transition duration-200 hover:translate-x-1">
            <user-icon class="mr-3 h-7 w-7 shrink-0 text-zinc-600" aria-hidden="true"/>
            <p class="text-laravel text-xl font-semibold">
              {{ speaker.name }}
            </p>
          </div>
          <div class="flex transition duration-200 hover:translate-x-1">
            <presentation-chart-line-icon class="mr-3 h-7 w-7 shrink-0 text-zinc-600" aria-hidden="true"/>
            <p class="text-md font-medium sm:text-lg">
              Prezentacje: 9
            </p>
          </div>
          <div class="mx-auto flex items-center space-x-4 md:space-x-5">
            <linkedin-icon v-if="speaker.linkedin" :href="speaker.linkedin" class="h-9 w-9 pr-2 text-zinc-600 sm:h-10 sm:w-10"/>
            <facebook-icon v-if="speaker.facebook" :href="speaker.facebook" class="h-9 w-9 pr-2 text-zinc-600 sm:h-10 sm:w-10"/>
            <twitter-icon v-if="speaker.twitter" :href="speaker.twitter" class="h-9 w-9 pr-2 text-zinc-600 sm:h-10 sm:w-10"/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
