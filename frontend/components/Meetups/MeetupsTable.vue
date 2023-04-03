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
  <div v-if="!error" class="mx-auto my-12">
    <div class="flex w-full flex-wrap items-center justify-between border-b border-zinc-200 bg-white py-2 text-zinc-700">
      <form class="shrink-1 w-full justify-center sm:order-2 sm:flex sm:w-3/5">
        <div class="w-full p-2">
          <div class="relative">
            <span class="absolute inset-y-0 left-0 flex items-center pl-5">
              <magnifying-glass-icon class="mr-1.5 h-5 w-5 shrink-0 text-zinc-400" aria-hidden="true"/> 
            </span>
            <input v-model="searchMeetup" type="text" name="meetup" class="block h-12 w-full border-r border-zinc-300 bg-zinc-100 pr-4 pl-12 shadow-sm placeholder:text-zinc-400 focus:border-zinc-500 focus:ring-zinc-500 sm:text-sm" placeholder="#23" @keydown.enter.prevent>
          </div>
        </div>
      </form>
      <div class="mx-auto w-1/2 shrink-[50%] border-r border-zinc-200 sm:order-1 sm:mb-0 sm:w-1/5 sm:border-none">
        <FilterButton :companies="companies" :speakers="speakers" :sorted-meetups="sortedMeetups" @updated-speakers="updateSpeakersFilter" @updated-companies="updateCompaniesFilter"/>
      </div>
      <div class="mx-auto w-1/2 shrink-[50%] sm:order-3 sm:mb-0 sm:w-1/5">
        <SortButton id="sorters" :data="filteredMeetups" @updated="updateSortedMeetups"/>
      </div>
    </div>
    <div class="overflow-hidden bg-white">
      <MeetupsList :loading="loading" :data="sortedMeetups" :all-meetups="meetups"/>
    </div>
  </div>
</template>
