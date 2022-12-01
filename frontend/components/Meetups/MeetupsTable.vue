<script setup>
import { ref, computed, defineProps } from 'vue'
import { CalendarIcon, ChevronRightIcon, MapPinIcon, ChatBubbleLeftIcon, MagnifyingGlassIcon, UsersIcon  } from '@heroicons/vue/24/outline'

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

const meetupCompanies = ( meetup ) => {
  let setCompanies = new Set()
  meetup.presentations.forEach(({ speakers }) => speakers.forEach(({ company }) => setCompanies.add(company.toLowerCase())))
  return setCompanies
}

const meetupSpeakers = ( meetup ) => {
  let setSpeakers = new Set()
  meetup.presentations.forEach(({ speakers }) => speakers.forEach(({ name, avatar }) => 
    setSpeakers.add({ name: name, avatar: avatar }),
  ))
  return setSpeakers
}

const meetupTags = ( meetup ) => {
  let setTags = new Set()
  meetup.presentations.forEach(({ tags }) => tags.forEach(tag => setTags.add(tag)))
  return setTags
}

let showDetails = ref(null)

// const mouseOver = () => {
//   this.showDetails = !this.showDetails
// }
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
          <input v-model="searchMeetup" type="text" name="meetup" class="block w-full rounded-full border-zinc-300 px-4 pl-8 shadow-sm placeholder:text-zinc-400 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" placeholder="#23" @keydown.enter.prevent>
        </div>
      </div>
      <div class="my-4 md:mx-4 md:my-0">
        <label for="company" class="ml-px block pl-4 text-sm font-medium text-zinc-700">Firmy</label>
        <div class="relative mt-1">
          <span class="absolute inset-y-0 left-0 flex items-center pl-2">
            <magnifying-glass-icon class="mr-1.5 h-5 w-5 shrink-0 text-zinc-400" aria-hidden="true"/> 
          </span>
          <input v-model="searchCompany" type="text" name="comapny" class="block w-full rounded-full border-zinc-300 px-4 pl-8 shadow-sm placeholder:text-zinc-400 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" placeholder="Blumilk" @keydown.enter.prevent>
        </div>
      </div>
      <div class="my-4 md:mx-4 md:my-0">
        <label for="speaker" class="ml-px block pl-4 text-sm font-medium text-zinc-700">Prelegenci</label>
        <div class="relative mt-1">
          <span class="absolute inset-y-0 left-0 flex items-center pl-2">
            <magnifying-glass-icon class="mr-1.5 h-5 w-5 shrink-0 text-zinc-400" aria-hidden="true"/> 
          </span>
          <input v-model="searchSpeaker" type="text" name="speaker" class="block w-full rounded-full border-zinc-300 px-4 pl-8 shadow-sm placeholder:text-zinc-400 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" placeholder="Jan Kowalski" @keydown.enter.prevent>
        </div>
      </div>
      <div class="my-4 md:mx-4 md:my-0">
        <label for="presentation" class="ml-px block pl-4 text-sm font-medium text-zinc-700">Prezentacje</label>
        <div class="relative mt-1">
          <span class="absolute inset-y-0 left-0 flex items-center pl-2">
            <magnifying-glass-icon class="mr-1.5 h-5 w-5 shrink-0 text-zinc-400" aria-hidden="true"/> 
          </span>
          <input v-model="searchPresentation" type="text" name="presentation" class="block w-full rounded-full border-zinc-300 px-4 pl-8 shadow-sm placeholder:text-zinc-400 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" placeholder="Laravel..." @keydown.enter.prevent>
        </div>
      </div>
    </form>
    <div class="overflow-hidden bg-white">
      <ul role="list" class="divide-y divide-zinc-200">
        <li v-for="meetup in filteredMeetups" :key="meetup.id" class="w-11/12 sm:w-full" @mouseenter="showDetails = meetup.id" @mouseleave="showDetails = null">
          <Transition transition duration="1000">
            <router-link :to="{ name: 'meetups.details', params: { id: meetup.id } }" class="block hover:bg-zinc-50">
              <div class="flex items-center">
                <div class="min-w-0 flex-1 sm:flex sm:items-center sm:justify-between">
                  <div class="w-full space-y-2 truncate p-4 sm:px-6">
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
                    <div v-if="meetup.presentations.length" class="inner">
                      <ul class="text-md my-5 list-inside tracking-tight text-zinc-600">
                        <li v-for="presentation in meetup.presentations" :key="presentation.title" class="truncate py-1">
                          <chat-bubble-left-icon class="mr-1.5 inline-block h-5 w-5 shrink-0 space-x-4 text-zinc-400" aria-hidden="true"/>{{ presentation.title }}
                        </li>
                      </ul>
                    </div>
                    <div v-if="meetupTags(meetup).size" class="flex space-x-3 text-zinc-500">
                      <p>Tagi: </p>
                      <ul class="flex space-x-1">
                        <li v-for="tag of meetupTags(meetup)" :key="tag" class="text-zinc-400">
                          {{ tag }}{{ ',' }}
                        </li>
                      </ul>
                    </div>
                    <Transition duration="550" name="nested">
                      <div v-if="showDetails === meetup.id" class="flex items-center opacity-100 transition duration-700 ease-in-out">
                        <users-icon class="text-laravel-500 mr-1.5 inline-block h-5 w-5 shrink-0 text-zinc-400" aria-hidden="true"/>
                        <ul class="flex items-center space-x-1">
                          <li v-for="speaker of meetupSpeakers(meetup)" :key="speaker.name" class="flex text-zinc-600">
                            {{ speaker.name }}{{ ', ' }}
                            <!-- <img class="h-8 w-8 rounded-full shadow-lg" :src="speaker.avatar" :alt="speaker.name"> -->
                          </li>
                        </ul>
                      </div>
                    </Transition>
                    <Transition duration="550" delay="{ enter: 300, leave: 500 }" name="nested">
                      <div v-if="showDetails === meetup.id" class="flex space-x-3">
                        <ul class="flex space-x-1">
                          <li v-for="company of meetupCompanies(meetup)" :key="company" class="flex text-zinc-600">
                            <div class="block justify-center md:m-auto md:flex md:w-3/5">
                              <img v-if="'/images/companies/' + company + '.webp'" class="center mx-auto h-12 object-contain" :alt="'logo ' + company" :src="'/images/companies/' + company + '.webp'">
                            </div>
                          </li>
                        </ul>
                      </div>
                    </Transition>
                  </div>
                </div>
                <div class="visible ml-5 shrink-0 p-4 sm:px-6">
                  <chevron-right-icon class="h-5 w-5 text-zinc-400" aria-hidden="true"/>
                </div>
              </div>
            </router-link>
          </Transition>
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

<style scoped>
.nested-enter-active, .nested-leave-active {
	transition: all 0.3s ease-in-out;
}

.nested-enter-from,
.nested-leave-to {
  transform: translateY(20px);
  opacity: 0;
}
.nested-enter-active .inner,
.nested-leave-active .inner { 
  transition: all 0.3s ease-in-out;
}
.nested-enter-active .inner {
	transition-delay: 0.25s;
}
.nested-enter-from .inner,
.nested-leave-to .inner {
  transform: translateX(30px);
  opacity: 0.001;
}
</style>
