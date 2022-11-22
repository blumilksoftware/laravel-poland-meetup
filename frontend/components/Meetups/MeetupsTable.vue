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

const searchSpeakers = (meetup) => { 
 if( meetup.presentations.some(({ speakers }) => 
    speakers.some(({ name }) => 
      name.toLowerCase().includes(searchValue.value.toLowerCase()),
    ),
  )) {
    return meetup
  }
}

const searchPresentations = (meetup) => { 
  if(meetup.presentations.some(({ title }) => 
    title.toLowerCase().includes(searchValue.value.toLowerCase()),
    )) { 
    return meetup 
  }
}

const searchMeetupProperty = (meetup) => {
  const arrayMeetup = Object.values(meetup)
  let array = []

  for(const elem of arrayMeetup) {

    if(typeof elem === 'string') {
      array.push(elem)
    }
  }

  if(array.some(elem => elem.toLowerCase().includes(searchValue.value.toLowerCase()))) {
    return meetup
  }
}

const filteredMeetups = computed (() => {
  return props.meetups.filter((meetup) => {
    if (!searchValue.value) {
      return props.meetups
    }
    return searchPresentations(meetup) || searchSpeakers(meetup) || searchMeetupProperty(meetup)
  })
})

</script>

<template>
  <div class="mx-auto max-w-7xl px-2 sm:px-4 lg:px-8">
    <form class="my-6 -mt-5 flex justify-center sm:justify-start">
      <label class="relative block w-11/12 md:w-56">
        <span class="absolute inset-y-0 left-0 flex items-center pl-2">
          <svg class="h-5 w-5 fill-zinc-300" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"/>
          </svg>
        </span>
        <span class="sr-only">Szukaj</span>
        <input v-model="searchValue" type="text" class="sm:text-md block h-12 w-full rounded-full border border-slate-300 bg-white py-2 pl-9 pr-3 text-lg text-zinc-600 shadow-sm placeholder:italic placeholder:text-zinc-400 focus:border-zinc-400 focus:outline-none focus:ring-1 focus:ring-zinc-400" placeholder="Szukaj...">
      </label>
    </form>
    <div class="overflow-hidden bg-white">
      <ul role="list" class="divide-y divide-gray-200">
        <li v-for="meetup in filteredMeetups" :key="meetup.id" class="w-11/12 sm:w-full">
          <router-link :to="{ name: 'meetups.details', params: { id: meetup.id } }" class="block hover:bg-gray-50">
            <div class="flex items-center p-4 sm:px-6">
              <div class="min-w-0 flex-1 sm:flex sm:items-center sm:justify-between">
                <div class="space-y-2 truncate">
                  <div class="flex text-xl">
                    <p class="text-laravel truncate font-medium">
                      {{ meetup.name }}
                    </p>
                  </div>
                  <div class="mt-2 flex">
                    <div class="flex items-center gap-4 text-sm text-gray-500">
                      <div class="flex">
                        <calendar-icon class="mr-1.5 h-5 w-5 shrink-0 text-gray-400" aria-hidden="true"/>
                        <time :datetime="meetup.date">{{ meetup.dateFull }}</time>
                      </div>
                      <div class="flex">
                        <map-pin-icon class="mr-1.5 h-5 w-5 shrink-0 text-gray-400" aria-hidden="true"/>
                        {{ meetup.location }}
                      </div>
                    </div>
                  </div>
                  <div>
                    <ul class="ml-2 list-inside list-disc font-semibold text-zinc-600">
                      <li v-for="presentation in meetup.presentations" :key="presentation.title" class="truncate">
                        {{ presentation.title }}
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="visible ml-5 shrink-0">
                <chevron-right-icon class="h-5 w-5 text-gray-400" aria-hidden="true"/>
              </div>
            </div>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>
