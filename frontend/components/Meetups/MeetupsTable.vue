<script setup>
import { ref, computed } from 'vue'
import { CalendarIcon, ChevronRightIcon, FunnelIcon, ChevronDownIcon, ExclamationCircleIcon, MapPinIcon, ChatBubbleLeftIcon, MagnifyingGlassIcon } from '@heroicons/vue/24/outline'
import { useFindNextMeetup } from '@/components/Meetup/useFindNextMeetup'
// import { useSortMeetups } from '@/components/Meetup/useSortMeetups'
import FilterButton from '@/components/Meetups/FilterButton.vue'

const props = defineProps({
  meetups: {
    type: Array,
    default: () => [],
  },
  companies: {
    type: Array,
    default: () => [],
  },
  speakers: {
    type: Array,
    default: () => [],
  },
  loading: {
    type: Boolean,
    default: true,
  },
})

const searchMeetup = ref('')
const checkedCompanies = ref([])
const checkedSpeakers = ref([])
const { nextMeetup } = useFindNextMeetup()

const updateCompaniesFilter = function(selectedFilters) {
  checkedCompanies.value = selectedFilters
}

const updateSpeakersFilter = function(selectedFilters) {
  checkedSpeakers.value = selectedFilters
}

const searchMeetupAndPresentation = ( meetups ) => {
  
  return meetups.filter(meetup => 
    Object.values(meetup).some(elem =>
      typeof elem === 'string' &&
      elem.toLowerCase().includes(searchMeetup.value.toLowerCase()),
    ) 
    +
    meetup.presentations.some(({ title, tags }) => 
      title.toLowerCase().includes(searchMeetup.value.toLowerCase()) 
      +
      tags.some(tag => tag.toLowerCase().includes(searchMeetup.value.toLowerCase())),
    ),
  )
}

const searchCompany = ( meetups ) => {
  if (checkedCompanies.value.length === 0) {
  return meetups }
  return meetups.filter(meetup => meetup.presentations.some(({ speakers }) => 
    speakers.some(({ company }) => {
      return checkedCompanies.value.includes(company)
    }),
  ))
}

const searchSpeaker = ( meetups ) => {
  if (checkedSpeakers.value.length === 0) 
  return meetups

  return meetups.filter(meetup => meetup.presentations.some(({ speakers }) => 
    speakers.some(({ name }) => {
      return checkedSpeakers.value.includes(name)
    }),
  ))
}

const filteredMeetups = computed (() => {
  const oldMeetups = []
  const futureMeetups = []
  const today = new Date()
  let returnMeetupList = []
  const selected = searchSpeaker(searchCompany(searchMeetupAndPresentation(props.meetups)))  
 
  // const { sortedMeetups } = useSortMeetups(selected)

  //sort via date

  for(const meetup of selected) {
    if(new Date(meetup.date) >= today ) {
      futureMeetups.push(meetup)
    }
    else 
      oldMeetups.push(meetup)
  }
  
  function compare( a, b ) {
    if ( a.date < b.date ) {
      return -1
    }
    if ( a.date > b.date ) {
      return 1
    }
    return 0
  }
  
  futureMeetups.sort(compare)
  oldMeetups.sort(compare).reverse()
  
  for(const item of futureMeetups) {
    returnMeetupList.push(item)
  }
  
  for(const item of oldMeetups) {
    returnMeetupList.push(item)
  }
 console.log('returnMeetupList', returnMeetupList)
  return returnMeetupList
})

// const meetupSpeakers = ( meetup ) => {
//   let setSpeakers = new Set()
//     meetup.presentations.forEach(({ speakers }) => speakers.forEach(({ name, avatar }) => 
//     setSpeakers.add({ name: name, avatar: avatar }),
//   ))
//   return setSpeakers
// }

const meetupTags = ( meetup ) => {
  let setTags = new Set()
  meetup.presentations.forEach(({ tags }) => tags.forEach(tag => setTags.add(tag)))
  return setTags
}

