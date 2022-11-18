<script setup>
//work in progress
//filteredMeetups need to be improve

import { ref, computed, defineProps } from 'vue'
import { CalendarIcon, ChevronRightIcon, MapPinIcon } from '@heroicons/vue/24/outline'

const props = defineProps({
  meetups: {
    type: Array,
    default: [],
  },
})

const searchValue = ref('')

const filteredMeetups = computed (() => {
  return props.meetups.filter((meetup) => {
    if (!searchValue) {
      return props.meetups
    }
    return (
      meetup.name.toLowerCase().includes(searchValue.value.toLowerCase())     ||
      meetup.dateFull.toLowerCase().includes(searchValue.value.toLowerCase()) ||
      meetup.location.toLowerCase().includes(searchValue.value.toLowerCase()) ||
      meetup.presentations.forEach(presentation => presentation.title.toLowerCase().includes(searchValue.value.toLowerCase()))
    )  
  })
})

</script>

<template>
  <div class="mx-auto max-w-7xl px-2 sm:px-4 lg:px-8">
      <form class="my-6 flex -mt-5 justify-center sm:justify-start">
        <label class="relative block w-11/12 md:w-56">
          <span class="absolute inset-y-0 left-0 flex items-center pl-2">
            <svg class="h-5 w-5 fill-zinc-300" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path>
            </svg>
          </span>
          <span class="sr-only">Szukaj</span>
          <input type="text" v-model="searchValue" class="block h-12 text-lg text-zinc-600 bg-white w-full border border-slate-300 rounded-full py-2 pl-9 pr-3 shadow-sm placeholder:italic placeholder:text-zinc-400 focus:outline-none focus:border-zinc-400 focus:ring-zinc-400 focus:ring-1 sm:text-md" placeholder="Szukaj...">
        </label>
      </form>
    <div class="overflow-hidden bg-white">
      <ul role="list" class="divide-y divide-gray-200">
        <li class="w-11/12 sm:w-full" v-for="meetup in filteredMeetups" :key="meetup.id">
          <router-link :to="{ name: 'meetups.details', params: { id: meetup.id } }" class="block hover:bg-gray-50">
            <div class="flex items-center px-4 py-4 sm:px-6">
              <div class="min-w-0 flex-1 sm:flex sm:items-center sm:justify-between">
                <div class="truncate space-y-2">
                  <div class="flex text-xl">
                    <p class="truncate font-medium text-laravel">{{ meetup.name }}</p>
                  </div>
                  <div class="mt-2 flex">
                    <div class="flex gap-4 items-center text-sm text-gray-500">
                      <div class="flex">
                        <calendar-icon class="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true"></calendar-icon>
                        <time :datetime="meetup.date">{{ meetup.dateFull }}</time>
                      </div>
                      <div class="flex">
                        <map-pin-icon class="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true"></map-pin-icon>
                        {{ meetup.location }}
                      </div>
                    </div>
                  </div>
                  <div>
                    <ul class="ml-2 text-zinc-600 list-inside list-disc font-semibold">
                      <li class="truncate" v-for="presentation in meetup.presentations">{{ presentation.title }}</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="ml-5 flex-shrink-0 visible">
                <chevron-right-icon class="h-5 w-5 text-gray-400" aria-hidden="true"></chevron-right-icon>
              </div>
            </div>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>
