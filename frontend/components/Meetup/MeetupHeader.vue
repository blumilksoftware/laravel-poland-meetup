<script setup>
import { CalendarDaysIcon, SignalIcon } from '@heroicons/vue/24/outline'
import FacebookIcon from '@/components/Icons/FacebookIcon.vue'
import PulseBackgroundAnimation from '@/components/ReusableComponents/PulseBackgroundAnimation.vue'

defineProps({
  meetup: {
    type: Object,
    default: () => {},
  },
})
</script>

<template>
  <div class="relative overflow-hidden bg-white">
    <PulseBackgroundAnimation/>
    <div class="relative z-10 mx-auto max-w-7xl space-y-5 py-16 px-4 text-center sm:py-24 sm:px-6 lg:block lg:justify-center lg:px-8">
      <h1 v-if="meetup" class="text-laravel text-4xl font-bold tracking-tight sm:text-5xl">
        {{ meetup.name }}
      </h1>
      <div class="space-y-2 text-xl text-gray-500 sm:text-2xl">
        <div class="flex items-center justify-center">
          <calendar-days-icon class="mr-1.5 h-7 w-7 shrink-0 text-gray-400" aria-hidden="true"/>
          <p>{{ meetup.dateFull }}</p>
        </div>
        <div class="flex items-center justify-center">
          <signal-icon v-if="meetup.location === 'online'" class="mr-1.5 h-7 w-7 shrink-0 text-gray-400" aria-hidden="true"/>
          <p>
            {{ meetup.location }}
          </p>
        </div>
      </div>
      <div class="flex justify-center text-gray-500 sm:text-2xl">
        <a :href="meetup.facebookEvent" target="_blank" rel="noopener" class="flex justify-center space-x-5">
          <span>
            Sprawdź wydarzenie na Facebooku! 
          </span>
          <facebook-icon :href="meetup.facebook" class="h-6 w-6 self-center"/>
        </a>
      </div>
    </div>
  </div>
</template>