</script>

<template>
  <div class="mx-auto max-w-7xl px-2 sm:px-4 lg:px-8">
    <div class="my-4 flex space-x-6 text-zinc-700">
      <form class="block min-w-[270px] justify-start sm:flex">
        <div class="my-4 w-full md:mx-4 md:my-0">
          <label for="meetup" class="ml-px block pl-4 text-sm font-medium">Meetupy</label>
          <div class="relative mt-1">
            <span class="absolute inset-y-0 left-0 flex items-center pl-2">
              <magnifying-glass-icon class="mr-1.5 h-5 w-5 shrink-0 text-zinc-400" aria-hidden="true"/> 
            </span>
            <input v-model="searchMeetup" type="text" name="meetup" class="block w-full rounded-full border-zinc-300 px-4 pl-8 shadow-sm placeholder:text-zinc-400 focus:border-zinc-500 focus:ring-zinc-500 sm:text-sm" placeholder="#23" @keydown.enter.prevent>
          </div>
        </div>
      </form>
      <div class="mt-5 self-center md:invisible">
        <funnel-icon class="mr-3 inline-block h-7 w-7 text-zinc-400" aria-hidden="true"/>
      </div>
      <div class="invisible mt-2 flex w-full justify-between md:visible">
        <div class="flex space-x-6 self-center">
          <FilterButton id="companies" :data="companies" name="Firmy" @updated="updateCompaniesFilter"/>
          <FilterButton id="speakers" :data="speakers" name="Osoby" @updated="updateSpeakersFilter"/>
        </div>
        <div class="flex space-x-3 self-center">
          <span>Sortuj</span>
          <span class="self-center">
            <chevron-down-icon class="h-5 w-5 items-center text-zinc-400" aria-hidden="true"/>
          </span>
        </div>
      </div>
    </div>
    <div class="overflow-hidden bg-white">
      <ul role="list" class="divide-y divide-zinc-200">
        <li v-for="meetup in filteredMeetups" :key="meetup.id" class="w-11/12 sm:w-full">
          <router-link :to="{ name: 'meetups.details', params: { id: meetup.id } }" class="relative block hover:bg-zinc-50">
            <div class="flex items-center">
              <div class="min-w-0 flex-1 sm:flex sm:items-center sm:justify-between">
                <div class="w-full space-y-2 truncate p-4 sm:px-6">
                  <div class="text-laravel flex space-x-4 text-xl font-medium">
                    <div v-if="meetup.date < nextMeetup.date" class="flex text-red-800">
                      <p class="truncate">
                        {{ meetup.name }}
                      </p>
                    </div>
                    <div v-else-if="meetup.date >= nextMeetup.date" class="block sm:flex">
                      <p class="truncate">
                        {{ meetup.name }}
                      </p>
                      <div v-if="nextMeetup.id === meetup.id" class="flex">
                        <exclamation-circle-icon class="mr-3 inline-block h-5 w-5 self-center md:mx-3" aria-hidden="true"/>
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
              <div class="visible ml-5 shrink-0 p-4 sm:px-6">
                <chevron-right-icon class="h-5 w-5 text-zinc-400" aria-hidden="true"/>
              </div>
            </div>
          </router-link>
        </li>
        <li v-show="(!filteredMeetups.length && !loading)" class="space-y-7 text-xl text-zinc-500">
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
.list-enter-active,
.list-leave-active {
	transition: all 0.3s ease-in-out;
}

.list-enter-from,
.list-leave-to {
  transform: translateY(20px);
  opacity: 0;
}
.list-enter-active .inner,
.list-leave-active .inner { 
  transition: all 0.3s ease-in-out;
}
.list-enter-active .inner {
	transition-delay: 0.25s;
}
.list-enter-from .inner,
.list-leave-to .inner {
  transform: translateX(30px);
  opacity: 0.001;
}
</style>
