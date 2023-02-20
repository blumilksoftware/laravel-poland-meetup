<script setup>
import { computed } from 'vue'
import { CalendarIcon, ChevronRightIcon, ExclamationCircleIcon, MapPinIcon, ChatBubbleLeftIcon } from '@heroicons/vue/24/outline'
import { useFindNextMeetup } from '@/composables/useFindNextMeetup.js'
import LoadingSpinner from '@/components/Icons/LoadingSpinner.vue'
import NoResults from '@/components/EmptyStates/NoResults.vue'

const props = defineProps ({
  data: {
    type: Array,
    default: () => [],
  },
  loading: {
    type: Boolean,
    default: true,
  },
  allMeetups: {
    type: Array,
    default: () => [],
  },
})

const findNextMeetup = computed(() => {
  if (props.allMeetups.length === 0) return {}
  const { nextMeetup } = useFindNextMeetup(props.allMeetups) 
  return nextMeetup.value
})

const meetupSpeakers = ( meetup ) => {
  let setSpeakers = new Set()
  meetup.presentations.forEach(({ speakers }) => speakers.forEach(({ name, avatar, image }) => 
    setSpeakers.add({ name: name, avatar: avatar, image:image }),
  ))
  return setSpeakers
}

const meetupTags = ( meetup ) => {
  let setTags = new Set()
  meetup.presentations.forEach(({ tags }) => tags.forEach(tag => setTags.add(tag)))
  return setTags
}

</script>
<template>
  <LoadingSpinner v-if="loading" class="bg-zinc-100"/>
  <ul v-if="!loading" v-auto-animate role="list" class="divide-y divide-zinc-200 bg-white">
    <li v-for="meetup in data" :key="meetup.id" class="w-full">
      <transition enter-active-class="transition ease-in-out duration-500" enter-from-class="transform opacity-0 translate-y-64" enter-to-class="transform opacity-100 translate-y-0" leave-active-class="transition ease-in duration-700" leave-from-class="transform opacity-100 scale-100" leave-to-class="transform opacity-0 scale-95">
        <router-link :to="{ name: 'meetups.details', params: { id: meetup.id } }" class="relative block hover:bg-zinc-50">
          <div class="flex items-center">
            <div class="min-w-0 flex-1 sm:flex sm:items-center sm:justify-between">
              <div class="w-full space-y-2 truncate p-4 sm:px-6">
                <div class="text-laravel flex space-x-4 text-xl font-medium">
                  <div v-if="!Object.keys(findNextMeetup).length || meetup.date < findNextMeetup.date" class="flex text-red-800">
                    <p class="truncate">
                      {{ meetup.name }}
                    </p>
                  </div>
                  <div v-else-if="meetup.date >= findNextMeetup.date" class="block sm:flex">
                    <p class="truncate">
                      {{ meetup.name }}
                    </p>
                    <div v-if="findNextMeetup.id === meetup.id" class="flex">
                      <exclamation-circle-icon class="mr-3 inline-block h-5 w-5 self-center sm:mx-3" aria-hidden="true"/>
                      <p class="text-lg">
                        Najbliższe wydarzenie
                      </p>
                    </div>
                  </div>
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
                <div v-if="meetup.presentations.length">
                  <ul class="text-md my-3 list-inside tracking-tight text-zinc-600">
                    <li v-for="presentation in meetup.presentations" :key="presentation.title" class="truncate py-1 font-medium">
                      <chat-bubble-left-icon class="mr-1.5 inline-block h-5 w-5 shrink-0 space-x-4 text-zinc-400" aria-hidden="true"/>{{ presentation.title }}
                    </li>
                  </ul>
                </div>
                <div class="block items-center opacity-100 transition duration-700 ease-in-out">
                  <div v-if="meetupTags(meetup).size" class="flex space-x-3 text-zinc-500">
                    <p>Tagi: </p>
                    <ul class="flex space-x-1">
                      <li v-for="tag of meetupTags(meetup)" :key="tag" class="text-zinc-400">
                        {{ tag }}{{ ',' }}
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div class="hidden md:flex">
              <ul class="flex -space-x-2 overflow-hidden">
                <li v-for="speaker in meetupSpeakers(meetup)" :key="speaker.name" class="inline-block w-10">
                  <img v-if="speaker.image === ''" :src="speaker.avatar" :alt="`${speaker.name} zdjęcie`" class="my-2 rounded-full shadow-md">
                  <img v-else :src="speaker.image" :alt="`${speaker.name} logo`" class="my-2 rounded-full shadow-md">
                </li>
              </ul>
            </div>
            <div class="visible ml-5 shrink-0 p-4 sm:px-6">
              <chevron-right-icon class="h-5 w-5 text-zinc-400" aria-hidden="true"/>
            </div>
          </div>
        </router-link>
      </transition>
    </li>
    <li v-if="(!data.length && !loading && !error)" class="space-y-7 text-xl text-zinc-500">
      <NoResults/>
      <!-- <p class="m-8 text-left md:text-center">
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
      </div> -->
    </li>
  </ul>
</template>
