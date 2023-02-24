<script setup>
import { ref, computed } from 'vue'
import { ChevronRightIcon } from '@heroicons/vue/24/outline'
import FacebookIcon from '@/components/Icons/FacebookIcon.vue'
import LinkedinIcon from '@/components/Icons/LinkedinIcon.vue'
import TwitterIcon from '@/components/Icons/TwitterIcon.vue'
import SortButton from '@/components/People/SortButton.vue'
import { useSortedSpeakers } from '@/composables/useSortedSpeakers.js'

const props = defineProps({
  speakers: {
    type: Array,
    default: () => [],
  },
})

const speakersToRender = ref([])
const initialSortType = 'ascending'

const sortedList = computed(() => {
  if (props.speakers.length === 0) return {}
  const { sortedSpeakers } = useSortedSpeakers(props.speakers, initialSortType)
  return sortedSpeakers.value
})

speakersToRender.value = sortedList.value

const sortedUpdatedSpeakers = (speakers) => {
  speakersToRender.value = speakers
}

function buildSlug(name) {
  return name.toLowerCase().replaceAll(' ', '-')
}

</script>
<template>
  <table class="min-w-full">
    <thead class="bg-zinc-800">
      <tr>
        <td scope="col" class="w-1/6 py-2.5 pl-4 pr-3 text-left text-sm font-semibold text-white sm:py-3 sm:pl-6" aria-hidden="true"/>
        <th scope="col" class="px-3 py-2.5 text-left text-sm font-semibold text-white" aria-hidden="false">
          <SortButton label="Imię i nazwisko" sort-by="names" :speakers="speakers" @sorted-speakers="sortedUpdatedSpeakers"/>
        </th>
        <th scope="col" class="py-2.5 text-left text-base font-medium leading-5 text-white ring-zinc-700/60 ring-offset-2 ring-offset-zinc-800 focus:outline-none focus:ring-2">
          <SortButton label="Prezentacje" sort-by="presentations" :speakers="speakers" @sorted-speakers="sortedUpdatedSpeakers"/>
        </th>
        <th scope="col" class="hidden py-2.5 text-left text-base font-medium leading-5 text-white ring-zinc-700/60 ring-offset-2 ring-offset-zinc-800 focus:outline-none focus:ring-2 md:table-cell">
          Kontakt
        </th>
        <td scope="col" class="w-1/6 py-2.5 pl-3 pr-4 sm:pr-6"/>
      </tr>
    </thead>
    <tbody class="divide-y divide-zinc-200 bg-white">
      <tr v-for="speaker in speakersToRender" :key="speaker.id" class="group hover:bg-zinc-100">
        <td class="justify-fit whitespace-nowrap py-3.5 pl-4 pr-3 text-sm font-medium text-zinc-900 sm:py-3 sm:pl-6">
          <router-link :to="{ name: 'people.details', params: { id: buildSlug(speaker.name) } }" class="w-full focus:z-10">
            <img v-if="!speaker.image.length" :src="speaker.avatar" class="h-8 w-8 rounded-full md:h-12 md:w-12" alt="awatar prelegenta">
            <img v-else :src="speaker.image" class="h-8 w-8 rounded-full md:h-12 md:w-12" :alt="'zdjęcie prelegenta ' + speaker.name">
          </router-link>
        </td>
        <td class="whitespace-nowrap py-3.5 pl-4 pr-1 text-left text-sm font-semibold text-zinc-500 sm:text-base md:text-lg">
          <router-link :to="{ name: 'people.details', params: { id: buildSlug(speaker.name) } }" class="w-full focus:z-10 ">
            <span class="sr-only">Zobacz profil</span>
            {{ speaker.name }}
          </router-link>
        </td>
        <td class="whitespace-nowrap px-3 py-4 text-sm text-zinc-500 group-hover:font-bold">
          {{ speaker.presentations }}
        </td>
        <td class="hidden whitespace-nowrap px-3 py-4 text-sm text-zinc-500 md:table-cell">
          <div class="mx-auto flex items-center space-x-2 md:space-x-5">
            <div v-if="!speaker.linkedin && !speaker.twitter && !speaker.facebook" class="ml-2 text-2xl">
              {{ '-' }}
            </div>
            <linkedin-icon v-if="speaker.linkedin" :href="speaker.linkedin" class="h-8 w-8 pr-2 text-zinc-600"/>
            <facebook-icon v-if="speaker.facebook" :href="speaker.facebook" class="h-8 w-8 pr-2 text-zinc-600"/>
            <twitter-icon v-if="speaker.twitter" :href="speaker.twitter" class="h-8 w-8 pr-2 text-zinc-600"/>
          </div>
        </td>
        <td class="w-20 whitespace-nowrap py-4 pl-3 pr-4 text-sm font-medium sm:pr-6">
          <router-link :to="{ name: 'people.details', params: { id: buildSlug(speaker.name) } }" class="grid focus:z-10 focus:outline-none">
            <span class="sr-only">Zobacz profil</span>
            <chevron-right-icon class="h-5 w-5 justify-self-end text-zinc-500 transition duration-200 group-hover:translate-x-2"/>
          </router-link>
        </td>
      </tr>
    </tbody>
  </table>
</template>
