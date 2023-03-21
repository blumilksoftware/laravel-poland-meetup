<script setup>
import { CalendarDaysIcon, SignalIcon, MapPinIcon } from '@heroicons/vue/24/outline'
import FacebookIcon from '@/components/Icons/FacebookIcon.vue'
import PulseBackgroundAnimation from '@/components/ReusableComponents/PulseBackgroundAnimation.vue'

defineProps({
  meetup: {
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
  <div v-if="!loading" class="relative overflow-hidden bg-white shadow-lg">
    <PulseBackgroundAnimation/>
    <div class="relative z-10 mx-auto max-w-7xl space-y-5 py-16 px-4 text-center sm:py-24 sm:px-6 lg:block lg:justify-center lg:px-8">
      <h1 v-if="meetup" class="text-laravel text-2xl font-bold tracking-tight sm:text-5xl">
        {{ meetup.name }}
      </h1>
      <div class="text-md space-y-2 text-zinc-500 sm:text-2xl">
        <div class="flex items-center justify-center">
          <calendar-days-icon class="mr-1.5 h-6 w-6 shrink-0 text-zinc-400 sm:h-7 sm:w-7" aria-hidden="true"/>
          <p>{{ meetup.dateFull }}</p>
        </div>
        <div class="flex items-center justify-center">
          <signal-icon v-if="meetup.location === 'online'" class="mr-1.5 h-6 w-6 shrink-0 text-zinc-400" aria-hidden="true"/>
          <map-pin-icon v-else class="mr-1.5 h-6 w-6 shrink-0 text-zinc-400 sm:h-7 sm:w-7" aria-hidden="true"/>
          <p>
            {{ meetup.location }}
          </p>
        </div>
      </div>
      <div class="flex justify-center text-zinc-500 sm:text-2xl">
        <a :href="meetup.facebookEvent" class="flex justify-center space-x-5">
          <span class="hidden sm:flex">
            Sprawdź wydarzenie na Facebooku! 
          </span>
          <facebook-icon :href="meetup.facebook" class="h-6 w-6 self-center"/>
        </a>
      </div>
    </div>
  </div>
</template>
