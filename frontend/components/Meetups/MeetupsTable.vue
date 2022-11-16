<script setup>
import { ref, computed, defineProps } from 'vue'
import { MagnifyingGlassIcon, CalendarIcon, ChevronRightIcon, MapPinIcon } from '@heroicons/vue/24/outline'

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
      return meetups
    }
    return (
      meetup.name.toLowerCase().includes(searchValue.value.toLowerCase()) ||
      meetup.dateFull.toLowerCase().includes(searchValue.value.toLowerCase()) ||
      meetup.location.toLowerCase().includes(searchValue.value.toLowerCase()) ||
      meetup.presentations.forEach(presentation => presentation.title.toLowerCase().includes(searchValue.value.toLowerCase()))
    )  
  })
})

</script>

<template>
  <div class="mx-auto max-w-7xl">
    <div class="my-6 ">
      <input type="text" v-model="searchValue" placeholder="Szukaj..." class="placeholder-zinc-300 border-zinc-300 outline-none outline-offset-0 focus:border-zinc-400 rounded-md"/>
    </div>
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
                <div class="mt-4 flex-shrink-0 sm:mt-0 sm:ml-5">
                  <div class="flex -space-x-1 overflow-hidden">
                    <img v-for="speaker in meetup.speakers" class="inline-block h-8 w-8 rounded-full ring-2 ring-white" :src="speaker.avatar" :alt="speaker.name" :title="speaker.name">
                  </div>
                </div>
              </div>
              <div class="ml-5 flex-shrink-0 hidden md:visible">
                <chevron-right-icon class="h-5 w-5 text-gray-400" aria-hidden="true"></chevron-right-icon>
              </div>
            </div>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>
