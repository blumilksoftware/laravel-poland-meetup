<script setup>
import { ref, computed, watch } from 'vue'
import { MagnifyingGlassIcon } from '@heroicons/vue/24/outline'
import { useRoute } from 'vue-router'
import FilterButton from '@/components/Meetups/FilterButton.vue'
import SortButton from '@/components/Meetups/SortButton.vue'
import MeetupsList from '@/components/Meetups/MeetupsList.vue'
import NoDataError from '@/components/EmptyStates/NoDataError.vue'

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
  error: {
    type: Boolean,
    default: false,
  },
})

const route = useRoute()
let searchMeetup = ref('')
const checkedCompanies = ref([])
const checkedSpeakers = ref([])
const sortedMeetups = ref([])

function searchBySlug(){
  if(route.params.id) {
  searchMeetup.value = route.params.id
} else
  searchMeetup.value = ''
}
searchBySlug()

watch(route, () => 
  searchBySlug(),
)

const updateCompaniesFilter = function(selectedFilters) {
  checkedCompanies.value = selectedFilters
}

const updateSpeakersFilter = function(selectedFilters) {
  checkedSpeakers.value = selectedFilters
}

const updateSortedMeetups = (meetups) => {
  sortedMeetups.value  = meetups
}

const searchMeetupAndPresentation = (meetups) => {
  
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
      if(company) {
        return checkedCompanies.value.includes(company.name)
      }
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

const filteredMeetups = computed(() => {
  return searchSpeaker(searchCompany(searchMeetupAndPresentation(props.meetups)))
})
</script>

<template>
  <NoDataError :error="error" text="Brak meetupów"/>
  <div v-if="!error" class="mx-auto my-12 mt-2 max-w-7xl px-2 sm:px-4 lg:px-8">
    <div class="my-1 block py-4 text-zinc-700">
      <form class="block justify-center sm:flex">
        <div class="my-4 w-full sm:w-2/5 md:mx-4 md:my-0">
          <label for="meetup" class="ml-px block pl-4 text-sm font-medium">Meetupy</label>
          <div class="relative mt-1 h-12">
            <span class="absolute inset-y-0 left-0 flex items-center pl-2">
              <magnifying-glass-icon class="mr-1.5 h-5 w-5 shrink-0 text-zinc-400" aria-hidden="true"/> 
            </span>
            <input v-model="searchMeetup" type="text" name="meetup" class="border-1 block h-full w-full rounded-md border-zinc-300 px-4 pl-8 shadow-sm placeholder:text-zinc-400 focus:border-zinc-500 focus:ring-zinc-500 sm:text-sm" placeholder="#23" @keydown.enter.prevent>
          </div>
        </div>
      </form>
      <div class="my-1 flex w-full justify-between sm:mx-2">
        <div class="">
          <FilterButton :companies="companies" :speakers="speakers" :sorted-meetups="sortedMeetups" @updated-speakers="updateSpeakersFilter" @updated-companies="updateCompaniesFilter"/>
        </div>
        <div class="flex sm:mx-3">
          <SortButton id="sorters" :data="filteredMeetups" @updated="updateSortedMeetups"/>
        </div>
      </div>
    </div>
    <div class="overflow-hidden bg-white">
      <MeetupsList :loading="loading" :data="sortedMeetups" :all-meetups="meetups"/>
    </div>
  </div>
</template>
