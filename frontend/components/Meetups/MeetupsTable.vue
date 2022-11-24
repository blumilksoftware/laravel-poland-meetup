<script setup>
import { ref, computed, defineProps } from 'vue'
import { CalendarIcon, ChevronRightIcon, MapPinIcon, ChatBubbleLeftIcon, MagnifyingGlassIcon  } from '@heroicons/vue/24/outline'

const props = defineProps({
  meetups: {
    type: Array,
    default: () => [],
  },
})

const searchMeetup = ref('')
const searchPresentation = ref('')
const searchSpeaker = ref('')

const searchSpeakers = ( meetups ) => {
  return meetups.filter(meetup => meetup.presentations.some(({ speakers }) => 
  speakers.some(({ name }) => 
  name.toLowerCase().includes(searchSpeaker.value.toLowerCase()),
    ),
  ))
}

const searchPresentations = ( meetups ) => {
  return meetups.filter(meetup => 
    meetup.presentations.some(({ title, tags }) => 
      title.toLowerCase().includes(searchPresentation.value.toLowerCase()) +
      tags.some(tag => tag.toLowerCase().includes(searchPresentation.value.toLowerCase())),
    ),
  )  
}

const searchMeetupProperties = ( meetups ) => {
  return meetups.filter(meetup => 
    Object.values(meetup).some(elem =>
      typeof elem === 'string' &&
      elem.toLowerCase().includes(searchMeetup.value.toLowerCase()),
    ),
  )
}
   
const filteredMeetups = computed (() => {
    return searchMeetupProperties(searchSpeakers(searchPresentations(props.meetups)))
})

const meetupSpeakers = ( meetup ) => {
  let setSpeakers = new Set();

  meetup.presentations.forEach(({ speakers }) => speakers.forEach(({ name }) => setSpeakers.add(name)))

  return setSpeakers
}

const tags = (meetup) => {
  let setTags = new Set();

  meetup.presentations.forEach(({ tags }) => tags.forEach(tag => setTags.add(tag)))

  return setTags
}

</script>

<template>
  <div class="mx-auto max-w-7xl px-2 sm:px-4 lg:px-8">
    <form class="my-6 -mt-5 block justify-center m-auto md:w-11/12 sm:flex md:space-x-5 space-y-3 md:space-y-0">
      <label class="relative flex md:w-11/12 md:m-none md:w-56">
        <span class="absolute inset-y-0 left-0 flex items-center pl-2">
          <magnifying-glass-icon class="mr-1.5 h-5 w-5 shrink-0 text-gray-400" aria-hidden="true"/> 
        </span>
        <span class="sr-only">Szukaj</span>
        <input v-model="searchMeetup" type="text" class="sm:text-md block h-12 w-full rounded-xl border border-slate-300 bg-white py-2 pl-9 pr-3 text-lg text-zinc-600 shadow-sm placeholder:italic placeholder:text-zinc-400 focus:border-zinc-400 focus:outline-none focus:ring-1 focus:ring-zinc-400 hover:bg-gray-50" placeholder="Szukaj meetupu...">
      </label>
      <label class="relative flex md:w-11/12 md:m-none md:w-56">
        <span class="absolute inset-y-0 left-0 flex items-center pl-2">
          <magnifying-glass-icon class="mr-1.5 h-5 w-5 shrink-0 text-gray-400" aria-hidden="true"/> 
        </span>
        <span class="sr-only">Szukaj</span>
        <input v-model="searchSpeaker" type="text" class="sm:text-md block h-12 w-full rounded-xl border border-slate-300 bg-white py-2 pl-9 pr-3 text-lg text-zinc-600 shadow-sm placeholder:italic placeholder:text-zinc-400 focus:border-zinc-400 focus:outline-none focus:ring-1 focus:ring-zinc-400 hover:bg-gray-50" placeholder="Szukaj prelegentów...">
      </label>
      <label class="relative flex md:w-11/12 md:m-none md:w-56">
        <span class="absolute inset-y-0 left-0 flex items-center pl-2">
          <magnifying-glass-icon class="mr-1.5 h-5 w-5 shrink-0 text-gray-400" aria-hidden="true"/> 
        </span>
        <span class="sr-only">Szukaj</span>
        <input v-model="searchPresentation" type="text" class="sm:text-md block h-12 w-full rounded-xl border border-slate-300 bg-white py-2 pl-9 pr-3 text-lg text-zinc-600 shadow-sm placeholder:italic placeholder:text-zinc-400 focus:border-zinc-400 focus:outline-none focus:ring-1 focus:ring-zinc-400 hover:bg-gray-50" placeholder="Szukaj prezentacji...">
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
                  <div class="flex space-x-3">
                    <p class="text-zinc-600">Prelegenci: </p>
                    <ul class="flex space-x-1">
                      <li v-for="speaker of meetupSpeakers(meetup)" class="flex text-zinc-600 font-semibold">{{ speaker }}{{ ',' }}</li>
                    </ul>
                  </div>
                  <div>
                    <ul class="list-inside  text-sm text-zinc-600">
                      <li v-for="presentation in meetup.presentations" :key="presentation.title" class="truncate py-1">
                        <chat-bubble-left-icon class="mr-1.5 inline-block h-5 w-5 shrink-0 text-gray-400"/>{{ presentation.title }}
                      </li>
                    </ul>
                  </div>
                  <div class="flex space-x-3 text-zinc-500">
                    <p>Tagi: </p>
                    <ul class="flex space-x-1">
                      <li v-for="tag of tags(meetup)" class="text-zinc-400">{{ tag }}{{ ',' }}</li>
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
