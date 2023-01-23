<script setup>
import { CalendarDaysIcon, SignalIcon } from '@heroicons/vue/24/outline'
import FacebookIcon from '@/components/Icons/FacebookIcon.vue'

defineProps({
  meetup: {
    type: Object,
    default: () => {},
  },
})
</script>

<template>
  <div class="relative overflow-hidden bg-white">
    <div class="hidden sm:absolute sm:inset-y-0 sm:block sm:h-full sm:w-full" aria-hidden="true">
      <div class="relative mx-auto h-full max-w-7xl">
        <svg class="absolute right-full translate-y-1/4 translate-x-1/4 lg:translate-x-1/2" width="404" height="784" fill="none" viewBox="0 0 404 784">
          <defs>
            <pattern id="f210dbf6-a58d-4871-961e-36d5016a0f49" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
              <rect x="0" y="0" width="4" height="4" class="text-gray-200" fill="currentColor"/>
            </pattern>
          </defs>
          <rect width="404" height="784" fill="url(#5d0dd344-b041-4d26-bec4-8d33ea57ec9b)"/>
        </svg>
        <svg class="absolute left-full -translate-y-3/4 -translate-x-1/4 animate-pulse md:-translate-y-1/2 lg:-translate-x-1/2" width="404" height="784" fill="none" viewBox="0 0 404 784">
          <defs>
            <pattern id="5d0dd344-b041-4d26-bec4-8d33ea57ec9b" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
              <rect x="0" y="0" width="3" height="3" class="text-gray-200" fill="currentColor"/>
            </pattern>
          </defs>
          <rect width="404" height="784" fill="url(#5d0dd344-b041-4d26-bec4-8d33ea57ec9b)"/>
        </svg>
      </div>
    </div>

    <div class="relative z-10 mx-auto max-w-7xl space-y-5 py-16 px-4 text-center sm:py-24 sm:px-6 lg:block lg:justify-center lg:px-8">
      <h2 v-if="meetup" class="text-laravel text-4xl font-bold tracking-tight sm:text-5xl">
        {{ meetup.name }}
      </h2>
      <div class="space-y-2 text-xl text-gray-500 sm:text-2xl">
        <div class="flex items-center justify-center">
          <calendar-days-icon class="mr-1.5 h-7 w-7 shrink-0 text-gray-400" aria-hidden="true"/>
          <p>{{ meetup.dateFull }}</p>
        </div>
        <div class="flex items-center justify-center">
          <signal-icon class="mr-1.5 h-7 w-7 shrink-0 text-gray-400" aria-hidden="true"/>
          <p>
            {{ meetup.location }}
          </p>
        </div>
      </div>
      <div class="flex justify-center text-gray-500 sm:text-2xl">
        <a :href="meetup.facebookEvent" class="flex justify-center space-x-5">
          <span>
            Zapisz się na wydarzenie! 
          </span>
          <facebook-icon class="h-6 w-6 self-center"/>
        </a>
      </div>
    </div>
  </div>
</template>
