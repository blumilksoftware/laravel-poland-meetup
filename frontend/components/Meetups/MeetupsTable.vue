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
const searchCompany = ref('')
const searchSpeaker = ref('')
const searchPresentation = ref('')

const searchMeetupProperties = ( meetups ) => {
  return meetups.filter(meetup => 
    Object.values(meetup).some(elem =>
      typeof elem === 'string' &&
      elem.toLowerCase().includes(searchMeetup.value.toLowerCase()),
    ),
  )
}

const searchCompanies = ( meetups ) => {
  return meetups.filter(meetup => meetup.presentations.some(({ speakers }) => 
    speakers.some(({ company }) => 
      company &&
      company.toLowerCase().includes(searchCompany.value.toLowerCase()),
    ),
  ))
}

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
   
const filteredMeetups = computed (() => {
  return searchMeetupProperties(searchCompanies(searchSpeakers(searchPresentations(props.meetups))))
})

</script>

<template>
  <div class="mx-auto max-w-7xl px-2 sm:px-4 lg:px-8">
    <form class="my-6 -mt-5 block justify-center sm:flex">
      <div class="my-4 md:mx-4 md:my-0">
        <label for="meetup" class="ml-px block pl-4 text-sm font-medium text-zinc-700">Meetupy</label>
        <div class="relative mt-1">
          <span class="absolute inset-y-0 left-0 flex items-center pl-2">
            <magnifying-glass-icon class="mr-1.5 h-5 w-5 shrink-0 text-zinc-400" aria-hidden="true"/> 
          </span>
          <input v-model="searchMeetup" type="text" name="meetup" class="block w-full rounded-full border-zinc-300 px-4 pl-8 shadow-sm placeholder:text-zinc-400 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" placeholder="#23">
        </div>
      </div>
      <div class="my-4 md:mx-4 md:my-0">
        <label for="company" class="ml-px block pl-4 text-sm font-medium text-zinc-700">Firmy</label>
        <div class="relative mt-1">
          <span class="absolute inset-y-0 left-0 flex items-center pl-2">
            <magnifying-glass-icon class="mr-1.5 h-5 w-5 shrink-0 text-zinc-400" aria-hidden="true"/> 
          </span>
          <input v-model="searchCompany" type="text" name="comapny" class="block w-full rounded-full border-zinc-300 px-4 pl-8 shadow-sm placeholder:text-zinc-400 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" placeholder="Blumilk">
        </div>
      </div>
      <div class="my-4 md:mx-4 md:my-0">
        <label for="speaker" class="ml-px block pl-4 text-sm font-medium text-zinc-700">Prelegenci</label>
        <div class="relative mt-1">
          <span class="absolute inset-y-0 left-0 flex items-center pl-2">
            <magnifying-glass-icon class="mr-1.5 h-5 w-5 shrink-0 text-zinc-400" aria-hidden="true"/> 
          </span>
          <input v-model="searchSpeaker" type="text" name="speaker" class="block w-full rounded-full border-zinc-300 px-4 pl-8 shadow-sm placeholder:text-zinc-400 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" placeholder="Jan Kowalski">
        </div>
      </div>
      <div class="my-4 md:mx-4 md:my-0">
        <label for="presentation" class="ml-px block pl-4 text-sm font-medium text-zinc-700">Prezentacje</label>
        <div class="relative mt-1">
          <span class="absolute inset-y-0 left-0 flex items-center pl-2">
            <magnifying-glass-icon class="mr-1.5 h-5 w-5 shrink-0 text-zinc-400" aria-hidden="true"/> 
          </span>
          <input v-model="searchPresentation" type="text" name="presentation" class="block w-full rounded-full border-zinc-300 px-4 pl-8 shadow-sm placeholder:text-zinc-400 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" placeholder="Laravel...">
        </div>
      </div>
    </form>
    <div class="overflow-hidden bg-white">
      <ul role="list" class="divide-y divide-zinc-200">
        <li v-for="meetup in filteredMeetups" :key="meetup.id" class="w-11/12 sm:w-full">
          <router-link :to="{ name: 'meetups.details', params: { id: meetup.id } }" class="block hover:bg-zinc-50">
            <div class="flex items-center p-4 sm:px-6">
              <div class="min-w-0 flex-1 sm:flex sm:items-center sm:justify-between">
                <div class="space-y-2 truncate">
                  <div class="flex text-xl">
                    <p class="text-laravel truncate font-medium">
                      {{ meetup.name }}
                    </p>
                  </div>
                  <div class="mt-2 flex">
                    <div class="flex items-center gap-4 text-sm text-zinc-500">
                      <div class="flex">
                        <calendar-icon class="mr-1.5 h-5 w-5 shrink-0 text-zinc-400" aria-hidden="true"/>
                        <time :datetime="meetup.date">{{ meetup.dateFull }}</time>
                      </div>
                      <div class="flex">
                        <map-pin-icon class="mr-1.5 h-5 w-5 shrink-0 text-zinc-400" aria-hidden="true"/>
                        {{ meetup.location }}
                      </div>
                    </div>
                  </div>
                  <div class="flex space-x-3">
                    <p class="text-zinc-600">
                      Prelegenci:
                    </p>
                    <ul class="flex space-x-1">
                      <li v-for="speaker of meetupSpeakers(meetup)" :key="speaker.name" class="flex font-semibold text-zinc-600">
                        {{ speaker }}{{ ',' }}
                      </li>
                    </ul>
                  </div>
                  <div>
                    <ul class="list-inside text-sm text-zinc-600">
                      <li v-for="presentation in meetup.presentations" :key="presentation.title" class="truncate py-1">
                        <chat-bubble-left-icon class="mr-1.5 inline-block h-5 w-5 shrink-0 text-zinc-400"/>{{ presentation.title }}
                      </li>
                    </ul>
                  </div>
                  <div class="flex space-x-3 text-zinc-500">
                    <p>Tagi: </p>
                    <ul class="flex space-x-1">
                      <li v-for="tag of tags(meetup)" :key="tag" class="text-zinc-400">
                        {{ tag }}{{ ',' }}
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="visible ml-5 shrink-0">
                <chevron-right-icon class="h-5 w-5 text-zinc-400" aria-hidden="true"/>
              </div>
            </div>
          </router-link>
        </li>
        <li v-if="!filteredMeetups.length" class="space-y-7 text-xl text-zinc-500">
          <p class="m-8 text-left md:text-center">
            Nie znaleźliśmy pasujących wyników.
          </p>
          <ul class="m-9 w-fit list-disc md:m-auto md:text-left">
            <li>
              Sprawdź, czy szukana fraza nie zawiera błędów.
            </li>
            <li>
              Spróbuj użyć innych słów kluczowych.
            </li>
            <li>
              Spróbuj użyć bardziej ogólnych słów kluczowych.
            </li>
          </ul>
          <div class="block justify-center md:m-auto md:flex md:w-3/5">
            <img class="center h-50 mx-auto" src="/images/placeholders/noresults.webp" alt="brak wyników wyszukiwania">
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
